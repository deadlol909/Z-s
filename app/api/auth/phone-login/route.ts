import { NextRequest, NextResponse } from "next/server";
import { adminAuth, adminDb } from "@/firebase/admin";
import { randomUUID, scryptSync, timingSafeEqual } from "crypto";

const hashPassword = (pwd: string, salt: string) => scryptSync(pwd, salt, 32).toString("hex");

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { mode, phone, password, newPassword } = body;

  if (mode === "signup") {
    const token = req.headers.get("authorization")?.replace("Bearer ", "") ?? "";
    const decoded = await adminAuth.verifyIdToken(token);
    if (decoded.phone_number !== phone) return NextResponse.json({ error: "Phone mismatch" }, { status: 400 });
    const salt = randomUUID();
    await adminDb.collection("users").doc(decoded.uid).set({
      uid: decoded.uid, phone, passwordHash: hashPassword(password, salt), salt,
      username: `user_${decoded.uid.slice(0,6)}`, bio: "", profilePicture: "", createdAt: Date.now(), lastActiveAt: Date.now()
    }, { merge: true });
    return NextResponse.json({ ok: true });
  }

  if (mode === "login") {
    const snap = await adminDb.collection("users").where("phone", "==", phone).limit(1).get();
    if (snap.empty) return NextResponse.json({ error: "Invalid" }, { status: 401 });
    const user = snap.docs[0].data() as { uid: string; passwordHash: string; salt: string };
    const candidate = hashPassword(password, user.salt);
    if (!timingSafeEqual(Buffer.from(candidate), Buffer.from(user.passwordHash))) return NextResponse.json({ error: "Invalid" }, { status: 401 });
    const customToken = await adminAuth.createCustomToken(user.uid);
    return NextResponse.json({ ok: true, customToken });
  }

  if (mode === "reset") {
    const snap = await adminDb.collection("users").where("phone", "==", phone).limit(1).get();
    if (snap.empty) return NextResponse.json({ error: "Not found" }, { status: 404 });
    const salt = randomUUID();
    await snap.docs[0].ref.set({ passwordHash: hashPassword(newPassword, salt), salt, lastActiveAt: Date.now() }, { merge: true });
    return NextResponse.json({ ok: true });
  }

  return NextResponse.json({ error: "Unsupported mode" }, { status: 400 });
}
