import DefaultTheme from 'vitepress/theme';
import Layout from './Layout.vue';
import 'vitepress-theme-demoblock/dist/theme/styles/index.css';
import type { EnhanceAppContext } from 'vitepress/dist/client';
import { useComponents } from './useComponents';
import './style.css';
// import './custom.css'

export default {
  ...DefaultTheme,
  Layout,
  enhanceApp(ctx: EnhanceAppContext) {
    DefaultTheme.enhanceApp(ctx);
    useComponents(ctx.app);
  },
};


// 以上述配置开始观察目标节点


// window.onload = function() {
//
//   // 定义一个函数来检查元素是否包含"dark"类
//   function hasDarkClass(element) {
//     return element[0].classList.contains('dark');
//   }
//
//
//   var targetNode = document.getElementsByTagName('html');
//
// // 配置观察者选项:
//   var config = { attributes: true, attributeFilter: ['class'] };
//
// // 当观察到变化时执行的回调函数
//   var callback = function(mutationsList, observer) {
//     for (var mutation of mutationsList) {
//       if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
//         if (hasDarkClass(targetNode)) {
//           // 使用setAttribute方法来给body元素添加自定义属性
//           document.body.setAttribute('arco-theme', 'dark');
//         } else {
//           document.body.removeAttribute('arco-theme');
//         }
//       }
//     }
//   };
//
// // 创建一个观察者实例并传入回调函数
//   var observer = new MutationObserver(callback);
//
//   observer.observe(targetNode[0], config);
//
//   console.log(`html:${targetNode[0].classList}`);
// };
