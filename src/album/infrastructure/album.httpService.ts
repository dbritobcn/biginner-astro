import { PostHttpService } from "src/post/infrastructure/post.HttpService";
import type { AlbumResponse } from "../types";
import { AlbumService, type GetAlbumsProps } from "./album.service";
import { ALBUM_CATEGORY, ALBUM_DEFAULT_LIMIT, POSTS_URL } from "../constants";

export class AlbumHttpService implements AlbumService {
  constructor(private postService: PostHttpService) {}

  async getAlbums({ page, limit }: GetAlbumsProps): Promise<AlbumResponse[]> {
    return this.postService.getPostsByCategory<AlbumResponse[]>({
      category: ALBUM_CATEGORY,
      page: page.toString(),
      limit: limit?.toString() ?? ALBUM_DEFAULT_LIMIT.toString(),
      url: POSTS_URL,
    });
  }
}
