import { HttpService } from "src/core/infrastructure/httpService";

interface GetPostsProps {
  category: string;
  page: string;
  url: string;
  limit: string;
}

export class PostService {
  static async getPostsByCategory<T>(props: GetPostsProps): Promise<T> {
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

  static async getPostBySlug<T>(slug: string, baseUrl: string): Promise<T> {
    const url = new URL(baseUrl);

    const queryParams = new URLSearchParams({
      slug,
      _embed: "",
    });

    url.search = queryParams.toString();

    return await HttpService.get<T>(url.href);
  }
}
