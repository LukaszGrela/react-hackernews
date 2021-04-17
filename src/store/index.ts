import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import { applyMiddleware, createStore, Store } from "redux";
import { composeWithDevTools, EnhancerOptions } from "redux-devtools-extension";
import thunk, { ThunkDispatch } from "redux-thunk";
import createRootReducer, { TAction, TStateObject } from "./createRootReducer";

const history = createBrowserHistory();
const middleware = [routerMiddleware(history), thunk];

const enhancers: never[] = [];
const composeEnhancers = composeWithDevTools({} as EnhancerOptions);

type TStore = Store<TStateObject, TAction> & {
  dispatch: TDispatch;
};
const store: TStore = createStore(
  createRootReducer(history),
  composeEnhancers(applyMiddleware(...middleware), ...enhancers)
);

type TDispatch = ThunkDispatch<TStateObject, unknown, TAction>;

// helper to get typed store
const getStore: () => TStore = (): TStore => store as TStore;

export { history, getStore };
export type { TStore, TDispatch };
export default store;
