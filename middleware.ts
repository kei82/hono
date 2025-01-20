import { Env } from "hono";
import { LambdaContext, LambdaEvent } from "hono/aws-lambda";
import { cors } from "hono/cors";
import { logger, withRequest } from "./log";
import { createFactory } from "hono/factory";
import util from "util";

interface Bindings {
  event: LambdaEvent;
  lambdaContext: LambdaContext;
}

interface Variables {
  data?: { d: string };
}

interface HonoEnv extends Env {
  Bindings: Bindings;
  Variables: Variables;
}

export const factory = createFactory<HonoEnv>();
export const app = factory.createApp().basePath("/api/v1");

export const cos = (text: string) => {
  return factory.createMiddleware(async (c, next) => {
    c.set("data", { d: text });
    return next();
  });
};

app.use(async (c, next) => {
  if (process.env.NODE_ENV !== "local") {
    withRequest(c.env.event, c.env.lambdaContext);
  }

  const request = {
    method: c.req.method,
    url: c.req.url,
    header: c.req.header(),
    body: await c.req.text(),
  };
  logger.info({ request }, "request");

  await next();

  const res = c.res.clone();
  const response = {
    status: res.status,
    body: await res.text(),
    headers: util.format("%o", res.headers),
  };
  logger.info({ response }, "response");

  if (c.error instanceof Error) {
    logger.error(c.error);
  }
});

app.use(cors());

app.onError(async (err, c) => {
  logger.info("onError", err.message, c.error);
  return c.json({ e: err.message }, 500);
});
