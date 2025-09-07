import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const hostname = request.nextUrl.hostname;

  // Redirect www to non-www for domain consolidation
  if (hostname === "www.trayancorp.com") {
    const url = request.nextUrl.clone();
    url.hostname = "trayancorp.com";
    return NextResponse.redirect(url, 301);
  }

  // Ensure HTTPS redirect
  if (
    request.nextUrl.protocol === "http:" &&
    process.env.NODE_ENV === "production"
  ) {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  // Match all paths except static files and API routes
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|images/).*)",
  ],
};
