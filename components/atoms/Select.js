import propTypes from "prop-types";

export default function Select(props) {
  return (
    <label className="font-body text-custom-blue-reportButton text-black text-base px-3">
      {props.label}
      <select
        defaultValue={props.defaultValue}
        className="text-black ml-2 px-2 focus:shadow-blue shadow-inner h-8 rounded border bg-white border-gray-400 mt-2 overflow-ellipsis focus:border-custom-blue-focus focus-visible:outline-none w-auto"
        name={props.name}
        onChange={(e) => props.onChange(e.currentTarget.value)}
        autoComplete="off"
      >
        {props.options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </label>
  );
}

Select.propTypes = {
  //label for select element
  label: propTypes.string,

  //callback function for when the value changes
  onChange: propTypes.func,

  //name field for select element
  name: propTypes.string,

  //options object for select element
  options: propTypes.arrayOf(Object),

  //default value for select element
  defaultValue: propTypes.string,
};
