---
title: My Plugin
editLink: true
category: 'VitePress'
---

# My Plugin

vitepress 使用 vite 构建的，所以我们可以根据 [vite](https://www.vitejs.net/guide/api-plugin.html#config) 的插件来实现。


## VitePluginAutoSidebar

自动构建侧边栏，如本页面侧边栏。

- 侧边栏发生变化自动重启
- 文章发生变化不自动重启，提高速度。

### 使用方法

- category: 侧边栏目录

```
---
title: Plugin
editLink: true
navbar: true
category: 'VitePress'
---
```

```
import { defineConfig } from 'vitepress';
import { demoblockPlugin, demoblockVitePlugin } from 'vitepress-theme-demoblock';
import nav from './nav';
import { tocPlugin } from '@mdit-vue/plugin-toc';
import suggestionHighlightPlugin from './theme/custom-markdown.cjs';
import { pagefindPlugin } from 'vitepress-plugin-pagefind';
import VitePluginAutoSidebar from './plugin/VitePluginAutoSidebar';
import { resolve } from 'path';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    plugins: [demoblockVitePlugin(), VitePluginAutoSidebar(
      [
        resolve(__dirname, '../post/java'),
        resolve(__dirname, '../post/guide'),
        resolve(__dirname, '../post/design'),
        resolve(__dirname, '../post/test'),
        resolve(__dirname, '../components'),
        resolve(__dirname, '../post/scm'),
        resolve(__dirname, '../post/project'),
        resolve(__dirname, '../post/ai'),
        resolve(__dirname, '../post/other'),
        resolve(__dirname, '../post/python'),
      ],
    ), pagefindPlugin({
      btnPlaceholder: '搜索',
      placeholder: '搜索文档',
      emptyText: '空空如也',
      heading: '共: {{searchResult}} 条结果',
    })]

      ...
  });

```

### 实现代码

```
import { buildSidebars } from './sidebar';
import { ViteDevServer } from 'vite';

// https://www.vitejs.net/guide/api-plugin.html#config

type Cache = {
  fileName: string,
  title: string,
  category: string
}

const fileNameCache = new Map<string, Cache>();

const titleCache = new Map<string, Cache>();


function removeFileExtension(filePath) {
  // 标准化路径分隔符为斜杠（/）
  const normalizedPath = filePath.replace(/\\/g, '/');

  // 分割路径为数组
  const parts = normalizedPath.split('/');

  // 获取文件名
  let fileName = parts.pop();

  // 使用正则表达式匹配文件名中的后缀部分（假设后缀是由点（.）和至少一个字符组成）
  const extensionMatch = fileName.match(/\.([^\.]+)$/);

  // 如果匹配到后缀，则移除它
  if (extensionMatch) {
    fileName = fileName.slice(0, -extensionMatch[0].length);
  }

  return fileName;
}

function rebuildSide(config: any, paths: string[]) {
  let autoSidebars = buildSidebars(paths);
  Object.keys(autoSidebars).forEach(key => {
    const sideList = autoSidebars[key];
    for (let i = 0; i < sideList.length; i++) {
      const side = sideList[i];
      // 第一个目录打开，其他目录收缩
      if (i > 0) {
        side['collapsed'] = true;
      }
      const side2List = side['items'];
      side2List.forEach((side2) => {
        const category = side['text'];
        const fileName = removeFileExtension(side2['link']);
        const title = side2['text'];
        const cache = {
          category, title, fileName,
        };
        fileNameCache.set(fileName, cache);
        titleCache.set(title, cache);
      });
    }
  });
  config.vitepress.site.themeConfig.sidebar = autoSidebars;
  return config;
}

export default function VitePluginAutoSidebar(paths: []) {
  return {
    name: 'VitePluginAutoSidebar',
    // 新增
    config(config) {
      return rebuildSide(config, paths);
    },
    configureServer: ({ watcher, restart }: ViteDevServer) => {
      const fsWatcher = watcher.add('*.md');
      fsWatcher.on('all', async (event, filePath) => {
        if (event === 'addDir') return;
        if (event === 'unlinkDir') return;
        if (event == 'add') return;
        let fileName = removeFileExtension(filePath);
        console.log(`fs Watcher[${filePath}]:${event}:fileName:${fileName}`);
        if (event === 'unlink' || event === 'change') {
          let cache = fileNameCache.get(fileName);
          try {
            // 如果根据文件名
            if (!titleCache.get(cache.title)) {
              await restart();
            }
          } catch {
            console.log('update sidebar failed');
          }
        }
      });
    },
  };
}

```

## Markdown 插件

### 使用方法

```js
import { defineConfig } from 'vitepress';
import suggestionHighlightPlugin from './theme/custom-markdown.cjs';
// https://vitepress.dev/reference/site-config
export default defineConfig({
  markdown: {
    lineNumbers: true,
    config: (md) => {
      md.use(suggestionHighlightPlugin);
    },
  },
  })
```

### 实现原理

*= 红色高亮 =*

- 语法:
    - `*= 红色高亮 =*`

```js
// custom-markdown.js
module.exports = function suggestionPlugin(md) {
  // 使用 markdown-it 内置的 parser 规则注册新的 inline 规则
  md.inline.ruler.before('emphasis', 'suggestion', function (state, silent) {
    const start = state.pos;
    const markerStart = '*=';
    const markerEnd = '=*';

    // 检查当前位置是否为 *= 起始标记
    if (state.src.startsWith(markerStart, start)) {
      const end = state.src.indexOf(markerEnd, start + markerStart.length);
      if (end === -1) return false; // 如果没有找到 =* 结束标记，返回 false

      if (!silent) {
        // 插入 suggestion_open token
        const token = state.push('suggestion_open', 'span', 1);
        token.attrs = [['style', 'color: #e64b7d;font-weight: bold;background-color: var(--vp-code-bg);border-radius: 4px;\n' +
        '    padding: 3px 6px;']];

        // 获取 *= 和 =* 之间的内容
        const contentToken = state.push('text', '', 0);
        contentToken.content = state.src.slice(start + markerStart.length, end).trim();

        // 插入 suggestion_close token
        state.push('suggestion_close', 'span', -1);
      }

      // 更新位置到结束标记之后
      state.pos = end + markerEnd.length;
      return true;
    }

    return false;
  });

  // 渲染 suggestion_open 标签
  md.renderer.rules.suggestion_open = function (tokens, idx) {
    return `<span style="${tokens[idx].attrs[0][1]}">`;
  };

  // 渲染 suggestion_close 标签
  md.renderer.rules.suggestion_close = function () {
    return '</span>';
  };
};
 
```
