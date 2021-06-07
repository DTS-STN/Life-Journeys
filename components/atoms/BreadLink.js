import propTypes from "prop-types";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export function BreadLink({ url, text, arrow }) {
  return (
    <Link href={url}>
      <a className="underline text-visited-link">
        {arrow && (
          <FontAwesomeIcon
            icon={faAngleRight}
            size="sm"
            color="#333"
            className="mx-4"
          />
        )}

        {text}
      </a>
    </Link>
  );
}

BreadLink.propTypes = {
  // url address
  url: propTypes.string,

  // Text
  text: propTypes.string,

  // should it show an arrow or not
  arrow: propTypes.bool,
};
