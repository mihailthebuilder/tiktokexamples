# TikTok blog

Blog site for educational TikTok content. Built with Astro's blog starter kit.

## Tech debt

I need to add `/blog/` to each image in the `mdx` file. Ideally it should do it automatically.

Getting warnings for nested CSS when I build. They're not affecting anything though.

Got 91% performance on the blog post page, mainly because of the EmailOctopus script.

Need to align EmailOctopus newsletter form to the left side.

## Astro blog starter kit notes

Features:

- ✅ Minimal styling (make it your own!)
- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Sitemap support
- ✅ RSS Feed support
- ✅ Markdown & MDX support

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.
