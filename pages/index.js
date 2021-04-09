import Layout, { siteTitle } from "../components/layout";

export default function Home() {
  return (
    <Layout home>
      <div className="border-b-2 border-red-600 my-8">
        <h1 className="font-semibold italic text-3xl">{siteTitle}</h1>
      </div>

      <div>
        <h2> Site content here </h2>
      </div>
    </Layout>
  );
}
