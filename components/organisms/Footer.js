import React from "react";
import PropTypes from "prop-types";
import { FooterBox } from "../atoms/FooterBox";
import { FooterLinks } from "../atoms/FooterLinks";

/**
 * footer element for all pages
 */

export function Footer(props) {
  return (

    <div className="par iparys_inherited">
      <div className="global-footer">
        <footer id="wb-info">

          <Landscape />
          <WoodMark />

        </footer>
      </div>
    </div>


    // <div className="w-full flex flex-col flex-grow justify-end">
    //   <FooterBox
    //     socialmediaLink={props.socialmediaLink}
    //     socialmediaText={props.socialmediaText}
    //     mobileLink={props.mobileLink}
    //     mobileText={props.mobileText}
    //     aboutLink={props.aboutLink}
    //     aboutText={props.aboutText}
    //     termsAndConditionsLink={props.termsAndConditionsLink}
    //     termsAndConditionsText={props.termsAndConditionsText}
    //     privacyLink={props.privacyLink}
    //     privacyText={props.privacyText}
    //     footerCanadaCaAltText={props.footerCanadaCaAltText}
    //   >
    //     <FooterLinks links={props.links} />
    //   </FooterBox>
    // </div>
  );
}

Footer.propTypes = {
  /**
   * Social Media link href
   */

  socialmediaLink: PropTypes.string.isRequired,

  /**
   * text that is displayed for Social Media
   */
  socialmediaText: PropTypes.string.isRequired,

  /**
   * Mobile link href
   */
  mobileLink: PropTypes.string.isRequired,

  /**
   * text that is displayed for Mobile
   */
  mobileText: PropTypes.string.isRequired,

  /**
   * About link href
   */
  aboutLink: PropTypes.string.isRequired,

  /**
   * text that is displayed for About
   */
  aboutText: PropTypes.string.isRequired,

  /**
   * terms and conditions href
   */
  termsAndConditionsLink: PropTypes.string.isRequired,

  /**
   * text that is displayed for terms and conditions link
   */
  termsAndConditionsText: PropTypes.string.isRequired,

  /**
   * privacy link href
   */
  privacyLink: PropTypes.string.isRequired,

  /**
   * text that is displayed for privacy link
   */
  privacyText: PropTypes.string.isRequired,

  /**
   * alt text for footer canada-ca logo
   */
  footerCanadaCaAltText: PropTypes.string.isRequired,
  /**
   * array of objects containing the link text and link
   */
  links: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      linkText: PropTypes.string.isRequired,
    })
  ),
};
