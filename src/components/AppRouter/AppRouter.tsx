import { ConnectedRouter } from "connected-react-router";
import React from "react";
import { Route, Switch } from "react-router";
import { history } from "../../store";
import Items from "../Items/Items";
import Navigation from "../Navigation/Navigation";
import Stories from "../Stories/Stories";

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
              <Items />
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
