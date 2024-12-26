import type { AlbumResponse } from "../types";

export interface GetAlbumsProps {
  page: number;
  limit?: number;
}

export abstract class AlbumService {
  abstract getAlbums(props: GetAlbumsProps): Promise<AlbumResponse[]>;
}
