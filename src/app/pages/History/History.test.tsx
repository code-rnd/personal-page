import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";

import { History } from "./index";
import { store } from "../../store";

it(`Компонент ${History.name}, отрисован корректно`, () => {
  const Page = renderer
    .create(
      <Provider store={store}>
        <History />
      </Provider>
    )
    .toJSON();

  expect(Page).toMatchSnapshot();
});
