// @lovable.dev/vite-tanstack-config supplies the Cloudflare Vite plugin,
// TanStack Start, React, Tailwind, path aliases, and development helpers.
// Cloudflare Workers is the supported full-stack deployment target.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Keep the custom SSR error wrapper as the Worker's entrypoint.
export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
});
