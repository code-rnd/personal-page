import { Action, ActionFunction1, createAction } from "redux-actions";
import { Dispatch } from "redux";

import { historyActions } from "../history";
import { ACTION_HISTORY } from "../history/history.model";

class Parcel {
  readonly prefix: string = "PARCEL";
  readonly SET_LOADING: string = `${this.prefix}.SET_LOADING`;
  readonly SET_PARCEL: string = `${this.prefix}.SET_PARCEL`;

  setLoading: ActionFunction1<boolean, Action<boolean>> = createAction(
    this.SET_LOADING
  );
  setParcel: ActionFunction1<any, Action<any>> = createAction(this.SET_PARCEL);

  updateParcel: any = (obj: any) => async (dispatch: Dispatch) => {
    dispatch(this.setLoading(true));
    dispatch(this.setParcel(obj));

    dispatch(historyActions.updateHistory(ACTION_HISTORY.PARCEL_UPDATE));
    try {
    } catch (error) {
      console.log("Ошибка в методе updateParcel: ", error);
    } finally {
      dispatch(this.setLoading(false));
    }
  };
}

export const parcelActions = new Parcel();
