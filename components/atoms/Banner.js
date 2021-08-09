import React from "react";
import PropTypes from "prop-types";

/**
 * Displays the banner on the page
 */

export const Banner = ({ headline }) => {
  return (
    <div className="bg-banner-green">
      <div
        title="Life Journeys Banner"
        className="bg-cover bg-no-repeat xxs:bg-center bg-right h-full lg:bg-banner-img md:pt-16 lg:pt-4 lg:py-7 xxs:bg-banner-img-mobile"
      >
        <div className="lg:container xxl:px-8 lg:px-4 xxl:mx-auto xxs:pl-4 lg:py-14 xxs:pt-8">
          <h1
            className="lg:text-h1l text-h1 font-bold font-display py-20 lg:py-9 break-words xxs:pb-4"
            id="wb-cont"
            tabIndex="-1"
          >
            {headline}
          </h1>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  /**
   * text area for headline in the banner
   */
  headline: PropTypes.string.isRequired,
};

export default Banner;
