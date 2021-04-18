export type THNItemType = "job" | "link" | "ask";

export interface IHNComment {
  id: number;
  level: number;
  user: string;
  time: number;
  time_ago: string;
  content: string;
  comments: IHNComment[];
}

export interface IHNItem {
  id: number;
  title: string;
  points?: number | null;
  user?: string | null;
  time: number;
  time_ago: string;
  type: THNItemType;
  url?: string;
  domain?: string;
  comments_count: number;
  comments: IHNComment[];
}