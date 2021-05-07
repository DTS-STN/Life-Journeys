import { render, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import TopicBox from "./TopicBox";

expect.extend(toHaveNoViolations);

const key = "topic1";
const title = "Test";
const body = "test";
const imgalt = "test";
const image = "/images/family.png";
const url = "/";
const subtopics = ["test1", "test2", "test3"];

describe("topicBox", () => {
  it("renders topicbox", () => {
    const primary = act(() => {
      render(
        <TopicBox
          key={key}
          title={title}
          body={body}
          imgalt={imgalt}
          image={image}
          url={url}
          subtopics={subtopics}
        />
      );
    });
    expect(primary).toBeTruthy();
  });

  it("has no a11y violations", async () => {
    const { container } = render(
      <TopicBox
        key={key}
        title={title}
        body={body}
        imgalt={imgalt}
        image={image}
        url={url}
        subtopics={subtopics}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
