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
              <h2 className={cn("text-3xl mb-1", kurale.className)}>
                {blog.metadata.title}
              </h2>
              <p className="text-slate-700">{blog.metadata.summary}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="w-[200px] mt-8 lg:mt-0 lg:ml-4">
        <h3 className={cn("text-xl mb-4", kurale.className)}>Who am I?</h3>
        <p className="text-sm mb-4">
          Hi, I&apos;m Claes Nymand Nilsson, and I am a Danish biotech engineer
          and software developer with a passion for science, technology, sports
          and photography.
        </p>
        <p className="text-sm mb-4">
          I&apos;ve been working in the biotech industry for <i>8+</i> years and
          have increasingly been working with software development and data
          analysis.
        </p>
        <img
          src="/profile-pic-200.webp"
          width="80"
          height="80"
          className="h-20 w-20 rounded-[4rem] mx-auto mb-8"
          alt="Claes Nymand Nilsson profile"
        />
        <h3 className={cn("text-xl mb-4", kurale.className)}>
          Sort and Filter
        </h3>
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
