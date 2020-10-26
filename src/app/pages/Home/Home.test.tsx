import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";

import { Home } from "./index";
import { store } from "../../store";

it(`Компонент ${Home.name}, отрисован корректно`, () => {
  const Page = renderer
    .create(
      <Provider store={store}>
        <Home />
      </Provider>
    )
    .toJSON();

  expect(Page).toMatchSnapshot();
});
