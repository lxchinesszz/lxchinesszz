export default [
  { text: '首页', link: '/' },
  {
    text: '技术',
    items: [
      {
        text: '前端',
        items: [{ text: 'JavaScript', link: '/guide/' },
          { text: 'VUI', link: '/components/' }],
      },
      {
        text: '后端',
        items: [{ text: 'Java', link: '/java/' },
          { text: 'Python', link: '/python/' },
          { text: 'Testing', link: '/test/' },
        ],
      },
      { text: '项目', link: '/project/' },
      {
        text: 'AI', link: '/ai/',
      },
    ],
  },
  {
    text: '生活',
    link: '/design/',
  },
  { text: '供应链', link: '/scm/' },
  {
    text: '志同道合',
    items: [
      {
        text: '陈随易', link: 'https://me.yicode.tech/',
      }
      , {
        text: 'Vue3', link: 'https://vue-compiler.iamouyang.cn/',
      }],
  },
  {
    text: '知识库',
    items: [
      {
        text: '前端知识库',
        items: [
          { text: 'prettier', link: 'https://www.prettier.cn/' },
          { text: 'prettier online', link: 'https://www.prettier.cn/playground/' },
          { text: 'eslint', link: 'https://eslint.org/docs/latest/use/getting-started' },
          { text: 'eslint online', link: 'https://eslint.org/play/' },
          { text: 'eslint vue', link: 'https://eslint.vuejs.org/user-guide/' },
          { text: 'eslint vue demo online', link: 'https://ota-meshi.github.io/eslint-plugin-vue-demo/' },
          // 用于 Prettier 格式化的 ESLint 插件
          { text: 'eslint-plugin-prettier', link: 'https://github.com/prettier/eslint-plugin-prettier' },
          // 关闭所有不必要的规则或可能与 Prettier 冲突的规则。
          { text: 'eslint-config-prettier', link: 'https://github.com/prettier/eslint-config-prettier' },
          { text: 'VitePress', link: 'https://vitepress.dev/zh/reference/frontmatter-config' },
        ],
      },
      {
        text: 'Library',
        items: [
          { text: 'animate', link: 'https://animate.style/' },
          { text: 'leader-line', link: 'https://anseki.github.io/leader-line/' },
          { text: 'canvas-confetti', link: 'https://github.com/catdad/canvas-confetti' },
          { text: 'relation-graph', link: 'https://www.relation-graph.com/' },
          { text: 'rough-notation', link: 'https://github.com/rough-stuff/rough-notation' },
          { text: 'swapy', link: 'https://github.com/TahaSh/swapy' },
          { text: 'loading.io', link: 'https://loading.io/' },
        ],
      },
    ],
  },

];
