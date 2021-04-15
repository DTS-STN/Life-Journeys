import TopicBox from "../components/organisms/TopicBox";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout home>
      <div className="flex flex-wrap gap-2 pb-1">
        <TopicBox />
        <TopicBox />
        <TopicBox />
        <TopicBox />
        <TopicBox />
      </div>
    </Layout>
  );
}
