import Link from "next/link";
import { getAllPosts } from "@/lib/api";
import Image from "next/image";
import "./heropost.css";

export default function HeroPosts() {
  const posts = getAllPosts();

  return (
    <main>
      {/* <div className="fade-white"></div> */}
      <div className="wrapper">
        <h1>Latest Article</h1>
        <div className="articles-container">
          {posts.map((post) => (
            <div key={post.slug} className="article-card">
              <Link href={`/${post.slug}`}>
                <div className="image-wrapper">
                  <Image
                    src={post.coverImage}
                    alt={`Cover image for ${post.title}`}
                    className="cover-img"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{
                      objectFit: "cover",
                      borderRadius: "var(--radius) var(--radius) 0 0",
                    }}
                    priority
                  />
                </div>
              </Link>
              <div className="article-body">
                <div className="article-text">
                  <h2>
                    <Link href={`/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p>{post.excerpt}</p>
                </div>
                <div className="author-info">
                  <Image
                    src={post.author.picture}
                    alt={` ${post.author.name} image`}
                    width={50}
                    height={50}
                    style={{
                      borderRadius: "var(--radius)",
                      border: "1px solid white",
                    }}
                  />
                  <p>
                    By <span className="author-name">{post.author.name}</span>{" "}
                    on <br />
                    <span>{post.date}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
