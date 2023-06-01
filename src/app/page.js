import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>HELLO WORLD</h1>
      <Link href={"/iletisim"}>İletişim</Link>
    </div>
  );
}
