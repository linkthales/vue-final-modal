const META_URL = 'https://vue-final-modal.org'
const META_TITLE = 'Vue Final Modal'
const META_DESCRIPTION =
  'Vue Final Modal is a tiny, renderless, mobile-friendly, feature-rich modal component for Vue.js.'
const META_IMAGE = 'https://vue-final-modal.org/social.png'

const isProduction = process.env.NODE_ENV

/**
 * @type {import('vitepress').UserConfig['head']}
 */
// const productionHead = [
//   [
//     'script',
//     {
//       src: 'https://unpkg.com/thesemetrics@latest',
//       async: '',
//       type: 'text/javascript'
//     }
//   ]
// ]

const darkModeFix = require('fs').readFileSync(require('path').resolve(__dirname, './darkModeFix.js'), 'utf-8')

/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
  title: 'Vue Final Modal',
  lang: 'en-US',
  description: 'Vue Final Modal is a tiny, renderless, mobile-friendly, feature-rich modal component for Vue.js.',

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/icon.png' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: META_URL }],
    ['meta', { property: 'og:title', content: META_TITLE }],
    ['meta', { property: 'og:description', content: META_DESCRIPTION }],
    ['meta', { property: 'og:image', content: META_IMAGE }],
    ['meta', { property: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { property: 'twitter:url', content: META_URL }],
    ['meta', { property: 'twitter:title', content: META_TITLE }],
    ['meta', { property: 'twitter:description', content: META_DESCRIPTION }],
    ['meta', { property: 'twitter:image', content: META_IMAGE }],

    [
      'link',
      {
        rel: 'preload',
        href: '/dank-mono.css',
        as: 'style',
        onload: "this.onload=null;this.rel='stylesheet'"
      }
    ],

    ['script', {}, darkModeFix]
    // ...(isProduction ? productionHead : [])
  ],

  themeConfig: {
    repo: 'vue-final/vue-final-modal',
    logo: '/logo.svg',
    docsDir: 'vitepress',
    docsBranch: 'v3',
    editLinks: true,
    editLinkText: 'Suggest changes to this page',

    // algolia: {
    //   apiKey: 'd526df143dcebc3c6de61189345348d1',
    //   indexName: 'pinia'
    // },

    // carbonAds: {
    //   carbon: 'CEBICK3I',
    //   custom: 'CEBICK3M',
    //   placement: 'routervuejsorg'
    // },

    nav: [
      { text: 'Guide', link: '/introduction.html' },
      {
        text: 'Changelog',
        link: 'https://github.com/vue-final/vue-final-modal/releases'
      },
      {
        text: 'Twitter',
        link: 'https://twitter.com/hunterliu1003'
      }
    ],

    sidebar: {
      // catch-all fallback
      '/': [
        {
          text: 'Introduction',
          children: [
            {
              text: 'What is Vue Final Modal?',
              link: '/introduction.html'
            },
            {
              text: 'Getting Started',
              link: '/getting-started.html'
            },
            {
              text: 'Contribution',
              link: '/contribution.html'
            }
          ]
        },
        {
          text: 'Guide',
          children: [
            { text: 'Live Playground', link: '/guide/playground.html' },
            { text: 'Step by Step Basics', link: '/guide/step-by-step-basics.html' },
            { text: 'Showing/Hiding Modals', link: '/guide/showing-hiding-modals.html' },
            { text: 'Styling', link: '/guide/styling.html' }
          ]
        },
        {
          text: 'Reference',
          children: [
            { text: 'Props', link: '/reference/props.html' },
            { text: 'Events', link: '/reference/events.html' },
            { text: 'Slots', link: '/reference/slots.html' },
            { text: '$vfm API', link: '/reference/vfm-api.html' },
            { text: 'Dynamic Modal', link: '/reference/dynamic-modal.html' }
          ]
        },
        {
          text: 'Use Cases',
          children: [
            { text: 'Fullscreen Modal', link: '/use-cases/fullscreen.html' },
            { text: 'Confirmation Dialog', link: '/use-cases/confirmation-dialog.html' },
            { text: 'Toast', link: '/use-cases/toast.html' },
            { text: 'Custom Modal Transitions', link: '/use-cases/custom-transitions.html' },
            { text: 'Panel', link: '/use-cases/panel.html' }
            // { text: 'Drawer', link: '/use-cases/drawer.html' }
          ]
        },
        {
          text: 'Advanced',
          children: [
            { text: 'Usage with TypeScript', link: '/advanced/typescript.html' },
            { text: 'Params', link: '/advanced/params.html' }
          ]
        }
      ]
    }
  }
}
