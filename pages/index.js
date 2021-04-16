import TopicBox from "../components/organisms/TopicBox";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout home>
      <div className="flex flex-wrap gap-2 pb-1">
        <TopicBox
          title="Topic 1"
          image="/images/family.png"
          imgalt="alt1"
          body="Body 1"
          url="/"
          dataCy="topic1"
        />
        <TopicBox
          title="Topic 2"
          image="/images/family.png"
          imgalt="alt2"
          body="Body 2"
          url="/"
          dataCy="topic2"
        />
        <TopicBox
          title="Topic 3"
          image="/images/family.png"
          imgalt="alt3"
          body="Body 3"
          url="/"
          dataCy="topic3"
        />
        <TopicBox
          title="Topic 4"
          image="/images/family.png"
          imgalt="alt4"
          body="Body 4"
          url="/"
          dataCy="topic4"
        />
        <TopicBox
          title="Topic 5"
          image="/images/family.png"
          imgalt="alt5"
          body="Body 5"
          url="/"
          dataCy="topic5"
        />
      </div>
    </Layout>
  );
}
