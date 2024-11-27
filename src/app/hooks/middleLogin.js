// middleware.js

import { NextResponse } from 'next/server'

export default function middleware(req) {
	console.log('some')
	let loggedin = req.cookies.get('token')
	if (loggedin) {
		return NextResponse.redirect(new URL('/panel'))
	}
	if (!loggedin) {
		return NextResponse.redirect(new URL('/'))
	}
}

export const config = {
	matcher: '/((?!api|static|.*\\..*|_next).*)',
}
