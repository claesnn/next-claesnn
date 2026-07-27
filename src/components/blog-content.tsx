import { Markdown, type MarkdownComponents } from "@tanstack/markdown/react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  highlightThemeCss,
  markdownHighlighter,
} from "@/lib/highlight"

const components = {
  a({ href, ...props }) {
    const external = /^https?:\/\//i.test(href ?? "")
    return (
      <a
        href={href}
        {...props}
        rel={external ? "noreferrer" : props.rel}
        target={external ? "_blank" : props.target}
      />
    )
  },
} satisfies MarkdownComponents

function CounterButton() {
  const [count, setCount] = useState(0)

  return (
    <div className="my-8">
      <Button size="lg" onClick={() => setCount((value) => value + 1)}>
        Say hello to client-side React
        <span className="ml-1 rounded bg-white/15 px-1.5">{count}</span>
      </Button>
    </div>
  )
}

export function BlogContent({ source }: { source: string }) {
  const sections = source.split(/<MyButton\s*\/>/)

  return (
    <>
      <style>{highlightThemeCss}</style>
      <div className="article-content">
        {sections.map((section, index) => (
          <div key={`${index}-${section.slice(0, 20)}`} className="contents">
            <Markdown
              components={components}
              highlighter={markdownHighlighter}
              headingIds
              codeLineNumbers
            >
              {section.trim()}
            </Markdown>
            {index < sections.length - 1 && <CounterButton />}
          </div>
        ))}
      </div>
    </>
  )
}
