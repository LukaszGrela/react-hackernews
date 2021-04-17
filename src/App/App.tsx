import React from "react";
import Navigation from "../components/Navigation/Navigation";
import { Provider } from "react-redux";
import store from "../store";
import "./styles/index.scss";
import AppRouter from "../components/AppRouter/AppRouter";

const App: React.FC = (): JSX.Element => {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Navigation />
        </header>
        <AppRouter />
      </div>
    </Provider>
  );
};

export default App;
