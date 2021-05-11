import DateModified from "../atoms/DateModified";
import ReportProblem from "../atoms/ReportProblem";
/**
 * contains the timestamp and other page details just above the footer
 */
export function PageDetails(props) {
  return (
    <div className="container pb-8 pt-8">
      <div className="pb-8">
        <ReportProblem />
      </div>
      <DateModified />
    </div>
  );
}
