import React, { FC, memo } from "react";

import { BUTTON_TYPE } from "../Button/model/ButtonProps.model";
import { ModalModel } from "./model/Modal.model";
import { Button } from "../Button";

import "./Modal.scss";

export const Modal: FC<ModalModel> = memo(
  ({
    modalClosed,
    title,
    cbCancel,
    cancelTitle = "Cancel",
    cbOk,
    okTitle = "Ok",
    children,
    backDrop = false,
  }) => {
    const handlClick = () => {
      backDrop && modalClosed && modalClosed();
    };

    const handleSubmit = () => {
      cbOk && cbOk();
    };

    const handleCancel = () => {
      cbCancel && cbCancel();
    };

    return (
      <div className="modal-backdrop" onClick={handlClick}>
        <div
          className="modal-window"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="modal-window-title">{title}</div>
          <div className="modal-window-body">{children}</div>
          <div className="modal-window-footer">
            {!!cbOk && !!okTitle && (
              <Button
                type={BUTTON_TYPE.SUCCESS}
                onClick={handleSubmit}
                title={okTitle}
              />
            )}
            {!!cbCancel && !!cancelTitle && (
              <Button
                type={BUTTON_TYPE.ERROR}
                onClick={handleCancel}
                title={cancelTitle}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
);
