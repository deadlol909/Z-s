"use client";
import { motion } from "framer-motion";

const cards=["Users","Posts","Messages","Notifications"];
export function DashboardOverview(){return <section className="p-4 md:p-8 space-y-4"><h1 className="text-3xl font-bold">Futuristic Platform</h1><div className="grid grid-cols-2 lg:grid-cols-4 gap-4">{cards.map((c,i)=><motion.div key={c} className="glass rounded-2xl p-5" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:i*0.08}}><p className="text-white/70">{c}</p><p className="text-2xl font-semibold">0</p></motion.div>)}</div></section>;}
