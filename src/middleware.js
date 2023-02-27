import { NextResponse } from "next/server";

export function middleware(req) {
    const userToken = req.cookies.get("userToken");
    const url = req.url;

    if (userToken && url.includes("/sign")) {
        return NextResponse.redirect("http://localhost:3000/");
    }
}

export const config = {
    matcher: ["/signin/:path*" , "/signup/:path*"],
};
