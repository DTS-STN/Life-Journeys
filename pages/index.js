import Layout from "../components/layout";
import { useEffect, useRef, useContext, useReducer } from "react";
import { LanguageContext } from "../context/languageProvider";
import Select from "../components/atoms/Select";
import Card from "../components/atoms/Card";
import Stages from "../components/atoms/Stages";
import { getLocalJourneys } from "./api/getData";

import en from "../locales/en";
import fr from "../locales/fr";
import optionsEN from "./api/optionsEN";
import optionsFR from "./api/optionsFR";
import ResourceLink from "../components/atoms/ResourceLink";

export default function lifejourney({ journeysData }) {
  const { items } = useContext(LanguageContext);
  const language = items.language;
  const t = language === "en" ? en : fr;
  const region = useRef("CAN");
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);

  function onChangeFunc(optionSelected) {
    region.current = optionSelected;
    forceUpdate();
  }

  console.log("select for region = ", region.current);

  return (
    <>
      <Layout
        title={t.havingABabyTitle}
        bannerText={t.havingAChildBannerText}
        locale={language}
      >
        <section className="layout-container mb-2 mt-4">
          <p className="mx-3 pt-2 pb-6">{t.findGuidance}</p>
          <Select
            options={language === "en" ? optionsEN : optionsFR}
            onChange={onChangeFunc}
            name="provinceSelector"
            defaultValue="CAN"
            label={t.topRequestedLabel}
          />

          <div className="mx-3 my-4">
            <h3>{t.topRequested}</h3>
          </div>

          {/* Top cards */}
          <div className="container flex flex-row flex-wrap xl:w-10/12 xxl:w-full justify-evenly mt-4">
            <Card
              title={
                region.current !== "QC" ? t.card1Title : t.card1QuebecTitle
              }
              service={
                region.current !== "QC" ? t.card1Service : t.card1QuebecService
              }
              image="/images/card-bg.png"
              imgalt=""
              links={
                region.current !== "QC" ? t.card1Links : t.card1QuebecLinks
              }
              region={region.current}
            />
            <Card
              title={t.card2Title}
              service={t.card2Service}
              image="/images/benefits.png"
              imgalt=""
              links={t.card2Links}
              region={region.current}
            />
            <Card
              title={t.card3Title}
              service={t.card3Service}
              image="/images/mh.png"
              imgalt=""
              links={t.card3Links}
              region={region.current}
            />
            <Card
              title={t.card4Title}
              service={t.card4Service}
              image="/images/newborn.png"
              imgalt=""
              links={t.card4Links}
              region={region.current}
            />
          </div>

          {/* Journey Stages Section */}

          <div className="container flex flex-row w-full bg-gray-light-200 xxs:flex-col align-items-center mt-4">
            <div className="p-2 w-full">
              <h3 className="text-h3-tall w-full">{t.stagesTitle}</h3>

              {t.stagesDescr.map((descr, idx) => (
                <p className="mt-6 text-base" key={idx}>
                  {descr}
                </p>
              ))}
            </div>

            <div className="p-2 w-full">
              <Stages
                journeys={journeysData}
                stagesSubtitle={t.stagesSubtitle}
                stagesSelectTitle={t.stagesSelectTitle}
                stagesSelectLabel={t.stagesSelectLabel}
                stagesSelectPlaceholder={t.stagesSelectPlaceholder}
              />
            </div>
          </div>

          {/* Connect to Local Resources */}

          <div className="container flex flex-col w-full md:w-1/2 md:flex-row mt-4">
            <div>
              <h3 className="text-h4 mb-4 font-bold font-display">
                {t.getConnected}
              </h3>
              <p className="text-base">{t.getConnectedDescription}</p>
              <ul>
                <li>
                  <ResourceLink
                    text={t.moreInfoPrenatalClasses}
                    isProvincialLink={false}
                    id="prenatalClasses"
                    srOnly={t.newWindow}
                  />
                </li>
                <li>
                  <ResourceLink
                    text={t.moreInfoParentingNetworks}
                    isProvincialLink={false}
                    id="parentingNetworks"
                    srOnly={t.newWindow}
                    language={language}
                  />
                </li>
                <li>
                  <ResourceLink
                    region={region.current}
                    isProvincialLink={true}
                    srOnly={t.newWindow}
                    language={language}
                  ></ResourceLink>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

// getting static data before loading the page

export async function getStaticProps({ locale }) {
  //
  const { localData } = getLocalJourneys(locale);
  const errorCode = false;

  return {
    props: {
      journeysData: localData,
      errorCode,
      locale,
    },
  };
}
