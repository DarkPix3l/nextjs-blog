// app/page.js
import Link from "next/link";
import { getAllPosts } from "@/lib/api";

export default function HeroPosts() {
  const posts = getAllPosts();

  return (
    <main>
      <h1>My Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <h2>
              <Link href={`/posts/${post.slug}`}>{post.title}</Link>
            </h2>
            <p>{post.excerpt}</p>
            <p>By {post.author.name} on {post.date}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
