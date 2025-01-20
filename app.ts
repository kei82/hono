import { handlers } from "./handlers";
import { handle } from "hono/aws-lambda";
import { app } from "./middleware";

app.post("/post", ...handlers);

export const lambdaHandler = handle(app);
