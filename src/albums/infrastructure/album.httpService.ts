import { PostService } from "src/post/service/post.service";
import type { AlbumResponse } from "../types";
import { AlbumService, type GetAlbumsProps } from "./album.service";
import { ALBUM_CATEGORY, ALBUM_DEFAULT_LIMIT, POSTS_URL } from "../constants";
import { InfrastructureException } from "src/core/infrastructure/exception";

export class AlbumServiceHttp implements AlbumService {
  async getAlbums({ page, limit }: GetAlbumsProps): Promise<AlbumResponse[]> {
    return PostService.getPostsByCategory<AlbumResponse[]>({
      category: ALBUM_CATEGORY,
      page: page.toString(),
      limit: limit?.toString() ?? ALBUM_DEFAULT_LIMIT.toString(),
      url: POSTS_URL,
    });
  }

  async getAlbumBySlug(slug: string): Promise<AlbumResponse | null> {
    try {
      const response: AlbumResponse[] =
        await PostService.getPostBySlug<AlbumResponse[]>(slug, POSTS_URL);
      return response[0];
    } catch (error) {
      if (error instanceof InfrastructureException.HttpError) {
        console.error("Error fetching album by slug", error);
      }
      return null;
    }
  }
}
