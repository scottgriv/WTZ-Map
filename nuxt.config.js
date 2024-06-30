import dotenv from 'dotenv';
dotenv.config();

export default {
  ssr: false,
  target: 'static',
  head: {
    title: 'WTZ Map',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'robots', content: 'index, follow' },
      { name: 'apple-mobile-web-app-title', content: 'WTZ Map' },
      { name: 'msapplication-TileColor', content: '#FFFFFF' },
      { name: 'msapplication-config', content: '/WTZ-Map/browserconfig.xml' },
      { name: 'theme-color', content: '#FFFFFF' },
      { name: 'description', content: 'Discover the current weather and time zone information for any location around the world using this interactive map.' },
      { property: 'og:title', content: 'Weather Time Zone Map' },
      { property: 'og:description', content: 'Discover the current weather and time zone information for any location around the world using this interactive map.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://scottgriv.github.io/WTZ-Map' },
      { property: 'og:image', content: '/WTZ-Map/icon.png' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/WTZ-Map/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/WTZ-Map/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/WTZ-Map/favicon-16x16.png' },
      { rel: 'manifest', href: '/WTZ-Map/site.webmanifest' },
      { rel: 'mask-icon', href: '/WTZ-Map/safari-pinned-tab.svg', color: '#0e4c92' },
      { rel: 'shortcut icon', href: '/WTZ-Map/favicon.ico' }
    ],
    script: [
      {
        src: 'https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js',
        async: true,
        defer: true,
        'data-name': 'BMC-Widget',
        'data-cfasync': 'false',
        'data-id': 'scottgriv',
        'data-description': 'Support me on Buy me a coffee!',
        'data-message': 'I hope this little tool helps you in your development endeavors, please consider supporting me by buying me a coffee! Thank you!',
        'data-color': '#e3f2fd',
        'data-position': 'Right',
        'data-x_margin': '18',
        'data-y_margin': '18'
      }
    ]
  },
  css: [
    'leaflet/dist/leaflet.css',
  ],
  buildModules: [
    '@nuxtjs/dotenv',
  ],
  modules: [],
  router: {
    base: '/WTZ-Map/',  // Update this to your repository name
  },
  publicRuntimeConfig: {
    openWeatherApiKey: process.env.OPENWEATHER_API_KEY,
    timeZoneDbApiKey: process.env.TIMEZONEDB_API_KEY
  }
};
