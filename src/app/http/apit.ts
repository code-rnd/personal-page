import { RequestConfigModel } from "./api.model";
import { getRandomArbitrary } from "./api.utils";
import { instance } from "./api.const";

export const axios = (
  config: RequestConfigModel,
  resolve: any,
  reject: any
): Promise<any> => {
  return instance
    .request(config)
    .then((response) => resolve(response))
    .catch((error) => reject(error));
};

export class Authorization {
  static login(user: string): Promise<{ data: any }> {
    const url = "posts";

    return new Promise((resolve, reject) => {
      axios(
        {
          url: url,
          data: { name: user },
          headers: {
            "Content-Type": "application/json",
            "x-token-access": getRandomArbitrary(10, 10000),
          },
          method: "POST",
        },
        resolve,
        reject
      );
    });
  }
}
