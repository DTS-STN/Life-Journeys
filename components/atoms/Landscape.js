//import LandscapePng from '../assets/landscape.png'
import Link from "next/link";

import { useContext } from "react";
import { LanguageContext } from "../../context/languageProvider";

import en from "../../locales/en";
import fr from "../../locales/fr";

export function Landscape(props) {
  const { items } = useContext(LanguageContext);
  const language = items.language;
  const t = language === "en" ? en : fr;

  return (
    <div className="landscape">
      <nav className="container wb-navcurr">
        <h2 className="wb-inv">About government</h2>

        <ul className="list-unstyled colcount-sm-2 colcount-md-3">
          <li>
            <Link href={t.contactLink}>
              <a href={t.contactLink}>{t.contactText}</a>
            </Link>
          </li>
          <li>
            <Link href={t.departmentAndAgenciesLink}>
              <a href={t.departmentAndAgenciesLink}>
                {t.departmentAndAgenciesText}
              </a>
            </Link>
          </li>
          <li>
            <Link href={t.publicServiceAndMilitaryLink}>
              <a href={t.publicServiceAndMilitaryLink}>
                {t.publicServiceAndMilitaryText}
              </a>
            </Link>
          </li>

          <li>
            <Link href={t.newsLink}>
              <a href={t.newsLink}>{t.newsText}</a>
            </Link>
          </li>
          <li>
            <Link href={t.treatiesLawsAndRegulationLink}>
              <a href={t.treatiesLawsAndRegulationLink}>
                {t.treatiesLawsAndRegulationText}
              </a>
            </Link>
          </li>
          <li>
            <Link href={t.governmentWideReportingLink}>
              <a href={t.governmentWideReportingLink}>
                {t.governmentWideReportingText}
              </a>
            </Link>
          </li>

          <li>
            <Link href={t.primeministerLink}>
              <a href={t.primeministerLink}>{t.primeministerText}</a>
            </Link>
          </li>
          <li>
            <Link href={t.aboutgovernmentLink}>
              <a href={t.aboutgovernmentLink}>{t.aboutgovernmentText}</a>
            </Link>
          </li>
          <li>
            <Link href={t.opengovernmentLink}>
              <a href={t.opengovernmentLink}>{t.opengovernmentText}</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
