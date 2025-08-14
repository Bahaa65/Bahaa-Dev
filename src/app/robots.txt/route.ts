import { MetadataRoute } from 'next';

export async function GET(): Promise<Response> {
  const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://bahaagaballah.com/sitemap.xml

# Crawl-delay
Crawl-delay: 1

# Disallow admin and private areas
Disallow: /api/
Disallow: /_next/
Disallow: /admin/

# Allow important pages
Allow: /
Allow: /about
Allow: /projects
Allow: /experience
Allow: /achievements
Allow: /contact`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}


