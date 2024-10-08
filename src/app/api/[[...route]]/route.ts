import { Hono } from "hono";
import { handle } from "hono/vercel";

const app = new Hono().basePath("/api");

app.get("/hello", (c) => {
  return c.json({
    message: "Hello Wordddddld",
  });
});

app.get("/project/:id", (c) => {
  const { id } = c.req.param();
  return c.json({
    msg: `Project ${id}`,
  });
});

export const GET = handle(app);
