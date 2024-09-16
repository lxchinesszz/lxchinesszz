// Don't remove this file, because it registers the demo components.
import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue';
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue';
import { defineAsyncComponent } from 'vue';
import VHome from '../components/VHome.vue';
import 'v-ui/web-vue/style.css';

const modules = import.meta.glob('../components/*.vue');

export function useComponents(app) {
  app.mixin({
    async mounted() {
      import('v-ui').then((m) => {
        app.use(m.default);
      });
    },
  });
  app.component('Demo', Demo);
  app.component('DemoBlock', DemoBlock);
  app.component('XHome', VHome);
  for (const path in modules) {
    modules[path]().then((mod) => {
      const name = (path.split('/').pop()
        .replace(/\.\w+$/, ''));
      console.log(`auto register component name:${name} from ${path}`);
      app.component(name, defineAsyncComponent(modules[path]));
    });
  }
}

