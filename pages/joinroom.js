import Image from "next/image";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import { useRouter } from "next/router";

export default function Joinroom() {
  const router = useRouter();

  const startRoom = async (event) => {
    event.preventDefault();
    router.push(`/rooms/${event.target.roomid.value}`);
  };

  return (
    <Layout join>
      <h1>
        <Image src="/images/ace.jpg" width="70" height="70"></Image>
        <Link href="/">
          <a className="">{siteTitle}</a>
        </Link>
        <Image src="/images/ace.jpg" width="70" height="70"></Image>
      </h1>{" "}
      <br />
      <form onSubmit={startRoom}>
        <input
          autoFocus
          placeholder="Enter room number..."
          id="roomid"
          name="roomid"
          type="text"
          autoComplete="roomid"
          required
        />
        <button>Join Room</button>
      </form>
    </Layout>
  );
}
