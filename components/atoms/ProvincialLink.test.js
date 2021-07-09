import { render, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import ProvincialLink from "./ProvincialLink";

expect.extend(toHaveNoViolations);

const language = "en";
const region = "ON";

describe("ProvincialLink tests", () => {
  it("renders ProvincialLink", () => {
    const primary = act(() => {
      render(<ProvincialLink region={region} language={language} />);
    });
    expect(primary).toBeTruthy();
  });

  it("has no a11y violations", async () => {
    const { container } = render(
      <ProvincialLink region={region} language={language} />
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
