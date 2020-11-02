import React, { FC, memo, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import cn from "classnames";

import verticalline from "../../../../assets/header-menu/vertical_line.svg";
import { Page, RouteUrls } from "../../../routing/routing.enums";
import { BUTTON_TYPE } from "../Button/model/ButtonProps.model";
import { getRoute } from "../../../store/route/route.selector";
import { SIZE_VERSION } from "../UserBlock/UserBlock.const";
import { routeActions } from "../../../store/route";
import { Notification } from "../Notification";
import { BreadСrumbs } from "../BreadСrumbs";
import { UserBlock } from "../UserBlock";
import { Button } from "../Button";

import "./Header.scss";

export const Header: FC = memo(() => {
  const { route } = useSelector(getRoute);

  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = useCallback(
    (url: RouteUrls) => {
      dispatch(routeActions.setCurrentRoute(url as RouteUrls));
    },
    [dispatch]
  );

  useEffect(() => {
    history.push(route);
  }, [history, route]);

  return (
    <div className="page-header">
      <div className="page-header-title">
        <Notification />
        <img
          className="page-header-title-verticalline"
          src={verticalline}
          alt="белая вертикальная линия"
        />
        <UserBlock version={SIZE_VERSION.LOW} />
      </div>
      <div className="page-header-navbar">
        <BreadСrumbs />
        <div className="flex-end">
          <Button
            type={BUTTON_TYPE.NORMAL}
            onClick={() => handleClick(RouteUrls.HOME)}
            title={Page.HOME}
            className={cn([{ button__active: route === RouteUrls.HOME }])}
          />
          <Button
            type={BUTTON_TYPE.NORMAL}
            onClick={() => handleClick(RouteUrls.CONTACTS)}
            title={Page.CONTACTS}
            className={cn([{ button__active: route === RouteUrls.CONTACTS }])}
          />
          <Button
            type={BUTTON_TYPE.NORMAL}
            onClick={() => handleClick(RouteUrls.PARCELS)}
            title={Page.PARCELS}
            className={cn([{ button__active: route === RouteUrls.PARCELS }])}
          />
          <Button
            type={BUTTON_TYPE.NORMAL}
            onClick={() => handleClick(RouteUrls.HISTORY)}
            title={Page.HISTORY}
            className={cn([{ button__active: route === RouteUrls.HISTORY }])}
          />
        </div>
      </div>
    </div>
  );
});
