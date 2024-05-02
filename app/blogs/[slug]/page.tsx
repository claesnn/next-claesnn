import AuthorInfo from "@/components/AuthorInfo";
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

function BlogHeader({
  title,
  summary,
  publishedAt,
}: {
  title: string;
  summary: string;
  publishedAt: string;
}) {
  return (
    <div className="text-center mb-12">
      <p className="text-xs uppercase text-slate-600 mb-2">
        {new Date(publishedAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <h2 className={cn("text-4xl lg:text-6xl mb-4", kurale.className)}>
        {title}
      </h2>
      <p className="text-slate-600 max-w-xl mx-auto">{summary}</p>
    </div>
  );
}

export default function Page({ params }: { params: { slug: string } }) {
  let { slug } = params;
  let blog = getBlogPosts().find((blog) => blog.slug === slug);
  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <article>
      <BlogHeader
        title={blog.metadata.title}
        summary={blog.metadata.summary}
        publishedAt={blog.metadata.publishedAt}
      />
      <div className="prose lg:prose-lg mt-3 mx-auto">
        <MDXRemote
          source={blog.content}
          components={{ MyButton: () => <MyButton /> }}
        />
      </div>
      <div className="mx-auto max-w-3xl p-8 bg-slate-50 w-full rounded-lg mt-16">
        <div className="max-w-md mx-auto space-y-4">
          <AuthorInfo />
        </div>
      </div>
    </article>
  );
}
