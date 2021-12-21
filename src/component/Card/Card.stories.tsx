import React from "react";
import { ComponentMeta } from "@storybook/react";
import { Card } from "./Card";

export default {
  component: Card,
  render: (args) => (
    <Card {...args}>
      <p>コンテンツ</p>
    </Card>
  ),
} as ComponentMeta<typeof Card>;

export const Default = {};
