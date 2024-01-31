import request from "supertest";
import express from "express";
import { errorHandling } from "./error-handling";

describe("errorHandling", () => {
  let app;

  beforeEach(() => {
    app = express();
    app.use(express.json());
  });

  it("should return 401 and a message if error name is UnauthorizedError", async () => {
    app.use((req, res, next) => {
      next({ name: "UnauthorizedError" });
    });
    errorHandling(app);
    const res = await request(app).get("/");
    expect(res.status).toBe(401);
    expect(res.text).toBe("Invalid token, or no token supplied!");
  });

  it("should return 500 and a message if error name is not UnauthorizedError", async () => {
    app.use((req, res, next) => {
      next({ name: "SomeOtherError" });
    });
    errorHandling(app);
    const res = await request(app).get("/");
    expect(res.status).toBe(500);
    expect(res.text).toBe("Something went wrong!");
  });
});
