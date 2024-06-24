"use client"

import AuthorInfo from "@/components/AuthorInfo"
import { Button } from "@/components/ui/button"
import { BlogPost } from "@/lib/blogs"
import { kurale } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { ArrowDown, ArrowUp } from "lucide-react"
import Link from "next/link"
import { usePathname, useSearchParams, useRouter } from "next/navigation"

function formatDate(date: string) {
    return new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    })
}

function LeadingBlogPost({ blog }: { blog: BlogPost }) {
    return (
        <div className='text-center mb-20'>
            <Link href={`/blogs/${blog.slug}`}>
                <p className='text-xs uppercase text-slate-600'>
                    {formatDate(blog.metadata.publishedAt)}
                </p>
                <h2 className={cn("text-3xl mb-1", kurale.className)}>
                    {blog.metadata.title}
                </h2>
                <p className='text-slate-700'>{blog.metadata.summary}</p>
            </Link>
        </div>
    )
}

function RemainingBlogPosts({ blogs }: { blogs: BlogPost[] }) {
    return (
        <div className='grid divide-y sm:divide-y-0 sm:grid-cols-2 sm:divide-x-2 text-center mb-32'>
            {blogs.map((blog, i) => (
                <Link
                    key={blog.slug}
                    href={`/blogs/${blog.slug}`}>
                    <div className='py-6'>
                        <p className='text-xs uppercase text-slate-600'>
                            {formatDate(blog.metadata.publishedAt)}
                        </p>
                        <h2 className={cn("text-3xl mb-1", kurale.className)}>
                            {blog.metadata.title}
                        </h2>
                        <p className='text-slate-700'>
                            {blog.metadata.summary}
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    )
}

function SortButton({
    sorted,
    toggleSort,
}: {
    sorted: boolean
    toggleSort: () => void
}) {
    return (
        <Button
            variant='outline'
            size='sm'
            onClick={toggleSort}>
            <span className='mr-2'>Sort</span>
            {sorted ? <ArrowUp size={18} /> : <ArrowDown size={18} />}
        </Button>
    )
}

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

    return (
        <>
            <SortButton
                sorted={sorted}
                toggleSort={toggleSort}
            />

            <div className='w-full mb-16 mt-12'>
                <LeadingBlogPost blog={sortedBlogs[0]} />

                <hr className='my-10' />
                <RemainingBlogPosts blogs={sortedBlogs.slice(1)} />
            </div>

            <div className='mx-auto p-8 bg-slate-50 max-w-xl rounded-xl'>
                <AuthorInfo />
            </div>
        </>
    )
}
