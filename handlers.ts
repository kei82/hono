import { z } from "zod";
import { zValidator } from "@hono/zod-validator";
import { factory } from "./middleware";
import { logger } from "./log";

const schema = z.object({
  name: z.string(),
});

const zValidators = [zValidator("json", schema)] as const;

export const handlers = factory.createHandlers(...zValidators, async (c) => {
  logger.info("handle start");
  logger.info(c.get("data"));
  const json = c.req.valid("json");
  logger.info(json);

  return c.json("Hello Hono post!");
});
