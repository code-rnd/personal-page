import { Action, ActionFunction1, createAction } from "redux-actions";
import { Dispatch } from "redux";

class NotificationsActions {
  readonly prefix: string = "NOTIFICATION";
  readonly SET_CONTENT: string = `${this.prefix}.SET_CONTENT`;
  readonly SET_SHOW: string = `${this.prefix}.SET_SHOW`;

  setContent: ActionFunction1<any, Action<any>> = createAction(
    this.SET_CONTENT
  );
  setShow: ActionFunction1<boolean, Action<boolean>> = createAction(
    this.SET_SHOW
  );

  updateContent: any = (message: string) => async (dispatch: Dispatch) => {
    try {
      dispatch(this.setContent(message));
      dispatch(this.setShow(true));
    } catch (e) {
      console.log("Ошибка в методе updateContent: ", e);
    }
  };
}

export const notificationsActions = new NotificationsActions();
