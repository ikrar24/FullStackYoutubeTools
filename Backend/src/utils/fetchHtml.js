import axios from 'axios';

export default async function fetchHtml(url) {
  const headers = {
    'User-Agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36',
    'Accept-Language': 'en-US,en;q=0.9',
  };

  const resp = await axios.get(url, {
    headers,
    timeout: 15000,
    responseType: 'text',
    maxContentLength: Infinity,
    maxBodyLength: Infinity,
  });

  return resp.data;
}
