import { render, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import ResourceLink from "./ResourceLink";
import { LanguageContext } from "../../context/languageProvider";

expect.extend(toHaveNoViolations);

const language = "en";
const region = "ON";
const text = "Find hot singles in my area";

describe("ResourceLink tests", () => {
  const contextValue = { items: { language: "en" } };

  it("renders ResourceLink as a list of provincial links", () => {
    const primary = act(() => {
      render(
        <LanguageContext.Provider value={contextValue}>
          <ResourceLink region={region} isProvincialLink={true} />
        </LanguageContext.Provider>
      );
    });
    expect(primary).toBeTruthy();
  });

  it("renders ResourceLink as a google search query link", () => {
    const primary = act(() => {
      render(
        <LanguageContext.Provider value={contextValue}>
          <ResourceLink text={text} isProvincialLink={false} />
        </LanguageContext.Provider>
      );
    });
    expect(primary).toBeTruthy();
  });

  it("has no a11y violations", async () => {
    const { container } = render(
      <LanguageContext.Provider value={contextValue}>
        <ResourceLink region={region} isProvincialLink={true} />
      </LanguageContext.Provider>
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
