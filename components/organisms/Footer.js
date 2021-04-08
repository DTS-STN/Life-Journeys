import React from "react";
import PropTypes from "prop-types";
import { FooterBox } from "../molecules/FooterBox";
import { FooterLinks } from "../molecules/FooterLinks";

/**
 * footer element for all pages
 */

export function Footer(props) {
  return (
    <div className="w-full flex flex-col flex-grow justify-end">
      <FooterBox
        contactLink={props.contactLink}
        contactText={props.contactText}
        termsAndConditionsLink={props.termsAndConditionsLink}
        termsAndConditionsText={props.termsAndConditionsText}
        privacyLink={props.privacyLink}
        privacyText={props.privacyText}
        footerCanadaCaAltText={props.footerCanadaCaAltText}
      >
        <FooterLinks links={props.links} />
      </FooterBox>
    </div>
  );
}

Footer.propTypes = {
  /**
   * contact link href
   */
  contactLink: PropTypes.string.isRequired,

  /**
   * text that is displayed for contact link
   */
  contactText: PropTypes.string.isRequired,

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
