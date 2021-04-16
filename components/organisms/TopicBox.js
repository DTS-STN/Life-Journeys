import Image from "next/image";
import Link from "next/link";
/**
 *  Topic Box Component
 */
export default function TopicBox(props) {
  return (
    <div className="shadow-lg h-96 w-96 rounded-md border-2 pl-2">
      <div className="grid grid-cols-3 grid-flow-row">
        <div className="col-span-2">
          <h3 className="pt-2 pb-2 font-extrabold">Topic Title</h3>
        </div>
        <div className="col-span-1 pt-2">
          <Image
            src="/images/family.png"
            alt="icon"
            width={73}
            height={73}
          ></Image>
        </div>
      </div>
      <br />
      <p>
        Topic Content is whateverTopic Content is whateverTopic Content is
        whateverTopic Content is whatev
      </p>
      <br />
      <p className="font-semibold">Find information about</p>
      <p>thing 1</p>
      <br />
      <br />
      <Link href="/">Explore this journey </Link>
    </div>
  );
}
