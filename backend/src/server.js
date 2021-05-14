const app = require("./app");
const port = 30000;

const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

process.on("SIGTERM", () => {
  server.close();
});
