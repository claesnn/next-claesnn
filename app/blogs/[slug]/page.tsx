import AuthorInfo from "@/components/AuthorInfo";
import MyButton from "@/components/MyButton";
import { getBlogPosts } from "@/lib/blogs";
import { kurale } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { MDXRemote } from "next-mdx-remote/rsc";

type generateMetadataProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: generateMetadataProps) {
  const { slug } = params;
  const blog = getBlogPosts().find((blog) => blog.slug === slug);

  if (!blog) {
    return { status: 404 };
  }

  return {
    title: blog.metadata.title,
    description: blog.metadata.summary,
  };
}

export function generateStaticParams() {
  let blogs = getBlogPosts();
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

type BlogHeaderProps = {
  title: string;
  summary: string;
  publishedAt: string;
};

function BlogHeader({ title, summary, publishedAt }: BlogHeaderProps) {
  const formattedDate = new Date(publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="text-center mb-12">
      <p className="text-xs uppercase text-slate-600 mb-2">{formattedDate}</p>
      <h2 className={cn("text-4xl lg:text-6xl mb-4", kurale.className)}>
        {title}
      </h2>
      <p className="text-slate-600 max-w-xl mx-auto">{summary}</p>
    </div>
  );
}

type PageProps = {
  params: {
    slug: string;
  };
};

export default function Page({ params }: PageProps) {
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
