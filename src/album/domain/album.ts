import { Post } from "src/post/domain/post";
import type { AlbumResponse } from "../types";
import { Media } from "src/media/domain/media";
import type { MediaResponse } from "src/media/types";

export class Album extends Post {
  private constructor(
    public readonly id: number,
    public readonly date: Date,
    public readonly slug: string,
    public readonly status: string,
    public readonly link: string,
    public readonly title: string,
    public readonly content: string,
    public readonly excerpt: string,
    public readonly author: string,
    public readonly featuredMedia: Media,
    public readonly commentStatus: string,
    public readonly categories: number[],
    public readonly tags: number[],
    public readonly score: number,
    public readonly year: string,
    public readonly artist: string,
  ) {
    super(
      id,
      date,
      slug,
      status,
      link,
      title,
      content,
      excerpt,
      author,
      featuredMedia,
      commentStatus,
      categories,
      tags,
    );
  }

  static create(props: AlbumResponse): Album {
    const featuredMedia: MediaResponse = props._embedded["wp:featuredmedia"][0];

    return new Album(
      props.id,
      new Date(props.date),
      props.slug,
      props.status,
      props.link,
      props.title.rendered,
      props.content.rendered,
      props.excerpt.rendered,
      props._embedded.author[0].name,
      Media.create(featuredMedia),
      props.comment_status,
      props.categories,
      props.tags,
      Number(props.acf.puntuacion),
      props.acf.ano,
      props.acf.artista,
    );
  }

  getScoreImage(): string {
    return `/images/score/score${this.score.toString().replace(/\./g, "")}.gif`;
  }
}
