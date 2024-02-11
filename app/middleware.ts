import { NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  const newHeaders = new Headers(request.headers)

  newHeaders.set("x-url", request.url)

  return NextResponse.next({
    request,
    headers: newHeaders,
  })
}
