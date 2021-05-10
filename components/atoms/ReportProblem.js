import DropDown from "./DropDown";
import { ActionButton } from "./ActionButton";
import { OptionalTextField } from "../molecules/OptionalTextField";
import { useState } from "react";
import { useContext } from "react";
import { LanguageContext } from "../../context/languageProvider";
import en from "../../locales/en";
import fr from "../../locales/fr";

export default function ReportProblem() {
  const [submitted, setSubmitted] = useState(false);

  let onSubmitHandler = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const { items } = useContext(LanguageContext);
  const language = items.language;
  const t = language === "en" ? en : fr;

  return (
    <DropDown text={t.reportAProblemButtonString}>
      {submitted ? (
        <>
          <h2 className="text-base font-body mb-4">
            {t.reportAProblemThankYouForYourHelp}
          </h2>
          <p className="text-sm font-body mb-4">
            {t.reportAProblemYouWillNotBeContacted}
          </p>
          <a
            className="block text-sm font-body hover:text-custom-blue-link focus:text-custom-blue-link focus:underline text-canada-footer-font"
            href="mailto:experience@servicecanada.gc.ca"
          >
            experience@servicecanada.gc.ca
          </a>
        </>
      ) : (
        <form className="w-full" action="#" onSubmit={onSubmitHandler}>
          <fieldset>
            <legend className="text-h3 text-center font-normal mb-6">
              {t.reportAProblemCheckAllThatApply}
            </legend>
            <OptionalTextField
              checkBoxId="incorrectInformationCheckBox"
              textFieldId="incorrectInformationTextField"
              checkBoxName="incorrect_information"
              textFieldName="incorrect_information_text"
              checkBoxLabel={t.reportAProblemIncorrectInformation}
              textFieldLabel={t.reportAProblemProvideMoreDetails}
              uncontrolled={true}
              multiText={true}
              textLabelBold={true}
              wrap="hard"
              maxLength={750}
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
            />
            <OptionalTextField
              checkBoxId="privacyIssuesCheckBox"
              textFieldId="privacyIssuesTextField"
              checkBoxName="privacy_issues"
              textFieldName="privacy_issues_details"
              checkBoxLabel={t.reportAProblemIncorrectInformation}
              textFieldLabel={t.reportAProblemProvideMoreDetails}
              uncontrolled={true}
              multiText={true}
              textLabelBold={true}
              wrap="hard"
              maxLength={750}
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
            />
          </fieldset>

          <ul className="list-outside list-disc px-6 py-2">
            <li className="text-xxs sm:text-sm font-body my-4 leading-tight sm:leading-6">
              <b>{t.reportAProblemNoReply}</b>
              {t.reportAProblemEnquiries}
              <a
                className="block text-xxs sm:text-sm font-body hover:underline hover:text-custom-blue-link focus:text-custom-blue-link focus:underline text-canada-footer-font"
                href="mailto:experience@servicecanada.gc.ca"
              >
                experience@servicecanada.gc.ca
              </a>
            </li>
            <li className="text-xxs sm:text-sm font-body my-4 leading-tight sm:leading-6">
              <b>{t.reportAProblemNoPersonalInfo}</b>,&nbsp;
              {t.reportAProblemNoPersonalInfoDetails}
            </li>
            <li className="text-xxs sm:text-sm font-body my-4 leading-tight sm:leading-6">
              <b>{t.reportAProblemMoreInfo}</b>,&nbsp;
              {t.reportAProblemMoreInfoDetails}&nbsp;
              <a
                className="text-xxs sm:text-sm font-body hover:text-custom-blue-link hover:underline focus:text-custom-blue-link focus:underline text-canada-footer-font"
                href={t.reportAProblemMoreInfoLink}
              >
                {t.reportAProblemMoreInfoLinkText}
              </a>
            </li>
          </ul>
          <a
            className="block text-xs sm:text-sm font-body hover:text-custom-blue-link focus:text-custom-blue-link text-canada-footer-font my-4 underline"
            href={t.reportAProblemPrivacyStatementLink}
          >
            {t.reportAProblemPrivacyStatement}
          </a>
          <ActionButton
            id="submit"
            className="rounded"
            type="submit"
            custom="bg-custom-blue-dark pb-1.5 pt-1.5 rounded text-white hover:bg-custom-blue-canadaLight border border-custom-blue-dark focus:ring-1 focus:ring-black focus:ring-offset-1 focus:bg-custom-blue-canadaLight active:bg-custom-blue-reportButtonActive"
          >
            Submit
          </ActionButton>
        </form>
      )}
    </DropDown>
  );
}
