import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
/**
 *  Topic Box Component
 */
export default function TopicBox(props) {
  return (
    <Link href={props.url}>
      <a className="text-black focus-visible:outline-none focus-visible:bg-gray-light-report focus-visible:ring-2 focus-visible:ring-black pl-2 text-left transition duration-500 group md:shadow-lg h-auto w-auto rounded-md border-2 cursor-pointer hover:bg-gray-light-report active:bg-gray-active focus:ring-2 focus:ring-black">
        <div className="relative grid grid-cols-3 grid-flow-col-dense">
          <div className="col-span-2 mt-8 sm:mt-6 lg:mt-6 xs:mt-6">
            <h2 className="text-h3-tall group-hover:underline">
              {props.title}
            </h2>
          </div>
          <div className="absolute inset-y-0 right-0 pt-1 col-span-1">
            <Image
              src={props.image}
              alt={props.imgalt}
              width={73}
              height={73}
              layout="intrinsic"
            ></Image>
          </div>
        </div>
        <p className="pt-4 pb-4">{props.body}</p>
        <h3 className="text-h5 mb-2">{props.findInfo}</h3>{" "}
        <ul className="flex flex-wrap gap-2 pb-2 pr-2">
          {props.subtopics.map((d, idx) => (
            <li
              key={idx}
              className="mr-1 w-auto rounded-md bg-gray-subtopic text-white pl-2 pr-2"
            >
              {d}
            </li>
          ))}
        </ul>
      </a>
    </Link>
  );
}

TopicBox.propTypes = {
  /**
   * Titles for topic box tile
   */
  title: PropTypes.string.isRequired,
  /**
   * Body for topic tile
   */
  body: PropTypes.string.isRequired,
  /**
   * right corner image for topic box tile
   */
  image: PropTypes.string.isRequired,
  /**
   * image alt text
   */
  imgalt: PropTypes.string.isRequired,
  /**
   * Find More Information About
   */
  findInfo: PropTypes.string.isRequired,
  /**
   * link url for topic tile
   */
  url: PropTypes.string.isRequired,
  /**
   * array of subtopics to be listed
   */
  subtopics: PropTypes.array,
};
