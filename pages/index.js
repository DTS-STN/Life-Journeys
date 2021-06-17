import TopicBox from "../components/molecules/TopicBox";
import Layout from "../components/layout";
import { getTopics, getLocalData } from "./api/topics";
import { useContext } from "react";
import { LanguageContext } from "../context/languageProvider";
import Breadcrumb from "../components/molecules/Breadcrumb";

import en from "../locales/en";
import fr from "../locales/fr";

export default function Home({ topicsData, errorCode }) {
  const { items } = useContext(LanguageContext);
  const language = items.language;
  const t = language === "en" ? en : fr;

  if (!topicsData)
    return <div className="text-center text-h3">Loading Data ...</div>;

  if (errorCode)
    return (
      <div className="text-center text-h3 text-red-800">
        Failed to load topics...
      </div>
    );

  return (
    <Layout home title={t.homeSiteTitle}>
      <div className="container">
        <div id="wb-bc" className="pt-4">
          <Breadcrumb />
        </div>
        <div>
          <h1 className="pb-2 pt-6">{t.landingPageTitle}</h1>
          <hr className="h-1 bg-hr-red-bar"></hr>
          <p className="pt-10 pb-10">{t.landingPageContent}</p>
          <p className="text-h3 font-display font-bold pb-10">
            {t.landingPageSubtitle}
          </p>
        </div>
      </div>
      <div className="container flex flex-wrap">
        <div className="topicBoxSm grid xxl:grid-cols-3 lg:grid-cols-2 grid-flow-row gap-3 lg:gap-10 xxl:gap-5">
          {topicsData.map(
            ({ title, body, image, imgalt, url, subtopics }, idx) => {
              return (
                <TopicBox
                  key={idx}
                  title={title}
                  body={body}
                  image={image}
                  imgalt={imgalt}
                  url={url}
                  subtopics={subtopics}
                />
              );
            }
          )}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps(language) {
  let topicsData = [];
  let errorCode = false;

  //
  // IF content enabled get the data from the api
  //

  if (process.env.NEXT_CONTENT_API) {
    const { apiData, error } = await getTopics(language.locale);

    let topics = [];

    apiData.entities.map((entity) => {
      if (entity.properties.contentFragment) {
        if (entity.properties.elements.lang.value === language.locale) {
          topics.push({
            title: entity.properties.elements.title.value,
            body: entity.properties.elements.description.value,
            image: "/images/family.png",
            imgalt: "Alt text TBD",
            url: entity.properties.elements.link.value,
            subtopics: entity.properties.elements.tags.value
              .toString()
              .split(","),
          });
        }
      }
    });

    topicsData = topics;
    errorCode = error;
  } else {
    //
    // Else get the content from the local file
    //
    const { localData } = getLocalData();

    topicsData = localData;
    errorCode = false;
  }

  return {
    props: {
      topicsData,
      errorCode,
    },
  };
}
