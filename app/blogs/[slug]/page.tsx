import MyButton from "@/components/MyButton";
import { getBlogPosts } from "@/lib/blogs";
import { kurale } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { MDXRemote } from "next-mdx-remote/rsc";

export function generateStaticParams() {
  let blogs = getBlogPosts();
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  let { slug } = params;
  let blog = getBlogPosts().find((blog) => blog.slug === slug);
  if (!blog) {
    return <div>Blog not found</div>;
  }

  function formatDate(date: string) {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  return (
    <article className="">
      <div className="text-center mb-12">
        <p className="text-xs uppercase text-slate-600 mb-2">
          {formatDate(blog.metadata.publishedAt)}
        </p>
        <h2 className={cn("text-4xl lg:text-6xl mb-4", kurale.className)}>
          {blog.metadata.title}
        </h2>
        <p className="text-slate-600 max-w-xl mx-auto">
          {blog.metadata.summary}
        </p>
      </div>
      <div className="prose lg:prose-lg mt-3 mx-auto">
        <MDXRemote
          source={blog.content}
          components={{ MyButton: () => <MyButton /> }}
        />
      </div>
    </article>
  );
}
