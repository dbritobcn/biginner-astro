import { PostHttpService } from "src/post/infrastructure/post.HttpService";
import { AlbumHttpService } from "../infrastructure/album.httpService";
import type { GetAlbumsProps } from "../infrastructure/album.service";
import type { AlbumResponse } from "../types";
import { Album } from "../domain/album";

export const getAlbums = async (props: GetAlbumsProps): Promise<Album[]> => {
  try {
    const postService = new PostHttpService();
    const albumService = new AlbumHttpService(postService);
    const response: AlbumResponse[] = await albumService.getAlbums(props);
    return response.map(Album.create);
  } catch (error) {
    console.error("Error fetching albums", error);
    return [];
  }
};
