import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";
import styles from "../layout.module.css";

const footerImage = "/images/wmms-blk.svg";

/**
 * container for footer navigation
 */
export function FooterBox(props) {
  return (
    <footer className="w-full mt-2">
      <div
        className={`w-full h-40 flex flex-col md:flex-row justify-center items-center ${styles.bgFooterBlue} bg-no-repeat bg-right-bottom text-white ${styles.landscape}`}
      >
        {props.children}
      </div>

      <div
        className={`w-full h-auto flex flex-col md:flex-row justify-center items-center ${styles.bgFooterWhite}`}
      >
        <nav className="w-auto flex flex-col md:flex-row">
          <Link href={props.socialmediaLink}>
            <a
              href={props.socialmediaLink}
              className={`${styles.textCanadaLinkColour} p-2 md:p-4 hover:underline`}
            >
              {props.socialmediaText}
            </a>
          </Link>
          <Link href={props.mobileLink}>
            <a
              href={props.mobileLink}
              className={`${styles.textCanadaLinkColour} p-2 md:p-4 hover:underline`}
            >
              {props.mobileText}
            </a>
          </Link>
          <Link href={props.aboutLink}>
            <a
              href={props.aboutLink}
              className={`${styles.textCanadaLinkColour} p-2 md:p-4 hover:underline`}
            >
              {props.aboutText}
            </a>
          </Link>
          <Link href={props.termsAndConditionsLink}>
            <a
              href={props.termsAndConditionsLink}
              className={`${styles.textCanadaLinkColour} p-2 md:p-4 hover:underline`}
            >
              {props.termsAndConditionsText}
            </a>
          </Link>
          <Link href={props.privacyLink}>
            <a
              href={props.privacyLink}
              className={`${styles.textCanadaLinkColour} p-2 md:p-4 hover:underline`}
            >
              {props.privacyText}
            </a>
          </Link>
        </nav>

        <Image
          className="ml-0 md:ml-32"
          src={footerImage}
          width={200}
          height={200}
          alt={props.footerCanadaCaAltText}
        />
      </div>
    </footer>
  );
}

FooterBox.propTypes = {
  /**
   * children elements of the box
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),

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
};
