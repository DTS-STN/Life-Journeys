import { render, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { SideMenu } from "./SideMenu";

expect.extend(toHaveNoViolations);

describe("SideMenu", () => {
  it("renders the sticky menu component", () => {
    const primary = act(() => {
      render(<SideMenu />);
    });
    expect(primary).toBeTruthy();
  });

  it("has no a11y violations", async () => {
    const { container } = render(<SideMenu />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
