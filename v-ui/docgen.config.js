import path from 'path';
// https://blog.csdn.net/weixin_47069956/article/details/140345243
// https://blog.csdn.net/weixin_47069956/article/details/140345243
import componentTemplate from './docs/templates/component.js'; // 导入模板函数
import slotTemplate from './docs/templates/slot.js'; // 导入模板函数

// 生成需要排除的文件列表

const filesIgnore = ['userPage'];

export default {
  componentsRoot: '/Users/liuxin/WebstormProjects/lxchinesszz/v-ui/src', // 组件所在目录根目录

  components: 'components/**/*.vue', // 组件所在目录

  outDir: '/Users/liuxin/WebstormProjects/lxchinesszz/docs', // vue-docgen-cli生成的路径都跟原本的路径相同，但是因为在componentsRoot配置路径，所以生成后不会带有packages/components

  ignore: filesIgnore, // 需要排除的文件

  apiOptions: {
    jsx: false,
  },

  getDocFileName: (componentPath) => {
    const componentName = path.basename(path.dirname(componentPath));

    return `${componentName}.md`;
  },

  templates: {
    component: componentTemplate, // 直接使用导入的模板函数
    slots: slotTemplate,
  },
};
