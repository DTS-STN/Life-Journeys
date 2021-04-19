import PropTypes from "prop-types";

/**
 * Dropdown component
 */

export function DropDown(props) {
  return (
    <button className="focus:outline-none" id={props.id}>
      <details>
        <summary className="pt-3 pb-3 pr-8 pl-8 border border-gray-md rounded bg-gray-light-report text-custom-blue-dark list-item focus:outline-none">
          {props.text}
        </summary>
        {props.children}
      </details>
    </button>
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
