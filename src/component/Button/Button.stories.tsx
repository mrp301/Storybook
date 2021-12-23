import React from "react";
import { Button } from "./Button";
import { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";

export default {
  component: Button,
  render: (args) => (
    <Button data-testid="btn" {...args}>
      ボタン
    </Button>
  ),
} as ComponentMeta<typeof Button>;

export const Main: ComponentStoryObj<typeof Button> = {
  args: {
    priority: "main",
  },
};

export const Sub: ComponentStoryObj<typeof Button> = {
  render: (args) => (
    <Button id="btn" {...args}>
      renderの上書きも可能
    </Button>
  ),
  args: {
    priority: "sub",
  },
};

export const Disable: ComponentStoryObj<typeof Button> = {
  args: {
    priority: "disable",
  },
};

// export const Hover: ComponentStoryObj<typeof Button> = {
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);

//     await userEvent.hover(await canvas.getByTestId("btn"));
//   },
// };
