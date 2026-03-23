import type { MiddlewareHandler } from "astro";

let started = false;

export const onRequest: MiddlewareHandler = async (_context, next) => {
  if (import.meta.env.DEV && import.meta.env.ENABLE_MSW === "true" && !started) {
    try {
      const { server } = await import("@mocks/node");
      server.listen({ onUnhandledRequest: "bypass" });
      started = true;
    } catch (error) {
      console.error("*** Error mocking API ***", error);
      started = false;
    }
  }
  return next();
};
