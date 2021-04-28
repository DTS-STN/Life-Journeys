import { render, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { Banner } from "./Banner";

expect.extend(toHaveNoViolations);

const bannerTitle = "Test";
const bannerText = "This is some test text";

describe("Banner tests", () => {
  it("renders Banner", () => {
    const primary = act(() => {
      render(<Banner siteTitle={bannerTitle} headline={bannerText} />);
    });
    expect(primary).toBeTruthy();
  });

  it("has no a11y violations", async () => {
    const { container } = render(
      <Banner siteTitle={bannerTitle} headline={bannerText} />
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
