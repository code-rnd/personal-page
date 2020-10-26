import React, { FC, memo, useMemo } from "react";
import { useSelector } from "react-redux";
import cx from "classnames";

import usericon from "../../../../assets/user-icons/user-avatar.svg";
import { getAbbreviatedName, getFullName } from "./UserBlock.utils";
import { getAuthorization } from "../../../store/authorization";
import { UserBlockModel } from "./model/UserBlock.model";
import { SIZE_VERSION } from "./UserBlock.const";

import "./UserBlock.scss";

export const UserBlock: FC<UserBlockModel> = memo(({ version }) => {
  const { name } = useSelector(getAuthorization).user;

  const classBlock = useMemo(
    () =>
      cx(["user-block", { "user-block__mini": version === SIZE_VERSION.LOW }]),
    [version]
  );

  const titleContent = useMemo(() => {
    switch (version) {
      case SIZE_VERSION.LOW:
        return getAbbreviatedName(name);
      case SIZE_VERSION.MEDIUM:
        return getFullName(name);

      default:
        return "";
    }
  }, [version, name]);

  return (
    <div className={classBlock}>
      <div className="user-block-avatar">
        <img src={usericon} alt="изобржание аватара пользователя" />
      </div>
      <div className="user-block-title">{titleContent}</div>
    </div>
  );
});
