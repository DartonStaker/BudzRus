import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  try {
    const { pathname } = request.nextUrl;
    
    // Skip middleware for login page
    if (pathname === "/admin/login") {
      return NextResponse.next();
    }
    
    // Protect admin routes (except login)
    if (pathname.startsWith("/admin")) {
      const authCookie = request.cookies.get("admin-auth");
      
      if (!authCookie || authCookie.value !== "authenticated") {
        const url = request.nextUrl.clone();
        url.pathname = "/admin/login";
        return NextResponse.redirect(url);
      }
    }
    
    return NextResponse.next();
  } catch (error) {
    // If middleware fails, allow the request to proceed
    console.error("Middleware error:", error);
    return NextResponse.next();
  }
}

export const config = {
  matcher: [
    "/admin/:path*",
  ],
};

