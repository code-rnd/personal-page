import React, { FC, memo } from "react";
import cn from "classnames";

import { ContactModel, TableContactsModel } from "./model/TableContacts.model";
import { MenuSetting } from "../MenuSetting";

import "./TableContacts.scss";

export const TableContacts: FC<TableContactsModel> = memo(
  ({ list, archiveMode }) => {
    const classNameCol = (item: ContactModel) =>
      cn([
        "table-contacts-row",
        { "table-contacts-row__archive": item.isArchive },
      ]);
    return (
      <div className="table-contacts">
        <div className="table-contacts-row table-contacts-row__header">
          <div className="table-contacts-col">id</div>
          <div className="table-contacts-col">Имя</div>
          <div className="table-contacts-col">Почта</div>
          <div className="table-contacts-col">Сотовый</div>
          <div className="table-contacts-col">Настройки</div>
        </div>
        {list.map((item, key) => {
          if (!!archiveMode && !!item.isArchive) {
            return (
              <div className={classNameCol(item)} key={key}>
                <div className="table-contacts-col">{item.id}</div>
                <div className="table-contacts-col">{item.name}</div>
                <div className="table-contacts-col">{item.email}</div>
                <div className="table-contacts-col">{item.phone}</div>
                <div className="flex-end">
                  <MenuSetting item={item} />
                </div>
              </div>
            );
          }

          if (!archiveMode && !item.isArchive) {
            return (
              <div className={classNameCol(item)} key={key}>
                <div className="table-contacts-col">{item.id}</div>
                <div className="table-contacts-col">{item.name}</div>
                <div className="table-contacts-col">{item.email}</div>
                <div className="table-contacts-col">{item.phone}</div>
                <div className="flex-end">
                  <MenuSetting item={item} />
                </div>
              </div>
            );
          }
        })}
      </div>
    );
  }
);
