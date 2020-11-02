import React, { FC, memo, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { BUTTON_TYPE } from "../../shared/components/Button/model/ButtonProps.model";
import { getPageControl, pageControlActions } from "../../store/pagecontrol";
import { HeadingPage } from "../../shared/components/HeadingPage";
import { BodyPage } from "../../shared/components/BodyPage";
import { ContactsModal } from "./components/ContactsModal";
import { TableContacts } from "./components/TableContacts";
import { Button } from "../../shared/components/Button";
import { Body } from "../../shared/components/Body";
import { Page } from "../../routing/routing.enums";
import { getContacts } from "../../store/contacts";

import add_contact_icon from "../../../assets/button-icons/add-contact-icon.svg";
import archive_icon from "../../../assets/button-icons/archive-icon.svg";

export const Contacts: FC = memo(() => {
  const { contacts } = useSelector(getPageControl);
  const { list, isLoading } = useSelector(getContacts);
  const dispatch = useDispatch();

  const [isShowTable, setShowTable] = useState(contacts);
  const [isShowModal, setShowModal] = useState(false);
  const [isArchiveMode, setArchiveMode] = useState(false);

  const titleHeadingPage = useMemo(
    () =>
      `${Page.CONTACTS} (${
        isArchiveMode ? "архивный список" : "активный список"
      })`,
    [isArchiveMode]
  );

  useEffect(() => {
    dispatch(pageControlActions.updateControl(isShowTable));
  }, [dispatch, isShowTable]);

  return (
    <Body isLoading={isLoading}>
      <HeadingPage
        titleContent={titleHeadingPage}
        buttonContent={
          <>
            <Button
              type={BUTTON_TYPE.NORMAL}
              onClick={() => setArchiveMode(!isArchiveMode)}
              title={isArchiveMode ? "Выйти из архива" : "Перейти в архив"}
              disable={!isShowTable}
              icon={
                <img
                  src={archive_icon}
                  alt={isArchiveMode ? "Выйти из архива" : "Перейти в архив"}
                />
              }
            />
            <Button
              type={BUTTON_TYPE.SUCCESS}
              onClick={() => setShowModal(true)}
              title="Добавить контакт"
              disable={!isShowTable}
              icon={<img src={add_contact_icon} alt="Добавить контакт" />}
            />
            <Button
              type={BUTTON_TYPE.DEFAULT}
              onClick={() => setShowTable(!isShowTable)}
              title={isShowTable ? "Свернуть контакты" : "Показать контакты"}
            />
          </>
        }
      />
      {isShowTable && !!list.length && (
        <BodyPage>
          <TableContacts list={list} archiveMode={isArchiveMode} />
        </BodyPage>
      )}

      {isShowModal && (
        <ContactsModal
          title="Добавить контакт"
          modalClosed={() => setShowModal(false)}
        />
      )}
    </Body>
  );
});
