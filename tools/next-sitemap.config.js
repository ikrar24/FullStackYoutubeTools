/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://bostviews.in',
  alternateUrls: ['https://www.bostviews.in'],
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: [
    '/admin-dashboard',
    '/dashboard',
    '/api/*',
    '/login',
    '/signup',
    '/disclaimer',
    '/privacy-policy',
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin-dashboard',
          '/dashboard',
          '/api/*',
          '/login',
          '/signup',
          '/disclaimer',
          '/privacy-policy',
        ],
      },
    ],
  },
};
