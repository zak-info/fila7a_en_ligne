import { withAuth } from 'next-auth/middleware';
import createIntlMiddleware from 'next-intl/middleware';

const locales = ['en', 'ar', 'fr'];

const privateRoutes = [
  '/dashboard',
  '/dashboard2',
  '/profile',
  '/settings'
];

// Intl middleware (always applies)
const intlMiddleware = createIntlMiddleware({
  locales,
  defaultLocale: 'en',
});

// Auth middleware applies only to private routes
const authMiddleware = withAuth(
  (req) => intlMiddleware(req),
  {
    callbacks: {
      authorized: ({ token }) => token != null,
    },
    pages: {
      signIn: '/login',
    },
  }
);

// Middleware logic
export default function middleware(req) {
  const { pathname } = req.nextUrl;

  const isPrivate = privateRoutes.some((route) =>
    pathname.startsWith(`/${route}`) || locales.some(locale => pathname.startsWith(`/${locale}${route}`))
  );

  if (isPrivate) {
    return authMiddleware(req);
  } else {
    return intlMiddleware(req);
  }
}

// Match all routes except internal ones (_next, api, static files)
export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
