import React, { FC, memo, useMemo, useState } from "react";
import { useDispatch } from "react-redux";

import { BUTTON_TYPE } from "../../../../shared/components/Button/model/ButtonProps.model";
import { ACTION_HISTORY } from "../../../../store/history/history.model";
import { Button } from "../../../../shared/components/Button";
import { contactsActions } from "../../../../store/contacts";
import { ContactsModal } from "../ContactsModal";

import "./MenuSetting.scss";

export const MenuSetting: FC<any> = memo(({ item }) => {
  const [isShowModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(
      contactsActions.removeContact(
        { ...item, isArchive: !item.isArchive },
        ACTION_HISTORY.ARCHIVE_CONTACT
      )
    );
  };

  const handleOpenModal = (action: ACTION_HISTORY) => {
    setShowModal(true);
  };

  const isArchive = useMemo(() => item.isArchive, [item]);
  const archiveButtonTitle = useMemo(
    () => (item.isArchive ? "Восстановить" : "Архивировать"),
    [item]
  );

  return (
    <>
      <div className="menu-setting">
        <Button
          type={BUTTON_TYPE.DEFAULT}
          onClick={() => handleOpenModal(ACTION_HISTORY.EDIT_CONTACT)}
          title="Редактировать"
          visible={isArchive}
        />
        <Button
          type={BUTTON_TYPE.ERROR}
          onClick={handleRemove}
          title={archiveButtonTitle}
        />
      </div>
      {isShowModal && (
        <ContactsModal
          initialValues={item}
          title="Редактирование контакта"
          modalClosed={() => setShowModal(false)}
        />
      )}
    </>
  );
});
