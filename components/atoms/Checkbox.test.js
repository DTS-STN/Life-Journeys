import { render, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { CheckBox } from "./Checkbox";

expect.extend(toHaveNoViolations);

const checkedBox = true;
const uncheckedBox = false;
const name = "This is a checkbox";
const id = "test";
const label = "I am a checkbox";

describe("Checkbox tests", () => {
  it("renders checked checkbox", () => {
    const primary = act(() => {
      render(
        <CheckBox checked={checkedBox} name={name} id={id} label={label} />
      );
    });
    expect(primary).toBeTruthy();
  });

  it("renders unchecked checkbox", () => {
    const primary = act(() => {
      render(
        <CheckBox checked={uncheckedBox} name={name} id={id} label={label} />
      );
    });
    expect(primary).toBeTruthy();
  });

  it("checked box has no a11y violations", async () => {
    const { container } = render(
      <CheckBox checked={checkedBox} name={name} id={id} label={label} />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("unchecked box has no a11y violations", async () => {
    const { container } = render(
      <CheckBox checked={uncheckedBox} name={name} id={id} label={label} />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
