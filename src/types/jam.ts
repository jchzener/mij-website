export interface LocalizedText {
  en: string;
  fr: string;
}

export interface LocalizedArray {
  en: string[];
  fr: string[];
}

export interface Resource {
  type: "book" | "article" | "talk" | "course";
  label: string;
  link?: string;
}

export interface GalleryItem {
  src: string;
  alt: string;
}

export interface Speaker {
  name: string;
  title: LocalizedText;
  image?: string;
}

export interface Jam {
  id: string;
  readingTime: number;
  format?: "guest" | "community" | "informal" | "panel";
  keyQuestion: LocalizedText;
  context: LocalizedText;
  theme: LocalizedText;
  displayDate: LocalizedText;
  location: LocalizedText;
  speaker?: Speaker;
  speakers?: Speaker[];
  description: LocalizedText;
  descriptionLong: LocalizedText;
  quote?: LocalizedText;
  takeaways?: LocalizedArray;
  resources?: Resource[];
  gallery?: GalleryItem[];
}
