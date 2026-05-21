"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { MobileNav } from "@/components/navigation/mobile-nav";
import { Sidebar } from "@/components/navigation/sidebar";

export function NavigationShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const authRoute = ["/login", "/signup", "/reset-password"].some((p) => pathname.startsWith(p));
  return (
    <div className="min-h-screen">
      {!authRoute && <Sidebar />}
      <main className={!authRoute ? "md:pl-72 pb-24 md:pb-0" : ""}>
        <AnimatePresence mode="wait"><motion.div key={pathname} initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}}>{children}</motion.div></AnimatePresence>
      </main>
      {!authRoute && <MobileNav />}
    </div>
  );
}
