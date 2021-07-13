import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { PhaseBanner } from "./PhaseBanner";

expect.extend(toHaveNoViolations);

const phase = "Omega";
const linkText = "Back to something";

describe("PhaseBanner tests", () => {
  it("renders PhaseBanner in its primary state", () => {
    render(
      <PhaseBanner phase={phase} linkText={linkText} link="">
        PhaseBanner Text
      </PhaseBanner>
    );
    const phaseElement = screen.getByText("Omega");
    const textElement = screen.getByText("PhaseBanner Text");
    expect(phaseElement).toBeTruthy();
    expect(textElement).toBeTruthy();
  });

  it("has no a11y violations", async () => {
    const { container } = render(
      <PhaseBanner phase={phase} linkText={linkText} link="">
        PhaseBanner Text
      </PhaseBanner>
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
