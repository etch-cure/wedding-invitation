import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitepress'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Wedding Invitation',
  description: 'Wedding Invitation',

  vue: {
    template: { transformAssetUrls },
  },
  vite: {
    plugins: [
      quasar({
        sassVariables: fileURLToPath(new URL('./theme/quasar-variables.scss', import.meta.url)),
      }),
    ],
  },
})
