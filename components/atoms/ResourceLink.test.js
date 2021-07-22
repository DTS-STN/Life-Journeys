import { render, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import ResourceLink from "./ResourceLink";

expect.extend(toHaveNoViolations);

const language = "en";
const region = "ON";
const text = "Find hot singles in my area";

describe("ResourceLink tests", () => {
  it("renders ResourceLink as a list of provincial links", () => {
    const primary = act(() => {
      render(
        <ResourceLink
          region={region}
          language={language}
          isProvincialLink={true}
        />
      );
    });
    expect(primary).toBeTruthy();
  });

  it("renders ResourceLink as a google search query link", () => {
    const primary = act(() => {
      render(<ResourceLink text={text} isProvincialLink={false} />);
    });
    expect(primary).toBeTruthy();
  });

  it("has no a11y violations", async () => {
    const { container } = render(
      <ResourceLink
        region={region}
        language={language}
        isProvincialLink={true}
      />
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
