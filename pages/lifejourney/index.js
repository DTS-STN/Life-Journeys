import Layout from "../../components/layout";
import TitleSection from "../../components/molecules/TitleSection";
import Link from "next/link";

export default function lifejourney() {
  return (
    <Layout>
      <TitleSection
        title="Life Journeys"
        description="Lorem ipsum dolor sit amet, lorem elit consectetur adipiscing elit, ame do sed eiusmod tempor. Lorem ipsum dolor sit amet, lorem elit consectetur adipiscing elit, ame do sed eiusmod tempor. Lorem ipsum dolor sit amet, lorem elit consectetur adipiscing elit, ame do sed eiusmod tempor."
      />
      <Link href="lifejourney/lifejourney2">
        <a>Life Journey 2</a>
      </Link>
    </Layout>
  );
}
