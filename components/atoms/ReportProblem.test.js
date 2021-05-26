import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import ReportProblem from "./ReportProblem";
import { LanguageContext } from "../../context/languageProvider";
import fetchMock from "fetch-mock";

expect.extend(toHaveNoViolations);

describe("Report a problem tests", () => {
  const contextValue = { items: { language: "en" } };

  beforeEach(() => {
    fetchMock.postOnce("/api/report-a-problem", {
      status: 200,
      body: "OK",
    });
  });
  afterEach(() => {
    fetchMock.restore();
  });
  it("displays a thank you message after submit button is pressed", () => {
    const { container } = render(
      <LanguageContext.Provider value={contextValue}>
        <ReportProblem {...ReportProblem.args} />
      </LanguageContext.Provider>
    );
    const submitButton = container.querySelector("button");
    submitButton.click();
    expect(screen.getByText("Thank you for your help!")).toBeTruthy();
  });
  it("has no a11y violations for form", async () => {
    const { container } = render(
      <LanguageContext.Provider value={contextValue}>
        <ReportProblem {...ReportProblem.args} />
      </LanguageContext.Provider>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it("has no a11y violations for thank you message", async () => {
    const { container } = render(
      <LanguageContext.Provider value={contextValue}>
        <ReportProblem {...ReportProblem.args} />
      </LanguageContext.Provider>
    );
    const submitButton = container.querySelector("button");
    submitButton.click();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
