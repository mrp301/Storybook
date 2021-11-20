import React, { ComponentProps } from "react";
import { Meta, Story } from "@storybook/react";
import { Button } from "./Button";

type Props = ComponentProps<typeof Button>;

export default {
  component: Button,
  title: "Components/Button",
  argTypes: {
    priority: {
      control: { type: "inline-radio" },
      options: ["main", "sub"],
    },
  },
} as Meta;

const Template: Story<Props> = (args) => (
  <Button {...args}>button</Button>
);

export const Main = Template.bind({});

Main.argTypes = {
  priority: {
    defaultValue: "main",
  },
};

export const Sub = Template.bind({});

Sub.argTypes = {
  priority: {
    defaultValue: "sub",
  },
};
