import Layout from "../components/layout";
import MoreInfo from "../components/atoms/MoreInfo";
import { useContext } from "react";
import { LanguageContext } from "../context/languageProvider";

import en from "../locales/en";
import fr from "../locales/fr";

export default function lifejourney() {
  const { items } = useContext(LanguageContext);
  const language = items.language;
  const t = language === "en" ? en : fr;

  return (
    <Layout
      bannerTitle={t.havingAChildBannerTitle}
      bannerText={t.havingAChildBannerText}
    >
      <div>
        <MoreInfo text={t.moreInfoCommunity} />
        <MoreInfo text={t.moreInfoFertility} />
        <MoreInfo text={t.moreInfoHealth} />
        <MoreInfo text={t.moreInfoFinancial} />
      </div>
    </Layout>
  );
}
