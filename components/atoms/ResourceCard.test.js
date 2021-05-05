import { render, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import ResourceCard from "../atoms/ResourceCard";

expect.extend(toHaveNoViolations);

describe("Available Resources tests", () => {
  it("renders Available Resources", () => {
    const primary = act(() => {
      render(
        <ResourceCard title="test1" image="/images/family.png" imgalt="test1" />
      );
    });
    expect(primary).toBeTruthy();
  });

  it("has no a11y violations", async () => {
    const { container } = render(
      <ResourceCard title="test1" image="/images/family.png" imgalt="test1" />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
