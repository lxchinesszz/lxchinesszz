// const modules = import.meta.glob('./dir/*.js', { eager: true })
import * as fs from 'fs';
import { resolve } from 'path';
// @ts-ignore
import matter from 'gray-matter';
import path from 'path';
import { Dirent } from 'fs';

type Sidebar = {
  text?: string;
  collapsed?: boolean
  link?: string;
  items?: SidebarItem[]
}

type SidebarItem = {
  /**
   * The text label of the item.
   */
  text?: string

  collapsed?: boolean
  /**
   * The link of the item.
   */
  link?: string
}

const readMarkdown = (filePath: string): string => {
  const file = fs.readFileSync(filePath, { encoding: 'utf-8' });
  return file.toString();
};

function listAllFile(dir: string): Dirent[] {
  const files = fs.readdirSync(dir, {
    withFileTypes: true,
  });

  let allFiles: Dirent[] = [];

  files.forEach(file => {
    const fullPath = path.join(dir, file.name);
    if (file.isFile()) {
      allFiles.push(file); // 将文件路径添加到结果数组中
    } else if (file.isDirectory()) {
      // 递归处理子目录，并将结果合并到 allFiles 数组中
      allFiles = allFiles.concat(listAllFile(fullPath));
    }
  });

  return allFiles;
}


function sortSidebarItems(sidebar: Sidebar): Sidebar {
  // 定义一个辅助函数来从text中提取数字，并处理前导零
  function extractNumber(text: string): number {
    // 使用正则表达式匹配数字，并捕获第一个匹配项
    const match = text.match(/\d+/);
    if (!match) {
      // 如果没有找到数字，则返回一个默认值（这里使用Infinity，以便在排序时将其放在最后）
      return Infinity;
    }
    // 将匹配到的数字转换为整数，并去除前导零
    return parseInt(match[0], 10);
  }

  // 对items进行排序
  sidebar.items.sort((a, b) => {
    // 提取两个SidebarItem的text中的数字
    const numA = extractNumber(a.text || '');
    const numB = extractNumber(b.text || '');

    // 根据提取的数字进行排序
    return numA - numB;
  });

  // 返回排序后的Sidebar对象
  return sidebar;
}

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function buildSidebar(dir: string) {
  // console.log(`dir:${dir}`);
  let number = dir.lastIndexOf('/');
  let sidebarDir = `${dir.slice(number, dir.length)}/`;
  // console.log(`sidebarDir:${sidebarDir}`);
  let parentPath = path.dirname(dir);
  // console.log(`loadPathFile:${parentPath}`);
  let files = listAllFile(dir);
  const map: Map<string, SidebarItem[]> = new Map();
  const sidebarCategoryMap: Map<string, string> = new Map();
  const result: Record<string, Sidebar[]> = {};
  const sidebar: Sidebar = { items: [] };
  files.forEach(file => {
    const filePath = `${file.parentPath}/${file.name}`;
    const data = matter(readMarkdown(filePath)).data;
    let dirName = capitalizeFirstLetter(file.parentPath.substring(file.parentPath.lastIndexOf('/') + 1, file.parentPath.length));
    let sidebarKeyword = data['category'] ? `${file.parentPath}-${data['category']}` : `${file.parentPath}-${dirName}`;
    let title = data['title'];
    sidebar.text = sidebarKeyword;
    if (sidebarKeyword) {
      const prefix = file.parentPath.replace(parentPath, '');
      if (!file.name.endsWith('.md')) {
        return;
      }
      const link = `${prefix}/${file.name.replace('.md', '')}`;
      let isIndex = link.endsWith('index') || link.endsWith('README') || link.endsWith('readme');
      if (isIndex) {
        sidebarCategoryMap.set(file.parentPath, link);
        return;
      }
      const sidebarItem = {
        text: title,
        link,
      };
      if (map.has(sidebarKeyword)) {
        map.get(sidebarKeyword).push(sidebarItem);
      } else {
        map.set(sidebarKeyword, [sidebarItem]);
      }
    }
  });
  const sidebarByKeywords: Sidebar[] = [];
  // console.log(sidebarCategoryMap);
  for (let mapElement of map) {
    let categoryFullPath = mapElement[0];
    let categoryParentName = categoryFullPath.split('-')[0];
    let categoryName = categoryFullPath.split('-')[1];
    // console.log(`categoryFullPath===>${categoryParentName}`);
    let categoryLink = sidebarCategoryMap.get(categoryParentName);
    sidebarByKeywords.push(sortSidebarItems({
        text: categoryName,
        collapsed: false,
        link: categoryLink,
        items: mapElement[1],
      }),
    );
  }
  result[sidebarDir] = sidebarByKeywords;
  return result;
}


export function buildSidebars(dirs: string[]) {
  let sidebars = {};
  for (let i = 0; i < dirs.length; i++) {
    let sidebar1 = buildSidebar(dirs[i]);
    sidebars = { ...sidebars, ...sidebar1 };
  }
  // console.log(sidebars);
  return sidebars;
}

// 读取目录内容
export default {
  '/guide/': [
    {
      text: 'Code Editor', items: [
        {
          text: 'web-types', link: '/guide/web-storm',
        },
        {
          text: 'plugins', link: '/guide/web-storm-plugins',
        },
        {
          text: 'monorepo', link: '/guide/monorepo',
        },
      ],
    }, {
      text: 'Plugins', items: [
        {
          text: 'eslint-plugins', link: '/guide/eslint-plugin',
        },
        {
          text: 'vite-plugins', link: '/guide/vite-plugin',
        },
      ],
    }, {
      text: '文档编写', items: [
        {
          text: 'vue-docgen-cli', link: 'https://www.npmjs.com/package/vue-docgen-cli',
        },
      ],
    },
    {
      text: 'TypeScript', items: [
        {
          text: '快速上手', link: '/components/button/',
        },
        {
          text: '常见问题', link: '/guide/ts-config-issue',
        },
      ],
    },
  ],
  '/components/': [
    {
      text: '开发指南', items: [
        {
          text: '快速上手', link: '/components/button/',
        }, {
          text: '更新日志', link: '/components/button/',
        }, {
          text: '常见问题', link: '/components/button/',
        },
      ],
    },
    {
      text: '基础组件', items: [
        {
          text: '图片卡片', link: '/components/button/',
        }, {
          text: 'CSS动画', link: '/components/animate/',
        },
      ],
    },
    {
      text: '业务组件', items: [
        {
          text: '首页介绍', link: '/components/home/',
        }, {
          text: '环绕图片', link: '/components/home/AroundBanner',
        },
      ],
    },
  ],
};
