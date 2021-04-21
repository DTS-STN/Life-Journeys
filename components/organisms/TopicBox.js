import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/**
 *  Topic Box Component
 */
export default function TopicBox(props) {
  return (
    <div className="shadow-lg h-96 w-96 rounded-md border-2 pl-2">
      <div className="grid grid-cols-3 grid-flow-row">
        <div className="col-span-2">
          <h3 className="pt-2 pb-2 font-extrabold">{props.title}</h3>
        </div>
        <div className="col-span-1 pt-2">
          <Image
            src={props.image}
            alt={props.imgalt}
            width={73}
            height={73}
          ></Image>
        </div>
      </div>
      <p>{props.title}</p>
      <br />
      <p>{props.body}</p>
      <br />
      <p className="font-bold">Find information about</p>
      <div className="flex flex-wrap gap-2 pb-1">
        {props.subtopics.map((d) => (
          <div className="h-auto w-auto rounded-md border-2 pl-2 pr-2">
            <p>{d}</p>
          </div>
        ))}
      </div>
      <br />
      <Link href={props.url}>
        <a className="font-bold">
          {" "}
          Explore this journey{" "}
          <FontAwesomeIcon icon={faArrowAltCircleRight} color="#2B4380" />
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
   * Test id for cypress test
   */
  dataCy: PropTypes.string,
  /**
   * array of subtopics to be listed
   */
  subtopics: PropTypes.array.string,
};
