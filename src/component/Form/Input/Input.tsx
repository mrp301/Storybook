import React, { forwardRef } from "react";
import { css } from "@emotion/react";

const styles = {
  label: css`
    text-align: right;
    font-size: 14px;
    font-weight: bold;
    line-height: 1.5;
  `,
  input: css`
    margin-left: 12px;
    padding: 8px;
    font-size: 14px;
    line-height: 1.5;
  `,
};

type Props = {
  type: "number" | "text";
  label: string;
} & Omit<JSX.IntrinsicElements["input"], "type">;

/* eslint-disable react/display-name */
export const Input = forwardRef<HTMLInputElement, Props>(
  ({ label, ...props }, ref) => {
    return (
      <>
        <label css={styles.label}>{label}</label>
        <input css={styles.input} {...props} ref={ref} />
      </>
    );
  }
);
