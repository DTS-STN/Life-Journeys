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
        className="bg-cover bg-no-repeat xxs:bg-center bg-right h-full md:bg-banner-img md:py-10 xxs:bg-banner-img-mobile"
      >
        <div className="lg:container lg:px-8 xxl:mx-auto xxs:pl-4 lg:py-10 xxs:pt-8">
          <p className="md:text-h1l text-h1 font-bold font-display py-20 md:py-8 break-words xxs:pb-4">
            {headline}
          </p>
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
