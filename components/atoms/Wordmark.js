import Link from "next/link";

import { useContext } from "react";
import { LanguageContext } from "../../context/languageProvider";

import en from "../../locales/en";
import fr from "../../locales/fr";

const gocWordmark = "/images/wmms-blk.svg";

export function WordMark() {
  const { items } = useContext(LanguageContext);
  const language = items.language;
  const t = language === "en" ? en : fr;

  return (
    <div className="brand">
      <div className="container">
        <div className="row">
          <nav className="col-md-10 ftr-urlt-lnk">
            <h2 className="wb-inv">{t.aboutThisSite}</h2>
            <ul>
              <li>
                <Link href={t.socialmediaLink}>
                  <a href={t.socialmediaLink}>{t.socialmediaText}</a>
                </Link>
              </li>
              <li>
                <Link href={t.mobileapplicationsLink}>
                  <a href={t.mobileapplicationsLink}>
                    {t.mobileapplicationsText}
                  </a>
                </Link>
              </li>
              <li>
                <Link href={t.aboutLink}>
                  <a href={t.aboutLink}>{t.aboutText}</a>
                </Link>
              </li>
              <li>
                <Link href={t.termsAndConditionsLink}>
                  <a href={t.termsAndConditionsLink}>
                    {t.termsAndConditionsText}
                  </a>
                </Link>
              </li>
              <li>
                <Link href={t.privacyLink}>
                  <a href={t.privacyLink}>{t.privacyText}</a>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="col-xs-6 visible-sm visible-xs tofpg">
            <a href="#wb-cont">
              {t.topOfPage}{" "}
              <span className="glyphicon glyphicon-chevron-up"></span>
            </a>
          </div>

          <div className="col-xs-6 col-md-2 text-right">
            <img
              className="float-right"
              src={gocWordmark}
              alt={t.footerCanadaCaAltText}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
