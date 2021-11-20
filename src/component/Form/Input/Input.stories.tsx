import React, { ComponentProps } from "react";
import { Meta, Story } from "@storybook/react";
import { Input } from "./Input";

type Props = ComponentProps<typeof Input>;

export default {
  component: Input,
  title: "Components/Input",
} as Meta;

const Template: Story<Props> = (args) => <Input {...args} />;

export const Text = Template.bind({});

Text.args = {
  type: "text",
  label: "テキストフォーム",
  value: "テキスト",
};

export const Number = Template.bind({});

Number.args = {
  type: "number",
  label: "数値フォーム",
  value: 123,
};
