import PropTypes from "prop-types";
import { Accordion2 } from "../atoms/Accordion2";
import { useState, useRef } from "react";
/**
 *  Stages Component
 */

const stagesImg = "/images/stages.png";

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
    <div className="p-4">
      <div className="flex flex-col sm:flex-wrap sm:flex-row justify-center">
        <div className="w-full text-center">
          <label className="text-custom-blue-reportButton pr-4" htmlFor="stage">
            Journey stage:
          </label>

          <select
            className="w-auto h-8 rounded border bg-white border-custom-blue-reportButtonActive my-2"
            id="stage"
            onChange={onChangeHandler}
          >
            <option key="0" value="0" defaultValue hidden>
              -select-
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
            <img src={stagesImg} alt="" />
          ) : (
            <div className="subJourneys mt-6 w-full">
              {showData.map((subJourney, idx) => (
                <Accordion2
                  key={idx}
                  id={idx.toString()}
                  title={subJourney.title}
                  summary=""
                >
                  {subJourney.content}
                </Accordion2>
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
