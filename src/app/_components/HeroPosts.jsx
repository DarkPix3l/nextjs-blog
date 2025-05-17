// app/page.js
import Link from "next/link";
import { getAllPosts } from "@/lib/api";
import Image from "next/image";

export default function HeroPosts() {
  const posts = getAllPosts();

  return (
    <main>
      <h1>Latest Article</h1>
      <div className="article-prew">
        {posts.map((post) => (
          <div key={post.slug}>
            <Link href={`/${post.slug}`}>
              <Image
                src={post.coverImage}
                alt={`Cover image for ${post.title}`}
                width={500}
                height={300}
              />
            </Link>
            <h2>
              <Link href={`/${post.slug}`}>{post.title}</Link>
            </h2>
            <p>{post.excerpt}</p>
            <div>
              <Image
                src={post.author.picture}
                alt={` ${post.author.name} image`}
                width={50}
                height={50}
              />
              <p>
                By {post.author.name} on {post.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
