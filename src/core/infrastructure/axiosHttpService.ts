import Axios from "axios";

import { InfrastructureException } from "./exception";
import { HttpService, type Options } from "./httpService";

export class axiosHttpService extends HttpService {
  async get<T>(url: string, options?: Options, retries = 0): Promise<T> {
    try {
      console.log(
        `%c*** URL ***`,
        "background: green; color: white; padding: 12px 24px",
        url,
      );
      const response = await Axios.get<T>(url);
      console.log(
        `%c*** response.headers ***`,
        "background: green; color: white; padding: 12px 24px",
        {
          "x-wp-total": response.headers["x-wp-total"],
          "x-wp-totalpages": response.headers["x-wp-totalpages"],
          "content-type": response.headers["content-type"],
          url,
        },
      );
      console.log(
        `%c*** ALL HEADERS ***`,
        "background: red; color: white; padding: 12px 24px",
        response.headers,
      );

      console.log(
        `%c*** response.data.length ***`,
        "background: blue; color: white; padding: 12px 24px",
        Array.isArray(response.data) ? response.data.length : "Not an array",
      );
      return response.data;
    } catch (error) {
      if (retries >= 3) {
        throw new InfrastructureException.HttpError("Max retries reached");
      }
      return this.get(url, options, retries + 1);
    }
  }
}
