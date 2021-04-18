import { TTags } from "../../components/Stories/types";
import { IHNItem } from "../../model";

export interface IGetStoryActionPayload {
  story: TTags;
  page?: number;
}

export interface IStoriesReducer {
  loading: boolean;

  stories: IHNItem[];
}
