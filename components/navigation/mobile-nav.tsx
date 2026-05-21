import Link from "next/link";
import { Home, Settings, User } from "lucide-react";
const items=[{href:'/dashboard',icon:Home},{href:'/profile',icon:User},{href:'/settings',icon:Settings}];
export function MobileNav(){return <nav className="md:hidden fixed bottom-3 left-3 right-3 glass rounded-2xl p-2 grid grid-cols-3">{items.map(({href,icon:Icon})=><Link key={href} href={href} className="flex justify-center py-2"><Icon className="w-5 h-5"/></Link>)}</nav>;}
