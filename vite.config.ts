// @lovable.dev/vite-tanstack-config already includes the Cloudflare build plugin,
// TanStack Start, React, Tailwind, path aliases, and development helpers.
// Keep a single deployment adapter: Cloudflare Pages.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
});
