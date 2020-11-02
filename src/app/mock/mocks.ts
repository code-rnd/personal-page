import { ContactModel } from "../pages/Contacts/components/TableContacts/model/TableContacts.model";
import {
  ACTION_HISTORY,
  HistoryItemModel,
} from "../store/history/history.model";
import { ParcelModel, ParcelStatusFlow } from "../store/parcel/parcel.model";

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

export const MockParcel: ParcelModel[] = [
  {
    id: 1,
    sender: "Иванов И.П",
    recipient: "Петрова В.Н",
    departureDate: new Date(),
    typeOfCargo: "Хрупкий",
    weight: 125,
    currentStatus: ParcelStatusFlow.CUSTOMS_CLEARANCE_COMPLETED,
    historyStatuses: [
      {
        status: ParcelStatusFlow.DELIVERY_TO_THE_ADDRESSEE,
        date: null,
      },
      {
        status: ParcelStatusFlow.CAME_TO_THE_PLACE_OF_DELIVERY,
        date: null,
      },
      {
        status: ParcelStatusFlow.ARRIVED_AT_THE_CITY_SORTING_CENTER,
        date: null,
      },
      {
        status: ParcelStatusFlow.LEFT_SORTING_CENTER,
        date: null,
      },
      {
        status: ParcelStatusFlow.ARRIVED_AT_THE_SORTING_CENTER,
        date: null,
      },
      {
        status: ParcelStatusFlow.CUSTOMS_CLEARANCE_COMPLETED,
        date: new Date(),
      },
      {
        status: ParcelStatusFlow.RETAINED_BY_CUSTOMS,
        date: new Date(),
      },
      {
        status: ParcelStatusFlow.TRANSFERRED_TO_CUSTOMS,
        date: new Date(),
      },
      {
        status: ParcelStatusFlow.IMPORT,
        date: new Date(),
      },
      {
        status: ParcelStatusFlow.EXPORT,
        date: new Date(),
      },
      {
        status: ParcelStatusFlow.ARRIVAL_IN_MMPO,
        date: new Date(),
      },
      {
        status: ParcelStatusFlow.RECEPTION,
        date: new Date(),
      },
    ],
  },
  {
    id: 2,
    sender: "Васильев А.Н",
    recipient: "Хохлов П.И",
    departureDate: new Date(),
    typeOfCargo: "Твердый",
    weight: 15,
    currentStatus: ParcelStatusFlow.DELIVERY_TO_THE_ADDRESSEE,
    historyStatuses: [
      {
        status: ParcelStatusFlow.DELIVERY_TO_THE_ADDRESSEE,
        date: new Date(),
      },
      {
        status: ParcelStatusFlow.CAME_TO_THE_PLACE_OF_DELIVERY,
        date: new Date(),
      },
      {
        status: ParcelStatusFlow.ARRIVED_AT_THE_CITY_SORTING_CENTER,
        date: new Date(),
      },
      {
        status: ParcelStatusFlow.LEFT_SORTING_CENTER,
        date: new Date(),
      },
      {
        status: ParcelStatusFlow.ARRIVED_AT_THE_SORTING_CENTER,
        date: new Date(),
      },
      {
        status: ParcelStatusFlow.CUSTOMS_CLEARANCE_COMPLETED,
        date: new Date(),
      },
      {
        status: ParcelStatusFlow.RETAINED_BY_CUSTOMS,
        date: new Date(),
      },
      {
        status: ParcelStatusFlow.TRANSFERRED_TO_CUSTOMS,
        date: new Date(),
      },
      {
        status: ParcelStatusFlow.IMPORT,
        date: new Date(),
      },
      {
        status: ParcelStatusFlow.EXPORT,
        date: new Date(),
      },
      {
        status: ParcelStatusFlow.ARRIVAL_IN_MMPO,
        date: new Date(),
      },
      {
        status: ParcelStatusFlow.RECEPTION,
        date: new Date(),
      },
    ],
  },
  {
    id: 3,
    sender: "Игнатьев Р.В",
    recipient: "Сухарев К.К",
    departureDate: new Date(),
    typeOfCargo: "Хрупкий",
    weight: 66,
    currentStatus: ParcelStatusFlow.EXPORT,
    historyStatuses: [
      {
        status: ParcelStatusFlow.DELIVERY_TO_THE_ADDRESSEE,
        date: null,
      },
      {
        status: ParcelStatusFlow.CAME_TO_THE_PLACE_OF_DELIVERY,
        date: null,
      },
      {
        status: ParcelStatusFlow.ARRIVED_AT_THE_CITY_SORTING_CENTER,
        date: null,
      },
      {
        status: ParcelStatusFlow.LEFT_SORTING_CENTER,
        date: null,
      },
      {
        status: ParcelStatusFlow.ARRIVED_AT_THE_SORTING_CENTER,
        date: null,
      },
      {
        status: ParcelStatusFlow.CUSTOMS_CLEARANCE_COMPLETED,
        date: null,
      },
      {
        status: ParcelStatusFlow.RETAINED_BY_CUSTOMS,
        date: null,
      },
      {
        status: ParcelStatusFlow.TRANSFERRED_TO_CUSTOMS,
        date: null,
      },
      {
        status: ParcelStatusFlow.IMPORT,
        date: null,
      },
      {
        status: ParcelStatusFlow.EXPORT,
        date: new Date(),
      },
      {
        status: ParcelStatusFlow.ARRIVAL_IN_MMPO,
        date: new Date(),
      },
      {
        status: ParcelStatusFlow.RECEPTION,
        date: new Date(),
      },
    ],
  },
  {
    id: 4,
    sender: "Иванов И.П",
    recipient: "Петрова В.Н",
    departureDate: new Date(),
    typeOfCargo: "Хрупкий",
    weight: 125,
    currentStatus: ParcelStatusFlow.DELIVERY_TO_THE_ADDRESSEE,
    historyStatuses: [
      {
        status: ParcelStatusFlow.DELIVERY_TO_THE_ADDRESSEE,
        date: new Date(),
      },
      {
        status: ParcelStatusFlow.CAME_TO_THE_PLACE_OF_DELIVERY,
        date: new Date(),
      },
      {
        status: ParcelStatusFlow.ARRIVED_AT_THE_CITY_SORTING_CENTER,
        date: new Date(),
      },
      {
        status: ParcelStatusFlow.LEFT_SORTING_CENTER,
        date: new Date(),
      },
      {
        status: ParcelStatusFlow.ARRIVED_AT_THE_SORTING_CENTER,
        date: new Date(),
      },
      {
        status: ParcelStatusFlow.CUSTOMS_CLEARANCE_COMPLETED,
        date: new Date(),
      },
      {
        status: ParcelStatusFlow.RETAINED_BY_CUSTOMS,
        date: new Date(),
      },
      {
        status: ParcelStatusFlow.TRANSFERRED_TO_CUSTOMS,
        date: new Date(),
      },
      {
        status: ParcelStatusFlow.IMPORT,
        date: new Date(),
      },
      {
        status: ParcelStatusFlow.EXPORT,
        date: new Date(),
      },
      {
        status: ParcelStatusFlow.ARRIVAL_IN_MMPO,
        date: new Date(),
      },
      {
        status: ParcelStatusFlow.RECEPTION,
        date: new Date(),
      },
    ],
  },
  {
    id: 5,
    sender: "Васильев А.Н",
    recipient: "Хохлов П.И",
    departureDate: new Date(),
    typeOfCargo: "Твердый",
    weight: 15,
    currentStatus: ParcelStatusFlow.CUSTOMS_CLEARANCE_COMPLETED,
    historyStatuses: [
      {
        status: ParcelStatusFlow.DELIVERY_TO_THE_ADDRESSEE,
        date: null,
      },
      {
        status: ParcelStatusFlow.CAME_TO_THE_PLACE_OF_DELIVERY,
        date: null,
      },
      {
        status: ParcelStatusFlow.ARRIVED_AT_THE_CITY_SORTING_CENTER,
        date: null,
      },
      {
        status: ParcelStatusFlow.LEFT_SORTING_CENTER,
        date: null,
      },
      {
        status: ParcelStatusFlow.ARRIVED_AT_THE_SORTING_CENTER,
        date: null,
      },
      {
        status: ParcelStatusFlow.CUSTOMS_CLEARANCE_COMPLETED,
        date: new Date(),
      },
      {
        status: ParcelStatusFlow.RETAINED_BY_CUSTOMS,
        date: new Date(),
      },
      {
        status: ParcelStatusFlow.TRANSFERRED_TO_CUSTOMS,
        date: new Date(),
      },
      {
        status: ParcelStatusFlow.IMPORT,
        date: new Date(),
      },
      {
        status: ParcelStatusFlow.EXPORT,
        date: new Date(),
      },
      {
        status: ParcelStatusFlow.ARRIVAL_IN_MMPO,
        date: new Date(),
      },
      {
        status: ParcelStatusFlow.RECEPTION,
        date: new Date(),
      },
    ],
  },
  {
    id: 6,
    sender: "Игнатьев Р.В",
    recipient: "Сухарев К.К",
    departureDate: new Date(),
    typeOfCargo: "Хрупкий",
    weight: 66,
    currentStatus: ParcelStatusFlow.IMPORT,
    historyStatuses: [
      {
        status: ParcelStatusFlow.DELIVERY_TO_THE_ADDRESSEE,
        date: null,
      },
      {
        status: ParcelStatusFlow.CAME_TO_THE_PLACE_OF_DELIVERY,
        date: null,
      },
      {
        status: ParcelStatusFlow.ARRIVED_AT_THE_CITY_SORTING_CENTER,
        date: null,
      },
      {
        status: ParcelStatusFlow.LEFT_SORTING_CENTER,
        date: null,
      },
      {
        status: ParcelStatusFlow.ARRIVED_AT_THE_SORTING_CENTER,
        date: null,
      },
      {
        status: ParcelStatusFlow.CUSTOMS_CLEARANCE_COMPLETED,
        date: null,
      },
      {
        status: ParcelStatusFlow.RETAINED_BY_CUSTOMS,
        date: null,
      },
      {
        status: ParcelStatusFlow.TRANSFERRED_TO_CUSTOMS,
        date: null,
      },
      {
        status: ParcelStatusFlow.IMPORT,
        date: new Date(),
      },
      {
        status: ParcelStatusFlow.EXPORT,
        date: new Date(),
      },
      {
        status: ParcelStatusFlow.ARRIVAL_IN_MMPO,
        date: new Date(),
      },
      {
        status: ParcelStatusFlow.RECEPTION,
        date: new Date(),
      },
    ],
  },
];
