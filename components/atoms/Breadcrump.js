import React from "react";

class Breadcrump extends React.Component {
  render() {
    return (
      <nav id="wb-bc" property="breadcrumb">
        <h2 className="wb-inv">You are here:</h2>
        <div className="container">
          <ol className="breadcrumb">
            <li>
              <a href="https://www.canada.ca/en.html">Home</a>
            </li>
          </ol>
        </div>
      </nav>
    );
  }
}

export default Breadcrump;
