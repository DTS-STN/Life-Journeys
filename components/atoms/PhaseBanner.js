import React from "react";
import PropTypes from "prop-types";

/**
 * Displays the PhaseBanner on the page
 */

export const PhaseBanner = ({ phase, children, link, linkText }) => {
  return (
    <div className="bg-circle-color">
      <div className="flex py-4 layout-container">
        <div className="flex-container">
          <div className="mb-3 py-1 font-body text-xs leading-5 h-full sm:text-sm sm:leading-5 font-black tracking-normal border-2 border-black px-2 bg-white text-circle-color w-max">
            {phase}
          </div>
          <div className="mb-3 underline text-white">
            <a href={link}>{linkText}</a>
          </div>
        </div>
        <p className="font-body text-white block text-xs break-words pt-1">
          {children}
        </p>
      </div>
    </div>
  );
};

PhaseBanner.propTypes = {
  /**
   * Phase stage in the PhaseBanner
   */
  phase: PropTypes.string.isRequired,
  /**
   * Link back to projects
   */
  link: PropTypes.string.isRequired,
  /**
   * Text for link
   */
  linkText: PropTypes.string.isRequired,
  /**
   * Phase stage in the PhaseBanner
   */
  children: PropTypes.string.isRequired,
};

export default PhaseBanner;
