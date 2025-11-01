export default function extractHashtags(title = '', description = '') {
  const text = `${title} ${description}`;
  const hashtags = [...text.matchAll(/#(\w+)/g)].map(m => m[1]);
  return [...new Set(hashtags)]; // remove duplicates
}
