const request = require("supertest");
const app = require("../index"); // Your Express app

describe("POST /api/bugs", () => {
  it("should create a new bug", async () => {
    const res = await request(app).post("/api/bugs").send({
      title: "Sample bug",
      description: "Something is broken",
    });
    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe("Sample bug");
  });
});