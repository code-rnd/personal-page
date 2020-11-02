import React, { FC, memo, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { BUTTON_TYPE } from "../../shared/components/Button/model/ButtonProps.model";
import { getPageControl, pageControlActions } from "../../store/pagecontrol";
import { HeadingPage } from "../../shared/components/HeadingPage";
import { Button } from "../../shared/components/Button";
import { Body } from "../../shared/components/Body";
import { Page } from "../../routing/routing.enums";
import { getParcel } from "../../store/parcel";
import { BodyPage } from "../../shared/components/BodyPage";
import { TableParcels } from "./components/TableParcels";

export const Parcels: FC = memo(() => {
  const { parcels } = useSelector(getPageControl);

  const { isLoading, list } = useSelector(getParcel);
  const dispatch = useDispatch();

  const [isShowTable, setShowTable] = useState(parcels);

  const title = useMemo(() => `${Page.PARCELS} (${list.length})`, [list]);

  useEffect(() => {
    dispatch(pageControlActions.updateControl(isShowTable));
  }, [dispatch, isShowTable]);

  return (
    <Body isLoading={isLoading}>
      <HeadingPage
        titleContent={title}
        buttonContent={
          <>
            <Button
              type={BUTTON_TYPE.DEFAULT}
              onClick={() => setShowTable(!isShowTable)}
              title={isShowTable ? `Свернуть список` : `Показать список`}
            />
          </>
        }
      />
      <BodyPage>
        {!!list.length && isShowTable && <TableParcels list={list} />}
      </BodyPage>
    </Body>
  );
});
