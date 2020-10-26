import React, { FC, memo } from "react";
import moment from "moment";

import { HistoryItemModel } from "../../../../store/history/history.model";
import { DATE_FORMAT } from "../../../../shared/constants";

import "./TableHistory.scss";

export const TableHistory: FC<{ list: HistoryItemModel[] }> = memo(
  ({ list }) => {
    return (
      <div className="table-history">
        <div className="table-history-row table-history-row__header">
          <div className="table-history-col">Пользователь</div>
          <div className="table-history-col">Дата действия</div>
          <div className="table-history-col">Действие</div>
        </div>
        {list.map(({ user, date, action }, key) => (
          <div className="table-history-row" key={key}>
            <div className="table-history-col">{user.name.firstName}</div>
            <div className="table-history-col">
              {moment(date).format(DATE_FORMAT.DB)}
            </div>
            <div className="table-history-col">{action}</div>
          </div>
        ))}
      </div>
    );
  }
);
