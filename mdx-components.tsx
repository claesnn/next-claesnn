import type { MDXComponents } from "mdx/types";
import { cn } from "./lib/utils";
import { kurale } from "./lib/fonts";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className={cn("text-4xl font-bold mt-8 mb-4", kurale.className)}>
        {children}
      </h1>
    ),
    ...components,
  };
}
