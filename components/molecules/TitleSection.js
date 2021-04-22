import PropTypes from "prop-types";
import { HorizontalRule } from "../atoms/HorizontalRule";
/**
 *  page title section
 */
export default function TitleSection(props) {
  return (
    <div>
      <h2 className="pb-2 pt-6">{props.title}</h2>
      <HorizontalRule />
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
