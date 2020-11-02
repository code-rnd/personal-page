import React, { memo, useEffect, useMemo } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import { getAuthorization } from "../store/authorization/authorization.selectors";
import { RoutingModal } from "./components/RoutingModal";
import { NotFound } from "../pages/NotFound/NotFound";
import { Header } from "../shared/components/Header";
import { RouteUrls } from "./routing.enums";
import { Routes } from "./routing.const";
import { Home } from "../pages/Home";

export const Routing = memo(() => {
  const { firstName } = useSelector(getAuthorization).user.name;

  const history = useHistory();
  const isLogin = useMemo(() => !!firstName, [firstName]);

  useEffect(() => {
    if (!isLogin) {
      history.push(RouteUrls.LOGIN);
    }
  }, [history, isLogin]);

  return (
    <>
      {!!isLogin && <Header />}
      <Switch>
        <Route exact path="/" component={Home} />
        {Routes.map((route, key) => {
          const { path, component, exact } = route;
          return (
            <Route exact={exact} path={path} component={component} key={key} />
          );
        })}
        <NotFound />
      </Switch>
      <RoutingModal />
    </>
  );
});
