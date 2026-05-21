import Link from "next/link";
import { Home, Shield, User2 } from "lucide-react";

const items=[{href:'/dashboard',label:'Dashboard',icon:Home},{href:'/profile',label:'Profile',icon:User2},{href:'/admin',label:'Admin',icon:Shield}];
export function Sidebar(){return <aside className="hidden md:flex fixed left-4 top-4 bottom-4 w-64 glass rounded-2xl p-5 flex-col gap-3">{items.map(({href,label,icon:Icon})=><Link key={href} href={href} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/10"><Icon className="w-4 h-4 text-accent"/>{label}</Link>)}</aside>;}
