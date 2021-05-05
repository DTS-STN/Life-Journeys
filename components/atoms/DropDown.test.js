import { render, act, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import DropDown from "./DropDown";
import { axe, toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

const dropDownText = "Drop it like it's hot";
const dropDownId = "testDropDownID";

describe("DropDown tests", () => {
  it("renders DropDown", () => {
    const primary = act(() => {
      render(<DropDown text={dropDownText} id={dropDownId} />);
    });
    expect(primary).toBeTruthy();
  });

  it("has no a11y violations", async () => {
    const { container } = render(
      <DropDown text={dropDownText} id={dropDownId} />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
