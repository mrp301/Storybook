import React, { FC, useState, useReducer } from "react";
import { css } from "@emotion/react";
import { Button } from "./Button";

const styles = {
  container: css`
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 12px;
    row-gap: 12px;
    align-items: center;
    > li {
      display: contents;
    }
  `,
  btnContainer: css`
    text-align: center;
  `,
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
  success: css`
    font-weight: bold;
  `,
};

export type FormType = {
  firstName: string;
  age: number;
};

export const SampleForm: FC = () => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number | string>("");
  const [sex, setSex] = useState<string>("");

  return (
    <form>
      <ul css={styles.container}>
        <li>
          <label css={styles.label}>名前</label>
          <input
            css={styles.input}
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            placeholder="名前を入力"
            data-testid="name"
          />
        </li>
        <li>
          <label css={styles.label}>年齢</label>
          <input
            css={styles.input}
            onChange={(e) => {
              setAge(e.target.value);
            }}
            type="number"
            placeholder="年齢を入力"
            data-testid="age"
          />
        </li>
        <li>
          <label css={styles.label}>性別</label>
          <select
            css={styles.input}
            onChange={(e) => {
              setSex(e.target.value);
            }}
            data-testid="sex"
          >
            <option value="">選択してください</option>
            <option value="1">男性</option>
            <option value="2">女性</option>
          </select>
        </li>
      </ul>
      <div css={styles.btnContainer}>
        {name && age && !!sex ? (
          <Button
            priority="main"
            onClick={() => {
              return;
            }}
          >
            登録
          </Button>
        ) : (
          <Button priority="disable">未入力項目があります</Button>
        )}
      </div>
    </form>
  );
};
