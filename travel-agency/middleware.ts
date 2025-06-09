// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // Example: Log the request path
  console.log('Middleware triggered for:', request.nextUrl.pathname);

  // Example: Redirect based on condition
  // if (request.nextUrl.pathname === '/old-path') {
  //   return NextResponse.redirect(new URL('/new-path', request.url))
  // }

  // Example: Add headers
  // const requestHeaders = new Headers(request.headers);
  // requestHeaders.set('x-custom-header', 'my-custom-value');
  // return NextResponse.next({
  //   request: {
  //     headers: requestHeaders,
  //   },
  // });

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - login, register (public auth routes)
     */
    // '/((?!api|_next/static|_next/image|favicon.ico|auth/.*).*)', // More complex example
    '/admin/:path*', // Protects all routes under /admin
    // '/profile/:path*', // Example: protect profile pages
  ],
}
