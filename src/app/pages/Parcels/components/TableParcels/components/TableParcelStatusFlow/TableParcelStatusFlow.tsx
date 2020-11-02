import React, { FC, memo, useMemo } from "react";
import cn from "classnames";
import moment from "moment";

import { TableParcelStatusFlowModel } from "./model/TableParcelStatusFlow.model";
import { DATE_FORMAT } from "../../../../../../shared/constants";

import "./TableParcelStatusFlow.scss";

export const TableParcelStatusFlow: FC<TableParcelStatusFlowModel> = memo(
  ({ isShowStatusFlow, historyStatuses, departureDate }) => {
    const classesHistoryStatuses = useMemo(
      () =>
        cn([
          { "table-parcels-row__history-statuses": isShowStatusFlow },
          { "table-parcels-row__history-statuses__hidden": !isShowStatusFlow },
        ]),
      [isShowStatusFlow]
    );

    return (
      <div className={classesHistoryStatuses}>
        <div className="table-statuses-row table-statuses-row-header">
          <div className="table-statuses-col">Состояние</div>
          <div className="table-statuses-col">Дата</div>
          <div className="table-statuses-col">Статус</div>
        </div>
        {historyStatuses.map(({ status, date }, key) => {
          const classesStatus = `table-statuses-row ${cn([
            { "table-statuses-row__done": !!date },
          ])}`;

          const contentDate = !!date
            ? moment(departureDate).format(DATE_FORMAT.DB)
            : "ожидается";

          const contentCheckPoint = !!date ? "выполнено" : "ожидается";

          return (
            <div className={classesStatus} key={key}>
              <div className="table-statuses-col">{status}</div>
              <div className="table-statuses-col">{contentDate}</div>
              <div className="table-statuses-col">{contentCheckPoint}</div>
            </div>
          );
        })}
      </div>
    );
  }
);
