import { PostHttpService } from "src/post/infrastructure/post.httpService";
import { AlbumHttpService } from "../infrastructure/album.httpService";
import type { AlbumResponse } from "../types";
import { Album } from "../domain/album";

export interface GetStaticPathsResult {
  paths: { params: { slug: string }; props: Album }[];
  fallback: boolean;
}

export const getAlbumStaticPaths = async (): Promise<GetStaticPathsResult> => {
  try {
    let page = 1;
    const postService = new PostHttpService();
    const albumService = new AlbumHttpService(postService);
    const albums: AlbumResponse[] = await albumService.getAlbums({
      page,
      limit: 10,
    });

    const paths = albums.map((album: AlbumResponse) => {
      return {
        params: { slug: album.slug },
        props: Album.create(album),
      };
    });

    return { paths, fallback: false };
  } catch (error) {
    console.error("Error fetching album static paths", error);
    return { paths: [], fallback: false };
  }
};
