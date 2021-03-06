import { render, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import Stages from "./Stages";

expect.extend(toHaveNoViolations);

const subtitle = "this is an H4 section Title";
const selectTitle = "This is the H4 select title";
const selectPlaceholder = "-select one-";
const labelText = "This is the label";

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
      render(
        <Stages
          journeys={journey}
          stagesSubtitle={subtitle}
          stagesSelectTitle={selectTitle}
          stagesSelectLabel={labelText}
          stagesSelectPlaceholder={selectPlaceholder}
        />
      );
    });
    expect(primary).toBeTruthy();
  });

  it("has no a11y violations", async () => {
    const { container } = render(
      <Stages
        journeys={journey}
        stagesSubtitle={subtitle}
        stagesSelectTitle={selectTitle}
        stagesSelectLabel={labelText}
        stagesSelectPlaceholder={selectPlaceholder}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
