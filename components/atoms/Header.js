import Link from "next/link";

import HeaderLang from "../components/HeaderLang";
import HeaderLogo from "../components/HeaderLogo";
// import HeaderNav  from '../components/HeaderNav'
// import Breadcrump from '../components/Breadcrump';

import { useContext } from "react";
import { LanguageContext } from "../../context/languageProvider";

import en from "../../locales/en";
import fr from "../../locales/fr";

export function Header() {
  const { items } = useContext(LanguageContext);
  const language = items.language;
  const t = language === "en" ? en : fr;

  return (
    <div className="par iparys_inherited">
      <div className="global-header">
        <nav>
          <ul id="wb-tphp" className="wb-init wb-disable-inited">
            <li className="wb-slc">
              <Link href="#wb-cont">
                <a className="wb-sl" href="#wb-cont">
                  {t.skipToMainContent}
                </a>
              </Link>
            </li>
            <li className="wb-slc">
              <Link href="#wb-info">
                <a className="wb-sl" href="#wb-info">
                  {t.skipToAboutGovernment}
                </a>
              </Link>
            </li>
          </ul>
        </nav>

        <header>
          <div id="wb-bnr" className="container">
            <HeaderLang />
            <HeaderLogo />
          </div>

          {/* <HeaderNav /> */}
          {/* <Breadcrump /> */}
        </header>
      </div>
    </div>
  );
}
