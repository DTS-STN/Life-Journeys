import PropTypes from "prop-types";
import { Accordion2 } from "./Accordion2";
import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

/**
 *  Stages Component
 */

const stagesImg = "/images/stages.png";

export default function Stages(props) {
  const [showData, setShowData] = useState();
  const selected = useRef(null);

  //
  // updates the accordions content with the selection
  function onChangeHandler(option) {
    selected.current = option.currentTarget.value;

    props.journeys.map((journey) =>
      journey.titleId === option.currentTarget.value
        ? setShowData(journey.subJourney)
        : null
    );
  }

  //
  // updates the language of the accordions when switching languages
  useEffect(() => {
    if (selected.current !== null) {
      props.journeys.map((journey) =>
        journey.titleId === selected.current
          ? setShowData(journey.subJourney)
          : null
      );
    }
  }, [props.journeys]);

  return (
    <div className="p-4">
      <div className="w-full flex flex-col sm:flex-wrap sm:flex-row justify-left">
        <div>
          <label className="text-custom-blue-reportButton pr-4" htmlFor="stage">
            {props.labelText}
          </label>

          <select
            className="w-auto mb-2 px-2 h-8 rounded border bg-white border-gray-400 mt-2 overflow-ellipsis xxs:max-w-full focus:shadow-blue focus:border-custom-blue-focus focus-visible:outline-none"
            id="stage"
            onChange={onChangeHandler}
          >
            <option key="0" value="0" defaultValue hidden>
              {props.selectPlaceholder}
            </option>
            {props.journeys.map((journey, idx) => (
              <option key={idx} value={journey.titleId}>
                {journey.title}
              </option>
            ))}
          </select>
        </div>

        {/* Display the options as a "map" or the accordions once an option has been selected */}

        <div className="w-full flex flex-col sm:flex-wrap sm:flex-row justify-left ">
          {showData === undefined ? (
            <>
              <ul className="text-xs bg-lineXX mt-2">
                {props.journeys.map((journey, idx) => (
                  <li key={idx} className="py-2 pl-2 ">
                    <span>
                      <FontAwesomeIcon
                        icon={faCircle}
                        className="text-custom-blue-reportButton"
                      />
                    </span>
                    <span className="pl-3">{journey.title}</span>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <div className="mt-0 pt-1 w-full">
              {showData.map((subJourney, idx) => (
                <Accordion2
                  key={idx}
                  id={idx.toString()}
                  title={subJourney.title}
                  summary=""
                >
                  {subJourney.content.map(({ title, list }, idx) => (
                    <div key={idx}>
                      {title !== "hidden" ? (
                        <h4 className="text-base -mx-4">{title}</h4>
                      ) : (
                        ""
                      )}

                      <ul
                        className={`mb-4 ${
                          title !== "hidden"
                            ? "list-disc text-sm"
                            : "-mx-4 text-xs"
                        } `}
                      >
                        {list.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </Accordion2>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

Stages.propTypes = {
  /**
   * json formatted array of data/links as per journeyEN.json or journeyFR.json
   */
  journeys: PropTypes.array.isRequired,
  /**
   * select label
   */
  labelText: PropTypes.string.isRequired,
  /**
   * select label
   */
  selectPlaceholder: PropTypes.string.isRequired,
};
