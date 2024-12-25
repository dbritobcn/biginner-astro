import type { MediaResponse } from "../types";

interface MediaSize {
  url: string;
  height: number;
  width: number;
  file: string;
  mimeType: string;
}

export enum MediaSizeName {
  "medium" = "medium",
  "large" = "large",
  "thumbnail" = "thumbnail",
  "mediumLarge" = "mediumLarge",
  "full" = "full",
}

interface MediaSizes {
  [MediaSizeName.medium]?: MediaSize;
  [MediaSizeName.large]?: MediaSize;
  [MediaSizeName.thumbnail]?: MediaSize;
  [MediaSizeName.mediumLarge]?: MediaSize;
  [MediaSizeName.full]?: MediaSize;
}

export class Media {
  private constructor(
    public readonly id: number,
    public readonly title: string,
    public readonly slug: string,
    public readonly altText: string,
    public readonly sizes: MediaSizes,
  ) {}

  static create(media: MediaResponse): Media {
    const sizes: MediaSizes = {};

    if (media.media_details.sizes.medium) {
      sizes.medium = {
        url: media.media_details.sizes.medium.source_url,
        height: media.media_details.sizes.medium.height,
        width: media.media_details.sizes.medium.width,
        mimeType: media.media_details.sizes.medium.mime_type,
        file: media.media_details.sizes.medium.file,
      };
    }

    if (media.media_details.sizes.large) {
      sizes.large = {
        url: media.media_details.sizes.large.source_url,
        height: media.media_details.sizes.large.height,
        width: media.media_details.sizes.large.width,
        mimeType: media.media_details.sizes.large.mime_type,
        file: media.media_details.sizes.large.file,
      };
    }

    if (media.media_details.sizes.thumbnail) {
      sizes.thumbnail = {
        url: media.media_details.sizes.thumbnail.source_url,
        height: media.media_details.sizes.thumbnail.height,
        width: media.media_details.sizes.thumbnail.width,
        mimeType: media.media_details.sizes.thumbnail.mime_type,
        file: media.media_details.sizes.thumbnail.file,
      };
    }

    if (media.media_details.sizes.medium_large) {
      sizes.mediumLarge = {
        url: media.media_details.sizes.medium_large.source_url,
        height: media.media_details.sizes.medium_large.height,
        width: media.media_details.sizes.medium_large.width,
        mimeType: media.media_details.sizes.medium_large.mime_type,
        file: media.media_details.sizes.medium_large.file,
      };
    }

    if (media.media_details.sizes.full) {
      sizes.full = {
        url: media.media_details.sizes.full.source_url,
        height: media.media_details.sizes.full.height,
        width: media.media_details.sizes.full.width,
        mimeType: media.media_details.sizes.full.mime_type,
        file: media.media_details.sizes.full.file,
      };
    }

    return new Media(
      media.id,
      media.media_details.image_meta.title,
      media.slug,
      media.alt_text,
      sizes,
    );
  }
}
