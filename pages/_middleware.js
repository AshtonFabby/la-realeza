import { NextResponse } from "next/server";
// import cookie from "cookie";

import { veryfy } from "jsonwebtoken";

export default function middleware(req) {
  const { cookies } = req;

  const jwt = cookies.jwt;
  const siteUrl = process.env.NEXT_PUBLIC_WEBSITE_URL;
  // let jwt = req.cookies["jwt"];
  let url = req.url;

  if (!jwt && url.includes("/cart")) {
    return NextResponse.redirect(siteUrl);
  }
  if (!jwt && url.includes("/user")) {
    return NextResponse.redirect(siteUrl);
  }

  // if (jwt && url === `${siteUrl}/login`) {
  //   return NextResponse.redirect(siteUrl);
  // }
}
