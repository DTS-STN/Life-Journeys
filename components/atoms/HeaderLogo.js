import Link from "next/link";
import { useContext } from "react";
import { LanguageContext } from "../../context/languageProvider";
import { SearchBar } from "../atoms/SearchBar";

import en from "../../locales/en";
import fr from "../../locales/fr";

const gocEn = "/images/sig-blk-en.svg";
const gocFr = "/images/sig-blk-fr.svg";
const goc = "/images/wmms-blk.svg";

//
export function HeaderLogo() {
  //
  const { items } = useContext(LanguageContext);
  const language = items.language;
  const t = language === "en" ? en : fr;

  return (
    <div className="row">
      <div
        className="brand col-xs-5 col-md-4"
        property="publisher"
        typeof="GovernmentOrganization"
      >
        {language === "fr" ? (
          <div>
            <Link href={t.gocLink}>
              <a href={t.gocLink} property="url">
                <img src={gocFr} alt="" property="logo" />
                <span className="wb-inv" property="name">
                  {t.goc}
                </span>
              </a>
            </Link>
          </div>
        ) : (
          <div>
            <Link href={t.gocLink}>
              <a href={t.gocLink} property="url">
                <img src={gocEn} alt="" property="logo" />
                <span className="wb-inv" property="name">
                  {t.goc}
                </span>
              </a>
            </Link>
          </div>
        )}
        <meta property="areaServed" typeof="Country" content="Canada" />
        <link property="logo" href={goc} />
      </div>

      <section
        id="wb-srch"
        className="col-lg-offset-4 col-md-offset-4 col-sm-offset-2 col-xs-12 col-sm-5 col-md-4 py-2.5"
      >
        <h2>{t.search}</h2>

        <SearchBar placeholder={t.searchPlaceholder} />
      </section>
    </div>
  );
}
