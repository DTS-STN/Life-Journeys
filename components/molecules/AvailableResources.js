import ResourceCard from "../atoms/ResourceCard";
/**
 *  Available Resources Component
 */
export default function AvailableResources(props) {
  return (
    <div className="mt-4 mb-4 pb-2 pt-2 grid grid-cols-3 grid-flow-row gap-3">
      <ResourceCard title="test1" image="/images/family.png" imgalt="test1" />
      <ResourceCard title="test1" image="/images/family.png" imgalt="test1" />
      <ResourceCard title="test1" image="/images/family.png" imgalt="test1" />
      <ResourceCard title="test1" image="/images/family.png" imgalt="test1" />
    </div>
  );
}
