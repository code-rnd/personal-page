import React from "react";

import { Authorization } from "../pages/Authorization";
import { RouteModel } from "./routing.model";
import { Contacts } from "../pages/Contacts";
import { RouteUrls } from "./routing.enums";
import { History } from "../pages/History";

export const Routes: RouteModel[] = [
  {
    component: () => <History />,
    path: `${RouteUrls.HISTORY}`,
    exact: false,
  },
  {
    component: () => <Contacts />,
    path: `${RouteUrls.CONTACTS}`,
    exact: false,
  },
  {
    component: () => <Authorization />,
    path: `${RouteUrls.LOGIN}`,
    exact: false,
  },
];
