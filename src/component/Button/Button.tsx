import React, { FC } from "react";
import { css } from "@emotion/react";

const styles = {
  container: css`
    min-width: 120px;
    border: none;
    padding: 8px 12px;
    cursor: pointer;
    font-weight: bold;
    font-size: 16px;
    color: #fff;
    line-height: 1.5;
    background-color: rgb(84, 84, 214);
    border-radius: 4px;
  `,
};

const buttonType = (type: Priority) => css`
  ${type === "main" && "background-color: rgb(84, 84, 214)"};
  ${type === "sub" && "background-color: rgb(202, 202, 202)"};
`;

type Priority = "main" | "sub";
type Props = {
  priority: Priority;
} & JSX.IntrinsicElements["button"];

const Button: FC<Props> = ({ priority, children, ...props }) => {
  return (
    <button css={[styles.container, buttonType(priority)]} {...props}>
      {children}
    </button>
  );
};

export { Button };
