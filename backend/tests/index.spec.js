import app from "../src/app";
import request from "supertest";

describe("GET /api/products", () => {
    test("should respond with a 200 status code", async () => {
      const response = await request(app).get("/api/products").send();
      expect(response.statusCode).toBe(200);
    }, 10000)
})
