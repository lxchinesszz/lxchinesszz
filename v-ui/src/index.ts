import VAnimate from '@/components/animate/VAnimate.vue';
import VIcon from './components/icon/VIcon.vue';
import VImage from './components/image/VImage.vue';
import VAroundBanner from './components/card/VAroundBanner.vue';
import VTextCenter from './components/text/VTextCenter.vue';
import VTextStatistic from './components/text/VTextStatistic.vue';
import VImageCard from './components/card/VImageCard.vue';
import 'animate.css';
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';
import VTypedText from './components/animate/VTypedText.vue';

export * from '@/components/animate/types.ts';

function installComponent(app: any, name: string, component: any) {
  app.component(name, component);
  console.log(`v-ui auto register ${name}`);
}

const VUI = {
  install(app: any) {
    installComponent(app, 'v-image', VImage);
    installComponent(app, 'v-icon', VIcon);
    installComponent(app, 'v-animate', VAnimate);
    installComponent(app, 'v-around-banner', VAroundBanner);
    installComponent(app, 'v-text-center', VTextCenter);
    installComponent(app, 'v-text-statistic', VTextStatistic);
    installComponent(app, 'v-image-card', VImageCard);
    installComponent(app, 'v-typed-text', VTypedText);
    app.use(ArcoVue);
  },
};
export { VAnimate, VIcon, VImage, VImageCard, VTextCenter, VTextStatistic, VAroundBanner };
export default VUI;
