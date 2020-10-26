export enum ACTION_HISTORY {
  EDIT_CONTACT = "Редактирование контакта",
  ADD_CONTACT = "Добавление контакта",
  ARCHIVE_CONTACT = "Архивирование контакта",

  LOGIN = "Вход в сервис",
  LOGIN_OUT = "Выход из сервиса",

  UPDATE_USER_INFO = "Редактирование информации о пользователя",
}

export interface HistoryModelState {
  list: HistoryItemModel[];
  lastItem: HistoryItemModel;
  isLoading: boolean;
  error: string;
}

export interface UserInfoModel {
  name: {
    firstName: string;
    secondName: string;
  };
  email: string;
  phone: string;
}

export interface HistoryItemModel {
  user: UserInfoModel;
  date: Date;
  action: ACTION_HISTORY;
  id: number;
}

export interface ActionUpdateHistory {
  user: string;
  action: ACTION_HISTORY;
}
