import { render, act, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Details from "./Details";
import { axe, toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

const detailsText = "Drop it like it's hot";
const detailsId = "testDropDownID";

describe("DropDown tests", () => {
  it("renders DropDown", () => {
    const primary = act(() => {
      render(<Details text={detailsText} id={detailsId} />);
    });
    expect(primary).toBeTruthy();
  });

  it("has no a11y violations", async () => {
    const { container } = render(<Details text={detailsText} id={detailsId} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
