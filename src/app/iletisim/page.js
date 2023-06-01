import Link from "next/link";
const getComments = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments", { cache: "no-store" });
  return await response.json();
};

export default async function Page() {
  const comments = await getComments();

  return (
    <div>
      <Link href={"/"}>Anasayfa</Link>
      <div className="w-[100px] h-[100px] overflow-scroll">AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</div>
      {comments.map((comment) => {
        return <h1 key={comment.id}>{comment.body}</h1>;
      })}
    </div>
  );
}
