import { BlogPost } from './types';

export const generateRssFeed = (posts: BlogPost[]): string => {
  const site_url = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const feedOptions = {
    title: 'My Blog',
    description: 'Latest blog posts',
    site_url,
    feed_url: `${site_url}/blog/rss.xml`,
    pubDate: new Date(),
  };

  // 生成RSS XML
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">\n';
  xml += '<channel>\n';
  xml += `<title>${feedOptions.title}</title>\n`;
  xml += `<description>${feedOptions.description}</description>\n`;
  xml += `<link>${feedOptions.site_url}</link>\n`;
  xml += `<atom:link href="${feedOptions.feed_url}" rel="self" type="application/rss+xml" />\n`;
  xml += `<lastBuildDate>${feedOptions.pubDate.toUTCString()}</lastBuildDate>\n`;

  posts.forEach((post) => {
    xml += '<item>\n';
    xml += `<title>${post.title}</title>\n`;
    xml += `<description>${post.description}</description>\n`;
    xml += `<link>${site_url}/blog/${post.slug}</link>\n`;
    xml += `<guid>${site_url}/blog/${post.slug}</guid>\n`;
    xml += `<pubDate>${new Date(post.date).toUTCString()}</pubDate>\n`;
    xml += '</item>\n';
  });

  xml += '</channel>\n';
  xml += '</rss>';

  return xml;
};