import { createHighlighter } from "@tanstack/highlight/core"
import { css } from "@tanstack/highlight/languages/css"
import { html } from "@tanstack/highlight/languages/html"
import { js } from "@tanstack/highlight/languages/js"
import { json } from "@tanstack/highlight/languages/json"
import { markdown } from "@tanstack/highlight/languages/markdown"
import { plaintext } from "@tanstack/highlight/languages/plaintext"
import { python } from "@tanstack/highlight/languages/python"
import { shell } from "@tanstack/highlight/languages/shell"
import { ts } from "@tanstack/highlight/languages/ts"
import { tsx } from "@tanstack/highlight/languages/tsx"
import { createTanStackMarkdownHighlighter } from "@tanstack/highlight/markdown"
import { createThemeCss } from "@tanstack/highlight/theme"
import { githubDarkTheme } from "@tanstack/highlight/themes/github-dark"

export const highlighter = createHighlighter({
  languages: [plaintext, css, html, js, json, markdown, python, shell, ts, tsx],
})

export const markdownHighlighter =
  createTanStackMarkdownHighlighter(highlighter)

export const highlightThemeCss = createThemeCss({
  light: githubDarkTheme,
  dark: githubDarkTheme,
  darkSelector: ".dark",
  lightSelector: ":root",
})
