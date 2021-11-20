import React, { VFC } from "react";
import { css } from "@emotion/react";

const styles = {
  container: css`
    min-width: 120px;
    padding: 12px;
    background-color: #fff;
    border: solid 1px #ccc;
    border-radius: 4px;
  `,
};

// const buttonType = (type: Priority) => css`
//   ${type === "main" && "background-color: rgb(84, 84, 214)"};
//   ${type === "sub" && "background-color: rgb(202, 202, 202)"};
// `;

// type Priority = "main" | "sub";
type Props = JSX.IntrinsicElements["div"];

const Card: VFC<Props> = ({ children, ...props }) => {
  return (
    <div css={[styles.container]} {...props}>
      {children}
    </div>
  );
};

export { Card };
