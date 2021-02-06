import {app} from "../../src/app";
import {agent as request} from "supertest";

describe("test app", () => {
    test("redirect", async (done) => {
        await request(app).get("/").
            then((res) => {
                expect(res.status).toBe(302);
            });
        done();
    });

    test("image", async (done) => {
        await request(app).get("/example/gameover").
            then((res) => {
                expect(res.status).toBe(200);
                expect(res.type).toBe("image/png");
            });
        done();
    });

    test("doesn't not exist", async (done) => {
        await request(app).get("/doesnot/exists").
            then((res) => {
                expect(res.status).toBe(500);
                expect(res.type).toBe("application/json");
            });
        done();
    });
});
