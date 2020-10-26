import React, { FC, memo, useMemo } from "react";
import cn from "classnames";

import {
  BUTTON_SIZE,
  BUTTON_TYPE,
  ButtonPropsModel,
} from "./model/ButtonProps.model";

import "./Button.scss";

export const Button: FC<ButtonPropsModel> = memo(
  ({
    onClick,
    title,
    type,
    className,
    disable,
    visible,
    loading,
    style,
    size,
  }) => {
    const styledSize = useMemo(() => {
      switch (size) {
        case BUTTON_SIZE.NORMAL:
          return { width: "212px" };
        default:
          return {};
      }
    }, [size]);

    return (
      <>
        <div
          className={cn([
            "button",
            className,
            { button__success: type === BUTTON_TYPE.SUCCESS },
            { button__default: type === BUTTON_TYPE.DEFAULT },
            { button__normal: type === BUTTON_TYPE.NORMAL },
            { button__error: type === BUTTON_TYPE.ERROR },
            { button__disabled: disable },
            { button__visible: visible },
            { button__loading: loading },
          ])}
          onClick={onClick}
          style={{ ...style, ...styledSize }}
        >
          {title}
          {loading && <div className="spinner" />}
        </div>
      </>
    );
  }
);
