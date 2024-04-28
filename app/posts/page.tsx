import { getBlogPosts } from "@/lib/blogs";
import BlogList from "./BlogList";

export default function Page() {
  const blogs = getBlogPosts();

  return (
    <div className="lg:flex justify-between">
      <BlogList blogs={blogs} />
    </div>
  );
}
