import type { MediaResponse } from "src/media/types";

export interface AlbumResponse {
  id: number;
  date: string;
  date_gmt: string;
  slug: string;
  status: string;
  link: string;
  title: AlbumContent;
  content: AlbumContent;
  excerpt: AlbumContent;
  featured_media: number;
  comment_status: string;
  categories: number[];
  tags: number[];
  acf: AlbumACF;
  _embedded: Embedded;
}

interface AlbumContent {
  rendered: string;
  protected?: boolean;
}

interface AlbumACF {
  puntuacion: string;
  ano: string;
  artista: string;
}

interface Embedded {
  author: Author[];
  "wp:featuredmedia": MediaResponse[];
}

interface Author {
  id: number;
  name: string;
  slug: string;
}
