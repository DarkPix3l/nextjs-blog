// app/posts/[slug]/page.js
import { getPostBySlug, getAllPosts } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function PostPage({ params }) {
  const post = getPostBySlug(params.slug);
  const content = await markdownToHtml(post.content || "");

  return (
    <article>
      <h1>{post.title}</h1>
      <p>By {post.author} on {post.date}</p>
      <img src={post.coverImage} alt={post.title} style={{ maxWidth: "100%" }} />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  );
}
