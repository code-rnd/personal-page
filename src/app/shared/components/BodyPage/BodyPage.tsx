import React, { FC, memo } from "react";

import "./BodyPage.scss";

export const BodyPage: FC = memo(({ children }) => {
  return <div className="body-page">{children}</div>;
});
