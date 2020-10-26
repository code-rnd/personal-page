import { Action, handleActions } from "redux-actions";
import { MockTableContacts } from "../../mock/mocks";

import { ContactModel } from "../../pages/Contacts/components/TableContacts/model/TableContacts.model";
import { contactsActions } from "./contacts.actions";
import { ContactsModelState } from "./contacts.model";

export const initialState: ContactsModelState = {
  list: MockTableContacts,
  isLoading: false,
  error: "",
};

const setLaoding = (
  state: ContactsModelState,
  action: Action<boolean>
): ContactsModelState => ({
  ...state,
  isLoading: action.payload,
});

const setUpdateContacts = (
  state: ContactsModelState,
  action: Action<ContactModel[]>
): ContactsModelState => ({
  ...state,
  list: action.payload,
});

const setRemoveContacts = (
  state: ContactsModelState,
  action: Action<ContactModel[]>
): ContactsModelState => ({
  ...state,
  list: action.payload,
});

const reducerMap: { [key: string]: any } = {
  [contactsActions.SET_LOADING]: setLaoding,
  [contactsActions.SET_UPDATE_CONTACTS]: setUpdateContacts,
  [contactsActions.SET_REMOVE_CONTACT]: setRemoveContacts,
};

export const contactsReducer = handleActions(reducerMap, initialState);
