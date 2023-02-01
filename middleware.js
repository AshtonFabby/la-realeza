import { NextRequest, NextResponse } from "next/server";

export default function middleware(req) {
  const { cookies } = req;

  const cookie = cookies.get("jwt");

  if (req.nextUrl.pathname.startsWith("/cart")) {
    if (!cookie) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }
  if (req.nextUrl.pathname.startsWith("/history")) {
    if (!cookie) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }
  if (req.nextUrl.pathname.startsWith("/user")) {
    if (!cookie) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }
  if (req.nextUrl.pathname.startsWith("/login")) {
    if (cookie) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }
  if (req.nextUrl.pathname.startsWith("/register")) {
    if (cookie) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }
}
