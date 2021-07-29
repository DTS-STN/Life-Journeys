import TopicBox from "../components/molecules/TopicBox";
import Layout from "../components/layout";
import { getTopics, getLocalTopics } from "./api/getData";

import en from "../locales/en";
import fr from "../locales/fr";

export default function Home({ locale, topicsData, errorCode }) {
  //
  const t = locale === "en" ? en : fr;

  if (!topicsData)
    return <div className="text-center text-h3">Loading Data ...</div>;

  if (errorCode)
    return (
      <div className="text-center text-h3 text-red-800">
        Failed to load topics...
      </div>
    );

  return (
    <Layout home title={t.homeSiteTitle} locale={locale}>
      {/* <section className="layout-container mb-2 mt-4">
        <div className="container">
          <div>
            <h1 className="pb-2 pt-6">{t.landingPageTitle}</h1>
            <hr className="h-1 bg-hr-red-bar"></hr>
            <p className="pt-10 pb-10">{t.landingPageContent}</p>
            <h2 className="text-h3 font-display font-bold pb-10">
              {t.landingPageSubtitle}
            </h2>
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
                    findInfo={t.findInformationAbout}
                    url={url}
                    subtopics={subtopics}
                  />
                );
              }
            )}
          </div>
        </div>
      </section> */}
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  let topicsData = [];
  let errorCode = false;

  console.log("language object at getStaticProps is ", locale);

  //
  // IF content enabled get the data from the api
  //

  if (process.env.NEXT_CONTENT_API) {
    const { apiData, error } = await getTopics(locale);

    let topics = [];

    apiData.entities.map((entity) => {
      if (entity.properties.contentFragment) {
        if (entity.properties.elements.lang.value === locale) {
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
    const { localData } = getLocalTopics();

    topicsData = localData;
    errorCode = false;
  }

  return {
    props: {
      topicsData,
      errorCode,
      locale,
    },
  };
}
