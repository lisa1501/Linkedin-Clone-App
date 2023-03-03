import { NextResponse } from 'next/server'
import { getToken } from "next-auth/jwt";

export async function middleware(req) {
    if (req.nextUrl.pathname === "/") {
        const session = await getToken({
        req,
        secret: process.env.JWT_SECRET,
        secureCookie: process.env.NODE_ENV === "production",
        });
    
    if (!session)
    return NextResponse.redirect(new URL('/home', req.url))
    
}
}
// // See "Matching Paths" below to learn more
export const config = {
    matcher: '/',
}