import PropTypes from "prop-types";
/**
 *  page title section
 */
export default function TitleSection(props) {
  return (
    <div>
      <h2 className="pb-2 font-bold">{props.title}</h2>
      <hr className="border-red-800 border-2"></hr>
      <p className="pt-4 pb-6">{props.description}</p>
    </div>
  );
}

TitleSection.propTypes = {
  /**
   * Titles for topic box tile
   */
  title: PropTypes.string.isRequired,
  /**
   * Body for topic tile
   */
  description: PropTypes.string.isRequired,
};
