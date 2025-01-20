import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { showRoutes } from "hono/dev";

import { app } from "./middleware";
import { handlers as app1 } from "./handlers";
import { handlers as app2 } from "./handlers2";

app.post("/post", ...app1);
app.get("/get", ...app2);

serve(app, (info) => {
  console.log(`Listening on http://localhost:${info.port}`);
  showRoutes(app, { verbose: true });
});
