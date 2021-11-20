import React, { ComponentProps } from "react";
import { Meta, Story } from "@storybook/react";
import { Card } from "./Card";

type Props = ComponentProps<typeof Card>;

export default {
  component: Card,
  title: "Components/Card",
} as Meta;

const Template: Story<Props> = (args) => (
  <Card {...args}>
    <p>コンテンツ</p>
  </Card>
);

export const Default = Template.bind({});
