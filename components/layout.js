import { Meta } from "./atoms/Meta";
import { Header } from "./organisms/Header";
import { Main } from "./organisms/Main";
import { Footer } from "./organisms/Footer";
import { PageDetails } from "./organisms/PageDetails";
import { useContext } from "react";
import { LanguageContext } from "../context/languageProvider";
import { Banner } from "./atoms/Banner";

import en from "../locales/en";
import fr from "../locales/fr";

export default function Layout({ bannerText, bannerTitle, children }) {
  const { items } = useContext(LanguageContext);
  const language = items.language;

  const t = language === "en" ? en : fr;

  return (
    <div className="w-screen h-screen flex flex-col">
      <Meta title={t.siteTitle} />

      <Header />

      {bannerText && bannerTitle ? (
        <Banner siteTitle={bannerTitle} headline={bannerText} />
      ) : null}

      <Main>{children}</Main>

      <PageDetails />
      <Footer />
    </div>
  );
}
