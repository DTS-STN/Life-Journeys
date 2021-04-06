import Link from "next/link";

export default function Button({ text, route }) {
  return (
    <Link href={route}>
      <button>{text}</button>
    </Link>
  );
}
