import { Action, handleActions } from "redux-actions";
import { PageControlModel } from "./pagecontrol.model";
import { pageControlActions } from "./pagecontrol.actions";

const initialState: PageControlModel = {
  home: false,
  history: true,
  contacts: true,
  parcels: true,
};

const setControl = (
  state: PageControlModel,
  action: Action<any>
): PageControlModel => ({
  ...state,
  ...action.payload,
});

const reducerMap: { [key: string]: any } = {
  [pageControlActions.SET_CONTROL]: setControl,
};

export const pagecontrolReducer = handleActions(reducerMap, initialState);
