import React, { FC, memo, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { BUTTON_TYPE } from "../../shared/components/Button/model/ButtonProps.model";
import { ACTION_LOGIN } from "../../store/authorization/authorization.model";
import { HeadingPage } from "../../shared/components/HeadingPage";
import { BodyPage } from "../../shared/components/BodyPage";
import { Button } from "../../shared/components/Button";
import { Body } from "../../shared/components/Body";
import {
  authorizationActions,
  getAuthorization,
} from "../../store/authorization";
import { SIZE_VERSION } from "../../shared/components/UserBlock/UserBlock.const";
import { ACTION_HISTORY } from "../../store/history/history.model";
import { UserBlock } from "../../shared/components/UserBlock";
import { EditFormHome } from "./components/EditFormHome";
import { TableHome } from "./components/TableHome";

import edit_icon from "../../../assets/button-icons/edit-icon.svg";
import exit_icon from "../../../assets/button-icons/exit-icon.svg";

export const Home: FC = memo(() => {
  const { user, isLoading } = useSelector(getAuthorization);
  const dispatch = useDispatch();
  const [isEditMode, setEditMode] = useState(false);

  const handleLogOut = useCallback(() => {
    dispatch(authorizationActions.updateLogin(user, ACTION_LOGIN.LOGIN_OUT));
  }, [dispatch, user]);

  return (
    <Body isLoading={isLoading}>
      <HeadingPage
        titleContent={<UserBlock version={SIZE_VERSION.MEDIUM} />}
        buttonContent={
          <>
            <Button
              type={BUTTON_TYPE.NORMAL}
              onClick={() => setEditMode(!isEditMode)}
              title={isEditMode ? "Отменить" : "Редактировать"}
              loading={isLoading}
              icon={<img src={edit_icon} alt="режим редактирования" />}
            />
            <Button
              type={BUTTON_TYPE.ERROR}
              onClick={handleLogOut}
              title={ACTION_HISTORY.LOGIN_OUT}
              loading={isLoading}
              icon={<img src={exit_icon} alt="выход из кабинета" />}
            />
          </>
        }
      />
      <BodyPage>
        {!isEditMode && <TableHome user={user} />}
        {!!isEditMode && <EditFormHome closedForm={() => setEditMode(false)} />}
      </BodyPage>
    </Body>
  );
});
