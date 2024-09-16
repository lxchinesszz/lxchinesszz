import { defineConfig } from 'vitepress';
import { demoblockPlugin, demoblockVitePlugin } from 'vitepress-theme-demoblock';
import { buildSidebars } from './sidebar';
import nav from './nav';
import { resolve } from 'path';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // sitemap: {
  //   hostname: 'http://localhost:5173/',
  //   lastmodDateOnly: false,
  // },
  title: '编程牛马',
  description: 'From Arco',
  head: [
    ['link', {
      rel: 'icon',
      type: 'image/svg+xml',
      href: 'https://img.springlearn.cn/learn_d98f09cdad8fa38168ec59c15a508490.ico',
    }],
    ['link', {
      rel: 'icon',
      type: 'image/png',
      href: 'https://img.springlearn.cn/learn_d98f09cdad8fa38168ec59c15a508490.ico',
    }],
    ['script', {
      src: 'https://cdn.bootcdn.net/ajax/libs/animejs/3.2.2/anime.min.js',
    },
    ],
  ],
  markdown: {
    lineNumbers: true,
    config: (md) => {
      md.use(demoblockPlugin, {
        customClass: 'demoblock-custom',
      });
    },
  },
  vite: {
    plugins: [demoblockVitePlugin()],
    // build: {
    //   // sourcemap: false,
    //   chunkSizeWarningLimit: 1000,
    //   rollupOptions: {
    //     output: {
    //       manualChunks(id) {
    //         if (id.includes('design')) {
    //           // console.log(`design`);
    //           return 'design';
    //         } else if (id.includes('node_modules')) {
    //           let s = id.toString().split('node_modules/')[1].split('/')[0].toString();
    //           // console.log(s);
    //           return s;
    //         } else {
    //           // console.log(id);
    //           return 'index';
    //         }
    //       },
    //     },
    //   },
    // },
  },
  themeConfig: {
    lightModeSwitchTitle: '太阳',
    search: {
      provider: 'local',
      options: {
        locales: {
          root: { // make this `root` if you want to translate the default locale
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索',
              },
              modal: {
                displayDetails: '显示详细列表',
                resetButtonTitle: '重置搜索',
                backButtonTitle: '关闭搜索',
                noResultsText: '没有结果',
                footer: {
                  selectText: '选择',
                  selectKeyAriaLabel: '输入',
                  navigateText: '导航',
                  navigateUpKeyAriaLabel: '上箭头',
                  navigateDownKeyAriaLabel: '下箭头',
                  closeText: '关闭',
                  closeKeyAriaLabel: 'esc',
                },
              },
            },
          },
        },
      },
    },
    outline: {
      level: [2, 3, 4],
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You',
    },
    siteTitle: '西魏陶渊明',
    logo: 'https://img.springlearn.cn/learn_d98f09cdad8fa38168ec59c15a508490.ico',
    // https://vitepress.dev/reference/default-theme-config
    nav,
    sidebar: buildSidebars([
      resolve(__dirname, '../java'),
      resolve(__dirname, '../guide'),
      resolve(__dirname, '../design'),
      resolve(__dirname, '../test'),
      resolve(__dirname, '../components'),
      resolve(__dirname, '../scm'),
      resolve(__dirname, '../project'),
      resolve(__dirname, '../ai'),
      resolve(__dirname, '../components'),
      resolve(__dirname, '../python'),
    ]),
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
});
