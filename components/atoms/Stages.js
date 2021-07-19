import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";

/**
 *  Stages Component
 */

export default function Stages(props) {
  return (
    <div className="bg-image flex flex-col sm:flex-wrap sm:flex-row justify-center border border-black">
      {props.journeys.map((journey, idx) => (
        <div
          key={idx}
          className="h-46px card my-6 mx-4 pt-3 rounded font-body text-sm text-center text-white cursor-pointer border journeyButton"
        >
          {journey.title}
        </div>
      ))}

      {/* TODO */}

      {/* <div className="subJourneys">
        <ul className="flex items-center justify-center pb-4">
          {props.journeys.map((journey, idx) => (
            <li key={idx} className="w-auto text-blue-800 text-sm px-3">
              <button className="bg-purple-400">
                {journey.title}
              </button>
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
}

Stages.propTypes = {
  /**
   * json formatted array of data/links as per journey.json
   */
  journeys: PropTypes.array.isRequired,
};
