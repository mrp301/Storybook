import React, { FC } from "react";
import { css } from "@emotion/react";

const styles = {
  container: (priority: Priority) => css`
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
    cursor: ${priority === "disable" ? "not-allowed" : "pointer"};
    &:hover {
      background-color: rgb(147, 147, 240);
    }
  `,
};

const buttonType = (type: Priority) => css`
  ${type === "main" && "background-color: rgb(84, 84, 214)"};
  ${type === "sub" && "background-color: rgb(211, 155, 155)"};
  ${type === "disable" && "background-color: rgb(211, 155, 155)"};
`;

type Priority = "main" | "sub" | "disable";
type Props = {
  priority: Priority;
} & JSX.IntrinsicElements["button"];

const Button: FC<Props> = ({ priority, children, ...props }) => {
  return (
    <button
      css={[styles.container(priority), buttonType(priority)]}
      {...props}
      disabled={priority === "disable"}
    >
      {children}
    </button>
  );
};

export { Button };
