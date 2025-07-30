// app/blog/[id]/page.tsx

import BlogPost from "./BlogPost";

export default function BlogPostPage({ params }: { params: { id: string } }) {
  return <BlogPost postId={params.id} />;
}

export async function generateStaticParams() {
  return [
    { params: { id: "1" } },
    { params: { id: "2" } },
    { params: { id: "3" } },
  ];
}
