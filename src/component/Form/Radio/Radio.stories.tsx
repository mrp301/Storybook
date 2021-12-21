import React from "react";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Radio } from "./Radio";

export default {
  component: Radio,
  render: (args) => <Radio {...args} />,
} as ComponentMeta<typeof Radio>;

export const Default: ComponentStoryObj<typeof Radio> = {
  args: {
    id: "sample",
    name: "sample",
    value: "sample",
  },
};
