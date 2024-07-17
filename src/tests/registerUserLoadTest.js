import http from "k6/http";
import {
  describe,
  expect,
} from "https://jslib.k6.io/k6chaijs/4.3.4.3/index.js";
import { RegisterUserResource } from "../resources/registerUserResource.js";

export class RegisterUserLoadTest {
  registerUserLoadTest() {
    const url = "https://reqres.in/api/register";

    describe("Register Success", () => {
      const request = new RegisterUserResource();

      const payload = JSON.stringify(request.registerSuccess());

      const params = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const res = http.post(url, payload, params);

      expect(res.status, "response status service").to.equal(200);
    });
  }
}

export const options = {
  discardResponseBodies: true,

  scenarios: {
    load: {
      executor: "ramping-arrival-rate",
      startRate: 1,
      timeUnit: "1s",
      preAllocatedVUs: 50,
      maxVUs: 500,

      stages: [{ target: 1000, duration: "2m" }],
    },
  },
};

export default function () {
  const test = new RegisterUserLoadTest();
  test.registerUserLoadTest();
}
