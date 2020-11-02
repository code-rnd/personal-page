import React, { FC, memo, useEffect, useMemo, useState } from "react";
import moment from "moment";
import cn from "classnames";

import { BUTTON_TYPE } from "../../../../../../shared/components/Button/model/ButtonProps.model";
import { Button } from "../../../../../../shared/components/Button";
import { DATE_FORMAT } from "../../../../../../shared/constants";
import {
  ParcelModel,
  ParcelStatusFlow,
} from "../../../../../../store/parcel/parcel.model";
import { TableParcelStatusFlow } from "../TableParcelStatusFlow";

import "./TableParcelItem.scss";

export interface TableParcelItem extends ParcelModel {
  isShowAll: boolean;
}

export const TableParcelItem: FC<TableParcelItem> = memo(
  ({
    id,
    sender,
    recipient,
    typeOfCargo,
    departureDate,
    weight,
    currentStatus,
    historyStatuses,
    isShowAll,
  }) => {
    const [isShowStatusFlow, setShowStatusFlow] = useState(false);
    useEffect(() => setShowStatusFlow(isShowAll), [isShowAll]);

    const titleButton = useMemo(
      () => (isShowStatusFlow ? "Свернуть" : "Подробнее"),
      [isShowStatusFlow]
    );

    const classesItem = useMemo(
      () =>
        cn([
          "table-parcels-row",
          {
            "table-parcels-row__complete":
              currentStatus === ParcelStatusFlow.DELIVERY_TO_THE_ADDRESSEE,
          },
        ]),
      [currentStatus]
    );

    return (
      <>
        <div className={classesItem}>
          <div className="table-parcels-col">{id}</div>
          <div className="table-parcels-col">{sender}</div>
          <div className="table-parcels-col">{recipient}</div>
          <div className="table-parcels-col">{typeOfCargo}</div>
          <div className="table-parcels-col">
            {moment(departureDate).format(DATE_FORMAT.DDMMYYYY)}
          </div>
          <div className="table-parcels-col">{`${weight} кг`}</div>
          <div className="table-parcels-col table-parcels-col-status">
            {currentStatus}
          </div>
          <div className="table-parcels-col flex-end">
            <Button
              type={BUTTON_TYPE.DEFAULT}
              onClick={() =>
                setShowStatusFlow((isShowStatusFlow) => !isShowStatusFlow)
              }
              title={titleButton}
            />
          </div>
        </div>
        <TableParcelStatusFlow
          isShowStatusFlow={isShowStatusFlow}
          historyStatuses={historyStatuses}
          departureDate={departureDate}
        />
      </>
    );
  }
);
