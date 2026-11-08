import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/authors")({
  beforeLoad: () => {
    throw redirect({ to: "/about" });
  },
});
