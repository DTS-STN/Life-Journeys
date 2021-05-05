import ResourceCard from "../atoms/ResourceCard";
import PropTypes from "prop-types";

/**
 *  Available Resources Component
 */
export default function AvailableResources(props) {
  return (
    <div className="pt-3">
      <p className="text-h4 font-display font-bold">{props.title}</p>
      <div className="mt-4 mb-4 pt-2 grid lg:grid-cols-4 grid-flow-row gap-3">
        <ResourceCard title="test1" image="/images/family.png" imgalt="test" />
        <ResourceCard title="test1" image="/images/family.png" imgalt="test" />
        <ResourceCard title="test1" image="/images/family.png" imgalt="test" />
        <ResourceCard title="test1" image="/images/family.png" imgalt="test" />
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
