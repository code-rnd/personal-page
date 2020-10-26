import { UserInfoModel } from "../history/history.model";

export interface AuthorizationModel {
  name: string;
  date: Date;
  action: ACTION_LOGIN;
}

export interface AuthorizationStateModel {
  user: UserInfoModel;
  date: Date;
  isLoading: boolean;
  error: "";
}

export enum ACTION_LOGIN {
  LOGIN = "LOGIN",
  LOGIN_OUT = "LOGIN_OUT",
}
