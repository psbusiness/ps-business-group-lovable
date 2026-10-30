import { createStart, createMiddleware } from "@tanstack/react-start";
import { setResponseHeaders } from "@tanstack/react-start/server";

// Security headers applied to every server response (SSR pages, server fns, server routes).
const securityHeaders = createMiddleware().server(async ({ next }) => {
  try {
    setResponseHeaders(new Headers({
      "strict-transport-security": "max-age=63072000; includeSubDomains; preload",
      "x-content-type-options": "nosniff",
      "x-frame-options": "SAMEORIGIN",
      "referrer-policy": "strict-origin-when-cross-origin",
      "permissions-policy": "camera=(), microphone=(), geolocation=(), interest-cohort=()",
      "x-xss-protection": "0",
      "content-security-policy": [
        "default-src 'self'",
        "base-uri 'self'",
        "object-src 'none'",
        "frame-ancestors 'self'",
        "form-action 'self'",
        "img-src 'self' data: blob: https:",
        "font-src 'self' https://fonts.gstatic.com data:",
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
        "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
        "connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://docs.google.com",
        "upgrade-insecure-requests",
      ].join("; "),
    }));
  } catch {
    // setResponseHeaders requires an active request context — ignore otherwise.
  }
  return next();
});

export const startInstance = createStart(() => ({
  requestMiddleware: [securityHeaders],
}));
