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

  return (
    <article>
      <h2 className={cn("text-5xl mb-2", kurale.className)}>
        {blog.metadata.title}
      </h2>
      <p className="text-slate-600 text-sm">{blog.metadata.summary}</p>
      <div className="prose mt-3">
        <MDXRemote
          source={blog.content}
          components={{ MyButton: () => <MyButton /> }}
        />
      </div>
    </article>
  );
}
