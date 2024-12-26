import { PostHttpService } from "src/post/infrastructure/post.HttpService";
import { AlbumHttpService } from "../infrastructure/album.httpService";
import type { AlbumResponse } from "../types";
import { Album } from "../domain/album";

export interface GetStaticPathsResult {
  paths: { params: { slug: string }; props: Album }[];
  fallback: boolean;
}

export const getAlbumStaticPaths = async (): Promise<GetStaticPathsResult> => {
  try {
    const postService = new PostHttpService();
    const albumService = new AlbumHttpService(postService);
    const albums: AlbumResponse[] = await albumService.getAlbums({
      page: 1,
      limit: 100,
    });

    const paths = albums.map((album: AlbumResponse) => ({
      params: { slug: album.slug },
      props: Album.create(album),
    }));

    return { paths, fallback: false };
  } catch (error) {
    console.error("Error fetching album static paths", error);
    return { paths: [], fallback: false };
  }
};
