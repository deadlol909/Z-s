"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ResetPasswordPage(){
const [phone,setPhone]=useState('+1'); const [otp,setOtp]=useState(''); const [newPassword,setNewPassword]=useState('');
return <section className="min-h-screen grid place-items-center p-4"><div className="glass rounded-2xl p-6 w-full max-w-md space-y-3"><Input value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="Phone"/><Input value={otp} onChange={(e)=>setOtp(e.target.value)} placeholder="OTP"/><Input type="password" value={newPassword} onChange={(e)=>setNewPassword(e.target.value)} placeholder="New password"/><Button onClick={async()=>{await fetch('/api/auth/phone-login',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({mode:'reset',phone,otp,newPassword})});}}>Reset Password</Button></div></section>;
}
