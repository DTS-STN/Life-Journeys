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
    <div className="w-full h-full bg-footer-background-color pb-4">
      <div className="h-auto bg-footer-white pt-5 layout-container flex flex-col xl:flex xl:flex-row  md:justify-between">
        <div className="mt-3.5 xl:mt-5 ">
          <nav>
            <h2 className="invisible w-0 hidden">{t.aboutThisSite}</h2>

            <ul className=" flex flex-col md:grid md:grid-cols-2  xl:flex lg:flex-row ">
              <li className="lg:mb-4 mb-5 mr-2.5 list-inside list-disc xl:list-none text-xxs">
                <a
                  className="text-xs font-body hover:text-canada-footer-hover-font-blue text-canada-footer-font "
                  href={t.socialmediaLink}
                >
                  {t.socialmediaText}
                </a>
              </li>
              <li className="lg:mb-4 mb-5 mr-2.5 list-inside list-disc text-xxs">
                <a
                  className="text-xs font-body hover:text-canada-footer-hover-font-blue text-canada-footer-font "
                  href={t.mobileapplicationsLink}
                >
                  {t.mobileapplicationsText}
                </a>
              </li>
              <li className="lg:mb-4 mb-5 mr-2.5 list-inside list-disc text-xxs">
                <a
                  className="text-xs font-body hover:text-canada-footer-hover-font-blue text-canada-footer-font "
                  href={t.aboutLink}
                >
                  {t.aboutText}
                </a>
              </li>
              <li className="lg:mb-4 mb-5 mr-2.5 list-inside list-disc text-xxs">
                <a
                  className="text-xs font-body hover:text-canada-footer-hover-font-blue text-canada-footer-font "
                  href={t.termsAndConditionsLink}
                >
                  {t.termsAndConditionsText}
                </a>
              </li>
              <li className="lg:mb-4 mb-5 mr-2.5 list-inside list-disc text-xxs">
                <a
                  className="text-xs font-body hover:text-canada-footer-hover-font-blue text-canada-footer-font "
                  href={t.privacyLink}
                >
                  {t.privacyText}
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div>
          <div className="xl:hidden xxs:block mb-2.5 mt-8 xl:mt-0 h-6 md:h-10 w-auto float-left">
            <a href="#wb-cont">
              {t.topOfPage}{" "}
              <span className="glyphicon glyphicon-chevron-up"></span>
            </a>
          </div>

          <img
            className="mb-2.5 mt-8 xl:mt-0 h-6 md:h-10  w-auto float-right"
            src={gocWordmark}
            alt={t.footerCanadaCaAltText}
          />
        </div>
      </div>
    </div>
  );
}
