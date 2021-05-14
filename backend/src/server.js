const app = require("./app");
const port = 30000;

const server = app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

function shutDown() {
  console.log("Server shutting down");
  server.close((err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Server shut down successfully");
    }
  });
}

process.on("SIGTERM", shutDown);
process.on("SIGINT", shutDown);
