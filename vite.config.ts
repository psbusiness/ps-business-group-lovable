// @lovable.dev/vite-tanstack-config encapsulates the shared Vite/TanStack setup.
// We override the Nitro deploy preset to target Vercel instead of Cloudflare Workers.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Force-enable the Nitro deploy plugin on Vercel (and other non-sandbox builds)
  // and switch the preset from cloudflare-module to vercel.
  nitro: {
    preset: "vercel",
  },
});
