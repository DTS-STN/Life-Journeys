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

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successCall, error);
    } else {
      alert("Sorry, browser does not support geolocation!");
    }

    if (typeof window !== "undefined") {
      if (region.current !== window.localStorage.getItem("region")) {
        region.current = window.localStorage.getItem("region");
      }
    }

    async function getGeo() {
      const res = await fetch("https://ipapi.co/json/");
      const data = await res.json();
      region.current = data.region_code;
      forceUpdate();
    }
    function successCall() {
      getGeo();
    }
    function error(err) {
      console.warn("ERROR(" + err.code + "): " + err.message);
    }
  }, []);

  function onChangeFunc(optionSelected) {
    region.current = optionSelected;
    window.localStorage.setItem("region", optionSelected);
    forceUpdate();
  }

  return (
    <>
      <Layout
        title={t.havingABabyTitle}
        bannerTitle={t.havingAChildBannerTitle}
        bannerText={t.havingAChildBannerText}
        locale={language}
      >
        <section id="pageMainTitle" className="layout-container mb-2 mt-4">
          <div className="mx-3 my-4">
            <p id="wb-cont">{t.topRequested}</p>
          </div>

          <Select
            options={language === "en" ? optionsEN : optionsFR}
            onChange={onChangeFunc}
            name="provinceSelector"
            defaultValue="CAN"
            label={t.topRequestedLabel}
          />

          {/* Top cards */}
          <div className="container flex flex-col sm:flex-wrap sm:flex-row justify-center mt-4">
            <Card
              title={
                region.current !== "QC" ? t.card1Title : t.card1QuebecTitle
              }
              service={
                region.current !== "QC" ? t.card1Service : t.card1QuebecService
              }
              image="/images/card-bg.png"
              imgalt={
                region.current !== "QC" ? t.card1Title : t.card1QuebecTitle
              }
              links={
                region.current !== "QC" ? t.card1Links : t.card1QuebecLinks
              }
              region={region.current}
            />
            <Card
              title={t.card2Title}
              service={t.card2Service}
              image="/images/benefits.png"
              imgalt={t.card2Title}
              links={t.card2Links}
              region={region.current}
            />
            <Card
              title={t.card3Title}
              service={t.card3Service}
              image="/images/mh.png"
              imgalt={t.card3Title}
              links={t.card3Links}
              region={region.current}
            />
            <Card
              title={t.card4Title}
              service={t.card4Service}
              image="/images/newborn.png"
              imgalt={t.card4Title}
              links={t.card4Links}
              region={region.current}
            />
          </div>

          {/* Journey Stages Section */}

          <div className="container flex flex-row w-full bg-gray-light-200 xxs:flex-col align-items-center mt-4">
            <div className="p-2 w-full">
              <h2 className="text-h3-tall w-full">{t.stagesTitle}</h2>
              <p>{t.stagesDescr}</p>
            </div>

            <div className="mt-4 w-full">
              <Stages
                journeys={journeysData}
                selectPlaceholder={t.stagesSelect}
                labelText={t.stagesLabel}
              />
            </div>
          </div>

          {/* Connect to Local Resources */}

          <div className="container flex flex-col w-full md:w-32 md:flex-row mt-4">
            <div>
              <h3 className="text-h4 mb-4 font-bold font-display">
                {t.getConnected}
              </h3>
              <p className="text-base">{t.getConnectedDescription}</p>

              <ResourceLink
                text={t.moreInfoPrenatalClasses}
                isProvincialLink={false}
                id="prenatalClasses"
              />
              <ResourceLink
                text={t.moreInfoParentingNetworks}
                isProvincialLink={false}
                id="parentingNetworks"
              />
              <ResourceLink
                language={language}
                region={region.current}
                isProvincialLink={true}
              ></ResourceLink>
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
