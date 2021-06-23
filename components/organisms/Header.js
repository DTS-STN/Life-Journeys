import { HeaderLang } from "../atoms/HeaderLang";
import { HeaderLogo } from "../atoms/HeaderLogo";
import { PhaseBanner } from "../atoms/PhaseBanner";
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
        <header>
          <PhaseBanner phase={t.Alpha}>{t.alphaText}</PhaseBanner>
          <div id="wb-bnr" className="container">
            <div className="row">
              <HeaderLang />
              <HeaderLogo />
            </div>
          </div>
          {/* <HeaderNav /> */}
        </header>
      </div>
    </div>
  );
}
