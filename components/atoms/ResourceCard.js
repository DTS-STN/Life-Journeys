import Image from "next/image";
import PropTypes from "prop-types";

/**
 *  Available Resources Card Component
 */
export default function ResourceCard(props) {
  return (
    <div className="md:shadow-lg h-20 w-auto rounded-md border-2 pl-2">
      <div className="grid grid-cols-2 grid-flow-row">
        <div className="flex items-center justify-start col-span-1">
          <Image
            src={props.image}
            alt={props.imgalt}
            width={80}
            height={80}
          ></Image>
        </div>
        <span className="flex items-center justify-start">
          <h5>{props.title}</h5>
        </span>
      </div>
    </div>
  );
}

ResourceCard.propTypes = {
  /**
   * The title for the card
   */
  title: PropTypes.string.isRequired,
  /**
   * image path
   */
  image: PropTypes.string,
  /**
   * image alt
   */
  imgalt: PropTypes.string,
};
