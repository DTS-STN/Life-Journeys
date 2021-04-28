import Layout from "../components/layout";
import MoreInfo from "../components/atoms/MoreInfo";

export default function lifejourney() {
  return (
    <Layout
      bannerTitle="Having a child"
      bannerText="Lorem ipsum dolor sit amet, consectetur"
    >
      <div>
        <MoreInfo text="Find community groups in my area" />
        <MoreInfo text="Find fertility treatment in my area" />
        <MoreInfo text="Find a health provider in my area" />
        <MoreInfo text="Find a financial planner in my area" />
      </div>
    </Layout>
  );
}
