import {
  connectRouter,
  LocationChangeAction,
  RouterState,
} from "connected-react-router";
import { History } from "history";
import { Reducer, AnyAction, combineReducers } from "redux";

export type TAction = LocationChangeAction | AnyAction;

export type TStateObject = {
  router: RouterState;
};

export type TRootReducer = Reducer<TStateObject, TAction>;

const createRootReducer = (history: History): TRootReducer =>
  combineReducers<TStateObject, TAction>({
    router: connectRouter(history),
  });

export default createRootReducer;
