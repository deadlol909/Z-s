import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const protectedRoutes = ["/dashboard", "/admin", "/profile", "/settings"];
  const isProtected = protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route));
  const hasSession = Boolean(request.cookies.get("session"));
  if (isProtected && !hasSession) return NextResponse.redirect(new URL("/login", request.url));
  return NextResponse.next();
}

export const config = { matcher: ["/dashboard/:path*", "/admin/:path*", "/profile/:path*", "/settings/:path*"] };
