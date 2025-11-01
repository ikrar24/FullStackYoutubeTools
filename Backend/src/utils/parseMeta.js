export default function parseMeta($) {
  const title =
    $('meta[property="og:title"]').attr('content') ||
    $('meta[name="title"]').attr('content') ||
    $('title').text() ||
    null;

  const shortDesc =
    $('meta[property="og:description"]').attr('content') ||
    $('meta[name="description"]').attr('content') ||
    null;

  const ogImage = $('meta[property="og:image"]').attr('content') || null;
  const channel = $('meta[itemprop="author"]').attr('content') || null;
  const published = $('meta[itemprop="datePublished"]').attr('content') || null;

  const keywords = $('meta[name="keywords"]').attr('content') || '';
  const tags = keywords.split(',').map(t => t.trim()).filter(Boolean);

  return { title, shortDesc, ogImage, channel, published, tags };
}
