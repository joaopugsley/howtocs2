import { serverQueryContent } from '#content/server'
import { SitemapStream, streamToPromise } from 'sitemap'

export default defineEventHandler(async (event) => {
  const posts = await serverQueryContent(event).where({ draft: false }).only(['slug', 'date']).find();

  const sitemap = new SitemapStream({
    hostname: 'https://howtocs2.com'
  });

  // write homepage
  sitemap.write({
    url: '/',
    changefreq: 'daily',
    lastmod: new Date().toISOString()
  })

  // write archive page
  sitemap.write({
    url: '/archive',
    changefreq: 'daily',
    lastmod: new Date().toISOString()
  })

  // write posts pages
  for (const post of posts) {
    sitemap.write({
      url: 'p/' + post .slug,
      changefreq: 'daily',
      lastmod: post .date,
    });
  };

  sitemap.end();
  return streamToPromise(sitemap);
});
