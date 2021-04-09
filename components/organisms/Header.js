import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";

const headerLogo = "/images/sig-blk-en.svg";

export function Header(props) {
  return (
    <div className="w-full flex flex-col mt-2 mb-2 border-b-2 border-gray-400">
      <div className="w-full flex justify-center">
        <div className="w-full md:w-2/3 ml-2 md:ml-0 mr-2 md:mr-0 flex justify-between items-center md:items-start mb-2">
          <Image
            className={"w-40 md:w-64"}
            src={headerLogo}
            alt={props.headerCanadaCaAltText}
            height={36}
            width={360}
          />
          <Link href="#">
            <a id={"language-link"} onClick={props.onLanguageClick}>
              {props.language}
            </a>
          </Link>
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
