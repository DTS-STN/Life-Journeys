import DateModified from "../atoms/DateModified";
import ReportProblem from "../atoms/ReportProblem";

import { useContext } from "react";
import { LanguageContext } from "../../context/languageProvider";

import en from "../../locales/en";
import fr from "../../locales/fr";

/**
 * contains the timestamp and other page details just above the footer
 */
export function PageDetails() {
  const { items } = useContext(LanguageContext);
  const language = items.language;
  const t = language === "en" ? en : fr;

  return (
    <>
      {/**
         temporarily removing this piece while usability testing is happening for the Feeedback component
         */}
      {/*<div className="layout-container my-3">*/}
      {/*  <ReportProblem language={language} />*/}
      {/*</div>*/}

      <div className="layout-container">
        <DateModified text={t.dateModified} />
      </div>
    </>
  );
}
