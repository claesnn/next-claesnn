import { getBlogPosts } from "@/lib/blogs";
import Link from "next/link";

export default function Page() {
  const blogs = getBlogPosts();
  return (
    <div>
      {blogs.map((blog) => (
        <Link key={blog.slug} href={`/posts/${blog.slug}`}>
          <div key={blog.slug}>
            <h2>{blog.metadata.title}</h2>
            <p>{blog.metadata.summary}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
