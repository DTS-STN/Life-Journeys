import Link from "next/link";
import { useRouter } from "next/router";

import { useContext } from "react";
import { LanguageContext } from "../../context/languageProvider";

import en from "../../locales/en";
import fr from "../../locales/fr";

export function HeaderLang() {
  //
  const router = useRouter();
  const routerPathname = router.asPath;

  //
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

  //
  //

  return (
    <section id="wb-lng" className="text-right">
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
                    {t.english}
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
                    {t.francais}
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
