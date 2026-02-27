import { defineConfig } from 'vitepress'
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import { withMermaid } from "vitepress-plugin-mermaid";
import markdownItDeflist from 'markdown-it-deflist';
import { nav } from './nav';
import { sidebarGuides } from './sidebar-guides';
import { sidebarComponentArchitecture } from './sidebar-component-architecture';
import { sidebarCookbook } from './sidebar-cookbook';
import { sidebarTooling } from './sidebar-tooling';
import llmstxt, { copyOrDownloadAsMarkdownButtons } from 'vitepress-plugin-llms';
import vitePluginEmber, { emberFence } from 'vite-plugin-ember';

// https://vitepress.dev/reference/site-config
export default withMermaid(defineConfig({
  title: "EmberJS (Project Fireplace)",
  description: "A framework for ambitious web developers.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav, 

    outline: {
      level: [2, 4]
    },

    sidebar: {
      '/guides': sidebarGuides, 
      '/component-architecture': sidebarComponentArchitecture,
      '/cookbook': sidebarCookbook,
      '/tooling': sidebarTooling
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/emberjs/ember.js' }
    ]
  },
  markdown: {
    config(md) {
      md.use(groupIconMdPlugin, {
        titleBar: { includeSnippet: true },
      }),
      md.use(tabsMarkdownPlugin)
      md.use(markdownItDeflist),
      md.use(copyOrDownloadAsMarkdownButtons),
      emberFence(md)
    },
  },
  vite: {
    resolve: {
      alias: {
        mermaid: 'mermaid/dist/mermaid.esm.mjs',
      },
    },
    plugins: [
      groupIconVitePlugin(),
      llmstxt(),
      vitePluginEmber()
    ],
    ssr: {
      noExternal: ['@cynber/vitepress-valence']
    }
  },
  collections: {
    cookbook: {
      patters: ['cookbook/[^_]*.md']
    }
  }
}))
