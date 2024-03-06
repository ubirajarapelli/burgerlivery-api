const server = require("./src/server")

;(async () => {
  await server.start()
  console.log("Server listening", server.info.uri)
})()
