import PropTypes from "prop-types";

/**
 * Dropdown component
 */

export default function DropDown(props) {
  return (
    <details className="inline-flex pb-4">
      <summary
        className={
          "hover:bg-gray-md text-sm pt-2.5 pb-2.5 pr-5 pl-5 border border-gray-md rounded bg-gray-light-report text-custom-blue-reportButton list-item focus:outline-none cursor-pointer"
        }
      >
        {props.text}
      </summary>
      {props.children}
    </details>
  );
}

DropDown.propTypes = {
  /**
   * Text that will show on the drop down
   */
  text: PropTypes.string.isRequired,

  /**
   * Identify which button is being clicked
   */
  id: PropTypes.string,
  /**
   * CSS overrides for dropdown
   */
  className: PropTypes.string,
  /**
   * any other elements you want
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};
