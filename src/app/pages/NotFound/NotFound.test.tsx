import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";

import { NotFound } from "./index";
import { store } from "../../store";

it(`Компонент ${NotFound.name}, отрисован корректно`, () => {
  const Page = renderer
    .create(
      <Provider store={store}>
        <NotFound />
      </Provider>
    )
    .toJSON();

  expect(Page).toMatchSnapshot();
});
