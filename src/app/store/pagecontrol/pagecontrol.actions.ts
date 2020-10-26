import { Action, ActionFunction1, createAction } from "redux-actions";
import { Dispatch } from "redux";

import { StoreModel } from "../model/store.model";
import { getCurrentPage } from "./pagecontrol.utils";

class Pagecontrol {
  readonly prefix: string = "PAGE_CONTROL";
  readonly SET_CONTROL: string = "SET_CONTROL";

  setControl: ActionFunction1<any, Action<any>> = createAction(
    this.SET_CONTROL
  );

  updateControl: any = (isShow: boolean) => async (
    dispatch: Dispatch,
    getState: () => StoreModel
  ) => {
    const { route } = getState().route;
    const current = getCurrentPage(route);

    dispatch(this.setControl({ [current]: isShow }));
  };
}

export const pageControlActions = new Pagecontrol();
