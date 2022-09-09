const request = require("supertest");
const app = require("/opt/Dev/Jenkins/jenkins-test/index.js");

describe("Get route", () => {
  it("page should return hello world", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual("Hello world4");
  });
});


afterAll(async () => {
  await app.close();
});
