import { useRouter } from "next/router";
// import { Meta } from "./atoms/Meta";           TODO  in next PR
// import { Header } from "./organisms/Header";   TODO  in next PR
import { Footer } from "./organisms/Footer";
import { PageDetails } from "./organisms/PageDetails";
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

  //   TODO  in next PR
  //
  //  const changeLanguage = items.changeLanguage;

  const t = language === "en" ? en : fr;

  //   TODO  in next PR
  //
  //   function onChangeLanguage(e) {
  //     const language = e.target.value;
  //     changeLanguage(language);
  //     router.replace(routerPathname, routerPathname, { locale: language });
  //   }

  return (
    <div className="w-screen h-screen flex flex-col">
      {/* 
        //   TODO  in next PR 
        //

      <Meta title={t.siteTitle} />

      <Header
        onLanguageClick={onChangeLanguage}
        headerCanadaCaAltText={t.headerCanadaCaAltText}
        language={language === "fr" ? "English" : "Français"}
        siteTitle={t.siteTitle}
      /> */}

      <main className="w-full md:w-2/3 m-0 md:mr-auto md:ml-auto p-4 md:p-0">
        {children}
      </main>
      <PageDetails />
      <Footer />
    </div>
  );
}
