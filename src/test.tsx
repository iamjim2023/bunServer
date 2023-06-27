console.log("I restarted at:", Date.now());


export default {
  port: 4003,

  fetch(request) {
    return new Response("Hello wor!!!ld!");
  },
};
