import { InfrastructureException } from "./exception";

interface Options {
  page: number;
  limit: number;
}

export class HttpService {
  static async get<T>(url: string, options?: Options, retries = 0): Promise<T> {
    try {
      const response = await fetch(url);
      return response.json();
    } catch (error) {
      if (retries >= 3) {
        throw new InfrastructureException.HttpError("Max retries reached");
      }
      return this.get(url, options, retries + 1);
    }
  }
}
