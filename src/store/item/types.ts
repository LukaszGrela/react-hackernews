import { IHNItem } from "../../model";

export interface IItemReducer {
  loading: boolean;
  item: IHNItem | null;
}