import { render, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import MoreInfo from "./MoreInfo";

expect.extend(toHaveNoViolations);

const infoText = "Find hot info near me";
const infoId = "testInfoID";

describe("MoreInfo tests", () => {
  it("renders MoreInfo", () => {
    const primary = act(() => {
      render(<MoreInfo text={infoText} id={infoId} />);
    });
    expect(primary).toBeTruthy();
  });

  it("has no a11y violations", async () => {
    const { container } = render(<MoreInfo text={infoText} id={infoId} />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
