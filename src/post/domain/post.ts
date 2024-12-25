import { Media, MediaSizeName } from "src/media/domain/media";

const imagePriority: MediaSizeName[] = [
  MediaSizeName.large,
  MediaSizeName.mediumLarge,
  MediaSizeName.medium,
  MediaSizeName.full,
  MediaSizeName.thumbnail,
];

export class Post {
  constructor(
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
    public readonly tags: number[]
  ) {}

  getPreferredImageSize(size: MediaSizeName): MediaSizeName | null {
    if (this.featuredMedia.sizes[size]) {
      return size;
    }
    for (const priority of imagePriority) {
      if (this.featuredMedia.sizes[priority]) {
        return priority;
      }
    }
    return null;
  }

  getFormattedDate(): string {
    const locale = "es-ES";
    const date = new Intl.DateTimeFormat(locale).format(this.date);
    return date;
  }
}
