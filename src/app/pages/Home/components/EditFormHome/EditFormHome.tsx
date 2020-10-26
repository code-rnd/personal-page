import React, { FC, memo } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { FieldBlock } from "../../../../shared/components/Fields/FieldBlock";
import { FieldText } from "../../../../shared/components/Fields/InputText";
import {
  BUTTON_SIZE,
  BUTTON_TYPE,
} from "../../../../shared/components/Button/model/ButtonProps.model";
import usercardicon from "../../../../../assets/user-icons/user-card.svg";
import phoneicon from "../../../../../assets/user-icons/phone-icon.svg";
import {
  authorizationActions,
  getAuthorization,
} from "../../../../store/authorization";
import mailicon from "../../../../../assets/user-icons/mail-icon.svg";
import { PATTERNS } from "../../../../shared/constants/input.pattern";
import { Button } from "../../../../shared/components/Button";
import { EditFormHomeModel } from "./EditFormHome.model";
import { prepareGet, prepareSet } from "../../Home.utils";

import "./EditFormHome.scss";

export const EditFormHome: FC<EditFormHomeModel> = memo(({ closedForm }) => {
  const { user } = useSelector(getAuthorization);
  const disaptch = useDispatch();
  const { register, handleSubmit, errors } = useForm({
    defaultValues: prepareGet(user),
  });

  const onSubmit = (values: any) => {
    disaptch(authorizationActions.updateUserInfo(prepareSet(values)));
    closedForm();
  };

  return (
    <div className="edit-form-home">
      <div className="edit-form-home grid-row">
        <FieldBlock icon={usercardicon}>
          <FieldText
            title="Имя и фамилия"
            name="name"
            placeholder="Укажите ваши имя и фамилию"
            register={register}
            errors={errors}
          />
        </FieldBlock>
        <FieldBlock icon={mailicon}>
          <FieldText
            title="E-mail"
            name="email"
            placeholder="Укажите ваш e-mail"
            register={register}
            errors={errors}
            pattern={{
              value: PATTERNS.EMAIL,
            }}
          />
        </FieldBlock>
        <FieldBlock icon={phoneicon}>
          <FieldText
            title="Номер телефона"
            name="phone"
            placeholder="Укажите ваш номер телефона"
            register={register}
            errors={errors}
          />
        </FieldBlock>
      </div>
      <div className="flex-center">
        <Button
          type={BUTTON_TYPE.SUCCESS}
          size={BUTTON_SIZE.NORMAL}
          onClick={handleSubmit(onSubmit)}
          title="Сохранить"
        />
      </div>
    </div>
  );
});
