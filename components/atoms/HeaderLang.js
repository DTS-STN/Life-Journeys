import Link from "next/link";

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
    const language = e.target.value;
    changeLanguage(language);
    router.replace(routerPathname, routerPathname, { locale: locale });
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
                <Link href="/#english">
                  <a
                    href="/#english"
                    lang="en"
                    onClick={onChangeLanguage(lang)}
                  >
                    {t.français}
                  </a>
                </Link>
              ) : (
                <Link href="/#français">
                  <a
                    href="/#français"
                    lang="fr"
                    onClick={onChangeLanguage(lang)}
                  >
                    {t.english}
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
