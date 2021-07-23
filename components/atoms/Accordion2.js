import propTypes from "prop-types";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export function Accordion2(props) {
  const [openFlag, setOpenFlag] = useState(false);

  function openSummary() {
    setOpenFlag(!openFlag);
  }

  const arrowColor = "#335075";

  return (
    <div className="flex mb-0 ">
      <details
        className={`accordion flex-1 flex-wrap p-4 border border-gray-300 rounded bg-white ((${props.mainClass})? ${props.mainClass} : '') `}
      >
        <summary onClick={() => openSummary()}>
          <div className="w-12 min-w-12 relative left-4 top-2 float-left ">
            {openFlag ? (
              <FontAwesomeIcon
                icon={faChevronRight}
                rotation={90}
                size="md"
                color={arrowColor}
              />
            ) : (
              <FontAwesomeIcon
                icon={faChevronRight}
                size="md"
                color={arrowColor}
              />
            )}
          </div>

          <div className="ml-8 py-2">
            <h3
              id={props.id}
              className={`ml-6 (${props.titleClass}) ? ${props.titleClass} : ''`}
            >
              {props.title}
            </h3>
          </div>
        </summary>
        <div className="ml-14 mt-6">{props.children}</div>
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
