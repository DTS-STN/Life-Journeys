import PropTypes from "prop-types";
import { Accordion } from "../atoms/Accordion";
import { useState, useRef } from "react";
/**
 *  Stages Component
 */

export default function Stages2(props) {
  // const { items } = useContext(LanguageContext);
  // const language = items.language;
  // const t = language === "en" ? en : fr;

  const [showData, setShowData] = useState();
  const subJourneyData = useRef();

  function onChangeHandler(option) {
    subJourneyData.current = option.currentTarget.value;
    props.journeys.map((journey) =>
      journey.titleId === option.currentTarget.value
        ? setShowData(journey.subJourney)
        : null
    );
  }

  return (
    <div className="bg-circle-color p-4">
      <div className="flex flex-col sm:flex-wrap sm:flex-row justify-center border border-black p-4 ">
        <div className="w-full text-center">
          <label className="text-white pr-4" htmlFor="stage">
            Stage:{" "}
          </label>

          <select
            className="w-auto h-8 rounded"
            id="stage"
            onChange={onChangeHandler}
          >
            <option key="0" value="0" defaultValue>
              Select a stage
            </option>
            {props.journeys.map((journey, idx) => (
              <option key={idx} value={journey.titleId}>
                {journey.title}
              </option>
            ))}
          </select>
        </div>

        <div className="w-full flex flex-col sm:flex-wrap sm:flex-row justify-center ">
          {showData === undefined ? (
            props.journeys.map((journey, idx) => (
              <div
                key={idx}
                className="h-46px card my-6 mx-4 pt-3 rounded font-body text-sm text-center text-white cursor-pointer border journeyButton"
                onClick={() => onClickHandler(journey.subJourney)}
              >
                {journey.title}
              </div>
            ))
          ) : (
            <div className="subJourneys mt-6 bg-white w-full">
              {showData.map((subJourney, idx) => (
                <Accordion
                  key={idx}
                  id={idx.toString()}
                  title={subJourney.title}
                  summary=""
                >
                  {subJourney.content}
                </Accordion>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

Stages2.propTypes = {
  /**
   * json formatted array of data/links as per journey.json
   */
  journeys: PropTypes.array.isRequired,
};
