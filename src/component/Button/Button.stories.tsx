import React from "react";
import { Button } from "./Button";
import { ComponentStoryObj, ComponentMeta } from "@storybook/react";

export default {
  component: Button,
  render: (args) => <Button {...args}>ボタン</Button>,
} as ComponentMeta<typeof Button>;

export const Main: ComponentStoryObj<typeof Button> = {
  args: {
    priority: "main",
  },
};

export const Sub: ComponentStoryObj<typeof Button> = {
  render: (args) => <Button {...args}>renderの上書きも可能</Button>,
  args: {
    priority: "sub",
  },
};
