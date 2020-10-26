import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";

import { Authorization } from "./index";
import { store } from "../../store";

it(`Компонент ${Authorization.name}, отрисован корректно`, () => {
  const Page = renderer
    .create(
      <Provider store={store}>
        <Authorization />
      </Provider>
    )
    .toJSON();

  expect(Page).toMatchSnapshot();
});
