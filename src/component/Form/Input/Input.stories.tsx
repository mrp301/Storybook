import React from "react";
import { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { Input } from "./Input";
import { useForm, Controller } from "react-hook-form";
import { within, userEvent } from "@storybook/testing-library";

type FormType = {
  formValue: string | number;
};

export default {
  component: Input,
  render: (args) => {
    const { control } = useForm<FormType>();

    return (
      <Controller
        control={control}
        name="formValue"
        render={({ field }) => (
          <Input data-testid="input" {...args} {...field} />
        )}
      />
    );
  },
} as ComponentMeta<typeof Input>;

export const Text: ComponentStoryObj<typeof Input> = {
  args: {
    type: "text",
    label: "テキストフォーム",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(
      canvas.getByTestId("input"),
      "テキスト自動入力",
      {
        delay: 100,
      }
    );
  },
};

export const Number: ComponentStoryObj<typeof Input> = {
  args: {
    type: "number",
    label: "数値フォーム",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(canvas.getByTestId("input"), "1234", {
      delay: 100,
    });
  },
};
