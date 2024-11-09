export default [
  { text: '首页', link: '/' },
  {
    text: '技术',
    items: [
      {
        text: '前端',
        items: [{ text: 'JavaScript', link: '/post/guide/' },
          { text: 'VUI', link: '/components/' }],
      },
      {
        text: '后端',
        items: [{ text: 'Java', link: '/post/java/' },
          { text: 'Python', link: '/post/python/' },
          { text: 'Testing', link: '/post/test/' },
          { text: '项目', link: '/post/project/' },
        ],
      },
      {
        text: '其他',
        items: [{ text: 'AI', link: '/post/ai/' },
          { text: 'other', link: '/post/other/' },
        ],
      },

    ],
  },
  {
    text: '生活',
    link: '/post/design/',
  },
  { text: '供应链', link: '/post/scm/' },
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
          { text: 'prettier', link: 'https://www.prettier.cn/' , desc: '代码格式化'},
          { text: 'prettier online', link: 'https://www.prettier.cn/playground/',desc: '在线代码格式化' },
          { text: 'eslint', link: 'https://eslint.org/docs/latest/use/getting-started',desc: '代码规范' },
          { text: 'eslint online', link: 'https://eslint.org/play/' ,desc: '在线代码规范'},
          { text: 'eslint vue', link: 'https://eslint.vuejs.org/user-guide/' ,desc: 'vue代码规范'},
          { text: 'eslint vue demo online', link: 'https://ota-meshi.github.io/eslint-plugin-vue-demo/',desc: 'vue代码规范demo' },
          // 用于 Prettier 格式化的 ESLint 插件
          { text: 'eslint-plugin-prettier', link: 'https://github.com/prettier/eslint-plugin-prettier' ,desc: 'eslint-plugin-prettier'},
          // 关闭所有不必要的规则或可能与 Prettier 冲突的规则。
          { text: 'eslint-config-prettier', link: 'https://github.com/prettier/eslint-config-prettier',desc: 'eslint-config-prettier' },
          { text: 'VitePress', link: 'https://vitepress.dev/zh/reference/frontmatter-config',desc: 'VitePress API' },
        ],
      },
      {
        text: 'Library',
        items: [
          { text: 'animate', link: 'https://animate.style/' ,desc: 'css 动画库'},
          { text: 'leader-line', link: 'https://anseki.github.io/leader-line/',desc: '连线库' },
          { text: 'canvas-confetti', link: 'https://github.com/catdad/canvas-confetti' ,desc: 'canvas 粒子动画库'},
          { text: 'relation-graph', link: 'https://www.relation-graph.com/',desc: '关系图' },
          { text: 'rough-notation', link: 'https://github.com/rough-stuff/rough-notation',desc: '文字波浪特效' },
          { text: 'swapy', link: 'https://github.com/TahaSh/swapy' ,desc: '文字动画'},
          { text: 'loading.io', link: 'https://loading.io/',desc: 'loading动画' },
          { text: '倾斜视差', link: 'https://micku7zu.github.io/vanilla-tilt.js',desc: '倾斜视差' },
          { text: 'vue-data-ui', link: 'https://vue-data-ui.graphieros.com',desc: 'vue3-data-ui' },
          {
            text: 'vue3-fullpage',
            link: 'https://southcoastweb.co.uk/open-source-software/vue3-fullpage/#page_section_1',
            desc: 'vue3-fullpage',
          },
        ],
      },
    ],
  },
];
