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
            className="block text-xxs font-body hover:text-custom-blue-link focus:text-custom-blue-link focus:underline text-canada-footer-font"
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
              checkBoxId="incorrectInformation"
              textFieldId="incorrectInformationTextField"
              checkBoxName="incorrectInformation"
              textFieldName="incorrectInformationText"
              checkBoxLabel={t.reportAProblemIncorrectInformation}
              textFieldLabel={t.reportAProblemProvideMoreDetails}
              uncontrolled={true}
              multiText={true}
              textLabelBold={true}
              wrap="hard"
              maxLength={750}
            />
            <OptionalTextField
              checkBoxId="unclearInformation"
              textFieldId="incorrectInformationTextField"
              checkBoxName="incorrectInformation"
              textFieldName="incorrectInformationText"
              checkBoxLabel={t.reportAProblemUnclearInformation}
              textFieldLabel={t.reportAProblemProvideMoreDetails}
              uncontrolled={true}
              multiText={true}
              textLabelBold={true}
              wrap="hard"
              maxLength={750}
            />
            <OptionalTextField
              checkBoxId="infoNotFound"
              textFieldId="infoNotFoundTextField"
              checkBoxName="infoNotFound"
              textFieldName="infoNotFoundText"
              checkBoxLabel={t.reportAProblemDidNotFindWhatYoureLookingFor}
              textFieldLabel={t.reportAProblemProvideMoreDetails}
              uncontrolled={true}
              multiText={true}
              textLabelBold={true}
              wrap="hard"
              maxLength={750}
            />
            <OptionalTextField
              checkBoxId="adaptiveTechnology"
              textFieldId="adaptiveTechnologyTextField"
              checkBoxName="adaptiveTechnology"
              textFieldName="adaptiveTechnologyText"
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
              checkBoxId="privacyIssues"
              textFieldId="privacyIssuesTextField"
              checkBoxName="privacyIssues"
              textFieldName="privacyIssuesText"
              checkBoxLabel={t.reportAProblemIncorrectInformation}
              textFieldLabel={t.reportAProblemProvideMoreDetails}
              uncontrolled={true}
              multiText={true}
              textLabelBold={true}
              wrap="hard"
              maxLength={750}
            />
            <OptionalTextField
              checkBoxId="noWhereElseToGo"
              textFieldId="noWhereElseToGoTextField"
              checkBoxName="noWhereElseToGo"
              textFieldName="noWhereElseToGoText"
              checkBoxLabel={t.reportAProblemNoWhereElseToGo}
              textFieldLabel={t.reportAProblemProvideMoreDetails}
              uncontrolled={true}
              multiText={true}
              textLabelBold={true}
              wrap="hard"
              maxLength={750}
            />
            <OptionalTextField
              checkBoxId="other"
              textFieldId="otherTextField"
              checkBoxName="other"
              textFieldName="otherText"
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
