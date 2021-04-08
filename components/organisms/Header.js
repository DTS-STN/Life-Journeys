import React from "react";
import PropTypes from "prop-types";
import { ActionButton } from "../atoms/ActionButton";
import headerLogo from "../../assets/images/sig-blk-en.svg";

export function Header(props) {
  return (
    <div className="w-full flex flex-col mt-2 mb-2">
      <div className="w-full flex justify-center">
        <div className="w-full md:w-2/3 ml-2 md:ml-0 mr-2 md:mr-0 flex justify-between items-center md:items-start mb-2">
          <img
            className={"w-40 md:w-64"}
            src={headerLogo}
            alt={props.headerCanadaCaAltText}
          />
          <ActionButton
            invert
            id={"language-button"}
            text={props.language}
            onClick={props.onLanguageClick}
          />
        </div>
      </div>
      <div className="w-full flex justify-center items-center h-10 bg-header-blue">
        <div className="w-full md:w-2/3 flex justify-between items-center">
          <h1
            className="font-medium text-white ml-2 md:m-0 text-3xl"
            style={{
              fontFamily: '"Noto Sans",sans-serif',
            }}
          >
            {props.siteTitle}
          </h1>
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {
  /**
   * onClick handler for language button
   */
  onLanguageClick: PropTypes.func.isRequired,

  /**
   * header logo alt text
   */
  headerCanadaCaAltText: PropTypes.string.isRequired,

  /**
   * language to be displayed on button
   */
  language: PropTypes.string.isRequired,

  /**
   * title of the site
   */
  siteTitle: PropTypes.string.isRequired,
};
