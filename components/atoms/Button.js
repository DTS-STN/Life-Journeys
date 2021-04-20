import PropTypes from "prop-types";

/**
 * Button component
 */

export default function Button(props) {
  return (
    <button
      id={props.id}
      className={
        "bg-custom-blue-dark pb-1.5 pt-1.5 px-3 ml-2 rounded text-white hover:bg-custom-blue-canadaLight border border-custom-blue-dark"
      }
    >
      {props.text}
    </button>
  );
}

Button.propTypes = {
  /**
   * Text that will show on the button
   */
  text: PropTypes.string.isRequired,

  /**
   * Identify which button is being clicked
   */
  id: PropTypes.string,
  /**
   * CSS overrides for button
   */
  className: PropTypes.string,
};
