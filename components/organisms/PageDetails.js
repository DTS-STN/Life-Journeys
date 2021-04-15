import DateModified from "../atoms/DateModified";
/**
 * contains the timestamp and other page details just above the footer
 */
export default function PageDetails(props) {
  return (
    <div className="container">
      <DateModified />
    </div>
  );
}
