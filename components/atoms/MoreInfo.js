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
    <div className="pb-2 pt-2">
      <div className="pb-2 pt-2 px-3 border border-custom-blue-dark rounded text-custom-blue-dark cursor-pointer hover:bg-gray-light-report focus:ring-1 focus:ring-black focus:ring-offset-1 active:bg-gray-active">
        <Link href={googleSearch}>
          <a className="block w-full text-h6 font-display" id={props.id}>
            {props.text}
            <span className="ml-3">
              <FontAwesomeIcon icon={faArrowAltCircleRight} color="#26374A" />
            </span>
          </a>
        </Link>
      </div>
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
