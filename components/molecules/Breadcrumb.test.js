import { render, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { Breadcrumb } from "./Breadcrumb";

expect.extend(toHaveNoViolations);

const text = "This is a crumb of bread";

describe("breadcrumb", () => {
  it("renders breadcrumb", () => {
    const primary = act(() => {
      render(<Breadcrumb items={[{ text: text, link: "/" }]} />);
    });
    expect(primary).toBeTruthy();
  });

  it("has no a11y violations", async () => {
    const { container } = render(
      <Breadcrumb items={[{ text: text, link: "/" }]} />
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
