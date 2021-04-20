import { Meta } from "./atoms/Meta";
import { Header } from "./organisms/Header";
import { Main } from "./organisms/Main";
import { Footer } from "./organisms/Footer";
import { PageDetails } from "./organisms/PageDetails";
import { useContext } from "react";
import { LanguageContext } from "../context/languageProvider";

import en from "../locales/en";
import fr from "../locales/fr";

export default function Layout({ children }) {
  const { items } = useContext(LanguageContext);
  const language = items.language;

  const t = language === "en" ? en : fr;

  return (
    <div className="w-screen h-screen flex flex-col">
      <Meta title={t.siteTitle} />

      <Header />


      <Main>{children}</Main>


      <PageDetails />
      <Footer />
    </div>
  );
}
