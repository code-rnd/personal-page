import { ContactModel } from "../../pages/Contacts/components/TableContacts/model/TableContacts.model";

export interface ContactsModelState {
  list: ContactModel[];
  isLoading: boolean;
  error: "";
}
