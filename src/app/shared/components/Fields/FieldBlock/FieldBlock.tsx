import React, { FC, memo, useMemo } from "react";

import { FieldBlockModel } from "./FieldBlock.model";

import "./FieldBlock.scss";

export const FieldBlock: FC<FieldBlockModel> = memo(({ icon, children }) => {
  const content = useMemo(
    () =>
      !!icon ? (
        <>
          <img src={icon} alt="иконка" />
          {children}
        </>
      ) : (
        <>{children}</>
      ),
    [icon, children]
  );

  return <div className="field-block">{content}</div>;
});
