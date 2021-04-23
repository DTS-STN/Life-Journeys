import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import ReportProblem from "./ReportProblem";

expect.extend(toHaveNoViolations);

describe("Report a problem", () => {
  it("displays a thank you message after submit button is pressed", () => {
    render(<ReportProblem {...ReportProblem.args} />);
    const submitButton = screen.getByTestId("report-a-problem-submit");
    submitButton.click();
    expect(screen.getByText("Thank you for your help!")).toBeTruthy();
  });
  it("has no a11y violations for form", async () => {
    const { container } = render(<ReportProblem {...ReportProblem.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it("has no a11y violations for thank you message", async () => {
    const { container } = render(<ReportProblem {...ReportProblem.args} />);
    const submitButton = screen.getByTestId("report-a-problem-submit");
    submitButton.click();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
