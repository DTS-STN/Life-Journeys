import Layout from "../components/layout";
import MoreInfo from "../components/atoms/MoreInfo";
import { useEffect, useRef, useContext, useReducer } from "react";
import { LanguageContext } from "../context/languageProvider";
import Select from "../components/atoms/Select";
import Card from "../components/atoms/Card";
import Stages2 from "../components/atoms/Stagesv2";
import { getLocalJourneys } from "./api/getData";

import en from "../locales/en";
import fr from "../locales/fr";
import optionsEN from "./api/optionsEN";
import optionsFR from "./api/optionsFR";
import ProvincialLink from "../components/atoms/ProvincialLink";

//

export default function lifejourney({ journeysData }) {
  //
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
    forceUpdate();
  }

  return (
    <>
      <Layout
        title={t.havingABabyTitle}
        bannerTitle={t.havingAChildBannerTitle}
        bannerText={t.havingAChildBannerText}
        locale={language}
        breadcrumbItems={[{ text: t.homeSiteTitle, link: "/" }]}
      >
        <section className="layout-container mb-2 mt-4">
          <div className="my-4">
            <p>{t.topRequested}</p>
          </div>

          <Select
            options={language === "en" ? optionsEN : optionsFR}
            onChange={onChangeFunc}
            name="provinceSelector"
            defaultValue="CAN"
            label="Showing top requests for"
          />

          {/* Top cards */}
          <div className="container flex flex-col sm:flex-wrap sm:flex-row justify-center mt-4">
            <Card
              title="Maternity and Parental Leave"
              service="Employment Insurance"
              image="/images/card-bg.png"
              imgalt="image description TBC"
              links={[
                { text: "More Info", url: "nextpage" },
                { text: "Apply Now", url: "nextpage" },
              ]}
            />
            <Card
              title="Benefits Finder"
              service="Service Canada"
              image="/images/card-bg.png"
              imgalt="image description TBC"
              links={[{ text: "Find Benefits", url: "nextpage" }]}
            />
            <Card
              title="Mental and physical health resources"
              service="Public Health Agency of Canada"
              image="/images/card-bg.png"
              imgalt="image description TBC"
              links={[{ text: "More Info", url: "nextpage" }]}
            />
            <Card
              title="Newborn care resources"
              service="Health Canada"
              image="/images/card-bg.png"
              imgalt="image description TBC"
              links={[{ text: "More Info", url: "nextpage" }]}
            />
          </div>

          {/* Journey Stages Section */}

          <div className="container flex flex-row w-full bg-gray-200 xxs:flex-col align-items-center mt-4">
            <div className="p-2 w-full">
              <h2 className="text-h3-tall w-full">
                Discover the stages of the new child life Journey
              </h2>

              <p>Learn more about the keytask during each stage in journey</p>
            </div>

            <div className="mt-4 w-full">
              <Stages2 journeys={journeysData} />
            </div>
          </div>

          {/* Connect to Local Resources */}

          <div className="container flex flex-col w-full text-center md:w-32 md:flex-row align-items-center mt-4">
            <div>
              <p className="text-h4 mb-4 font-bold font-display">
                {t.getConnected}
              </p>
              <p className="text-base">
                We often lean on those closest to us for advice. Find and build
                your support close to where you live.{" "}
              </p>

              <MoreInfo text={t.moreInfoPrenatalClasses} />
              <MoreInfo text={t.moreInfoParentingNetworks} />
              <ProvincialLink
                language={language}
                region={region.current}
                id="provincialLink"
              ></ProvincialLink>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

// getting static data before loading the page

export async function getStaticProps({ locale }) {
  console.log("language object at getStaticProps is ", locale);

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
