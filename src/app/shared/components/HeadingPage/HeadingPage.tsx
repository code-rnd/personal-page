import React, { FC, memo } from "react";

import { HeadingpageModel } from "./model/Headingpage.model";

import "./HeadingPage.scss";

export const HeadingPage: FC<HeadingpageModel> = memo(
  ({ titleContent, buttonContent }) => {
    return (
      <div className="heading-page flex-center">
        <div className="heading-page-title">{titleContent}</div>
        <div className="heading-page-buttons">{buttonContent}</div>
      </div>
    );
  }
);
