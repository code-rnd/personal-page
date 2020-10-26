import React, { FC } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import { urls } from "./app/routing/routing.enums";
import { Routing } from "./app/routing/routing";
import { store } from "./app/store";

import "./App.scss";

export const App: FC = () => {
  return (
    <Provider store={store}>
      <Router basename={urls.baseUrl}>
        <Routing />
      </Router>
    </Provider>
  );
};
