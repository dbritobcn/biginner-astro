export interface Options {
  page: number;
  limit: number;
}

export interface PaginatedResponse<T> {
  data: T;
  totalPages: number;
  total: number;
}

export abstract class HttpService {
  abstract get<T>(url: string, options?: Options): Promise<T>;
  abstract getPaginated<T>(url: string): Promise<PaginatedResponse<T>>;
}
