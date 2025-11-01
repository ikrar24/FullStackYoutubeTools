export default function buildFallbackThumbnails(videoId) {
  if (!videoId) return [];
  const base = `https://i.ytimg.com/vi/${videoId}/`;
  return [
    `${base}maxresdefault.jpg`,
    `${base}hqdefault.jpg`,
    `${base}mqdefault.jpg`,
    `${base}sddefault.jpg`,
    `${base}default.jpg`,
  ];
}
