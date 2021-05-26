import TopicBox from "../components/molecules/TopicBox";
import Layout from "../components/layout";
import { getTopics } from "./api/topics";
import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../context/languageProvider";
import Breadcrumb from "../components/molecules/Breadcrumb";

import en from "../locales/en";
import fr from "../locales/fr";

export default function Home() {
  const { items } = useContext(LanguageContext);
  const language = items.language;
  const t = language === "en" ? en : fr;

  const [topicsData, setTopicData] = useState(null);
  const [errorCode, setErrorCode] = useState(false);

  useEffect(() => {
    async function TopicList() {
      const { errorCode, topicsData } = await getTopics("en");

      let topics = [];

      topicsData.entities.map((entity) => {
        if (entity.properties.contentFragment) {
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
      });

      // console.log("topics = ", topics)
      if (errorCode) setErrorCode(true);
      setTopicData(topics);
    }
    TopicList();
  }, []);

  if (!topicsData)
    return <div className="center text-h3">Loading Data ...</div>;

  if (errorCode) return <div>Failed to load topics...</div>;

  return (
    <Layout home>
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
        <div className="mt-4 mb-4 grid lg:grid-cols-3 sm:grid-cols-2 grid-flow-row gap-3 md:gap-10">
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
