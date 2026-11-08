import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/authors/$slug")({
  beforeLoad: () => {
    throw redirect({ to: "/about" });
  },
});
