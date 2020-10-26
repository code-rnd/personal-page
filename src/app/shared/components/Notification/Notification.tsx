import React, { FC, memo, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import cn from "classnames";

import notification_icon from "../../../../assets/notification-icons/notification-icon.svg";
import { ACTION_HISTORY } from "../../../store/history/history.model";
import { NotificationModel } from "./model/Notification.model";
import { getHistory } from "../../../store/history";

import "./Notification.scss";

export const Notification: FC<NotificationModel> = memo(() => {
  const { lastItem } = useSelector(getHistory);
  const { action } = lastItem;

  const [isShowToolTip, setShowToolTip] = useState(false);

  const handleClick = () => {
    setShowToolTip(!isShowToolTip);
  };

  const classesToolTip = useMemo(
    () =>
      cn("notification-tooltip", {
        "notification-tooltip__hidden": !isShowToolTip,
      }),
    [isShowToolTip]
  );

  const classesOvalshape = useMemo(
    () =>
      cn([
        "notification-ovalshape",
        {
          "notification-ovalshape__success":
            action === ACTION_HISTORY.EDIT_CONTACT ||
            action === ACTION_HISTORY.LOGIN ||
            action === ACTION_HISTORY.LOGIN_OUT ||
            action === ACTION_HISTORY.ADD_CONTACT ||
            action === ACTION_HISTORY.UPDATE_USER_INFO,
        },
        {
          "notification-ovalshape__warning":
            action === ACTION_HISTORY.ARCHIVE_CONTACT
        },
      ]),
    [action]
  );

  return (
    <div className="notification" onClick={handleClick}>
      <img src={notification_icon} alt="изображение колокольчика" />
      <div className={classesOvalshape} />
      <div className={classesToolTip}>история: {action}</div>
    </div>
  );
});
