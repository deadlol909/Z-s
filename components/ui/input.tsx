import { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={cn("w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 outline-none focus:border-accent", props.className)} />;
}
