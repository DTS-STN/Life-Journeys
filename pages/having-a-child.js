import Layout from "../components/layout";
import MoreInfo from "../components/atoms/MoreInfo";
import AvailableResources from "../components/molecules/AvailableResources";
import { useContext } from "react";
import { LanguageContext } from "../context/languageProvider";
import { Accordion } from "../components/atoms/Accordion";
import Banner from "../components/atoms/Banner";
import Breadcrumb from "../components/organisms/Breadcrumb";

import en from "../locales/en";
import fr from "../locales/fr";

export default function lifejourney() {
  const { items } = useContext(LanguageContext);
  const language = items.language;
  const t = language === "en" ? en : fr;

  return (
    <Layout>
      <Banner
        siteTitle={t.havingAChildBannerTitle}
        headline={t.havingAChildBannerText}
      />
      <div id="wb-bc" className="container pt-4">
        <Breadcrumb />
      </div>
      <Accordion>
        <div className="pr-6">
          <MoreInfo text={t.moreInfoCommunity} />
          <MoreInfo text={t.moreInfoFertility} />
          <MoreInfo text={t.moreInfoHealth} />
          <MoreInfo text={t.moreInfoFinancial} />
          <AvailableResources />
        </div>
      </Accordion>
    </Layout>
  );
}
