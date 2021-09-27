export type { Bookmark };

interface Bookmark {
  title: string;
  linkUrl: string;
  imageUrl: string;
  tags: string[];
  notes?: string;
}
