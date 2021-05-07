import { render, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { ActionButton } from "./ActionButton";

expect.extend(toHaveNoViolations);

const buttonText = "I am a button";
const buttonId = "I am, without a doubt, a button";

describe("ActionButton tests", () => {
  it("renders ActionButton", () => {
    const primary = act(() => {
      render(<ActionButton text={buttonText} id={buttonId} />);
    });
    expect(primary).toBeTruthy();
  });
  it("has no a11y violations", async () => {
    const { container } = render(
      <ActionButton text={buttonText} id={buttonId} />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
