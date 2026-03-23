import { PostHttpService } from "src/post/infrastructure/post.httpService";
import { AlbumHttpService } from "../infrastructure/album.httpService";
import type { AlbumResponse } from "../types";
import { Album } from "../domain/album";

export const getAlbums = async (): Promise<Album[]> => {
  try {
    const postService = new PostHttpService();
    const albumService = new AlbumHttpService(postService);
    const response: AlbumResponse[] = await albumService.getAllAlbums();
    return response.map(Album.create);
  } catch (error) {
    console.error("Error fetching albums", error);
    return [];
  }
};
