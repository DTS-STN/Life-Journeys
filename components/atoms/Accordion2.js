import propTypes from "prop-types";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

export function Accordion2(props) {
  const [openFlag, setOpenFlag] = useState(false);

  function openSummary() {
    setOpenFlag(!openFlag);
  }

  return (
    <div className="flex mb-0 ">
      <details
        className={`accordion flex-1 flex-wrap border border-gray-300 rounded bg-white`}
      >
        <summary onClick={() => openSummary()}>
          <div className="arrow relative left-3 pt-3 float-left">
            {openFlag ? (
              <FontAwesomeIcon
                icon={faCaretRight}
                rotation={90}
                size="1x"
                className="text-custom-blue-reportButton"
              />
            ) : (
              <FontAwesomeIcon
                icon={faCaretRight}
                size="1x"
                className="text-custom-blue-reportButton"
              />
            )}
          </div>

          <div className="ml-7 pt-3 text-custom-blue-reportButton">
            <h3
              id={props.id}
              className={`ml-1 text-h6 (${props.titleClass}) ? ${props.titleClass} : ''`}
            >
              {props.title}
            </h3>
          </div>
        </summary>
        <div className="ml-8 mt-2">{props.children}</div>
      </details>
    </div>
  );
}

Accordion2.defaultProps = {
  id: "#WhenArrives",
  title: "When your Child arrives",
  children: `Default text  --------------------
              There's one more person to interact with, and that means less time for "us."
              The relationship dynamic is different, and you can get so busy you'll forget to talk. 
              If one of you provides most of the baby care, the other can feel slighted`,
  mainClass: "",
  titleClass: "",
  summaryClass: "",
};

Accordion2.propTypes = {
  // add extra css to the main component using the props class
  mainClass: propTypes.string,

  // this is the anchor to be used by the SideMenu to:  TODO('open' the accordion)
  id: propTypes.string.isRequired,

  // Title of the page
  title: propTypes.string,

  // extra css for the title
  titleClass: propTypes.string,

  // extra css for the summary portion
  summaryClass: propTypes.string,

  // the actual content to be displayed
  children: propTypes.oneOfType([
    propTypes.string,
    propTypes.element,
    propTypes.arrayOf(propTypes.element),
  ]),
};
