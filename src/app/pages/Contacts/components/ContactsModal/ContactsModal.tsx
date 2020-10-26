import React, { FC, memo } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { FieldCheckBox } from "../../../../shared/components/Fields/CheckBox";
import { FieldBlock } from "../../../../shared/components/Fields/FieldBlock";
import { FieldText } from "../../../../shared/components/Fields/InputText";
import { ContactModel } from "../TableContacts/model/TableContacts.model";
import { ACTION_HISTORY } from "../../../../store/history/history.model";
import { contactsActions } from "../../../../store/contacts";
import { Modal } from "../../../../shared/components/Modal";
import { PATTERNS } from "../../../../shared/constants";

import "./ContactsModal.scss";

export const ContactsModal: FC<any> = memo(
  ({ initialValues, title, modalClosed }) => {
    const dispatch = useDispatch();

    const { handleSubmit, register, errors } = useForm({
      defaultValues: {
        ...initialValues,
      },
    });

    const onSubmit = (values: any) => {
      const prepareItem: ContactModel = {
        ...initialValues,
        ...values,
      };

      dispatch(
        contactsActions.updateContacts(prepareItem, ACTION_HISTORY.EDIT_CONTACT)
      );
      modalClosed();
    };

    return (
      <Modal
        title={title}
        cbCancel={modalClosed}
        cancelTitle="Отмена"
        cbOk={handleSubmit(onSubmit)}
        okTitle="Сохранить"
        modalClosed={modalClosed}
      >
        <div className="contacts-modal">
          <FieldBlock>
            <FieldText
              title="Имя"
              name="name"
              register={register}
              errors={errors}
            />
          </FieldBlock>
          <FieldBlock>
            <FieldText
              title="Почта"
              name="email"
              register={register}
              errors={errors}
              pattern={{
                value: PATTERNS.EMAIL,
              }}
            />
          </FieldBlock>
          <FieldBlock>
            <FieldText
              title="Сотовый"
              name="phone"
              register={register}
              errors={errors}
            />
          </FieldBlock>
          <FieldBlock>
            <FieldCheckBox title="Архив" name="isArchive" register={register} />
          </FieldBlock>
        </div>
      </Modal>
    );
  }
);
