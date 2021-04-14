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

  function onChangeLanguage(e) {
    const language = e;
    changeLanguage(language);
    // router.replace(routerPathname, routerPathname, { locale: language });
  }

  //
  //

  return (
    <section id="wb-lng" className="text-right">
      <h2 className="wb-inv">{t.languageSelection}</h2>
      <div className="row bg-blue-500">
        <div className="col-md-12">
          <ul className="list-inline margin-bottom-none">
            <li>
              {language === "fr" ? (
                <Link href="/#english">
                  <a
                    href="/#english"
                    lang="en"
                    className="underline"
                    onClick={() => onChangeLanguage(language)}
                  >
                    {t.english}
                  </a>
                </Link>
              ) : (
                <Link href="/#français">
                  <a
                    href="/#français"
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
