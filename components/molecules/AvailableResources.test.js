import { render, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import AvailableResources from "./AvailableResources";

expect.extend(toHaveNoViolations);

describe("Available Resources tests", () => {
  it("renders Available Resources", () => {
    const primary = act(() => {
      render(<AvailableResources title="test" />);
    });
    expect(primary).toBeTruthy();
  });

  it("has no a11y violations", async () => {
    const { container } = render(<AvailableResources title="test" />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
