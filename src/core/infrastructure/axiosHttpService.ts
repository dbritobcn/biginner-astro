import Axios from "axios";

import { InfrastructureException } from "./exception";
import { HttpService, type Options, type PaginatedResponse } from "./httpService";

export class axiosHttpService extends HttpService {
  async get<T>(url: string, options?: Options, retries = 0): Promise<T> {
    try {
      const response = await Axios.get<T>(url);
      return response.data;
    } catch (error) {
      if (retries >= 3) {
        throw new InfrastructureException.HttpError("Max retries reached");
      }
      return this.get(url, options, retries + 1);
    }
  }

  async getPaginated<T>(url: string, retries = 0): Promise<PaginatedResponse<T>> {
    try {
      const response = await Axios.get<T>(url);
      return {
        data: response.data,
        totalPages: Number(response.headers["x-wp-totalpages"] ?? 1),
        total: Number(response.headers["x-wp-total"] ?? 0),
      };
    } catch (error) {
      if (retries >= 3) {
        throw new InfrastructureException.HttpError("Max retries reached");
      }
      return this.getPaginated(url, retries + 1);
    }
  }
}
