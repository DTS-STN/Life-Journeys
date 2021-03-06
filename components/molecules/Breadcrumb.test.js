import { render, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { Breadcrumb } from "./Breadcrumb";
import { LanguageContext } from "../../context/languageProvider";

expect.extend(toHaveNoViolations);

const text = "This is a crumb of bread";

describe("breadcrumb", () => {
  const contextValue = { items: { language: "en" } };

  it("renders breadcrumb", () => {
    const primary = act(() => {
      render(
        <LanguageContext.Provider value={contextValue}>
          <Breadcrumb items={[{ text: text, link: "/" }]} />
        </LanguageContext.Provider>
      );
    });
    expect(primary).toBeTruthy();
  });

  it("has no a11y violations", async () => {
    const { container } = render(
      <LanguageContext.Provider value={contextValue}>
        <Breadcrumb items={[{ text: text, link: "/" }]} />
      </LanguageContext.Provider>
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
