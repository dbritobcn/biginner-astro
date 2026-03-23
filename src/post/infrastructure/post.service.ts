import type { GetPostsProps } from "../types";

export abstract class PostService {
  abstract getPostsByCategory<T>(props: GetPostsProps): Promise<T>;
  abstract getAllPostsByCategory<T extends unknown[]>(
    props: Omit<GetPostsProps, "page">,
  ): Promise<T>;
  abstract getPostBySlug<T>(slug: string, baseUrl: string): Promise<T>;
}
