import { InfrastructureException } from "./exception";
import { HttpService, type Options } from "./httpService";

export class fetchHttpService extends HttpService {
  async get<T>(url: string, options?: Options, retries = 0): Promise<T> {
    try {
      console.log(
        `%c*** URL ***`,
        "background: green; color: white; padding: 12px 24px",
        url,
      );
      const response = await fetch(new Request(url));
      console.log(
        `%c*** response.headers ***`,
        "background: green; color: white; padding: 12px 24px",
        {
          "x-wp-total": response.headers.get("x-wp-total"),
          "x-wp-totalpages": response.headers.get("x-wp-totalpages"),
          "content-type": response.headers.get("content-type"),
          url,
        },
      );
      const result = await response.json();
      console.log(
        `%c*** result.length ***`,
        "background: green; color: white; padding: 12px 24px",
        result.length,
      );
      return result;
    } catch (error) {
      if (retries >= 3) {
        throw new InfrastructureException.HttpError("Max retries reached");
      }
      return this.get(url, options, retries + 1);
    }
  }
}
