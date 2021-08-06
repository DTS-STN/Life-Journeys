import Image from "next/image";
import PropTypes from "prop-types";

/**
 *  Card Component
 */

export default function Card(props) {
  return (
    <div className="text-black text-left card rounded-tl-md rounded-b-md border my-6 mx-4">
      <div>
        <Image
          src={props.image}
          alt={props.imgalt}
          width={252}
          height={101}
          layout="intrinsic"
        ></Image>
      </div>

      <h2 className="text-h3-tall pt-2 pl-2" style={{ height: 80 + "px" }}>
        {" "}
        {props.title}
      </h2>

      <p className="px-2 pb-4 text-sm" style={{ height: 50 + "px" }}>
        {props.service}
      </p>

      <ul className="flex items-center justify-right pb-4">
        {props.links.map((d, idx) => (
          <li key={idx} className="w-auto text-blue-800 text-sm px-4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
              aria-label={d.text + " " + props.service}
              href={d.url}
            >
              {d.text}
            </a>
          </li>
        ))}
      </ul>
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
   * array of links in the follwoing format [{"text": "click text", "url":"the url to visit"}]
   */
  links: PropTypes.array,
  /**
   * this is just to force a reload
   */
  region: PropTypes.string,
};
