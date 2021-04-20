import React from "react";
import PropTypes from "prop-types";
import DropDown from "./DropDown";
import Button from "./Button";

export default function ReportProblem(props) {
  return (
    <div className="pb-6 pt-6">
      <DropDown text="Report a problem or mistake on this page">
        <div className="pt-2">
          <form action="" method="post">
            <div className="container border border-gray-md rounded bg-gray-light-report pb-5">
              <fieldset className="text-left pl-2">
                <legend className="text-center pb-3">
                  <span>
                    <h3>
                      <hr className="border-1 pb-3 border-gray-300" />
                      Please select all that apply:
                    </h3>
                  </span>
                </legend>
                <div className="checkbox-input cursor-pointer appearance-none w-44px h-44px absolute -top-2px -left-2px m-0 z-1">
                  <label for="problem1">
                    <input
                      name="problem1"
                      id="problem1"
                      type="checkbox"
                      value="Yes"
                    />
                    &nbsp;A link, button or video is not working
                  </label>
                  <input name="problem1" type="hidden" value="No" />
                </div>
              </fieldset>
              <div className="text-left pt-8 text-sm font-display">
                <Button text="Submit" />
              </div>
            </div>
          </form>
        </div>
        {/* TO-DO */}
        {/* <h3>Thank you for your help!</h3>
            <p>
              You will not receive a reply. For enquiries,&nbsp;
              <a href="https://www.canada.ca/en/contact/index.html">
                contact us
              </a>
              .
            </p> */}
      </DropDown>
    </div>
  );
}
