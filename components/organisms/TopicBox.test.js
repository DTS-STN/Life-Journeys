import { render, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import TopicBox from "./TopicBox";

expect.extend(toHaveNoViolations);

const title = "Test";
const body = "test";
const imgalt = "test";
const image = "/images/family.png";
const url = "/";
const dataCy = "topic1";

describe("topicBox", () => {
  it("renders topicbox", () => {
    const primary = act(() => {
      render(
        <TopicBox
          title={title}
          body={body}
          imgalt={imgalt}
          image={image}
          url={url}
          dataCy={dataCy}
        />
      );
    });
    expect(primary).toBeTruthy();
  });

  it("has no a11y violations", async () => {
    const { container } = render(
      <TopicBox
        title={title}
        body={body}
        imgalt={imgalt}
        image={image}
        url={url}
        dataCy={dataCy}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
