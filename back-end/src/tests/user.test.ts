// user.test.ts

import * as chai from "chai";
import chaiHttp from "chai-http";
import { app } from "../app.js";

chai.use(chaiHttp);
const { expect } = chai;

describe("User Routes", () => {
  describe("POST /signup", () => {
    it("should register a new user", async () => {
      const response = await chai
        .request(app)
        .post("/signup")
        .send({
          id: "testuser",
          password: "testpassword",
        });

      expect(response).to.have.status(201);
      expect(response.body).to.have.property("messagge", "sign up successful");
      expect(response.body).to.have.property("code", 1);
    });

    it("should handle registration errors", async () => {
      const response = await chai
        .request(app)
        .post("/signup")
        .send({
          id: "saulito", // Asegúrate de usar un usuario existente para provocar un error
          password: "1234",
        });

      expect(response).to.have.status(406);
      expect(response.body).to.have.property(
        "message",
        "Try an other username"
      );
      expect(response.body).to.have.property("code", 0);
    });
  });

  describe("POST /login", () => {
    it("should log in a user with valid credentials", async () => {
      const response = await chai
        .request(app)
        .post("/login")
        .send({
          id: "testuser",
          password: "testpassword",
        });

      expect(response).to.have.status(200);
      expect(response.body).to.have.property("message", "Login successful");
      expect(response.body).to.have.property("code", 1);
      expect(response.body).to.have.property("token");
    });

    it("should handle login errors with invalid credentials", async () => {
      const response = await chai
        .request(app)
        .post("/login")
        .send({
          id: "testuser",
          password: "invalidpassword",
        });

      expect(response).to.have.status(401);
      expect(response.body).to.have.property(
        "message",
        "Invalid username or password"
      );
      expect(response.body).to.have.property("code", 0);
    });
  });
});
