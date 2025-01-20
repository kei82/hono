import { handlers } from "./handlers2";
import { handle } from "hono/aws-lambda";
import { app } from "./middleware";

app.get("/get", ...handlers);

export const lambdaHandler = handle(app);
