import React, { FC, memo, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { BUTTON_TYPE } from "../../shared/components/Button/model/ButtonProps.model";
import { getPageControl, pageControlActions } from "../../store/pagecontrol";
import { getHistory } from "../../store/history/history.selectors";
import { HeadingPage } from "../../shared/components/HeadingPage";
import { BodyPage } from "../../shared/components/BodyPage";
import { TableHistory } from "./components/TableHistory";
import { Button } from "../../shared/components/Button";
import { Body } from "../../shared/components/Body";
import { Page } from "../../routing/routing.enums";

export const History: FC = memo(() => {
  const { list } = useSelector(getHistory);
  const { history } = useSelector(getPageControl);

  const [isShowTable, setShowTable] = useState(history);
  const buttonTitle = useMemo(
    () => (isShowTable ? "Свернуть историю" : "Показать историю"),
    [isShowTable]
  );

  const handleClick = () => {
    setShowTable(!isShowTable);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageControlActions.updateControl(isShowTable));
  }, [dispatch, isShowTable]);

  const title = useMemo(
    () => `${Page.HISTORY} (кол-во действий ${list.length})`,
    [list]
  );

  return (
    <Body>
      <HeadingPage
        titleContent={title}
        buttonContent={
          <Button
            type={BUTTON_TYPE.DEFAULT}
            onClick={handleClick}
            title={buttonTitle}
          />
        }
      />
      {isShowTable && (
        <BodyPage>
          <TableHistory list={list} />
        </BodyPage>
      )}
    </Body>
  );
});
