import VAnimate from "./components/animate/VAnimate.vue.mjs";
import _sfc_main$1 from "./components/icon/VIcon.vue.mjs";
import _sfc_main from "./components/image/VImage.vue.mjs";
import _sfc_main$2 from "./components/card/VAroundBanner.vue.mjs";
import VTextCenter from "./components/text/VTextCenter.vue.mjs";
import VTextStatistic from "./components/text/VTextStatistic.vue.mjs";
import VImageCard from "./components/card/VImageCard.vue.mjs";
/* empty css                                                                                             */
/* empty css                                                                                                               */
import ArcoVue from "../../node_modules/.pnpm/@arco-design_web-vue@2.56.1_vue@3.4.37/node_modules/@arco-design/web-vue/es/arco-vue.mjs";
function installComponent(app, name, component) {
  app.component(name, component);
  console.log(`v-ui auto register ${name}`);
}
const VUI = {
  install(app) {
    installComponent(app, "v-image", _sfc_main);
    installComponent(app, "v-icon", _sfc_main$1);
    installComponent(app, "v-animate", VAnimate);
    installComponent(app, "v-around-banner", _sfc_main$2);
    installComponent(app, "v-text-center", VTextCenter);
    installComponent(app, "v-text-statistic", VTextStatistic);
    installComponent(app, "v-image-card", VImageCard);
    app.use(ArcoVue);
  }
};
export {
  VAnimate,
  _sfc_main$2 as VAroundBanner,
  _sfc_main$1 as VIcon,
  _sfc_main as VImage,
  VImageCard,
  VTextCenter,
  VTextStatistic,
  VUI as default
};
