import Layout from "../components/layout";
import MoreInfo from "../components/atoms/MoreInfo";
import { useContext } from "react";
import { LanguageContext } from "../context/languageProvider";
import { Accordion } from "../components/atoms/Accordion";
import { SideMenu } from "../components/atoms/SideMenu";
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

      <div className="container">
        <div className="w-3/12 sticky top-0">
          <SideMenu />
        </div>

        <div className="w-9/12 float-right">
          <Accordion
            id="GettingReady"
            title="Getting Ready"
            summary="Getting Ready summary text"
          >
            <div className="pr-6">
              <MoreInfo text={t.moreInfoCommunity} />
              <MoreInfo text={t.moreInfoFertility} />
              <MoreInfo text={t.moreInfoHealth} />
              <MoreInfo text={t.moreInfoFinancial} />
            </div>
          </Accordion>

          <Accordion
            id="LoremIpsun"
            title="Lorem Ipsun"
            summary="Lorem ipsun dolor summary"
          >
            <div className="pr-6">
              <MoreInfo text={t.moreInfoCommunity} />
              <MoreInfo text={t.moreInfoFertility} />
              <MoreInfo text={t.moreInfoHealth} />
              <MoreInfo text={t.moreInfoFinancial} />
            </div>
          </Accordion>

          <Accordion
            id="WhenArrives"
            title="When your child arrives"
            summary="When your child arrives summary text"
          >
            <div className="pr-6">
              <MoreInfo text={t.moreInfoCommunity} />
              <MoreInfo text={t.moreInfoFertility} />
              <MoreInfo text={t.moreInfoHealth} />
              <MoreInfo text={t.moreInfoFinancial} />
            </div>
          </Accordion>

          <Accordion
            id="Consectur"
            title="Consectur"
            summary="Consectur summary text"
          >
            <div className="pr-6">
              <MoreInfo text={t.moreInfoCommunity} />
              <MoreInfo text={t.moreInfoFertility} />
              <MoreInfo text={t.moreInfoHealth} />
              <MoreInfo text={t.moreInfoFinancial} />
            </div>
          </Accordion>

          <Accordion
            id="FinancialSupport"
            title="Financial Support"
            summary="Financial Support summary text"
          >
            <div className="pr-6">
              <MoreInfo text={t.moreInfoCommunity} />
              <MoreInfo text={t.moreInfoFertility} />
              <MoreInfo text={t.moreInfoHealth} />
              <MoreInfo text={t.moreInfoFinancial} />
            </div>
          </Accordion>

          <Accordion
            id="DolorConsectetur"
            title="Dolor Consectetur"
            summary="Dolor Consectetur summary text"
          >
            <div className="pr-6">
              <MoreInfo text={t.moreInfoCommunity} />
              <MoreInfo text={t.moreInfoFertility} />
              <MoreInfo text={t.moreInfoHealth} />
              <MoreInfo text={t.moreInfoFinancial} />
            </div>
          </Accordion>

          <Accordion id="Ipsum" title="Ipsum" summary="Ipsum summary text">
            <div className="pr-6">
              <MoreInfo text={t.moreInfoCommunity} />
              <MoreInfo text={t.moreInfoFertility} />
              <MoreInfo text={t.moreInfoHealth} />
              <MoreInfo text={t.moreInfoFinancial} />
            </div>
          </Accordion>
        </div>
      </div>
    </Layout>
  );
}
