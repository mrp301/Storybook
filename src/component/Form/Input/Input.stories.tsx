import React from "react";
import { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { Input } from "./Input";
import { useForm, Controller } from "react-hook-form";

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
        render={({ field }) => <Input {...args} {...field} />}
      />
    );
  },
} as ComponentMeta<typeof Input>;

export const Text: ComponentStoryObj<typeof Input> = {
  args: {
    type: "text",
    label: "テキストフォーム",
  },
};

export const Number: ComponentStoryObj<typeof Input> = {
  args: {
    type: "number",
    label: "数値フォーム",
  },
};
