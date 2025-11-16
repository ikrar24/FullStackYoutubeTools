import extractVideoIdFromInput from '../utils/extractVideoId.js';
import fetchHtml from '../utils/fetchHtml.js';
import parseMeta from '../utils/parseMeta.js';
import buildFallbackThumbnails from '../utils/thumbnails.js';
import * as cheerio from 'cheerio';



export default async function thumbnailsDownloadControll(req, res) {
  try {
    const { url } = req.query;
    if (!url) return res.status(400).json({ error: 'Provide ?url=<youtube_link_or_id>' });

    let videoId = extractVideoIdFromInput(url);
    let html = null;

    if (!videoId) {
      try {
        const maybeUrl = url.startsWith('http') ? url : `https://${url}`;
        html = await fetchHtml(maybeUrl);
        const vidMatch = html.match(/["']videoId["']\s*:\s*["']([a-zA-Z0-9_-]{11})["']/);
        if (vidMatch && vidMatch[1]) videoId = vidMatch[1];
      } catch (e) {
        return res.status(400).json({ error: 'Invalid URL or ID', details: e.message });
      }
    }

    if (!videoId) return res.status(400).json({ error: 'Invalid YouTube Video ID' });

    const watchUrl = `https://www.youtube.com/watch?v=${videoId}`;
    if (!html) html = await fetchHtml(watchUrl);

    const $ = cheerio.load(html);
    const meta = parseMeta($);
   

    

    const thumbnails = [];
    if (meta.ogImage) thumbnails.push(meta.ogImage);

    const fallback = buildFallbackThumbnails(videoId);
    fallback.forEach(f => { if (!thumbnails.includes(f)) thumbnails.push(f); });

    const response = {
      id: videoId,
      url: watchUrl,
      publishedAt: meta.published || null,
      thumbnails,
      scrapedAt: new Date().toISOString(),
    };


 

    res.json({userYoutubeDeatails:response });
  } catch (err) {
    console.error('❌ Error:', err.message);
    res.status(500).json({ error: 'Server error', details: err.message });
  }
}
