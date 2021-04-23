import propTypes from "prop-types";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

export function Accordion({ title, summary, description }) {
  const [openFlag, setOpenFlag] = useState(false);
  function openSummary() {
    setOpenFlag(!openFlag);
  }

  return (
    <div className="border-gray-300 flex border border-b-2 border-r-2 mb-2 p-8 shadow-lg">
      <div className="w-8  min-w-8 relative top-5">
        {openFlag ? (
          <FontAwesomeIcon icon={faChevronRight} size="2x" color="red" />
        ) : (
          <FontAwesomeIcon icon={faChevronDown} size="2x" color="red" />
        )}
      </div>

      <details className="flex-1 flex-wrap">
        <summary onClick={() => openSummary()}>
          <h3>{title}</h3>
          {summary}
        </summary>
        {description}
      </details>
    </div>
  );
}

Accordion.defaultProps = {
  title: "When your Child arrives",
  summary: "Your Relationship Changes",
  description: `There's one more person to interact with, and that means less time for "us."
                The relationship dynamic is different, and you can get so busy you'll forget to talk. 
                If one of you provides most of the baby care, the other can feel slighted`,
};

Accordion.propTypes = {
  // Title of the page
  title: propTypes.string,

  // title summary in one or two lines max
  summary: propTypes.string,

  // the actual content to be displayed
  description: propTypes.string,
};
