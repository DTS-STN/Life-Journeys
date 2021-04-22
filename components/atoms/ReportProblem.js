import { useState } from "react";
import DropDown from "./DropDown";

export default function ReportProblem() {
  const [submitted, setSubmitted] = useState(false);

  let onSubmitHandler = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <DropDown text="Report a problem or mistake on this page">
      {submitted ? (
        <>
          <div className="pt-2"></div>
          <div className="pb-2.5 pr-5 pl-5 text-center border border-gray-md rounded bg-gray-light-report">
            <h3 className="font-body mb-4">Thank you for your help!</h3>
            <p className="font-body pl-3.5 text-left mb-4 w-56">
              You will not receive a reply. For enquiries, please&nbsp;
              <a href="https://www.canada.ca/en/contact/index.html">
                contact us
              </a>
              .
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="pt-2">
            <form action="#" onSubmit={onSubmitHandler}>
              <div className="container-sm border border-gray-md rounded bg-gray-light-report pb-5">
                <fieldset>
                  <legend className="text-center pb-3">
                    <span>
                      <h3>Please select all that apply:</h3>
                    </span>
                  </legend>
                  <div className="pl-5">
                    <div className="checkbox-input w-15 cursor-pointer appearance-none w-44px h-44px absolute -top-2px -left-2px m-0 z-1">
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
                  </div>
                </fieldset>
                <div className="text-left pl-2 pt-8 text-sm font-display">
                  <button className="bg-custom-blue-dark pb-1.5 pt-1.5 px-3 ml-2 rounded text-white hover:bg-custom-blue-canadaLight border border-custom-blue-dark">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </>
      )}
    </DropDown>
  );
}
