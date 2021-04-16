import TopicBox from "../components/organisms/TopicBox";
import Layout from "../components/layout";
import userSwr from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data, error } = userSwr("/api/topics", fetcher);
  if (error) return <div>Failed to load topics...</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <Layout home>
      <div className="flex flex-wrap gap-2 pb-1">
        {data.map(function (d, idx) {
          return (
            <TopicBox
              title={d.title}
              body={d.body}
              image={d.image}
              imgalt={d.imgalt}
              url={d.url}
              dataCy={d.dataCy}
            />
          );
        })}
      </div>
    </Layout>
  );
}
