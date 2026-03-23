import { InfrastructureException } from "./exception";
import { HttpService, type Options, type PaginatedResponse } from "./httpService";

export class fetchHttpService extends HttpService {
  async get<T>(url: string, options?: Options, retries = 0): Promise<T> {
    try {
      const response = await fetch(new Request(url));
      return response.json();
    } catch (error) {
      if (retries >= 3) {
        throw new InfrastructureException.HttpError("Max retries reached");
      }
      return this.get(url, options, retries + 1);
    }
  }

  async getPaginated<T>(url: string, retries = 0): Promise<PaginatedResponse<T>> {
    try {
      const response = await fetch(new Request(url));
      const data: T = await response.json();
      return {
        data,
        totalPages: Number(response.headers.get("x-wp-totalpages") ?? 1),
        total: Number(response.headers.get("x-wp-total") ?? 0),
      };
    } catch (error) {
      if (retries >= 3) {
        throw new InfrastructureException.HttpError("Max retries reached");
      }
      return this.getPaginated(url, retries + 1);
    }
  }
}
