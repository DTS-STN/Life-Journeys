import Image from "next/image";
import PropTypes from "prop-types";

/**
 *  Available Resources Card Component
 */
export default function ResourceCard(props) {
  return (
    <div className="md:shadow-lg h-20 w-auto rounded-md border-2 pl-2">
      <div className="grid grid-cols-2 grid-flow-row">
        <div className="pt-1 col-span-1 xxl:ml-8">
          <Image
            src={props.image}
            alt={props.imgalt}
            width={60}
            height={60}
          ></Image>
        </div>
        <div className="pt-1 col-span-1">
          <h2 className="text-h3">{props.title}</h2>
        </div>
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
