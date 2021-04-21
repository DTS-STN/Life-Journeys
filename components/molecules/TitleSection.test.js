import { render, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import TitleSection from "./TitleSection";

expect.extend(toHaveNoViolations);

describe("TitleSection", () => {
  it("renders page title section", () => {
    const primary = act(() => {
      render(<TitleSection title="test1" description="test2" />);
    });
    expect(primary).toBeTruthy();
  });

  it("has no a11y violations", async () => {
    const { container } = render(
      <TitleSection title="test1" description="test2" />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
