import { TTags } from "../../components/Stories/types";

export interface IGetStoryActionPayload {
  story: TTags;
  page?: number;
}

export type THNItemType = "job" | "link" | "ask";
export interface IHNStory {
  id: number;
  title: string;
  points?: number | null;
  user?: string | null;
  time: number;
  time_ago: string;
  comments_count: number;
  type: THNItemType;
  url: string;
  domain?: string;
}

export interface IStoriesReducer {
  loading: boolean;

  stories: IHNStory[];
}
