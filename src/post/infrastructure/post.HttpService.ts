import { HttpService } from "src/core/infrastructure/httpService";
import type { PostService } from "./post.service";
import type { GetPostsProps } from "../types";

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

    return HttpService.get<T>(url.href);
  }

  async getPostBySlug<T>(slug: string, baseUrl: string): Promise<T> {
    const url = new URL(baseUrl);

    const queryParams = new URLSearchParams({
      slug,
      _embed: "",
    });

    url.search = queryParams.toString();

    return await HttpService.get<T>(url.href);
  }
}
