import type { PostService } from "./post.service";
import type { GetPostsProps } from "../types";
import { axiosHttpService } from "src/core/infrastructure/axiosHttpService";

const httpService = new axiosHttpService();

export class PostHttpService implements PostService {
  async getPostsByCategory<T>(props: GetPostsProps): Promise<T> {
    const url = new URL(props.url);

    url.search = new URLSearchParams({
      categories: props.category,
      page: props.page,
      per_page: props.limit,
      _embed: "",
    }).toString();

    return httpService.get<T>(url.href);
  }

  async getAllPostsByCategory<T extends unknown[]>(
    props: Omit<GetPostsProps, "page">,
  ): Promise<T> {
    const buildUrl = (page: number): string => {
      const url = new URL(props.url);
      url.search = new URLSearchParams({
        categories: props.category,
        page: page.toString(),
        per_page: props.limit,
        _embed: "",
      }).toString();
      return url.href;
    };

    const first = await httpService.getPaginated<T>(buildUrl(1));

    if (first.totalPages <= 1) return first.data;

    const remaining = await Promise.all(
      Array.from({ length: first.totalPages - 1 }, (_, i) =>
        httpService.getPaginated<T>(buildUrl(i + 2)),
      ),
    );

    return [...first.data, ...remaining.flatMap((r) => r.data)] as T;
  }

  async getPostBySlug<T>(slug: string, baseUrl: string): Promise<T> {
    const url = new URL(baseUrl);

    url.search = new URLSearchParams({
      slug,
      _embed: "",
    }).toString();

    return httpService.get<T>(url.href);
  }
}
