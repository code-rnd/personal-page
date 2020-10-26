import React, { FC, memo } from "react";

import phone from "../../../../../assets/user-icons/phone-icon.svg";
import mail from "../../../../../assets/user-icons/mail-icon.svg";
import { TableHomeModel } from "./model/TableHome.model";
import { infoContent } from "./TableHome.utils";

import "./TableHome.scss";

export const TableHome: FC<TableHomeModel> = memo(({ user }) => {
  return (
    <div className="table-home">
      <div className="table-home-row">
        <div className="table-home-col">
          <img src={mail} alt="символ собаки" />
        </div>
        <div className="table-home-col">{infoContent(user.email, "почту")}</div>
      </div>
      <div className="table-home-row">
        <div className="table-home-col">
          <img src={phone} alt="символ телефона" />
        </div>
        <div className="table-home-col">
          {infoContent(user.phone, "номер телефона")}
        </div>
      </div>
    </div>
  );
});
