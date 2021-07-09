import { useContext } from "react";
import { LanguageContext } from "../../context/languageProvider";

import en from "../../locales/en";
import fr from "../../locales/fr";

export function Landscape() {
  const { items } = useContext(LanguageContext);
  const language = items.language;

  const t = language === "en" ? en : fr;

  return (
    <div className="w-full h-auto  footerBackground">
      <div className="py-7 layout-container  ">
        <nav
          id="footer-nav"
          aria-label="Footer"
          className="container wb-navcurr"
        >
          <h2 className="invisible w-0 hidden">About government</h2>

          <ul className=" flex flex-col text-xs   lg:grid lg:grid-cols-2  xl:grid xl:grid-cols-3  lg:gap-1">
            {" "}
            <li className="text-white w-64 md:w-56 lg:w-80   my-2.5   hover:underline">
              <a className="font-body" href={t.contactLink}>
                {t.contactText}
              </a>
            </li>
            <li className="text-white w-64 md:w-56 lg:w-80   my-2.5   hover:underline">
              <a className="font-body" href={t.newsLink}>
                {t.newsText}
              </a>
            </li>
            <li className="text-white w-64 md:w-56 lg:w-80   my-2.5   hover:underline">
              <a className="font-body" href={t.primeministerLink}>
                {t.primeministerText}
              </a>
            </li>
            <li className="text-white w-64 md:w-56 lg:w-80   my-2.5   hover:underline">
              <a className="font-body" href={t.departmentAndAgenciesLink}>
                {t.departmentAndAgenciesText}
              </a>
            </li>
            <li className="text-white w-64 md:w-56 lg:w-80   my-2.5   hover:underline">
              <a className="font-body" href={t.treatiesLawsAndRegulationLink}>
                {t.treatiesLawsAndRegulationText}
              </a>
            </li>
            <li className="text-white w-64 md:w-56 lg:w-80   my-2.5   hover:underline">
              <a className="font-body" href={t.aboutgovernmentLink}>
                {t.aboutgovernmentText}
              </a>
            </li>
            <li className="text-white w-64 md:w-56 lg:w-80   my-2.5   hover:underline">
              <a className="font-body" href={t.publicServiceAndMilitaryLink}>
                {t.publicServiceAndMilitaryText}
              </a>
            </li>
            <li className="text-white w-64 md:w-56 lg:w-80   my-2.5   hover:underline">
              <a className="font-body" href={t.governmentWideReportingLink}>
                {t.governmentWideReportingText}
              </a>
            </li>
            <li className="text-white w-64 md:w-56 lg:w-80   my-2.5   hover:underline">
              <a className="font-body" href={t.opengovernmentLink}>
                {t.opengovernmentText}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
