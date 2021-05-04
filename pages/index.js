import TopicBox from "../components/organisms/TopicBox";
import Layout from "../components/layout";
import userSwr from "swr";
import TitleSection from "../components/molecules/TitleSection";
import Breadcrumb from "../components/molecules/Breadcrumb";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data, error } = userSwr("/api/topics", fetcher);

  if (!data) return <div>Loading...</div>;
  if (error === !null) return <div>Failed to load topics...</div>;

  return (
    <Layout home>
      <div className="container">
        <div id="wb-bc" className="pt-4">
          <Breadcrumb />
        </div>
        <TitleSection
          title="Life Journeys"
          description="Lorem ipsum dolor sit amet, lorem elit consectetur adipiscing elit, ame do sed eiusmod tempor. Lorem ipsum dolor sit amet, lorem elit consectetur adipiscing elit, ame do sed eiusmod tempor. Lorem ipsum dolor sit amet, lorem elit consectetur adipiscing elit, ame do sed eiusmod tempor."
        />
      </div>
      <div className="container flex flex-wrap">
        <div className="sm:grid grid-cols-3 gap-10">
          {data.map(function (d, idx) {
            return (
              <TopicBox
                key={idx}
                title={d.title}
                body={d.body}
                image={d.image}
                imgalt={d.imgalt}
                url={d.url}
                datacy={d.datacy}
                subtopics={d.subtopics}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
