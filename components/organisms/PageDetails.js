import DateModified from "../atoms/DateModified";
import ReportProblem from "../atoms/ReportProblem";

import { useContext } from "react";
import { LanguageContext } from "../../context/languageProvider";

import en from "../../locales/en";
import fr from "../../locales/fr";

/**
 * contains the timestamp and other page details just above the footer
 */
export function PageDetails(props) {
  const { items } = useContext(LanguageContext);
  const language = items.language;
  const t = language === "en" ? en : fr;

  return (
    <div className="container pb-8 pt-8">
      <div className="pb-8">
        <ReportProblem />
      </div>
      <DateModified text={t.dateModified} />
    </div>
  );
}
