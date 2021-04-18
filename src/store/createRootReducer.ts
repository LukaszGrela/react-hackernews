import {
  connectRouter,
  LocationChangeAction,
  RouterState,
} from "connected-react-router";
import { History } from "history";
import { Reducer, AnyAction, combineReducers } from "redux";
import stories from "./stories/slice";
import { IStoriesReducer } from "./stories/types";
import { TActionTypes as TStoriesActionTypes } from "./stories/actions";
import item from "./item/slice";
import { IItemReducer } from "./item/types";
import { TActionTypes as TItemActionTypes } from "./stories/actions";

export type TAction =
  | TItemActionTypes
  | TStoriesActionTypes
  | LocationChangeAction
  | AnyAction;

export type TStateObject = {
  item: IItemReducer;
  router: RouterState;
  stories: IStoriesReducer;
};

export type TRootReducer = Reducer<TStateObject, TAction>;

const createRootReducer = (history: History): TRootReducer =>
  combineReducers<TStateObject, TAction>({

    item, router: connectRouter(history),
    stories,
  });

export default createRootReducer;
