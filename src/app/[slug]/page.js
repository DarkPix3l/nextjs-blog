import { getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import styles from "./slug.module.css";
import Header from "../_components/(navigation)/Header";
import Footer from "../_components/(navigation)/Footer";
import Image from "next/image";
import Link from "next/link";

export default async function PostPage({ params }) {
  const { slug } = params;
  const post = await getPostBySlug(slug);
  console.log("post:", post);

  if (!post) {
    // Handle 404
    return <p>Post not found</p>;
  }

  // convert markdown content to html string
  const content = await markdownToHtml(post.content || "");

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className="fade-white"></div>
        <div className="wrapper">
        <div>
          {" "}
          <Link
            href="/"
            style={{
              display: "flex",
              flexDirection: "column",
              width: "fit-content",
              alignItems: "center",
              gap:"5px"
            }}
          >
            <Image
              className="logo"
              src="/logo.svg"
              alt="the Blog's Logo"
              width={50}
              height={50}
              style={{
              filter:"invert(1)"
            }}
            />
            <p>GrowBlog</p>
          </Link>
        </div>
        <article className={styles.article}>
          <h1>{post.title}</h1>

          <div className={styles.authorInfo}>
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
              By <span>{post.author.name}</span> on
              <span>{post.date}</span>
            </p>
          </div>
          <figure>
            <div className={styles.coverRatio}>
            <img
              src={post.coverImage}
              alt={post.title}
              style={{ maxWidth: "100%" }}
            />
            </div>
            <figcaption>Photo credit: {post.photoCredit.cover}</figcaption>
          </figure>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
