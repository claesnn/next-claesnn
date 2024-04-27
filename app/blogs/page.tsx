import Link from "next/link";
import fs from "fs";

function getPosts() {
  return fs
    .readdirSync("app/blog")
    .filter((slug) => slug !== "layout.tsx")
    .map((slug) => {
      const { meta } = require(`/app/blog/${slug}/page.mdx`);
      return {
        slug,
        meta,
      };
    });
}

export default function Page() {
  const posts = getPosts().sort((a, b) => {
    return new Date(b.meta.date).valueOf() - new Date(a.meta.date).valueOf();
  });

  return (
    <div className="space-x-3">
      <div>
        {posts.map((post) => (
          <div key={post.slug}>
            <Link href={`/blog/${post.slug}`}>{post.meta.title}</Link>
            <p>{post.meta.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
