import Link from "next/link";
import { useRouter } from "next/router";

import { useContext } from "react";
import { LanguageContext } from "../../context/languageProvider";

import en from "../../locales/en";
import fr from "../../locales/fr";

export function HeaderLang() {
  const router = useRouter();
  const routerPathname = router.asPath;
  const { items } = useContext(LanguageContext);
  const language = items.language;
  const changeLanguage = items.changeLanguage;
  const t = language === "en" ? en : fr;

  function onChangeLanguage(language) {
    changeLanguage(language);
    router.replace(routerPathname, routerPathname, {
      locale: language === "en" ? "fr" : "en",
    });
  }

  return (
    <section id="wb-lng" className="col-xs-3 col-sm-12 pull-right text-right">
      <h2 className="wb-inv">{t.languageSelection}</h2>
      <div className="row">
        <div className="col-md-12">
          <ul className="list-inline margin-bottom-none">
            <li>
              {language === "fr" ? (
                <Link href="/">
                  <a
                    href="/"
                    lang="en"
                    className="underline"
                    onClick={() => onChangeLanguage(language)}
                  >
                    <span className="hidden-xs">{t.english}</span>
                    <abbr
                      title="English"
                      className="visible-xs h3 mrgn-tp-sm mrgn-bttm-0"
                    >
                      EN
                    </abbr>
                  </a>
                </Link>
              ) : (
                <Link href="/">
                  <a
                    href="/"
                    lang="fr"
                    className="underline"
                    onClick={() => onChangeLanguage(language)}
                  >
                    <span className="hidden-xs">{t.francais}</span>
                    <abbr
                      title="English"
                      className="visible-xs h3 mrgn-tp-sm mrgn-bttm-0"
                    >
                      FR
                    </abbr>
                  </a>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
