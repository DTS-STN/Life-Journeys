import PropTypes from "prop-types";

/**
 * Dropdown component
 */

export default function Details(props) {
  return (
    <details>
      <summary className="h-auto xl:h-46px max-w-350px w-full bg-details-button-gray focus:ring-black focus:ring-inset-1 focus:ring-2 active:bg-details-button-active-gray hover:bg-details-button-hover-gray rounded py-12px px-5px font-body text-sm text-center text-custom-blue-reportButton list-item cursor-pointer border border-outset border-details-button-gray">
        {props.text}
      </summary>
      <div className="max-w-350px w-full min-h-200px bg-gray-light-200 mt-1 p-15px border border-details-border-gray rounded ring-inset ring-1 ring-gray-light-200">
        {props.children}
      </div>
    </details>
  );
}

Details.propTypes = {
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
