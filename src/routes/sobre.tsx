import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/sobre")({
  beforeLoad: () => {
    throw redirect({ to: "/", hash: "sobre" });
  },
  component: () => null,
});
