import { notFound } from "next/navigation";

const posts = [
  { id: "post-1", title: "Blog 1" },
  { id: "post-2", title: "Blog 2" },
  { id: "post-3", title: "Blog 3" },
];

export async function generateStaticParams() {
  return posts.map((post) => ({
    id: post.id,
  }));
}

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = posts.find((p) => p.id === params.id);

  if (!post) return notFound();

  return (
    <div>
      <h1>{post.title}</h1>
      <p>Post ID: {params.id}</p>
    </div>
  );
}
