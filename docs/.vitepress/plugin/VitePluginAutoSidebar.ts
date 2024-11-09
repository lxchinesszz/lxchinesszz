import {buildSidebars} from './sidebar';
// @ts-ignore
import {ViteDevServer} from 'vite';
// @ts-ignore
import matter from 'gray-matter';
// @ts-ignore
import fs from "fs";

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
    console.log('----------rebuildSide start-----------')
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
    console.log('----------rebuildSide end-----------')
    config.vitepress.site.themeConfig.sidebar = autoSidebars;
    return config;
}

const readMarkdown = (filePath: string): string => {
    const file = fs.readFileSync(filePath, {encoding: 'utf-8'});
    return file.toString();
};

export default function VitePluginAutoSidebar(paths: []) {
    return {
        name: 'VitePluginAutoSidebar',
        // 新增
        config(config) {
            return rebuildSide(config, paths);
        },
        configureServer: ({watcher, restart}: ViteDevServer) => {
            const fsWatcher = watcher.add('*.md');
            fsWatcher.on('all', async (event, filePath) => {
                if (event === 'addDir') return;
                if (event === 'unlinkDir') return;
                if (event == 'add') return;
                if (!filePath.endsWith('.md')){
                    return
                }
                let fileName = removeFileExtension(filePath);
                console.log(`fs Watcher[${filePath}]:${event}:fileName:${fileName}`);
                if (event === 'unlink' || event === 'change' || event === 'add') {
                    let cache = fileNameCache.get(fileName);
                    try {
                        if (cache === null) {
                            console.log(`新增文件重启构建侧边栏`)
                            await restart();
                        }
                        // 如果根据文件名
                        // 使用新名字教研下
                        let grayMatterFile = matter(readMarkdown(filePath)).data;
                        let newTitle = grayMatterFile['title'];
                        console.log(`grayMatterFile['title']:${newTitle}`)
                        if (cache?.title && !titleCache.get(newTitle)) {
                            console.log(`文件title调整重启构建侧边栏`)
                            await restart();
                        }
                    } catch (e) {
                        console.log('update sidebar failed', e);
                    }
                }
            });
        },
    };
}
