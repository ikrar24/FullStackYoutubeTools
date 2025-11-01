export default function extractVideoIdFromInput(input) {
  if (!input) return null;
  if (/^[a-zA-Z0-9_-]{11}$/.test(input)) return input;

  try {
    const u = new URL(input);
    if (u.searchParams.get('v') && /^[a-zA-Z0-9_-]{11}$/.test(u.searchParams.get('v')))
      return u.searchParams.get('v');

    const patterns = [
      /^\/([a-zA-Z0-9_-]{11})$/,
      /^\/embed\/([a-zA-Z0-9_-]{11})/,
      /^\/v\/([a-zA-Z0-9_-]{11})/,
      /^\/shorts\/([a-zA-Z0-9_-]{11})/,
    ];

    for (const re of patterns) {
      const m = u.pathname.match(re);
      if (m && m[1]) return m[1];
    }
  } catch {}

  const regex = [
    /(?:v=|\/watch\?v=|watch\?v=|&v=)([a-zA-Z0-9_-]{11})/,
    /youtu\.be\/([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/,
    /\/shorts\/([a-zA-Z0-9_-]{11})/,
  ];

  for (const r of regex) {
    const m = input.match(r);
    if (m && m[1]) return m[1];
  }

  return null;
}
