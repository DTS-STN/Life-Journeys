import React from "react";
import PropTypes from "prop-types";

/**
 * Displays the PhaseBanner on the page
 */

export const PhaseBanner = ({ phase, children, link, linkText, locale }) => {
  return (
    <div className="bg-circle-color">
      <div className="flex py-4 layout-container">
        <div className="flex-container">
          <div className="mb-3 px-4 py-1 font-body text-xs leading-6 font-black tracking-normal bg-white text-circle-color w-max">
            {phase}
          </div>
          <div className="mb-3">
            <a className="underline text-white" href={link}>
              {linkText}
            </a>
          </div>
        </div>
        <p
          className={
            "font-body text-white block text-xs break-words " +
            (locale === "fr" ? "pt-0.5" : "pt-2")
          }
        >
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
  /**
   * language for banner
   */
  locale: PropTypes.string.isRequired,
};

export default PhaseBanner;
