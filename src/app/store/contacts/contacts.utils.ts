import { ContactModel } from "../../pages/Contacts/components/TableContacts/model/TableContacts.model";

export const ApiUpdateContacts = (
  contacts: ContactModel[],
  contact: ContactModel
): ContactModel[] => {
  let lengthList = contacts.length;

  if (!contact.id || !lengthList) {
    return [...contacts, { ...contact, id: contacts[lengthList - 1].id + 1 }];
  }

  if (!!contact.id && !!lengthList) {
    const resultList: ContactModel[] = [];

    contacts.map((item) => {
      if (item.id === contact.id) {
        resultList.push({
          ...item,
          ...contact,
        });
      }

      if (item.id !== contact.id) {
        resultList.push(item);
      }
    });

    return resultList;
  }

  return contacts;
};
