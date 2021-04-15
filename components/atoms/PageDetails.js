import React from "react";
import DateModified from "./DateModified";
import ReportProblem from "./ReportProblem";
import WbShare from "./WbShare";

class PageDetails extends React.Component {
  render() {
    return (
      <div className="pagedetails">
        <div className="row">
          <div className="col-sm-6 col-md-5 col-lg-4">
            <ReportProblem />
          </div>
          <div className="col-sm-4 col-md-3 col-sm-offset-2 col-md-offset-4 col-lg-offset-5">
            <WbShare />
          </div>
        </div>

        <DateModified />
      </div>
    );
  }
}

export default PageDetails;
