export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  content: string;
  readingTime: string;
  categories: string[];
  tags: string[];
  featured: boolean;
  draft: boolean;
  image?: string;
}

export interface BlogComment {
  id: string;
  postSlug: string;
  name: string;
  email: string;
  content: string;
  createdAt: string;
  replies?: BlogComment[];
}

export interface TableOfContents {
  id: string;
  text: string;
  level: number;
  children?: TableOfContents[];
}

export interface BlogCategory {
  name: string;
  slug: string;
  count: number;
}

export interface BlogTag {
  name: string;
  slug: string;
  count: number;
}

export interface SearchResult {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  score: number;
}