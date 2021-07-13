import { render, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import Card from "./Card";

expect.extend(toHaveNoViolations);

const key = "topic1";
const title = "Play sports";
const service = "Department of National Games";
const imgalt = "text that describes the image";
const image = "/images/family.png";
const links = [{ text: "some text", url: "https://somewhere.com" }];

describe("card", () => {
  it("renders the card component", () => {
    const primary = act(() => {
      render(
        <Card
          title={title}
          service={service}
          imgalt={imgalt}
          image={image}
          links={links}
        />
      );
    });
    expect(primary).toBeTruthy();
  });

  it("has no a11y violations", async () => {
    const { container } = render(
      <Card
        title={title}
        service={service}
        imgalt={imgalt}
        image={image}
        links={links}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
