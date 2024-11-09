// Don't remove this file, because it registers the demo components.
import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue';
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue';
import VHome from '../components/VHome.vue';
import 'v-ui/web-vue/style.css';
import Style2 from '../components/Style2.vue';
import NewHome2 from '../components/NewHome2.vue';
import NewHome from "../components/NewHome.vue";
import ArcoVue from "@arco-design/web-vue";

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
    app.component('NewHome', NewHome);
    app.component('NewHome2', NewHome2);
    app.component('Style2', Style2);
    app.use(ArcoVue)
    // app.component('echarts', echarts);
    // for (const path in modules) {
    //   modules[path]().then((mod) => {
    //     const name = (path.split('/').pop()
    //       .replace(/\.\w+$/, ''));
    //     console.log(`auto register component name:${name} from ${path}`);
    //     app.component(name, defineAsyncComponent(modules[path]));
    //   });
    // }
}

