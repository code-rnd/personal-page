export interface ParcelHistoryStatuses {
  status: ParcelStatusFlow;
  date: Date | null;
}

export interface ParcelModel {
  id: number;
  sender: string;
  recipient: string;
  typeOfCargo: string;
  departureDate: Date;
  weight: number;
  currentStatus: ParcelStatusFlow;
  historyStatuses: ParcelHistoryStatuses[];
}

export interface ParcelsStateModel {
  list: ParcelModel[];
  isLoading: boolean;
  error: string;
}

export enum ParcelStatusFlow {
  RECEPTION = "Прием",
  ARRIVAL_IN_MMPO = "Прибытие в ММПО",
  EXPORT = "Экспорт",
  IMPORT = "Импорт",
  TRANSFERRED_TO_CUSTOMS = "Передано таможне",
  RETAINED_BY_CUSTOMS = "Задержано таможней",
  CUSTOMS_CLEARANCE_COMPLETED = "Таможенное оформ. завершено",
  ARRIVED_AT_THE_SORTING_CENTER = "Прибыло в сорт. центр",
  LEFT_SORTING_CENTER = "Покинуло сорт. центр",
  ARRIVED_AT_THE_CITY_SORTING_CENTER = "Прибыло в сорт. центр города",
  CAME_TO_THE_PLACE_OF_DELIVERY = "Прибыло в место вручения",
  DELIVERY_TO_THE_ADDRESSEE = "Вручен",
}
