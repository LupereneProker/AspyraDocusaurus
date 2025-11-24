
// @ts-check
const config = {
  title: 'Aspyra Docs',
  url: 'https://example.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  presets: [
    [
      'classic',
      ({
        docs: { sidebarPath: require.resolve('./sidebars.js') },
        blog: false,
        theme: { customCss: require.resolve('./src/css/custom.css') },
      }),
    ],
  ],
};
module.exports = config;
