import PropTypes from "prop-types";
import sitesEN from "../../pages/api/provincialSitesEN";
import sitesFR from "../../pages/api/provincialSitesFR";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 *  This component creates a link to a provincial website based on the user's region
 */

export default function ProvincialLink(props) {
  const links = props.language === "en" ? sitesEN : sitesFR;
  const filteredLink = links.find((link) => link.value === props.region);

  return (
    <div className="mt-4 mb-4 pb-2 pt-2 px-3 w-max text-custom-blue-dark cursor-pointer underline hover:text-custom-blue-link focus:underline focus:text-custom-blue-link focus:ring-1 focus:ring-black focus:ring-offset-1">
      <a
        href={filteredLink.label}
        key={filteredLink.value}
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
    </div>
  );
}

ProvincialLink.propTypes = {
  /**
   * The language of the page to show
   */
  language: PropTypes.string.isRequired,
  /**
   * Identify which region user is in to determine which page to show
   */
  region: PropTypes.string.isRequired,
  /**
   * Text for the link
   */
  text: PropTypes.string.isRequired,
  /**
   * Identify which element is being clicked
   */
  id: PropTypes.string,
};
