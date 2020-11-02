import { Action, handleActions } from "redux-actions";

import { ParcelsStateModel } from "./parcel.model";
import { parcelActions } from "./parcel.actions";
import { MockParcel } from "../../mock/mocks";

const initialState: ParcelsStateModel = {
  list: MockParcel,
  isLoading: false,
  error: "",
};

const setLoading = (
  state: ParcelsStateModel,
  action: Action<boolean>
): ParcelsStateModel => ({
  ...state,
  isLoading: action.payload,
});

const setParcel = (
  state: ParcelsStateModel,
  action: Action<any[]>
): ParcelsStateModel => ({
  ...state,
  list: action.payload,
});

const reducerMap: { [key: string]: any } = {
  [parcelActions.SET_PARCEL]: setParcel,
  [parcelActions.SET_LOADING]: setLoading,
};

export const parcelReducer = handleActions(reducerMap, initialState);
