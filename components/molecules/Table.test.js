import { render, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import Table from "./Table";
import { LanguageContext } from "../../context/languageProvider";

expect.extend(toHaveNoViolations);

describe("Table tests", () => {
  const contextValue = { items: { language: "en" } };

  it("renders Table component", () => {
    const primary = act(() => {
      render(
        <LanguageContext.Provider value={contextValue}>
          <Table />
        </LanguageContext.Provider>
      );
    });
    expect(primary).toBeTruthy();
  });

  it("has no a11y violations", async () => {
    const { container } = render(
      <LanguageContext.Provider value={contextValue}>
        <Table />
      </LanguageContext.Provider>
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
