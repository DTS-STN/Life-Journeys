import { render, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { Accordion } from "./Accordion";

expect.extend(toHaveNoViolations);

describe("accordion", () => {
  it("renders the accodion component", () => {
    const primary = act(() => {
      render(<Accordion />);
    });
    expect(primary).toBeTruthy();
  });

  it("has no a11y violations", async () => {
    const { container } = render(<Accordion />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
