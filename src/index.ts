import { layout } from "./layout";

export default {
  async fetch(request, env) {
    const stmt = env.DB.prepare("SELECT * FROM wines");
    const { results } = await stmt.all();

    return new Response(layout(JSON.stringify(results, null, 2)), {
      headers: {
        "content-type": "text/html",
      },
    });
  },
} satisfies ExportedHandler<Env>;
