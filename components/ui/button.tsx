import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Button({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={cn("w-full rounded-xl bg-gradient-to-r from-neon to-accent text-black font-semibold py-3 shadow-neon disabled:opacity-60", className)} {...props} />;
}
