// let url = "";

Bun.serve({
  fetch(req) {
    // return new Response("Hello World");
    throw new Error("woops");
  },
  error(error: Error) {
    return new Response("Uh oh!!\n" + error.toString(), { status: 69 });
  },
});