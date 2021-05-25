import TopicBox from "../components/molecules/TopicBox";
import Layout from "../components/layout";
import userSwr from "swr";
import { useContext } from "react";
import { LanguageContext } from "../context/languageProvider";
import Breadcrumb from "../components/molecules/Breadcrumb";

import en from "../locales/en";
import fr from "../locales/fr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const { items } = useContext(LanguageContext);
  const language = items.language;
  const t = language === "en" ? en : fr;

  const { data, error } = userSwr("/api/topics", fetcher);

  if (!data) return <div>Loading...</div>;
  if (error === !null) return <div>Failed to load topics...</div>;

  return (
    <Layout home>
      <div class="xxs:ml-3 container lg:mx-auto">
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
        <div className="flex flex-wrap grid xxl:grid-cols-3 lg:grid-cols-2 grid-flow-row gap-3 md:gap-5">
          {data.map(function (d, idx) {
            return (
              <TopicBox
                key={idx}
                title={d.title}
                body={d.body}
                image={d.image}
                imgalt={d.imgalt}
                url={d.url}
                subtopics={d.subtopics}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
