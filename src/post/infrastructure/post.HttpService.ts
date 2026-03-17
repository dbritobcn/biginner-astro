import type { PostService } from "./post.service";
import type { GetPostsProps } from "../types";
import { axiosHttpService } from "src/core/infrastructure/axiosHttpService";

const httpService = new axiosHttpService();

export class PostHttpService implements PostService {
  async getPostsByCategory<T>(props: GetPostsProps): Promise<T> {
    const url = new URL(props.url);

    const queryParams = new URLSearchParams({
      categories: props.category,
      page: props.page,
      per_page: props.limit,
      _embed: "",
    });

    url.search = queryParams.toString();

    return httpService.get<T>(url.href);
  }

  async getPostBySlug<T>(slug: string, baseUrl: string): Promise<T> {
    const url = new URL(baseUrl);

    const queryParams = new URLSearchParams({
      slug,
      _embed: "",
    });

    url.search = queryParams.toString();

    return await httpService.get<T>(url.href);
  }
}
