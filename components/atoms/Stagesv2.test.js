import { render, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import Stages2 from "./Stagesv2";

expect.extend(toHaveNoViolations);

const journey = [
  {
    title: "journey 1 title",
    subJourney: [
      {
        title: "Sub journey 1 title",
        content: "this will be the content for subjourney 1",
      },
    ],
    title: "journey 2 title",
    subJourney: [
      {
        title: "Sub journey 1 title",
        content: "this will be the content for subjourney 1",
      },
    ],
  },
];

describe("Stages", () => {
  it("renders the Stages component", () => {
    const primary = act(() => {
      render(<Stages2 journeys={journey} />);
    });
    expect(primary).toBeTruthy();
  });

  it("has no a11y violations", async () => {
    const { container } = render(<Stages2 journeys={journey} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
