import { ContactModel } from "../pages/Contacts/components/TableContacts/model/TableContacts.model";
import {
  ACTION_HISTORY,
  HistoryItemModel,
} from "../store/history/history.model";

export const AuthorizationMock: HistoryItemModel = {
  action: ACTION_HISTORY.LOGIN,
  id: 1,
  date: new Date(),
  user: {
    name: {
      firstName: "",
      secondName: "",
    },
    email: "",
    phone: "",
  },
};

export const MockTableContacts: ContactModel[] = [
  {
    id: 1,
    name: "Иван",
    email: "ivan@mail.ru",
    phone: "8-908-878-06-06",
    isArchive: false,
  },
  {
    id: 2,
    name: "Петр",
    email: "petr@mail.ru",
    phone: "8-998-878-06-11",
    isArchive: true,
  },
  {
    id: 3,
    name: "Максим",
    email: "max@mail.ru",
    phone: "8-908-878-06-06",
    isArchive: false,
  },
  {
    id: 4,
    name: "Семен",
    email: "semen@mail.ru",
    phone: "8-908-878-06-06",
    isArchive: false,
  },
  {
    id: 5,
    name: "Валентин",
    email: "valentin@mail.ru",
    phone: "8-908-878-06-06",
    isArchive: false,
  },
  {
    id: 6,
    name: "Филип",
    email: "philip@mail.ru",
    phone: "8-908-878-06-06",
    isArchive: false,
  },
];
