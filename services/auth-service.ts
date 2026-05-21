"use client";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "@/firebase/client";

declare global { interface Window { confirmationResult?: import("firebase/auth").ConfirmationResult; recaptchaVerifier?: RecaptchaVerifier; } }

export async function beginPhoneSignup(phone: string) {
  if (!window.recaptchaVerifier) window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", { size: "invisible" });
  window.confirmationResult = await signInWithPhoneNumber(auth, phone, window.recaptchaVerifier);
}

export async function completeOtpAndProvision(phone: string, otp: string, password: string) {
  const cred = await window.confirmationResult?.confirm(otp);
  if (!cred?.user) throw new Error("Invalid OTP");
  const token = await cred.user.getIdToken();
  await fetch("/api/auth/phone-login", { method: "POST", headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` }, body: JSON.stringify({ phone, password, mode: "signup" }) });
}
