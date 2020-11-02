export enum ACTION_HISTORY {
  EDIT_CONTACT = "Редактирование контакта",
  ADD_CONTACT = "Добавление контакта",
  ARCHIVE_CONTACT = "Архивирование контакта",

  LOGIN = "Вход",
  LOGIN_OUT = "Выход",

  UPDATE_USER_INFO = "Редактирование информации о пользователя",

  PARCEL_UPDATE = "Данные о посылке обновлены",
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
