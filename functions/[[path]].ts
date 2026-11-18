// Route all non-API requests through the TanStack Start server bundle.
// Cloudflare Pages serves files from dist/client, but this application is SSR
// and its request handler is generated in dist/server during the build.
import server from "../dist/server/index.js";

export const onRequest = async (context: {
  request: Request;
  env: Record<string, unknown>;
  waitUntil: (promise: Promise<unknown>) => void;
  passThroughOnException: () => void;
}) => {
  return server.fetch(context.request, context.env, context);
};
