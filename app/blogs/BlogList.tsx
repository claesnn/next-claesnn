"use client"

import AuthorInfo from "@/components/AuthorInfo"
import { Button } from "@/components/ui/button"
import { BlogPost } from "@/lib/blogs"
import { kurale } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { ArrowDown, ArrowUp } from "lucide-react"
import Link from "next/link"
import { usePathname, useSearchParams, useRouter } from "next/navigation"

export default function BlogList({ blogs }: { blogs: BlogPost[] }) {
  const pathname = usePathname()
  const { replace } = useRouter()
  const searchParams = useSearchParams()
  const sorted = searchParams.has("sortAsc")

  function toggleSort() {
    const params = new URLSearchParams(searchParams)

    if (sorted) {
      params.delete("sortAsc")
    } else {
      params.set("sortAsc", "")
    }

    replace(`${pathname}?${params.toString()}`, { scroll: false })
  }

  const multiplier = sorted ? -1 : 1

  const sortedBlogs = blogs.sort((a, b) => {
    return (
      (new Date(b.metadata.publishedAt).getTime() -
        new Date(a.metadata.publishedAt).getTime()) *
      multiplier
    )
  })

  function formatDate(date: string) {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <>
      <Button
        variant='outline'
        size='sm'
        onClick={toggleSort}>
        <span className='mr-2'>Sort</span>
        {sorted ? <ArrowUp size={18} /> : <ArrowDown size={18} />}
      </Button>
      <div className='w-full mb-16 mt-12'>
        <div className='text-center mb-20'>
          <Link href={`/blogs/${sortedBlogs[0].slug}`}>
            <div>
              <p className='text-xs uppercase text-slate-600'>
                {formatDate(sortedBlogs[0].metadata.publishedAt)}
              </p>
              <h2 className={cn("text-3xl mb-1", kurale.className)}>
                {sortedBlogs[0].metadata.title}
              </h2>
              <p className='text-slate-700'>
                {sortedBlogs[0].metadata.summary}
              </p>
            </div>
          </Link>
        </div>
        <hr className='my-10' />
        <div className='grid grid-cols-2 divide-x-2 text-center mb-32'>
          {sortedBlogs.slice(1).map((blog, i) => (
            <Link
              key={blog.slug}
              href={`/blogs/${blog.slug}`}>
              <div
                key={blog.slug}
                className='p-6'>
                <p className='text-xs uppercase text-slate-600'>
                  {formatDate(blog.metadata.publishedAt)}
                </p>
                <h2 className={cn("text-3xl mb-1", kurale.className)}>
                  {blog.metadata.title}
                </h2>
                <p className='text-slate-700'>{blog.metadata.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className='mx-auto p-8 bg-slate-50 max-w-xl rounded-xl'>
        <AuthorInfo />
      </div>
    </>
  )
}
