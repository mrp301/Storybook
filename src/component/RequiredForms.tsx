import React, { FC } from "react";
import { css } from "@emotion/react";
import { Controller, useFormContext } from "react-hook-form";
import { Input } from "./Form";
import { Select } from "./Select";

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
};

export const RequiredForms: FC = () => {
  const { control } = useFormContext();

  return (
    <ul css={styles.container}>
      <li>
        <Controller
          control={control}
          name="firstName"
          rules={{
            required: "First Nameは必須です。",
          }}
          render={({ field }) => (
            <Input
              type="text"
              label="First Name"
              {...field}
              placeholder="名前を入力"
            />
          )}
        />
      </li>
      <li>
        <Controller
          control={control}
          name="age"
          rules={{
            required: "Ageは必須です。",
          }}
          render={({ field }) => (
            <Input
              label="Age"
              type="number"
              {...field}
              placeholder="年齢を入力"
            />
          )}
        />
      </li>
      <li>
        <Controller
          control={control}
          name="sex"
          rules={{
            required: "Sexは必須です。",
          }}
          render={({ field }) => (
            <Select
              label="sex"
              {...field}
              values={[
                {
                  value: "man",
                  text: "man",
                },
                {
                  value: "woman",
                  text: "woman",
                },
              ]}
            />
          )}
        />
      </li>
    </ul>
  );
};
