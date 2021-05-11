import { render, act, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { OptionalTextField } from "./OptionalTextField";

expect.extend(toHaveNoViolations);

const checkBoxId = "checkBox";
const textFieldId = "textField";
const checkBoxName = "This is a checkbox";
const textFieldName = "This is a text field";
const checkBoxLabel = "I am a checkbox";
const textFieldLabel = "I am a text field";
const textFieldValue = "text field";

describe("Optional text field tests", () => {
  it("renders optional text field", () => {
    const primary = act(() => {
      render(
        <OptionalTextField
          checkBoxId={checkBoxId}
          textFieldId={textFieldId}
          checkBoxName={checkBoxName}
          textFieldName={textFieldName}
          checkBoxLabel={checkBoxLabel}
          textFieldLabel={textFieldLabel}
          textFieldValue={textFieldValue}
        />
      );
    });
    expect(primary).toBeTruthy();
  });

  it("has no a11y violations", async () => {
    const { container } = render(
      <OptionalTextField
        checkBoxId={checkBoxId}
        textFieldId={textFieldId}
        checkBoxName={checkBoxName}
        textFieldName={textFieldName}
        checkBoxLabel={checkBoxLabel}
        textFieldLabel={textFieldLabel}
        textFieldValue={textFieldValue}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
