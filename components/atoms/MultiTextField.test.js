import { render, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { MultiTextField } from "./MultiTextField";

expect.extend(toHaveNoViolations);

const id = "multiTextField";
const name = "This is a multi text field";
const label = "I am a multi text field";

describe("Multi text field tests", () => {
  it("renders multi text field", () => {
    const primary = act(() => {
      render(<MultiTextField id={id} name={name} label={label} />);
    });
    expect(primary).toBeTruthy();
  });

  it("has no a11y violations", async () => {
    const { container } = render(
      <MultiTextField id={id} name={name} label={label} />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
