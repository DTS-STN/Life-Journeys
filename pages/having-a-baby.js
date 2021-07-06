import Layout from "../components/layout";
import MoreInfo from "../components/atoms/MoreInfo";
import AvailableResources from "../components/molecules/AvailableResources";
import { useEffect, useRef, useState, useContext } from "react";
import { LanguageContext } from "../context/languageProvider";
import { Accordion } from "../components/atoms/Accordion";
import { SideMenu } from "../components/atoms/SideMenu";
import Banner from "../components/atoms/Banner";
import Table from "../components/molecules/Table";
import Breadcrumb from "../components/molecules/Breadcrumb";
import Select from "react-select";

import en from "../locales/en";
import fr from "../locales/fr";
import optionsEN from "./api/optionsEN";
import optionsFR from "./api/optionsFR";

export default function lifejourney() {
  const { items } = useContext(LanguageContext);
  const language = items.language;
  const t = language === "en" ? en : fr;
  const region = useRef("CAN");
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState();

  useEffect(() => {
    if (language === "en") {
      setOptions(optionsEN);
    } else {
      setOptions(optionsFR);
    }
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successCall, error);
    } else {
      alert("Sorry, browser does not support geolocation!");
    }
    async function getGeo() {
      const res = await fetch("http://ip-api.com/json");
      const data = await res.json();
      region.current = data.region;
    }
    function successCall() {
      getGeo();
    }
    function error(err) {
      console.warn("ERROR(" + err.code + "): " + err.message);
    }
  });

  function onChangeFunc(optionSelected) {
    region.current = optionSelected.value;
    setSelected(optionSelected);
  }

  return (
    <Layout title={t.havingABabyTitle}>
      <Banner
        siteTitle={t.havingAChildBannerTitle}
        headline={t.havingAChildBannerText}
      />
      <div id="wb-bc" className="container my-6">
        <Breadcrumb />
      </div>

      <div className="my-2 mx-2">
        <label className="text-base" htmlFor="provinceSelector">
          Showing top requests for:
        </label>
        <Select
          value={selected || { value: "CAN", label: "Canada" }}
          options={options}
          onChange={onChangeFunc}
          instanceId="provinceSelector"
          name="provinceSelector"
          className="w-36"
        />
      </div>

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
              <p className="text-h4 font-bold font-display">{t.getConnected}</p>
              <div className="pr-6">
                <MoreInfo text={t.moreInfoCommunity} />
                <MoreInfo text={t.moreInfoFertility} />
                <MoreInfo text={t.moreInfoHealth} />
                <MoreInfo text={t.moreInfoFinancial} />
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
              <p className="text-h4 font-bold font-display">{t.getConnected}</p>
              <div className="pr-6">
                <MoreInfo text={t.moreInfoCommunity} />
                <MoreInfo text={t.moreInfoFertility} />
                <MoreInfo text={t.moreInfoHealth} />
                <MoreInfo text={t.moreInfoFinancial} />
              </div>
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
              <p className="text-h4 font-bold font-display">{t.getConnected}</p>
              <div className="pr-6">
                <MoreInfo text={t.moreInfoCommunity} />
                <MoreInfo text={t.moreInfoFertility} />
                <MoreInfo text={t.moreInfoHealth} />
                <MoreInfo text={t.moreInfoFinancial} />
              </div>
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
              <p className="text-h4 font-bold font-display">{t.getConnected}</p>
              <div className="pr-6">
                <MoreInfo text={t.moreInfoCommunity} />
                <MoreInfo text={t.moreInfoFertility} />
                <MoreInfo text={t.moreInfoHealth} />
                <MoreInfo text={t.moreInfoFinancial} />
              </div>
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
              <p className="text-h4 font-bold font-display">{t.getConnected}</p>
              <div className="pr-6">
                <MoreInfo text={t.moreInfoCommunity} />
                <MoreInfo text={t.moreInfoFertility} />
                <MoreInfo text={t.moreInfoHealth} />
                <MoreInfo text={t.moreInfoFinancial} />
              </div>
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
              <p className="text-h4 font-bold font-display">{t.getConnected}</p>
              <div className="pr-6">
                <MoreInfo text={t.moreInfoCommunity} />
                <MoreInfo text={t.moreInfoFertility} />
                <MoreInfo text={t.moreInfoHealth} />
                <MoreInfo text={t.moreInfoFinancial} />
              </div>
            </div>
          </Accordion>

          <Accordion id="Ipsum" title="Ipsum" summary="Ipsum summary text">
            <div className="pr-6">
              <Table />
            </div>
            <div className="py-6">
              <p className="text-h4 font-bold font-display">{t.getConnected}</p>
              <div className="pr-6">
                <MoreInfo text={t.moreInfoCommunity} />
                <MoreInfo text={t.moreInfoFertility} />
                <MoreInfo text={t.moreInfoHealth} />
                <MoreInfo text={t.moreInfoFinancial} />
              </div>
            </div>
          </Accordion>
        </div>
      </div>
    </Layout>
  );
}
