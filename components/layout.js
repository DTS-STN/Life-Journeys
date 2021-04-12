import { useRouter } from "next/router";
// import { Meta } from "./atoms/Meta";
// import { Header } from "./organisms/Header";
import { Footer } from "./organisms/Footer";

import { useContext } from "react";
import { LanguageContext } from "../context/languageProvider";

import en from "../locales/en";
import fr from "../locales/fr";

export default function Layout({ children }) {
  //   TODO
  //
  //   const router = useRouter();
  //   const routerPathname = router.asPath;

  const { items } = useContext(LanguageContext);
  const language = items.language;

  //   TODO
  //
  //  const changeLanguage = items.changeLanguage;

  const t = language === "en" ? en : fr;

  //   TODO
  //
  //   function onChangeLanguage(e) {
  //     const language = e.target.value;
  //     changeLanguage(language);
  //     router.replace(routerPathname, routerPathname, { locale: language });
  //   }

  return (
    <div className="w-screen h-screen flex flex-col bg-blue-500">
      {/* 
        //   TODO  
        //

      <Meta title={t.siteTitle} />

      <Header
        onLanguageClick={onChangeLanguage}
        headerCanadaCaAltText={t.headerCanadaCaAltText}
        language={language === "fr" ? "English" : "Français"}
        siteTitle={t.siteTitle}
      /> */}

      <main className="w-full md:w-2/3 m-0 md:mr-auto md:ml-auto p-4 md:p-0 bg-pink-800">
        {children}
      </main>

      <Footer
        socialmediaLink={t.socialmediaLink}
        socialmediaText={t.socialmediaText}
        mobileLink={t.mobileapplicationsLink}
        mobileText={t.mobileapplicationsText}
        aboutLink={t.aboutLink}
        aboutText={t.aboutText}
        termsAndConditionsLink={t.termsAndConditionsLink}
        termsAndConditionsText={t.termsAndConditionsText}
        privacyLink={t.privacyLink}
        privacyText={t.privacyText}
        footerCanadaCaAltText={t.footerCanadaCaAltText}
        links={[
          {
            link: t.contactLink,
            linkText: t.contactText,
          },
          {
            link: t.departmentAndAgenciesLink,
            linkText: t.departmentAndAgenciesText,
          },
          {
            link: t.publicServiceAndMilitaryLink,
            linkText: t.publicServiceAndMilitaryText,
          },
          {
            link: t.newsLink,
            linkText: t.newsText,
          },
          {
            link: t.treatiesLawsAndRegulationLink,
            linkText: t.treatiesLawsAndRegulationText,
          },
          {
            link: t.governmentWideReportingLink,
            linkText: t.governmentWideReportingText,
          },
          {
            link: t.primeministerLink,
            linkText: t.primeministerText,
          },
          {
            link: t.aboutgovernmentLink,
            linkText: t.aboutgovernmentText,
          },
          {
            link: t.opengovernmentLink,
            linkText: t.opengovernmentText,
          },
        ]}
      />
    </div>
  );
}
