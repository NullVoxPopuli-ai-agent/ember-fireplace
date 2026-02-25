import 'virtual:group-icons.css'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'
import '@cynber/vitepress-valence/style.css'
import './custom.css'
import {
  VpvCardHorizontal,
  VpvCardVertical,
  VpvContainerHorizontal,
  VpvContainerVertical
} from '@cynber/vitepress-valence'
import CopyOrDownloadAsMarkdownButtons from 'vitepress-plugin-llms/vitepress-components/CopyOrDownloadAsMarkdownButtons.vue'
import { setupEmber } from 'vite-plugin-ember/setup';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    enhanceAppWithTabs(app);
    app.component('VpvCardHorizontal', VpvCardHorizontal);
    app.component('VpvCardVertical', VpvCardVertical);
    app.component('VpvContainerHorizontal', VpvContainerHorizontal);
    app.component('VpvContainerVertical', VpvContainerVertical);
    app.component('CopyOrDownloadAsMarkdownButtons', CopyOrDownloadAsMarkdownButtons);
    setupEmber(app);
  },
} satisfies Theme
