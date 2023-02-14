// index.ts
import Bao from "baojs";

const app = new Bao();

app.post("/", async (ctx) => {
  return ctx.sendText(`
    <html><body>hello</body></html>
  `);
});

app.post("/pretty", async (ctx) => {
  const json = await ctx.req.json();
  return ctx.sendPrettyJson(json);
});

app.get("/posts/*post", (ctx) => {
  return ctx.sendText(ctx.params.post);
});

app.listen();