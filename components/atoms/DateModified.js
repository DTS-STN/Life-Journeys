import propTypes from "prop-types";

/**
 * Contains build time stamp
 */
export default function DateModified(props) {
  return (
    <div id={props.id}>
      {props.text} {process.env.NEXT_PUBLIC_BUILD_DATE}
    </div>
  );
}

DateModified.defaultProps = {
  id: "date-modified",
  text: "Date Modified:",
};

DateModified.propTypes = {
  // text to be displayed
  text: propTypes.string,

  // id of the element for testing if needed
  id: propTypes.string.isRequired,
};
