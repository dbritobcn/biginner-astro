import { Media } from "../domain/media";

interface MediaSize {
  file: string;
  source_url: string;
  height: number;
  width: number;
  mime_type: string;
}

interface MediaSizes {
  medium?: MediaSize;
  large?: MediaSize;
  thumbnail?: MediaSize;
  medium_large?: MediaSize;
  full?: MediaSize;
}

interface MediaDetails {
  sizes: MediaSizes;
  image_meta: {
    caption: string;
    title: string;
  };
}

export interface MediaResponse {
  id: number;
  slug: string;
  source_url: string;
  alt_text: string;
  media_details: MediaDetails;
}

export interface MediaProviderType {
  media: Record<string, Media>;
}