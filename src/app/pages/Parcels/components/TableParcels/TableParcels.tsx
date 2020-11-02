import React, { FC, memo, useMemo, useState } from "react";

import { BUTTON_TYPE } from "../../../../shared/components/Button/model/ButtonProps.model";
import { TableParcelItem } from "./components/TableParcelItem";
import { TableParcelsModel } from "./model/TableParcels.model";
import { Button } from "../../../../shared/components/Button";

import "./TableParcels.scss";

export const TableParcels: FC<TableParcelsModel> = memo(({ list }) => {
  const [isShowAll, setShowAll] = useState(false);

  const titleButton = useMemo(
    () => (isShowAll ? "Свернуть все" : "Развернуть все"),
    [isShowAll]
  );

  return (
    <div className="table-parcels">
      <div className="table-parcels-row table-parcels-row__header">
        <div className="table-parcels-col">id</div>
        <div className="table-parcels-col">Отправитель</div>
        <div className="table-parcels-col">Получатель</div>
        <div className="table-parcels-col">Тип груза</div>
        <div className="table-parcels-col">Дата отправ.</div>
        <div className="table-parcels-col">Вес</div>
        <div className="table-parcels-col">Статус</div>
        <div className="table-parcels-col flex-end">
          <Button
            type={BUTTON_TYPE.DEFAULT}
            onClick={() => setShowAll((isShowAll) => !isShowAll)}
            title={titleButton}
          />
        </div>
      </div>
      {list.map((item, key) => (
        <TableParcelItem {...item} isShowAll={isShowAll} key={key} />
      ))}
    </div>
  );
});
