import Image from "next/image";
import Link from "next/link";
import Layout, { siteTitle } from "../../components/layout";
import Controls from "../../components/cards/controls";
import PlayerCard from "../../components/cards/playercard";
import Values from "../../components/cards/valuescard";

export async function getServerSideProps(context) {
  const pid = context.query.id;
  return {
    props: { pid }, // will be passed to the page component as props
  };
}

export default function Room({ pid }) {
  return (
    <Layout room>
      <h1>
        <Image src="/images/ace.jpg" width="70" height="70"></Image>
        <Link href="/">
          <a>{siteTitle}</a>
        </Link>
        <Image src="/images/ace.jpg" width="70" height="70"></Image>
      </h1>{" "}
      <br />
      <h2>Room Number: {pid} </h2>
      <br />
      <Values />
      <Controls />
      <br />
      <div className="space-x-4 p-10 rounded-xl border-black bg-green-400">
        <PlayerCard user="Pond" value="8" />
        <PlayerCard user="Sheila" value="5" />
        <PlayerCard user="Tom" value="20" />
        <br />
        <br />
        <PlayerCard user="Paul" value="8" />
        <PlayerCard user="Grouch" value="5" />
        <PlayerCard user="Snuffy" value="20" />
      </div>
    </Layout>
  );
}
