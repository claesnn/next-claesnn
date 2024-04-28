"use client";

import { Button } from "@/components/ui/button";
import { BlogPost } from "@/lib/blogs";
import { kurale } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

export default function BlogList({ blogs }: { blogs: BlogPost[] }) {
  const [sorted, setSorted] = useState(false);

  const multiplier = sorted ? 1 : -1;

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
      <div className="flex flex-col space-y-6 max-w-3xl w-full">
        {sortedBlogs.map((blog) => (
          <Link key={blog.slug} href={`/blogs/${blog.slug}`}>
            <div key={blog.slug}>
              <p className="text-xs uppercase text-slate-600">
                {formatDate(blog.metadata.publishedAt)}
              </p>
              <h2 className={cn("text-2xl mb-1", kurale.className)}>
                {blog.metadata.title}
              </h2>
              <p className="text-slate-700">{blog.metadata.summary}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="w-[200px] mt-8 lg:mt-0 lg:ml-4">
        <Button
          className="w-full"
          variant="outline"
          onClick={() => setSorted(!sorted)}
        >
          Sort {sorted ? "asc" : "desc"}
        </Button>
      </div>
    </>
  );
}
