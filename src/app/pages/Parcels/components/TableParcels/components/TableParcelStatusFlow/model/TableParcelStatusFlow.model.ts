import { ParcelHistoryStatuses } from "../../../../../../../store/parcel/parcel.model";

export interface TableParcelStatusFlowModel {
  isShowStatusFlow: boolean;
  historyStatuses: ParcelHistoryStatuses[];
  departureDate: Date;
}
