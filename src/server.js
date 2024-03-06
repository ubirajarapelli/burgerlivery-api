const Hapi = require("@hapi/hapi");
const router = require("./routes/router");

const server = Hapi.server({
  port: 8000,
  host: "localhost",
  routes: {
    cors: {
      origin: ["*"],
    },
  },
});

router.forEach((path) => server.route(path));

module.exports = server;
