import { Meta } from "./atoms/Meta";
import { Header } from "./organisms/Header";
import { Footer } from "./organisms/Footer";
import { PageDetails } from "./organisms/PageDetails";
import { useContext } from "react";
import { LanguageContext } from "../context/languageProvider";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; /* eslint-disable import/first */

import en from "../locales/en";
import fr from "../locales/fr";

export default function Layout({ children }) {
  const { items } = useContext(LanguageContext);
  const language = items.language;

  const t = language === "en" ? en : fr;

  return (
    <div className="w-full h-screen flex flex-col">
      <Meta title={t.siteTitle} />

      <Header />

      <main>
        {children}
        <PageDetails />
      </main>

      <Footer />
    </div>
  );
}
