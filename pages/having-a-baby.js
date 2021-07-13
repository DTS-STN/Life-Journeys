import Layout from "../components/layout";
import MoreInfo from "../components/atoms/MoreInfo";
import AvailableResources from "../components/molecules/AvailableResources";
import { useEffect, useRef, useContext, useReducer } from "react";
import { LanguageContext } from "../context/languageProvider";
import { Accordion } from "../components/atoms/Accordion";
import Table from "../components/molecules/Table";
import Select from "../components/atoms/Select";
import Card from "../components/atoms/Card";

import en from "../locales/en";
import fr from "../locales/fr";
import optionsEN from "./api/optionsEN";
import optionsFR from "./api/optionsFR";
import ProvincialLink from "../components/atoms/ProvincialLink";

export default function lifejourney() {
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
          <div className="container flex flex-col md:flex-row align-items-center mt-4">
            <Card
              title="Maternity and Parental Leave"
              service="Employment Insurance"
              links={[
                { text: "More Info", url: "nextpage" },
                { text: "Apply Now", url: "nextpage" },
              ]}
            />
            <Card
              title="Benefits Finder"
              service="Service Canada"
              links={[{ text: "Find Benefits", url: "nextpage" }]}
            />
            <Card
              title="Mental qand physical health resources"
              service="Public Health Agency of Canada"
              links={[{ text: "More Info", url: "nextpage" }]}
            />
            <Card
              title="Newborn care resources"
              service="Health Canada"
              links={[{ text: "More Info", url: "nextpage" }]}
            />
          </div>

          <div className="container flex flex-col w-full bg-gray-200 md:flex-row align-items-center mt-4">
            <div className="p-2">
              <h2 className="text-h3-tall">
                Discover the stages of the new child life Journey
              </h2>

              <p>Learn more about the keytask during each stage in journey</p>
            </div>
          </div>

          {/*  */}

          {/* <div className="container flex flex-col md:flex-row align-items-center" >
            <div className="pt-2 w-full lg:w-9/12">
              <Accordion
                id="GettingReady"
                title="Getting Ready"
                summary="Getting Ready summary text"
              >
                <div className="pr-6">
                  <Table />
                </div>
                <div className="py-6">
                  <p className="text-h4 font-bold font-display">
                    {t.getConnected}
                  </p>
                  <div className="pr-6">
                    <MoreInfo text={t.moreInfoPrenatalClasses} />
                    <MoreInfo text={t.moreInfoParentingNetworks} />
                    <ProvincialLink
                      language={language}
                      region={region.current}
                      id="provincialLink"
                    ></ProvincialLink>
                    <AvailableResources title={t.gettingready} />
                  </div>
                </div>
              </Accordion>
            </div> 
          </div> */}
        </section>
      </Layout>
    </>
  );
}
