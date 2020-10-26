import React, { FC, memo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import { authorizationActions } from "../../store/authorization/authorization.actions";
import { getAuthorization } from "../../store/authorization/authorization.selectors";
import { BUTTON_TYPE } from "../../shared/components/Button/model/ButtonProps.model";
import { ACTION_LOGIN } from "../../store/authorization/authorization.model";
import { FieldText } from "../../shared/components/Fields/InputText";
import { FieldBlock } from "../../shared/components/Fields/FieldBlock";
import { ACTION_HISTORY } from "../../store/history/history.model";
import { Button } from "../../shared/components/Button";

import "./Authorization.scss";

export const Authorization: FC = memo(() => {
  const { isLoading } = useSelector(getAuthorization);
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();

  const onSubmit = useCallback(
    (values: any) => {
      dispatch(
        authorizationActions.updateLogin(values.name, ACTION_LOGIN.LOGIN)
      );
    },
    [dispatch]
  );

  return (
    <div className="page-authorization">
      <div className="page-authorization-body">
        <div className="authorization-form">
          <FieldBlock>
            <FieldText
              name="name"
              title="Имя пользователя"
              placeholder="Например, Филип"
              register={register}
              disable={isLoading}
              errors={errors}
            />
          </FieldBlock>
          <Button
            type={BUTTON_TYPE.DEFAULT}
            onClick={handleSubmit(onSubmit)}
            title={ACTION_HISTORY.LOGIN}
            style={{
              margin: 0,
              width: "100%",
            }}
            loading={isLoading}
          />
        </div>
      </div>
    </div>
  );
});
