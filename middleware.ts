import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Skip middleware for login page - allow it through without auth check
  if (pathname === "/admin/login") {
    return NextResponse.next();
  }
  
  // Protect all other admin routes
  if (pathname.startsWith("/admin")) {
    const authCookie = request.cookies.get("admin-auth");
    
    if (!authCookie || authCookie.value !== "authenticated") {
      const url = request.nextUrl.clone();
      url.pathname = "/admin/login";
      return NextResponse.redirect(url);
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: "/admin/:path*",
};

