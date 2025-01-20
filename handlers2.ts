import { z } from "zod";
import { zValidator } from "@hono/zod-validator";
import { cos, factory } from "./middleware";
import { logger } from "./log";

const schema = z.object({
  name: z.string(),
});

const zValidators = [zValidator("query", schema)] as const;

export const handlers = factory.createHandlers(
  cos("跳梁跋扈"),
  ...zValidators,
  async (c) => {
    logger.info("handle start");
    logger.info(c.get("data"));
    const json = c.req.valid("query");
    logger.info(json);

    if (json.name === "e") {
      throw new Error("e");
    }

    return c.json("Hello Hono get!");
  }
);
