import { Action, ActionFunction1, createAction } from "redux-actions";
import { Dispatch } from "redux";

import { ContactModel } from "../../pages/Contacts/components/TableContacts/model/TableContacts.model";
import { ACTION_HISTORY } from "../history/history.model";
import { StoreModel } from "../model/store.model";
import { timerCount } from "../../shared/utils/service.util";
import { ApiUpdateContacts } from "./contacts.utils";
import { historyActions } from "../history";
import { notificationsActions } from "../notifications";

class ContactsActions {
  readonly prefix: string = "CONTACTS";
  readonly SET_LOADING: string = `${this.prefix}.SET_LOADING`;
  readonly SET_UPDATE_CONTACTS: string = `${this.prefix}.SET_UPDATE_CONTACTS`;
  readonly SET_REMOVE_CONTACT: string = `${this.prefix}.SET_REMOVE_CONTACT`;

  setLoading: ActionFunction1<boolean, Action<boolean>> = createAction(
    this.SET_LOADING
  );
  setRemoveContact: ActionFunction1<any, Action<any>> = createAction(
    this.SET_REMOVE_CONTACT
  );

  setUpdateContacts: ActionFunction1<any, Action<any>> = createAction(
    this.SET_UPDATE_CONTACTS
  );

  updateContacts: any = (
    contact: ContactModel,
    action: ACTION_HISTORY
  ) => async (dispatch: Dispatch, getState: () => StoreModel) => {
    const { list } = getState().contacts;
    dispatch(this.setLoading(true));
    try {
      const timer = setTimeout(() => {
        dispatch(this.setUpdateContacts(ApiUpdateContacts(list, contact)));
        dispatch(
          notificationsActions.updateContent("Данные успешно сохранены")
        );
        dispatch(historyActions.updateHistory(action));
        dispatch(this.setLoading(false));
      }, timerCount);
      return timer;
    } catch (e) {
      console.log("Ошибка в методе updateContacts: ", e);
      dispatch(
          notificationsActions.updateContent("При сохранении произошла ошибка")
      );
      dispatch(this.setLoading(false));
    }
  };

  removeContact: any = (
    contact: ContactModel,
    action: ACTION_HISTORY
  ) => async (dispatch: Dispatch, getState: () => StoreModel) => {
    const { list } = getState().contacts;
    dispatch(this.setLoading(true));
    try {
      const timer = setTimeout(() => {
        dispatch(this.setRemoveContact(ApiUpdateContacts(list, contact)));
        dispatch(
          notificationsActions.updateContent("Данные успешно сохранены")
        );
        dispatch(historyActions.updateHistory(action));
        dispatch(this.setLoading(false));
      }, timerCount);
      return timer;
    } catch (e) {
      console.log("Ошибка в методе updateContacts: ", e);
      dispatch(
          notificationsActions.updateContent("При сохранении произошла ошибка")
      );
      dispatch(this.setLoading(false));
    }
  };
}

export const contactsActions = new ContactsActions();
