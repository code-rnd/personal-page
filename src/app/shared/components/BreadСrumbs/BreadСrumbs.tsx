import React, { FC, memo, useMemo } from "react";
import { useSelector } from "react-redux";

import { Page, RouteUrls } from "../../../routing/routing.enums";
import { getRoute } from "../../../store/route/route.selector";

import "./BreadСrumbs.scss";

export const BreadСrumbs: FC = memo(() => {
  const { route } = useSelector(getRoute);

  const currentRoute = useMemo(() => {
    switch (route) {
      case RouteUrls.CONTACTS:
        return Page.CONTACTS;

      case RouteUrls.HISTORY:
        return Page.HISTORY;

      case RouteUrls.HOME:
        return Page.HISTORY;

      default:
        return Page.HISTORY;
    }
  }, [route]);

  return (
    <div className="bread-crumbs">
      <div className="bread-crumbs-header">{currentRoute}</div>
      <div className="bread-crumbs-body">
        Главная{route !== RouteUrls.HOME ? ` / ${currentRoute}` : ``}
      </div>
    </div>
  );
});
