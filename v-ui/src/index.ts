import VAnimate from '@/components/animate/VAnimate.vue';
import VIcon from './components/icon/VIcon.vue';
import VImage from './components/image/VImage.vue';
import VAroundBanner from './components/card/VAroundBanner.vue';
import VTextCenter from './components/text/VTextCenter.vue';
import VTextStatistic from './components/text/VTextStatistic.vue';
import VImageCard from './components/card/VImageCard.vue';
import VButton from '@/components/button/VButton.vue';
import VMoreButton from '@/components/button/VMoreButton.vue';
import 'animate.css';
import { useScrollAnimate } from '@/components/animate/ScrollAnimate';
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';
import VTypedText from './components/animate/VTypedText.vue';
import VBlurInAnimate from '@/components/animate/VBlurInAnimate.vue';
import VTextStaggeredAnimate from '@/components/text/VTextStaggeredAnimate.vue';
import VInteractiveCard from '@/components/card/VInteractiveCard.vue';
import '@/components/animate/types';
import VSpline from '@/components/spline/VSpline.vue';
import VTextSpotlight from '@/components/text/VTextSpotlight.vue';
import VTextGradientColor from '@/components/text/VTextGradientColor.vue';
import VTextPath from '@/components/text/VTextPath.vue';
import VTextTyping from '@/components/text/VTextTyping.vue';
import VTextRain from '@/components/backgound/VTextRain.vue';
import VBackground from '@/components/backgound/VBackground.vue';
import VTextLineAnimate from '@/components/text/VTextLine.vue';
import VBackgroundLine from '@/components/backgound/VBackgroundLine.vue';
import VRingAnimate from '@/components/animate/VRingAnimate.vue';

function installComponent(app: any, name: string, component: any) {
  app.component(name, component);
  console.log(`v-ui auto register ${name}`);
}

const VUI = {
  install(app: any) {
    installComponent(app, 'v-image', VImage);
    installComponent(app, 'v-icon', VIcon);
    installComponent(app, 'v-animate', VAnimate);
    installComponent(app, 'v-blur-in-animate', VBlurInAnimate);
    installComponent(app, 'v-around-banner', VAroundBanner);
    installComponent(app, 'v-text-center', VTextCenter);
    installComponent(app, 'v-text-statistic', VTextStatistic);
    installComponent(app, 'v-image-card', VImageCard);
    installComponent(app, 'v-typed-text', VTypedText);
    installComponent(app, 'v-button', VButton);
    installComponent(app, 'v-more-button', VMoreButton);
    installComponent(app, 'v-text-staggered-animate', VTextStaggeredAnimate);
    installComponent(app, 'v-interactive-card', VInteractiveCard);
    installComponent(app, 'v-spline', VSpline);
    installComponent(app, 'v-text-spotlight', VTextSpotlight);
    installComponent(app, 'v-text-gradient-color', VTextGradientColor);
    installComponent(app, 'v-text-path', VTextPath);
    installComponent(app, 'v-text-typing', VTextTyping);
    installComponent(app, 'v-text-rain', VTextRain);
    installComponent(app, 'v-background', VBackground);
    installComponent(app, 'v-background-line', VBackgroundLine);
    installComponent(app, 'v-text-line', VTextLineAnimate);
    installComponent(app, 'v-ring-animate', VRingAnimate);
    app.use(ArcoVue);
  },
};
export {
  VAnimate, VIcon, VImage, VImageCard, VTextCenter, VTextStatistic, VAroundBanner, useScrollAnimate,
};
export default VUI;
