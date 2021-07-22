import PropTypes from "prop-types";
import sitesEN from "../../pages/api/provincialSitesEN";
import sitesFR from "../../pages/api/provincialSitesFR";

/**
 *  This component creates a link to a provincial website based on the user's region OR a google search query with the provided text
 */

export default function ResourceLink(props) {
  const links = props.language === "en" ? sitesEN : sitesFR;
  const filteredLinks = links.find((link) => link.value === props.region);
  const googleSearch = "https://google.ca/search?q="
    .concat(props.text)
    .replace(/\s/g, "+");

  return props.isProvincialLink ? (
    <div className="flex flex-wrap">
      {filteredLinks.sites.map(({ label, link }) => (
        <div key={link} className={props.className}>
          <a
            href={link}
            className="underline w-full text-sm sm:text-h6 font-display"
            id={props.id}
            target="_blank"
            rel="noopener noreferrer"
          >
            {label}
          </a>
          {" ➜"}
        </div>
      ))}
    </div>
  ) : (
    <div className="flex flex-wrap">
      <div className={props.className}>
        <a
          className="underline w-full text-sm sm:text-h6 font-display"
          id={props.id}
          target="_blank"
          rel="noopener noreferrer"
          href={googleSearch}
        >
          {props.text}
        </a>
        {" ➜"}
      </div>
    </div>
  );
}

ResourceLink.defaultProps = {
  id: "resourceLink",
  className:
    "mt-4 w-max text-custom-blue-dark cursor-pointer hover:text-custom-blue-link focus:ring-1 focus:ring-black focus:ring-offset-1 focus:text-custom-blue-link",
};

ResourceLink.propTypes = {
  /**
   * The language of the page to show, required for provincial link
   */
  language: PropTypes.string,
  /**
   * Identify which region user is in to determine which page to show, required for provincial link
   */
  region: PropTypes.string,
  /**
   * Boolean to determine if link will pull from JSON or search google
   */
  isProvincialLink: PropTypes.bool.isRequired,
  /**
   * Text that will be searched in google, required if link will be a google search
   */
  text: PropTypes.string,
  /**
   * Identify which element is being clicked
   */
  id: PropTypes.string,
  /**
   * CSS overrides for the element
   */
  className: PropTypes.string,
};
