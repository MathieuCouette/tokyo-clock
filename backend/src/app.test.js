const request = require("supertest");
const app = require("./app");

describe("GET /", () => {
  it("should allow any origin", async () => {
    const response = await request(app).get("/");

    expect(response.headers["access-control-allow-origin"]).toBe("*");
  });

  it("should respond with status code 200", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
  });

  it('should respond with body { timeZone: "Asia/Tokyo" }', async () => {
    const response = await request(app).get("/");

    expect(response.body).toEqual({ timeZone: "Asia/Tokyo" });
  });
});
