import propTypes from "prop-types";

/**
 * Contains build time stamp
 */
export default function DateModified(props) {
  return (
    <dl id={props.id} className="mt-8 py-2 font-body font-normal text-sm">
      <dt className="inline">{props.text}</dt>
      <dd className="inline">{process.env.NEXT_PUBLIC_BUILD_DATE}</dd>
    </dl>
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
