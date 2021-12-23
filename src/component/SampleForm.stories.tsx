import React from "react";
import { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import {
  within,
  userEvent,
  screen,
} from "@storybook/testing-library";
import { SampleForm } from "./SampleForm";

export type FormType = {
  firstName: string;
};

const meta: ComponentMeta<typeof SampleForm> = {
  component: SampleForm,
  render: () => <SampleForm />,
};
export default meta;

export const Default: ComponentStoryObj<typeof SampleForm> = {};

export const Success: ComponentStoryObj<typeof SampleForm> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(canvas.getByTestId("name"), "田中 太郎", {
      delay: 300,
    });

    await userEvent.type(canvas.getByTestId("age"), "20", {
      delay: 300,
    });

    await userEvent.selectOptions(canvas.getByTestId("sex"), "1");

    await screen.findByText("登録");
  },
};

export const InputDelete: ComponentStoryObj<typeof SampleForm> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(canvas.getByTestId("name"), "田中 太郎", {
      delay: 100,
    });

    await userEvent.type(canvas.getByTestId("age"), "20", {
      delay: 100,
    });

    await userEvent.clear(canvas.getByTestId("age"));
    await userEvent.clear(canvas.getByTestId("name"));
  },
};
