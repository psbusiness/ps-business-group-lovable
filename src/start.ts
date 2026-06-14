import { createStart, createMiddleware } from "@tanstack/react-start";

// Security headers applied to every server response (SSR pages, server fns, server routes).
const securityHeaders = createMiddleware().server(async ({ next }) => {
  const result = await next();

  const headers: Record<string, string> = {
    "Strict-Transport-Security": "max-age=63072000; includeSubDomains; preload",
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "SAMEORIGIN",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "Permissions-Policy": "camera=(), microphone=(), geolocation=(), interest-cohort=()",
    "X-XSS-Protection": "0",
    "Content-Security-Policy": [
      "default-src 'self'",
      "base-uri 'self'",
      "object-src 'none'",
      "frame-ancestors 'self'",
      "form-action 'self'",
      "img-src 'self' data: blob: https:",
      "font-src 'self' https://fonts.gstatic.com data:",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
      "connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com",
      "upgrade-insecure-requests",
    ].join("; "),
  };

  try {
    for (const [k, v] of Object.entries(headers)) {
      if (!result.headers.has(k)) result.headers.set(k, v);
    }
  } catch {
    // result might not be a Response in edge cases — ignore.
  }

  return result;
});

export const startInstance = createStart(() => ({
  requestMiddleware: [securityHeaders],
}));
