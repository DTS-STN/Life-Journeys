import Layout from "../components/layout";
import MoreInfo from "../components/atoms/MoreInfo";
import { useContext } from "react";
import { LanguageContext } from "../context/languageProvider";
import { Accordion } from "../components/atoms/Accordion";
import Banner from "../components/atoms/Banner";
import Breadcrumb from "../components/organisms/Breadcrumb";
import Table from "../components/molecules/Table";

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
          <Table
            r1text={t.row1text}
            r1subtext={t.row1subtext}
            r1link1={t.row1link1}
            r1link2={t.row1link2}
            r2text={t.row2text}
            r2subtext={t.row2subtext}
            r2link={t.row2link}
            r3text={t.row3text}
            r3subtext={t.row3subtext}
            r3link={t.row3link}
          />
        </div>
        <div className="py-6">
          <p className="text-h4 font-bold font-display">
            Get connected to community supports
          </p>
          <div className="pr-6">
            <MoreInfo text={t.moreInfoCommunity} />
            <MoreInfo text={t.moreInfoFertility} />
            <MoreInfo text={t.moreInfoHealth} />
            <MoreInfo text={t.moreInfoFinancial} />
          </div>
        </div>
      </Accordion>
    </Layout>
  );
}
