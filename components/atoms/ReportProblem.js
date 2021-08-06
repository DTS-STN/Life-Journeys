import Details from "./Details";
import { ActionButton } from "./ActionButton";
import { OptionalTextField } from "../molecules/OptionalTextField";
import { useState } from "react";
import { useContext } from "react";
import { LanguageContext } from "../../context/languageProvider";
import en from "../../locales/en";
import fr from "../../locales/fr";

export default function ReportProblem() {
  const [submitted, setSubmitted] = useState(false);
  const { items } = useContext(LanguageContext);
  const language = items.language;
  const t = language === "en" ? en : fr;

  let onSubmitHandler = (e) => {
    // prevent default behaviour of form
    e.preventDefault();
    // create FormData object from form
    const formData = new FormData(e.target);
    // create URLSearchParams object from FormData object
    // this will be used to create url encoded string of names and values of the form fields
    const urlEncoded = new URLSearchParams(formData);
    // call report a problem API route
    fetch("/api/report-a-problem", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: urlEncoded.toString(),
    }).catch((e) => {
      // handle error if fetch fails
      // fetch only fails if there is no internet connection not for the actual
      // request so there is nothing really to do here other than to log it
      console.log(e);
    });

    setSubmitted(true);
  };

  return (
    <Details text={t.reportAProblemButtonString}>
      {submitted ? (
        <>
          <h2 className="text-base font-body mb-4">
            {t.reportAProblemThankYouForYourHelp}
          </h2>
          <p className="text-sm font-body mb-4">
            {t.reportAProblemYouWillNotBeContacted}
          </p>
          <a
            className="underline text-sm font-body hover:text-custom-blue-link focus:text-custom-blue-link text-canada-footer-font"
            href="mailto:experience@servicecanada.gc.ca"
          >
            experience@servicecanada.gc.ca
          </a>
        </>
      ) : (
        <>
          <h2 className="sm:text-h3-tall text-h5 font-display">
            {t.reportAProblemTitle}
          </h2>
          <ul className="list-outside list-disc px-6 pb-2">
            <li className="text-xs sm:text-sm font-body my-4 leading-tight sm:leading-6">
              <b>{t.reportAProblemNoReply}</b>
              {t.reportAProblemEnquiries}
              <a
                className="block text-xs sm:text-sm font-body hover:underline hover:text-custom-blue-link focus:text-custom-blue-link focus:underline text-canada-footer-font"
                href="mailto:experience@servicecanada.gc.ca"
              >
                experience@servicecanada.gc.ca
              </a>
            </li>
            <li className="text-xs sm:text-sm font-body my-2 leading-tight sm:leading-6">
              <b>{t.reportAProblemConfidential}</b>
            </li>
          </ul>
          <a
            className="block text-xs sm:text-sm font-body hover:text-custom-blue-link focus:text-custom-blue-link text-canada-footer-font mb-6 underline"
            href={t.reportAProblemPrivacyStatementLink}
          >
            {t.reportAProblemPrivacyStatement}
          </a>
          <form className="w-full" action="#" onSubmit={onSubmitHandler}>
            <input type="hidden" id="language" name="language" />
            <fieldset>
              <legend className="text-base sm:text-p font-body font-normal mb-6">
                {t.reportAProblemCheckAllThatApply}
              </legend>
              <OptionalTextField
                checkBoxId="incorrectInformationCheckBox"
                textFieldId="incorrectInformationTextField"
                checkBoxName="incorrect_information"
                textFieldName="incorrect_information_details"
                checkBoxLabel={t.reportAProblemIncorrectInformation}
                textFieldLabel={t.reportAProblemProvideMoreDetails}
                uncontrolled={true}
                multiText={true}
                textLabelBold={true}
                wrap="hard"
                maxLength={750}
                disclaimer={t.reportAProblemNoPersonalInfo}
              />
              <OptionalTextField
                checkBoxId="unclearInformationCheckBox"
                textFieldId="unclearInformationTextField"
                checkBoxName="unclear_information"
                textFieldName="unclear_information_details"
                checkBoxLabel={t.reportAProblemUnclearInformation}
                textFieldLabel={t.reportAProblemProvideMoreDetails}
                uncontrolled={true}
                multiText={true}
                textLabelBold={true}
                wrap="hard"
                maxLength={750}
                disclaimer={t.reportAProblemNoPersonalInfo}
              />
              <OptionalTextField
                checkBoxId="infoNotFoundCheckBox"
                textFieldId="infoNotFoundTextField"
                checkBoxName="info_not_found"
                textFieldName="info_not_found_details"
                checkBoxLabel={t.reportAProblemDidNotFindWhatYoureLookingFor}
                textFieldLabel={t.reportAProblemProvideMoreDetails}
                uncontrolled={true}
                multiText={true}
                textLabelBold={true}
                wrap="hard"
                maxLength={750}
                disclaimer={t.reportAProblemNoPersonalInfo}
              />
              <OptionalTextField
                checkBoxId="adaptiveTechnologyCheckBox"
                textFieldId="adaptiveTechnologyTextField"
                checkBoxName="adaptive_technology"
                textFieldName="adaptive_technology_details"
                checkBoxLabel={
                  t.reportAProblemPageDoesNotWorkWithAdaptiveTechnology
                }
                textFieldLabel={t.reportAProblemProvideMoreDetails}
                uncontrolled={true}
                multiText={true}
                textLabelBold={true}
                wrap="hard"
                maxLength={750}
                disclaimer={t.reportAProblemNoPersonalInfo}
              />
              <OptionalTextField
                checkBoxId="privacyIssuesCheckBox"
                textFieldId="privacyIssuesTextField"
                checkBoxName="privacy_issues"
                textFieldName="privacy_issues_details"
                checkBoxLabel={t.reportAProblemYoureWorriedAboutYourPrivacy}
                textFieldLabel={t.reportAProblemProvideMoreDetails}
                uncontrolled={true}
                multiText={true}
                textLabelBold={true}
                wrap="hard"
                maxLength={750}
                disclaimer={t.reportAProblemNoPersonalInfo}
              />
              <OptionalTextField
                checkBoxId="noWhereElseToGoCheckBox"
                textFieldId="noWhereElseToGoTextField"
                checkBoxName="no_where_else_to_go"
                textFieldName="no_where_else_to_go_details"
                checkBoxLabel={t.reportAProblemNoWhereElseToGo}
                textFieldLabel={t.reportAProblemProvideMoreDetails}
                uncontrolled={true}
                multiText={true}
                textLabelBold={true}
                wrap="hard"
                maxLength={750}
                disclaimer={t.reportAProblemNoPersonalInfo}
              />
              <OptionalTextField
                checkBoxId="otherCheckBox"
                textFieldId="otherTextField"
                checkBoxName="other"
                textFieldName="other_details"
                checkBoxLabel={t.reportAProblemOther}
                textFieldLabel={t.reportAProblemProvideMoreDetails}
                uncontrolled={true}
                multiText={true}
                textLabelBold={true}
                wrap="hard"
                maxLength={750}
                disclaimer={t.reportAProblemNoPersonalInfo}
              />
            </fieldset>
            <ActionButton
              id="submit"
              className="rounded block"
              type="submit"
              custom="bg-custom-blue-dark pb-1.5 pt-1.5 rounded text-white hover:bg-custom-blue-canadaLight border border-custom-blue-dark focus:ring-1 focus:ring-black focus:ring-offset-1 focus:bg-custom-blue-canadaLight active:bg-custom-blue-reportButtonActive"
            >
              {t.reportAProblemSubmit}
            </ActionButton>
          </form>
        </>
      )}
    </Details>
  );
}
