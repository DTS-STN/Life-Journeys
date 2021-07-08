import { render, act, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Select from "./Select";
import { axe, toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

const options = [
  { value: "AB", label: "Alberta" },
  { value: "BC", label: "British Columbia" },
  { value: "MB", label: "Manitoba" },
];
const selectName = "test";
const label = "Showing top requests for";

describe("Select tests", () => {
  it("renders Select", () => {
    const primary = act(() => {
      render(<Select options={options} name={selectName} label={label} />);
    });
    expect(primary).toBeTruthy();
  });

  it("has no a11y violations", async () => {
    const { container } = render(
      <Select options={options} name={selectName} label={label} />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
