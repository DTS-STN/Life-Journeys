import PropTypes from "prop-types";

export default function Table(props) {
  return (
    <table className="w-full cursor-text text-left">
      <thead className="text-sm font-display">
        <tr>
          <th className="pl-6 pb-2">Thingy</th>
          <th className="text-center pb-2">Stuff to help?</th>
        </tr>
      </thead>
      <tbody className="divide-y-2 divide-gray-light-100 border-2 border-gray-light-100">
        <tr>
          <td className="pl-6 py-4 border-r-2 border-dk-blue">
            <div className="text-h6 font-display">
              {props.r1text}
              <div className="text-sm font-body">{props.r1subtext}</div>
            </div>
          </td>
          <td className="underline text-center bg-gray-light-200">
            <a href="" className="cursor-pointer">
              {props.r1link1}
            </a>
            <br />
            <a href="" className="cursor-pointer">
              {props.r1link2}
            </a>
          </td>
        </tr>
        <tr>
          <td className="pl-6 py-4 border-r-2 border-dk-blue">
            <div className="text-h6 font-display">
              {props.r2text}
              <div className="text-sm font-body">{props.r2subtext}</div>
            </div>
          </td>
          <td className="underline text-center bg-gray-light-200">
            <a href="" className="cursor-pointer">
              {props.r2link}
            </a>
          </td>
        </tr>
        <tr>
          <td className="pl-6 py-4 border-r-2 border-dk-blue">
            <div className="text-h6 font-display">
              {props.r3text}
              <div className="text-sm font-body">{props.r3subtext}</div>
            </div>
          </td>
          <td className="underline text-center bg-gray-light-200">
            <a href="" className="cursor-pointer">
              {props.r3link}
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

Table.propTypes = {
  /**
   * Text that shows up in column 1 row 1
   */
  r1text: PropTypes.string.isRequired,
  /**
   * Subtext that shows up in column 1 row 1
   */
  r1subtext: PropTypes.string,
  /**
   * Link that shows up in column 2 row 1
   */
  r1link1: PropTypes.string,
  /**
   * Link that shows up in column 2 row 1
   */
  r1link2: PropTypes.string,
  /**
   * Text that shows up in column 1 row 2
   */
  r2text: PropTypes.string.isRequired,
  /**
   * Subtext that shows up in column 1 row 2
   */
  r2subtext: PropTypes.string,
  /**
   * Link that shows up in column 2 row 2
   */
  r2link: PropTypes.string,
  /**
   * Text that shows up in column 1 row 3
   */
  r3text: PropTypes.string.isRequired,
  /**
   * Subtext that shows up in column 1 row 3
   */
  r3subtext: PropTypes.string,
  /**
   * Link that shows up in column 2 row 3
   */
  r3link: PropTypes.string,
};
