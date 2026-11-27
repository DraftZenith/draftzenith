import { cloudflare } from "@cloudflare/vite-plugin";
import netlify from "@netlify/vite-plugin-tanstack-start";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const isNetlifyBuild = Boolean(process.env.NETLIFY);

export default defineConfig({
  plugins: [
    // Use the deployment adapter for the active host. These adapters should not
    // run together: Netlify builds use Netlify's TanStack Start adapter, while
    // local/Cloudflare builds retain the Cloudflare Vite integration.
    ...(isNetlifyBuild ? [] : [cloudflare({ viteEnvironment: { name: "ssr" } })]),
    tanstackStart(),
    ...(isNetlifyBuild ? [netlify()] : []),
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
  resolve: {
    dedupe: ["react", "react-dom"],
  },
});
