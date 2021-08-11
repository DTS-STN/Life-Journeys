import propTypes from "prop-types";
import Link from "next/link";
import { useRouter } from "next/router";
import { PhaseBanner } from "../atoms/PhaseBanner";
import { Breadcrumb } from "../molecules/Breadcrumb";

import { useEffect, useContext } from "react";
import { LanguageContext } from "../../context/languageProvider";

import en from "../../locales/en";
import fr from "../../locales/fr";

export function Header({ breadcrumbItems }) {
  const { items } = useContext(LanguageContext);
  const changeLanguage = items.changeLanguage;

  const setLanguage = (language) => {
    changeLanguage(language);
  };

  const language = items.language;
  const t = language === "en" ? en : fr;

  const router = useRouter();

  useEffect(() => {
    //
    // a11y complained about this, so commented out for now.
    //

    //   if (typeof window !== "undefined") {
    //     const lang = window.localStorage.getItem("lang");

    //     // if cookie language is different this will sync both
    //     if (lang === "en" || lang === "fr") {
    //       if (lang !== language) {
    //         changeLanguage(lang);
    //       }
    //     }

    if (language) {
      router.replace(router.asPath, router.asPath, { locale: language });
    }
    //   }
  }, [language]);

  return (
    <>
      <nav className="skip-main">
        <a
          id="skipToMainContent"
          className="bg-custom-blue-dark text-white py-1 px-2 focus:outline-black-solid hover:bg-gray-dark"
          href="#wb-cont"
          draggable="false"
        >
          {t.skipToMainContent}
        </a>
      </nav>

      <header>
        <PhaseBanner
          phase={t.Alpha}
          link={t.backToProjectsLink}
          linkText={t.backToProject}
        >
          {t.testSiteText}
        </PhaseBanner>

        <div className="layout-container flex-col flex lg:flex lg:flex-row justify-between mt-2">
          <div className="flex flex-row justify-between items-center lg:mt-7 mt-1.5">
            <a href={t.gocLink}>
              <img
                className="h-5 w-auto xs:h-6 sm:h-8 md:h-8 lg:h-7 xl:h-8"
                src={
                  language === "en"
                    ? "/images/sig-blk-en.svg"
                    : "/images/sig-blk-fr.svg"
                }
                alt={
                  language === "en"
                    ? "Symbol of the Government of Canada"
                    : "Gouvernement du Canada"
                }
              />
            </a>

            {/* Language selector for small screens */}
            <Link key={language} href={router.asPath} locale={language}>
              <a
                className="visible lg:invisible ml-6 sm:ml-16 underline font-body font-bold text-canada-footer-font lg:text-sm text-base hover:text-canada-footer-hover-font-blue"
                onClick={() => setLanguage(language)}
                lang={language === "en" ? "fr" : "en"}
              >
                {language === "en" ? "FR" : "EN"}
              </a>
            </Link>
          </div>

          <div className="flex-col flex">
            {/* Language selector for mid to larger screens */}
            <Link
              key={language}
              href={router.asPath}
              locale={language}
              //onClick={() => setLanguage(language)}
            >
              <a
                className="lg:visible invisible pb-0 lg:pb-2 self-end underline font-body text-canada-footer-font hover:text-canada-footer-hover-font-blue "
                data-cy="toggle-language-link"
                onClick={() => setLanguage(language)}
                lang={language === "en" ? "fr" : "en"}
              >
                {language === "en" ? "Français" : "English"}
              </a>
            </Link>
          </div>
        </div>

        <div className="mb-2 border-t pb-2 mt-4"></div>

        {/* <HeaderNav /> */}

        <div className="layout-container my-2">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </header>
    </>
  );
}

Header.propTypes = {
  // Title of the page
  title: propTypes.string,

  // Banner Text
  bannerTitle: propTypes.string,

  //Child Banner Text
  bannerText: propTypes.string,
  /**
   * Array of Items for the breadcrumb
   */
  breadcrumbItems: propTypes.arrayOf(
    propTypes.shape({
      /**
       * Text for the breadcrumb
       */
      text: propTypes.string,

      /**
       * Link for the breadcrumb
       */
      link: propTypes.string,
    })
  ),
};
