import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ReportProblem from "./ReportProblem";
import { axe, toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

describe("DropDown", () => {
  it("opens and shows content", () => {
    render(<ReportProblem {...ReportProblem.args} />);
    const elem = screen.getByTestId("dropdown");
    const summary = elem.getElementsByTagName("summary")[0];
    expect(summary).toHaveTextContent(
      "Report a problem or mistake on this page"
    );
    summary.click();
    expect(screen.getByText("Please select all that apply:")).toBeTruthy;
  });

  it("has no a11y violations", async () => {
    const { container } = render(<ReportProblem {...ReportProblem.args} />);
    const elem = screen.getByTestId("dropdown");
    const summary = elem.getElementsByTagName("summary")[0];
    summary.click();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
