import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// TEMPORARILY DISABLED - Auth will be re-enabled after all features are implemented
export function middleware(request: NextRequest) {
  // Allow all requests through for now
  return NextResponse.next();
}

export const config = {
  matcher: "/admin/:path*",
};

