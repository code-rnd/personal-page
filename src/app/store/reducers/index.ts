import { combineReducers } from "redux";

import { historyReducer as history } from "../history";
import { authorizationReducer as authorization } from "../authorization";
import { routeReducer as route } from "../route";
import { pagecontrolReducer as pagecontrol } from "../pagecontrol";
import { contactsReducer as contacts } from "../contacts";
import { notificationsReducer as notifications } from "../notifications";

export const reducers = combineReducers({
  history,
  authorization,
  route,
  pagecontrol,
  contacts,
  notifications,
});
