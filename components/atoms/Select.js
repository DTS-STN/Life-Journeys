import propTypes from "prop-types";

export default function Select(props) {
  return (
    <label className="text-base px-3">
      Showing top requests for
      <select
        defaultValue={props.defaultValue}
        className="ml-2 mb-2 py-1 px-2 shadow-inner w-36 overflow-ellipsis border border-black rounded-xl focus-visible:outline-none focus:ring-black focus:ring-1 transition-shadow duration-300 focus:w-auto"
        name={props.name}
        onChange={(e) => props.onChange(e.currentTarget.value)}
      >
        {props.options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
        <option value="CAN" hidden>
          Canada
        </option>
      </select>
    </label>
  );
}

Select.propTypes = {
  //callback function for when the value changes
  onChange: propTypes.func,

  //name field for select element
  name: propTypes.string,

  //options object for select element
  options: propTypes.arrayOf(Object),

  //default value for select element
  defaultValue: propTypes.string,
};
