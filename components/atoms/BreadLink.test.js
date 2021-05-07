import { render, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { BreadLink } from "./BreadLink";

expect.extend(toHaveNoViolations);

describe("breadlink", () => {
  it("renders the breadlink component", () => {
    const primary = act(() => {
      render(<BreadLink url="/" text="lksajfd" arrow="true" />);
    });
    expect(primary).toBeTruthy();
  });

  it("has no a11y violations", async () => {
    const { container } = render(
      <BreadLink url="/" text="lksajfd" arrow="true" />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
