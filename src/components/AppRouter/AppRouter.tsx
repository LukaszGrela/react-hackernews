import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../../store";
import { Route, Switch } from "react-router";

export enum Paths {
  HOME = '/:tag?'
}

const AppRouter: React.FC = (): JSX.Element => {
  return (
    <ConnectedRouter history={history}>
      <Switch>

        <Route
          render={(): JSX.Element => {
            return <p>404</p>;
          }}
        />
      </Switch>
    </ConnectedRouter>
  );
};

export default AppRouter;
