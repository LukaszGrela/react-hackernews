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

export type TAction = TStoriesActionTypes | LocationChangeAction | AnyAction;

export type TStateObject = {
  router: RouterState;
  stories: IStoriesReducer;
};

export type TRootReducer = Reducer<TStateObject, TAction>;

const createRootReducer = (history: History): TRootReducer =>
  combineReducers<TStateObject, TAction>({
    router: connectRouter(history),
    stories,
  });

export default createRootReducer;
