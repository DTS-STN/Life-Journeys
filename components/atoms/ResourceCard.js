import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";

/**
 *  Available Resources Card Component
 */
export default function ResourceCard(props) {
  return (
    <div className="md:shadow-lg h-20 w-auto rounded-md border-2 pl-2 cursor-pointer hover:bg-gray-light-report focus:ring-1 focus:ring-black focus:ring-offset-1 active:bg-gray-active">
      <Link href="/">
        <a>
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
              <p className="text-h5 font-display font-bold">{props.title}</p>
            </span>
          </div>
        </a>
      </Link>
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
