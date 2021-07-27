import PropTypes from "prop-types";
import { useState, useRef } from "react";
/**
 *  Stages Component
 */

export default function Stages(props) {
  // const { items } = useContext(LanguageContext);
  // const language = items.language;
  // const t = language === "en" ? en : fr;

  const [showFlag, setShowFlag] = useState(false);
  const subJourneyData = useRef();

  function onClickHandler(data) {
    subJourneyData.current = data;
    setShowFlag(true);
  }

  return (
    <div className="bg-image flex flex-col sm:flex-wrap sm:flex-row justify-center border border-black">
      {showFlag === false ? (
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
        <div>
          <ul className="flex flex-col sm:flex-wrap sm-flex-row items-center justify-center pb-4">
            {subJourneyData.current.map((subJourney, idx) => (
              <li key={idx} className="w-auto text-blue-800 text-sm px-3">
                <button className="bg-purple-400 h-46px card my-6 mx-1 pt-2 rounded font-body text-sm text-center">
                  Sub{subJourney.title}
                </button>
                <p>{subJourney.content}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

Stages.propTypes = {
  /**
   * json formatted array of data/links as per journey.json
   */
  journeys: PropTypes.array.isRequired,
};
