export default function parseFromPlayerResponse(html) {
  const iprMatch = html.match(/ytInitialPlayerResponse\s*=\s*({[\s\S]*?});/);
  if (iprMatch) {
    try {
      const ipr = JSON.parse(iprMatch[1]);
      const vd = ipr.videoDetails || {};
      return {
        title: vd.title || null,
        fullDesc: vd.shortDescription || null,
        tags: Array.isArray(vd.tags) ? vd.tags : [],
        channel: vd.author || null,
      };
    } catch {}
  }
  return {};
}
