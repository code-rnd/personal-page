import { Action, ActionFunction1, createAction } from "redux-actions";
import { Dispatch } from "redux";

import { ACTION_LOGIN, AuthorizationModel } from "./authorization.model";
import { ACTION_HISTORY, UserInfoModel } from "../history/history.model";
import { prepareAction, prepareUser } from "./authorization.utils";
import { historyActions } from "../history/history.actions";
import { notificationsActions } from "../notifications";
import { Authorization } from "../../http/apit";

class AuthorizationActions {
  readonly prefix: string = "AUTHORIZATION";
  readonly SET_LOADING: string = `${this.prefix}.SET_LOADING`;
  readonly SET_LOGIN: string = `${this.prefix}.SET_LOGIN`;
  readonly SET_UPDATE_USER: string = `${this.prefix}.SET_UPDATE_USER`;

  setLoading: ActionFunction1<boolean, Action<boolean>> = createAction(
    this.SET_LOADING
  );
  setLogin: ActionFunction1<
    AuthorizationModel,
    Action<AuthorizationModel>
  > = createAction(this.SET_LOGIN);
  setUpdateUser: ActionFunction1<
    UserInfoModel,
    Action<UserInfoModel>
  > = createAction(this.SET_UPDATE_USER);

  updateLogin: any = (name: string, action: ACTION_LOGIN) => async (
    dispatch: Dispatch
  ) => {
    dispatch(this.setLoading(true));
    try {
      const { data } = await Authorization.login(name);

      dispatch(
        this.setLogin({
          name: prepareUser(data.name, action),
          date: new Date(),
          action,
        })
      );
      dispatch(
        notificationsActions.updateContent("Авторизация прошла успешно")
      );
      dispatch(historyActions.updateHistory(prepareAction(action)));
      dispatch(this.setLoading(false));
    } catch (e) {
      console.log("Ошибка в методе updateLogin: ", e);
      dispatch(notificationsActions.updateContent("Авторизация не прошла"));
      dispatch(this.setLoading(false));
    }
  };

  updateUserInfo: any = (user: UserInfoModel) => async (dispatch: Dispatch) => {
    dispatch(this.setLoading(true));
    try {
      const timer = setTimeout(() => {
        dispatch(this.setUpdateUser(user));
        dispatch(
          notificationsActions.updateContent("Данные успешно сохранены")
        );
        dispatch(historyActions.updateHistory(ACTION_HISTORY.UPDATE_USER_INFO));
        dispatch(this.setLoading(false));
      }, 1500);
      return timer;
    } catch (e) {
      console.log("Ошибка в методе updateUserInfo: ", e);
      dispatch(
        notificationsActions.updateContent("При сохранении произошла ошибка")
      );
      dispatch(this.setLoading(false));
    }
  };
}

export const authorizationActions = new AuthorizationActions();
