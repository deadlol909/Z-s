"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { signupSchema } from "@/lib/validators";
import { beginPhoneSignup, completeOtpAndProvision } from "@/services/auth-service";

export function PhoneAuthForm() {
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState<"credentials"|"otp">("credentials");
  const [phone, setPhone] = useState("+1");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const submitCredentials = async () => {
    setError("");
    const parsed = signupSchema.safeParse({ phone, password, confirmPassword });
    if (!parsed.success) return setError(parsed.error.issues[0]?.message ?? "Invalid form");
    setLoading(true);
    try { await beginPhoneSignup(phone); setStep("otp"); } catch { setError("Could not send OTP"); }
    setLoading(false);
  };

  const verifyOtp = async () => {
    setLoading(true);
    try { await completeOtpAndProvision(phone, otp, password); } catch { setError("OTP verification failed"); }
    setLoading(false);
  };

  return <div className="glass rounded-2xl p-6 space-y-3 max-w-md w-full">
    {step === "credentials" ? <>
      <Input value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="+1 5551234567" />
      <Input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
      <Input type="password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} placeholder="Confirm password" />
      <Button disabled={loading} onClick={submitCredentials}>{loading?"Sending OTP...":"Continue"}</Button>
    </> : <>
      <Input value={otp} onChange={(e)=>setOtp(e.target.value)} placeholder="Enter OTP" />
      <Button disabled={loading} onClick={verifyOtp}>{loading?"Verifying...":"Verify & Create"}</Button>
    </>}
    {error && <p className="text-red-300 text-sm">{error}</p>}
    <div id="recaptcha-container" />
  </div>;
}
