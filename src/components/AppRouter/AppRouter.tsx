import { ConnectedRouter } from "connected-react-router";
import React from "react";
import { Route, Switch } from "react-router";
import { history } from "../../store";
import Item from "../Item/Item";
import Navigation from "../Navigation/Navigation";
import Stories from "../Stories/Stories";
import User from "../User/User";

export enum Paths {
  HOME = "/:tag?",
  USER = "/user/:id",
  ITEM = "/item/:id",
}

const AppRouter: React.FC = (): JSX.Element => {
  return (
    <div className="App">
      <ConnectedRouter history={history}>
        <header className="App-header">
          <Navigation />
        </header>
        <main>
          <Switch>
            <Route exact path={Paths.HOME}>
              <Stories />
            </Route>
            <Route exact path={Paths.ITEM}>
              <Item />
            </Route>
            <Route exact path={Paths.USER}>
              <User />
            </Route>

            <Route>
              <p>404</p>
            </Route>
          </Switch>
        </main>
      </ConnectedRouter>
    </div>
  );
};

export default AppRouter;
