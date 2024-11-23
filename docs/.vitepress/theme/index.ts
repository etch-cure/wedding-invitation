// https://vitepress.dev/guide/custom-theme
import WLayout from './WLayout.vue'
import type { Theme } from 'vitepress'

import { Quasar } from 'quasar'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

export default {
  Layout: WLayout,
  enhanceApp({ app, router, siteData }) {
    app.use(Quasar, {
      plugins: {}, // import Quasar plugins and add here
    })
  },
} satisfies Theme
