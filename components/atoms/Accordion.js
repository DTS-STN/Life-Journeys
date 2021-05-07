import propTypes from "prop-types";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export function Accordion(props) {
  const [openFlag, setopenFlag] = useState(false);
  const [arrowFlag, setarrowFlag] = useState(false);

  const AccordionRef = useRef();

  useEffect(() => {
    if (
      props.id === props.anchorId &&
      !AccordionRef.current.hasAttribute("open")
    ) {
      setopenFlag(true);
    }
  }, [props.anchorId]);

  function handleToggle() {
    setarrowFlag(AccordionRef.current.hasAttribute("open"));
  }

  const arrowColor = "#D3080C";

  return (
    <div className="flex mb-2">
      <details
        id={props.id}
        ref={AccordionRef}
        onToggle={() => handleToggle()}
        open={openFlag}
        className={`accordion flex-1 flex-wrap p-4 border-2 rounded-md mb-2 shadow-lg ((${props.mainClass})? ${props.mainClass} : '') `}
      >
        <summary>
          <div className="w-12 min-w-12 relative left-4 top-5 float-left ">
            {arrowFlag ? (
              <FontAwesomeIcon
                icon={faChevronRight}
                rotation={90}
                size="lg"
                color={arrowColor}
              />
            ) : (
              <FontAwesomeIcon
                icon={faChevronRight}
                size="lg"
                color={arrowColor}
              />
            )}
          </div>
          <div className="ml-8">
            <h2
              className={`ml-6 (${props.titleClass}) ? ${props.titleClass} : ''`}
            >
              {props.title}, open = {openFlag ? "true" : "false"} arrow ={" "}
              {arrowFlag ? "true" : "false"}
            </h2>
            <span
              className={`ml-6 (${props.summaryClass}) ? ${props.summaryClass} : ''`}
            >
              {props.summary}
            </span>
          </div>
        </summary>
        <div className="ml-14 mt-6">{props.children}</div>
      </details>
    </div>
  );
}

Accordion.defaultProps = {
  id: "#WhenArrives",
  title: "When your Child arrives",
  summary: "Your Relationship Changes",
  children: `Default text  --------------------
              There's one more person to interact with, and that means less time for "us."
              The relationship dynamic is different, and you can get so busy you'll forget to talk. 
              If one of you provides most of the baby care, the other can feel slighted`,
  mainClass: "",
  titleClass: "",
  summaryClass: "",
  anchorId: "",
};

Accordion.propTypes = {
  // add extra css to the main component using the props class
  mainClass: propTypes.string,

  // this is the anchor to be used by the SideMenu to:  TODO('open' the accordion)
  id: propTypes.string.isRequired,

  // Title of the page
  title: propTypes.string,

  // extra css for the title
  titleClass: propTypes.string,

  // title summary in one or two lines max
  summary: propTypes.string,

  // extra css for the summary portion
  summaryClass: propTypes.string,

  // the actual content to be displayed
  children: propTypes.oneOfType([
    propTypes.string,
    propTypes.element,
    propTypes.arrayOf(propTypes.element),
  ]),

  // name of the accrodion that must open
  anchorId: propTypes.string,
};
