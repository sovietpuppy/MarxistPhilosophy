import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'

export default defineConfig({
  title: '马克思主义哲学笔记',
  description: '个人学习记录',

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '马克思主义原著', link: '/马克思主义原著/' },
      { text: '马克思主义前沿', link: '/马克思主义前沿/' },
      { text: '科哲与技术批判', link: '/科哲与技术批判/' },
      { text: '德国古典哲学', link: '/德国古典哲学/' },
      { text: '政治神学', link: '/政治神学/' },
      { text: '布兰科来过', link: '/布兰科来过/' }
    ],

    sidebar: generateSidebar({
      documentRootPath: '/',
      collapsed: false,
      capitalizeFirst: false,
      useFolderTitleFromIndexFile: true,
      useTitleFromFileHeading: true,
      hyphenToSpace: true,
      //excludeFiles: ['index.md']
    }),

    search: {
      provider: 'local'
    },

    outline: {
      level: [2, 3]
    }
  }
})