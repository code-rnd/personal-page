import { Action, handleActions } from "redux-actions";
import { notificationsActions } from "./notifications.actions";
import { NotificationsModel } from "./notifications.model";

export const initialState: NotificationsModel = {
  content: "",
  isShow: false,
  error: "",
};

const setShow = (
  state: NotificationsModel,
  action: Action<boolean>
): NotificationsModel => ({
  ...state,
  isShow: action.payload,
});

const setContent = (
  state: NotificationsModel,
  action: Action<string>
): NotificationsModel => ({
  ...state,
  content: action.payload,
});

const reducerMap: { [key: string]: any } = {
  [notificationsActions.SET_CONTENT]: setContent,
  [notificationsActions.SET_SHOW]: setShow,
};

export const notificationsReducer = handleActions(reducerMap, initialState);
