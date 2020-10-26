import { Action, handleActions } from "redux-actions";

import {
  AuthorizationModel,
  AuthorizationStateModel,
} from "./authorization.model";
import { authorizationActions } from "./authorization.actions";
import { AuthorizationMock } from "../../mock/mocks";
import { UserInfoModel } from "../history/history.model";

export const initialState: AuthorizationStateModel = {
  user: AuthorizationMock.user,
  isLoading: false,
  date: new Date(),
  error: "",
};

const setLaoding = (
  state: AuthorizationStateModel,
  action: Action<boolean>
): AuthorizationStateModel => ({
  ...state,
  isLoading: action.payload,
});

const setLogin = (
  state: AuthorizationStateModel,
  action: Action<AuthorizationModel>
): AuthorizationStateModel => {
  return {
    ...state,
    user: {
      name: {
        firstName: action.payload.name,
        secondName: "",
      },
      phone: "",
      email: "",
    },
    date: action.payload.date,
  };
};

const setUpdateUserInfo = (
  state: AuthorizationStateModel,
  action: Action<UserInfoModel>
): AuthorizationStateModel => ({
  ...state,
  user: action.payload,
});

const reducerMap: { [key: string]: any } = {
  [authorizationActions.SET_LOADING]: setLaoding,
  [authorizationActions.SET_UPDATE_USER]: setUpdateUserInfo,
  [authorizationActions.SET_LOGIN]: setLogin,
};

export const authorizationReducer = handleActions(reducerMap, initialState);
