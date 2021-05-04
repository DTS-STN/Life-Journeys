// import Link from "next/link";
// import PropTypes from "prop-types";
// import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 *  Available Resources Component
 */

export default function AvailableResources(props) {
  return (
    <div className="mt-4 mb-4 pb-2 pt-2 px-3 border border-custom-blue-dark rounded text-custom-blue-dark cursor-pointer hover:bg-gray-light-report focus:ring-1 focus:ring-black focus:ring-offset-1 active:bg-gray-active">
      Available Resources
    </div>
  );
}

AvailableResources.propTypes = {
  // /**
  //  * Text that will show on the drop down
  //  */
  // text: PropTypes.string.isRequired,
  // /**
  //  * Identify which element is being clicked
  //  */
  // id: PropTypes.string,
};
