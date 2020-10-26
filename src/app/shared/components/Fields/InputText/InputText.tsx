import React, { FC, memo, useMemo } from "react";
import cn from "classnames";

import { FieldTextModel } from "./model/FieldText.model";

import "./InputText.scss";

export const FieldText: FC<FieldTextModel> = memo(
  ({
    title,
    name,
    placeholder,
    disable,
    register,
    errors,
    pattern,
    validate,
    ...props
  }) => {
    const classInput = useMemo(
      () => cn(["fieldText", { fieldText__disable: disable }]),
      [disable]
    );

    const classErrors = useMemo(
      () => cn(["fieldText__errors", { fieldText__visible: errors?.[name] }]),
      [errors, name]
    );

    return (
      <div className={classInput}>
        <label className="fieldText-title">{title}</label>
        <input
          type="text"
          name={name}
          placeholder={placeholder}
          ref={register({
            required: "Required",
            pattern,
            validate,
          })}
          {...props}
        />
        <div className={classErrors}>{title}*</div>
      </div>
    );
  }
);
