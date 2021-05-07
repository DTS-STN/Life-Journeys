import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
/**
 *  Topic Box Component
 */
export default function TopicBox(props) {
  return (
    <div className="md:shadow-lg h-auto min-h-96 w-full rounded-md border-2 pl-2 cursor-pointer hover:bg-gray-light-report focus:ring-1 focus:ring-black focus:ring-offset-1 active:bg-gray-active">
      <Link href={props.url}>
        <a>
          <div className="grid grid-cols-3 grid-flow-row">
            <div className="col-span-2 mt-8">
              <h2 className="text-h3">{props.title}</h2>
            </div>
            <div className="pt-1 col-span-1 xxl:ml-8">
              <Image
                src={props.image}
                alt={props.imgalt}
                width={73}
                height={73}
                layout="responsive"
              ></Image>
            </div>
          </div>
          <p className="pb-4">{props.body}</p>
          <h3 className="text-h5 pb-4">Find information about</h3>{" "}
          <ul className="flex flex-wrap gap-2 pb-2">
            {props.subtopics.map((d, idx) => (
              <li
                key={idx}
                className="h-auto w-auto rounded-md border-2 pl-2 pr-2"
              >
                {d}
              </li>
            ))}
          </ul>
        </a>
      </Link>
    </div>
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
   * link url for topic tile
   */
  url: PropTypes.string.isRequired,
  /**
   * array of subtopics to be listed
   */
  subtopics: PropTypes.array,
};
