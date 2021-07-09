import Link from "next/link";
import PropTypes from "prop-types";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 *  More Information Component
 */

export default function MoreInfo(props) {
  const googleSearch = "https://google.ca/search?q="
    .concat(props.text)
    .replace(/\s/g, "+");

  return (
    <div className="mt-4 mb-4 pb-2 pt-2 px-3 w-max text-custom-blue-dark cursor-pointer underline hover:text-custom-blue-link focus:ring-1 focus:ring-black focus:ring-offset-1 focus:underline focus:text-custom-blue-link">
      <Link href={googleSearch}>
        <a
          className="block w-full text-h6 font-display"
          id={props.id}
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.text}
          <span className="ml-3">
            <FontAwesomeIcon icon={faArrowAltCircleRight} color="#26374A" />
          </span>
        </a>
      </Link>
    </div>
  );
}

MoreInfo.propTypes = {
  /**
   * Text that will show on the drop down
   */
  text: PropTypes.string.isRequired,
  /**
   * Identify which element is being clicked
   */
  id: PropTypes.string,
};
