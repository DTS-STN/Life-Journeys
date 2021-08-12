import PropTypes from "prop-types";

/**
 * text field component
 */
export function TextField(props) {
  const ifControlledProps = !props.uncontrolled
    ? {
        value: props.value,
      }
    : {};
  return (
    <div className="block leading-tight mb-10px">
      <label
        className={`block leading-tight text-sm font-body mb-5px ${
          props.boldLabel ? "font-bold" : ""
        }`}
        htmlFor={props.id}
      >
        {props.label}
      </label>
      <p
        id={props.describedby}
        className="text-xs lg:text-sm mb-5 leading-30px"
      >
        {props.reportAProblemNoPersonalInfo}
      </p>
      <input
        className="text-input font-body w-full min-h-40px rounded shadow-sm text-form-input-gray border border-form-input-border-gray py-6px px-12px"
        aria-describedby={props.describedby}
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        type="text"
        onChange={(e) => props.onChange(e.currentTarget.value)}
        {...ifControlledProps}
      />
    </div>
  );
}

TextField.defaultProps = {
  value: "",
};

TextField.propTypes = {
  /**
   * the id of the text field
   */
  id: PropTypes.string.isRequired,

  /**
   * the name of the text field
   */
  name: PropTypes.string.isRequired,

  /**
   * the label of the text field
   */
  label: PropTypes.string.isRequired,

  /**
   * value of the text field
   */
  value: PropTypes.string.isRequired,

  /**
   * placeholder for the text field,
   */
  placeholder: PropTypes.string,

  /**
   * call back for when the value of the text field changes
   */
  onChange: PropTypes.func,

  /**
   * if label should be bold
   */
  boldLabel: PropTypes.bool,

  /**
   * boolean flag to specify that this input should be uncontrolled by react
   */
  uncontrolled: PropTypes.bool,
  /**
   * aria-describedby label id
   */
  describedby: PropTypes.string,
  /**
   *
   */
  reportAProblemNoPersonalInfo: PropTypes.string,
};
