import { Meta } from "./atoms/Meta";
import { Header } from "./organisms/Header";
import { Footer } from "./organisms/Footer";
import { PageDetails } from "./organisms/PageDetails";
import { useContext } from "react";
import { LanguageContext } from "../context/languageProvider";

import en from "../locales/en";
import fr from "../locales/fr";
import ReportProblem from "./organisms/ReportProblem";

export default function Layout({ children }) {
  const { items } = useContext(LanguageContext);
  const language = items.language;

  const t = language === "en" ? en : fr;

  return (
    <div className="w-screen h-screen flex flex-col">
      <Meta title={t.siteTitle} />

      <Header />

      <main className="w-full md:w-2/3 m-0 md:mr-auto md:ml-auto p-4 md:p-0">
        {children}
      </main>

    
      <ReportProblem /> //Temporary placement for testing, this will go in PageDetails eventually
      <PageDetails />
      <Footer />
    </div>
  );
}
