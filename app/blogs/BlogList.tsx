"use client";

import AuthorInfo from "@/components/AuthorInfo";
import { Button } from "@/components/ui/button";
import { BlogPost } from "@/lib/blogs";
import { kurale } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { ArrowDown, ArrowUp } from "lucide-react";
import Link from "next/link";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function BlogList({ blogs }: { blogs: BlogPost[] }) {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const sorted = searchParams.has("sortAsc");

  function toggleSort() {
    const params = new URLSearchParams(searchParams);

    if (sorted) {
      params.delete("sortAsc");
    } else {
      params.set("sortAsc", "");
    }

    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  const multiplier = sorted ? -1 : 1;

  const sortedBlogs = blogs.sort((a, b) => {
    return (
      (new Date(b.metadata.publishedAt).getTime() -
        new Date(a.metadata.publishedAt).getTime()) *
      multiplier
    );
  });

  function formatDate(date: string) {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  return (
    <>
      <div className="flex flex-col space-y-6 w-full">
        {sortedBlogs.map((blog, i) => (
          <Link key={blog.slug} href={`/blogs/${blog.slug}`}>
            <div key={blog.slug}>
              <p className="text-xs uppercase text-slate-600">
                {formatDate(blog.metadata.publishedAt)}
              </p>
              <h2 className={cn("text-3xl mb-1", kurale.className)}>
                {blog.metadata.title}
              </h2>
              <p className="text-slate-700">{blog.metadata.summary}</p>
            </div>
            {i < blogs.length - 1 && <hr className="border-slate-200 my-6" />}
          </Link>
        ))}
      </div>
      <div className="mx-auto p-5 bg-slate-50 lg:w-[350px] rounded-lg mt-12 lg:mt-0 lg:ml-6 lg:mr-0">
        <AuthorInfo />
        <h3 className={cn("text-xl mt-8 mb-4", kurale.className)}>
          Sort and Filter
        </h3>
        <Button className="w-full" variant="outline" onClick={toggleSort}>
          <span className="mr-2">Sort</span>
          {sorted ? <ArrowUp size={18} /> : <ArrowDown size={18} />}
        </Button>
      </div>
    </>
  );
}
