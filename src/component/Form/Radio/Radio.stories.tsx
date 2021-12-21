import React, { ComponentProps } from "react";
import { Meta, Story } from "@storybook/react";
import { Radio } from "./Radio";

type Props = ComponentProps<typeof Radio>;

export default {
  component: Radio,
} as Meta;

const Template: Story<Props> = (args) => <Radio {...args} />;

export const Default = Template.bind({});

Default.args = {
  id: "sample",
  name: "sample",
  value: "sample",
};
