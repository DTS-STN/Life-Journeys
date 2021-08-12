import PropTypes from "prop-types";

/**
 *  Card Component
 */

export default function Card(props) {
  return (
    <div className="text-black text-left card rounded-tl-md rounded-b-md border my-6 mx-4">
      <a
        target="_blank"
        rel="noopener noreferrer external"
        aria-label={props.links[0].ariaLabel}
        href={props.links[0].url}
      >
        <div>
          <img
            src={props.image}
            alt={props.imgalt}
            width={252}
            height={101}
            layout="intrinsic"
          />
        </div>

        <h4 className="text-h3-tall pt-2 pl-2" style={{ minHeight: 80 + "px" }}>
          {props.title}
        </h4>

        <p className="px-2 pb-4 text-sm" style={{ minHeight: 50 + "px" }}>
          {props.service}
        </p>
      </a>
    </div>
  );
}

Card.propTypes = {
  /**
   * Titles for topic box tile
   */
  title: PropTypes.string.isRequired,
  /**
   * Department/Agency/Service that offers the 'title'
   */
  service: PropTypes.string.isRequired,
  /**
   * background image for the card
   */
  image: PropTypes.string.isRequired,
  /**
   * image alt text
   */
  imgalt: PropTypes.string.isRequired,
  /**
   * array of links in the follwoing format [{"text": "click text", "url":"the url to visit"}, "ariaLabel":provides a description of the link for a11y  ]
   */
  links: PropTypes.array,
  /**
   * this is just to force a reload
   */
  region: PropTypes.string,
};
