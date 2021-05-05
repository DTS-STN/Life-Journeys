import ResourceCard from "../atoms/ResourceCard";
import PropTypes from "prop-types";

/**
 *  Available Resources Component
 */
export default function AvailableResources(props) {
  return (
    <div className="pt-3">
      <h4>{props.title}</h4>
      <div className="mt-4 mb-4 pt-2 grid lg:grid-cols-4 grid-flow-row gap-3">
        <ResourceCard title="test1" image="/images/family.png" imgalt="test1" />
        <ResourceCard title="test1" image="/images/family.png" imgalt="test1" />
        <ResourceCard title="test1" image="/images/family.png" imgalt="test1" />
        <ResourceCard title="test1" image="/images/family.png" imgalt="test1" />
      </div>
    </div>
  );
}

ResourceCard.propTypes = {
  /**
   * The title for the card
   */
  title: PropTypes.string.isRequired,
};
