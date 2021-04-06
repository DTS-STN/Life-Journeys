import Image from "next/image";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import Button from "../components/controls/button";

export default function Home() {
  return (
    <Layout home>
      <h1>
        <Image src="/images/ace.jpg" width="70" height="70"></Image>
        <Link href="/">
          <a>{siteTitle}</a>
        </Link>
        <Image src="/images/ace.jpg" width="70" height="70"></Image>
      </h1>
      <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
        <Button text="New Room" route="/rooms/001"></Button>
        <Button text="Join Room" route="/joinroom"></Button>
      </div>
    </Layout>
  );
}
