import { getPostBySlug } from '@/lib/api';
import markdownToHtml from '@/lib/markdownToHtml';

export default async function PostPage({ params }) {
  const { slug } = params;
  const post = getPostBySlug(slug);

  if (!post) {
    // Handle 404
    return <p>Post not found</p>;
  }

  // convert markdown content to html string
  const content = await markdownToHtml(post.content || '');

  return (
    <article>
      <h1>{post.title}</h1>
       <p>By {post.author.name} on {post.date}</p>
      <img src={post.coverImage} alt={post.title} style={{ maxWidth: "100%" }} />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  );
}

