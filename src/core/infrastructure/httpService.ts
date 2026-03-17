export interface Options {
  page: number;
  limit: number;
}

export abstract class HttpService {
  abstract get<T>(url: string, options?: Options): Promise<T>;
}
