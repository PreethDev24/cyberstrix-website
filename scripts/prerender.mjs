import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { getAllPrerenderRoutes, getSitemapMeta } from '../src/seo/routes.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const dist = path.join(root, 'dist')
const siteUrl = (process.env.VITE_SITE_URL || 'https://cyberstrix31022.vercel.app').replace(/\/$/, '')
const lastmod = new Date().toISOString().split('T')[0]
const routes = getAllPrerenderRoutes()

const templatePath = path.join(dist, 'index.html')
if (!fs.existsSync(templatePath)) {
  console.error('Missing dist/index.html — run vite build first.')
  process.exit(1)
}

const template = fs.readFileSync(templatePath, 'utf-8')
const { render } = await import(path.join(dist, 'server', 'entry-server.js'))

for (const route of routes) {
  const { html, head } = render(route)

  const page = template
    .replace('<!--app-head-->', head)
    .replace('<!--app-html-->', html)

  const outPath =
    route === '/'
      ? path.join(dist, 'index.html')
      : path.join(dist, route, 'index.html')

  fs.mkdirSync(path.dirname(outPath), { recursive: true })
  fs.writeFileSync(outPath, page)
  console.log(`prerendered ${route}`)
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((route) => {
    const meta = getSitemapMeta(route)
    return `  <url>
    <loc>${siteUrl}${route === '/' ? '' : route}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${meta.changefreq}</changefreq>
    <priority>${meta.priority}</priority>
  </url>`
  })
  .join('\n')}
</urlset>
`

const robots = `User-agent: *
Allow: /

# AI / assistant crawlers — key facts also at /llms.txt
Sitemap: ${siteUrl}/sitemap.xml
`

fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap)
fs.writeFileSync(path.join(dist, 'robots.txt'), robots)
console.log(`wrote sitemap.xml (${routes.length} URLs) and robots.txt`)
