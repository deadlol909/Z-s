"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginPage(){
const [phone,setPhone]=useState("+1"); const [password,setPassword]=useState(""); const [loading,setLoading]=useState(false); const [error,setError]=useState("");
const login=async()=>{setLoading(true);setError("");const res=await fetch('/api/auth/phone-login',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({phone,password,mode:'login'})}); if(!res.ok)setError('Invalid credentials'); setLoading(false);};
return <section className="min-h-screen grid place-items-center p-4"><div className="glass rounded-2xl p-6 w-full max-w-md space-y-3"><Input value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="+1 5551234567"/><Input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/><Button onClick={login} disabled={loading}>{loading?'Authenticating...':'Login'}</Button>{error&&<p className="text-red-300 text-sm">{error}</p>}</div></section>;
}
