const app = require("./app");
const port = 30000;

const server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

process.on("SIGTERM", () => {
  console.log("Server shutting down");
  server.close((err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Server shut down successfully");
    }
  });
});
