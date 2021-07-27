import PropTypes from "prop-types";
import { Accordion2 } from "../atoms/Accordion2";
import { useState } from "react";
/**
 *  Stages Component
 */

const stagesImg = "/images/stages.png";

export default function Stages2(props) {
  const [showData, setShowData] = useState();

  function onChangeHandler(option) {
    props.journeys.map((journey) =>
      journey.titleId === option.currentTarget.value
        ? setShowData(journey.subJourney)
        : null
    );
  }

  return (
    <div className="p-4">
      <div className="flex flex-col sm:flex-wrap sm:flex-row justify-center">
        <div className="w-full">
          <label className="text-custom-blue-reportButton pr-4" htmlFor="stage">
            Journey stage:
          </label>

          <select
            className="w-auto h-8 rounded border bg-white border-custom-blue-reportButtonActive mt-2"
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
            <div className="mt-0 pt-1 w-full">
              {showData.map((subJourney, idx) => (
                <Accordion2
                  key={idx}
                  id={idx.toString()}
                  title={subJourney.title}
                  summary=""
                >
                  {subJourney.content.map(({ title, list }) => (
                    <div>
                      <h4 className="text-base -mx-4">{title}</h4>
                      <ul className="text-sm list-disc mb-4">
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

Stages2.propTypes = {
  /**
   * json formatted array of data/links as per journey.json
   */
  journeys: PropTypes.array.isRequired,
};
