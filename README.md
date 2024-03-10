# TikTok blog

Blog site for educational TikTok content. Built with Astro's blog starter kit.

## Astro blog starter kit notes

Features:

- SEO-friendly with canonical URLs and OpenGraph data
- Sitemap support
- RSS Feed support
- Markdown & MDX support

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.
