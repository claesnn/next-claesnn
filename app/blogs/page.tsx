import { getBlogPosts } from "@/lib/blogs";
import BlogList from "./BlogList";
import { Suspense } from "react";

export default function Page() {
  const blogs = getBlogPosts();

  return (
    <div className="lg:flex justify-between">
      <Suspense>
        <BlogList blogs={blogs} />
      </Suspense>
    </div>
  );
}
