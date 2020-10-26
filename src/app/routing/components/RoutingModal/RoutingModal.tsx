import React, { FC, memo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getNotifications,
  notificationsActions,
} from "../../../store/notifications";
import { Modal } from "../../../shared/components/Modal";

import "./RoutingModal.scss";

export const RoutingModal: FC = memo(() => {
  const { content, isShow } = useSelector(getNotifications);
  const dispatch = useDispatch();

  const handleClosed = useCallback(() => {
    dispatch(notificationsActions.setShow(false));
  }, [dispatch]);

  return (
    <>
      {isShow && (
        <Modal
          modalClosed={handleClosed}
          title={""}
          cbOk={handleClosed}
          okTitle="Хорошо"
        >
          {content}
        </Modal>
      )}
    </>
  );
});
