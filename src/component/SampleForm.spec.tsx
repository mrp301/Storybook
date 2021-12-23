import React from "react";
import { findByText } from "@testing-library/dom";
import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import * as stories from "./SampleForm.stories";

const { Success } = composeStories(stories);

describe("sampleForm", () => {
  test("全項目入力すると、ボタンのテキストが「登録」となる", async () => {
    const { container } = render(<Success />);
    await Success.play({ canvasElement: container });

    expect(await screen.findByText("登録")).toBeInTheDocument();
  });
});
