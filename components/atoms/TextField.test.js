import { render, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { TextField } from "./TextField";

expect.extend(toHaveNoViolations);

const id = "textField";
const name = "This is a text field";
const label = "I am a text field";
const value = "text field";

describe("Text field tests", () => {
  it("renders text field", () => {
    const primary = act(() => {
      render(<TextField id={id} name={name} label={label} value={value} />);
    });
    expect(primary).toBeTruthy();
  });

  it("has no a11y violations", async () => {
    const { container } = render(
      <TextField id={id} name={name} label={label} value={value} />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
