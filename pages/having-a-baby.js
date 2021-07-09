import Layout from "../components/layout";
import MoreInfo from "../components/atoms/MoreInfo";
import AvailableResources from "../components/molecules/AvailableResources";
import { useEffect, useRef, useContext, useReducer } from "react";
import { LanguageContext } from "../context/languageProvider";
import { Accordion } from "../components/atoms/Accordion";
import { SideMenu } from "../components/atoms/SideMenu";
import Table from "../components/molecules/Table";
import Select from "../components/atoms/Select";

import en from "../locales/en";
import fr from "../locales/fr";
import optionsEN from "./api/optionsEN";
import optionsFR from "./api/optionsFR";
import ProvincialLink from "../components/atoms/ProvincialLink";

export default function lifejourney() {
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
      >
        <section className="layout-container mb-2 mt-4">
          <Select
            options={language === "en" ? optionsEN : optionsFR}
            onChange={onChangeFunc}
            name="provinceSelector"
            defaultValue="CAN"
            label="Showing top requests for"
          />

          <div className="container flex flex-col md:flex-row align-items-center ">
            <div className="pr-3 w-full lg:w-3/12 top-0 lg:sticky ">
              <SideMenu />
            </div>

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

              <Accordion
                id="LoremIpsun"
                title="Lorem Ipsun"
                summary="Lorem ipsun dolor summary"
              >
                <div className="pr-6">
                  <Table />
                </div>
                <div className="py-6">
                  <p className="text-h4 font-bold font-display">
                    {t.getConnected}
                  </p>
                </div>
              </Accordion>

              <Accordion
                id="WhenArrives"
                title="When your child arrives"
                summary="When your child arrives summary text"
              >
                <div className="pr-6">
                  <Table />
                </div>
                <div className="py-6">
                  <p className="text-h4 font-bold font-display">
                    {t.getConnected}
                  </p>
                </div>
              </Accordion>

              <Accordion
                id="Consectur"
                title="Consectur"
                summary="Consectur summary text"
              >
                <div className="pr-6">
                  <Table />
                </div>
                <div className="py-6">
                  <p className="text-h4 font-bold font-display">
                    {t.getConnected}
                  </p>
                </div>
              </Accordion>

              <Accordion
                id="FinancialSupport"
                title="Financial Support"
                summary="Financial Support summary text"
              >
                <div className="pr-6">
                  <Table />
                </div>
                <div className="py-6">
                  <p className="text-h4 font-bold font-display">
                    {t.getConnected}
                  </p>
                </div>
              </Accordion>

              <Accordion
                id="DolorConsectetur"
                title="Dolor Consectetur"
                summary="Dolor Consectetur summary text"
              >
                <div className="pr-6">
                  <Table />
                </div>
                <div className="py-6">
                  <p className="text-h4 font-bold font-display">
                    {t.getConnected}
                  </p>
                </div>
              </Accordion>

              <Accordion id="Ipsum" title="Ipsum" summary="Ipsum summary text">
                <div className="pr-6">
                  <Table />
                </div>
                <div className="py-6">
                  <p className="text-h4 font-bold font-display">
                    {t.getConnected}
                  </p>
                </div>
              </Accordion>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
