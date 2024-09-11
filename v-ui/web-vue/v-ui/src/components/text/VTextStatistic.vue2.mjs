import { defineComponent, ref, openBlock, createElementBlock, createElementVNode, normalizeStyle, toDisplayString } from "vue";
const _hoisted_1 = { class: "box" };
const _hoisted_2 = {
  class: "icon",
  style: { "margin-bottom": "1.5rem !important" }
};
const _hoisted_3 = ["src"];
const _hoisted_4 = { class: "h1" };
const _hoisted_5 = { class: "secondary" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "VTextStatistic",
  props: {
    src: String,
    title: String,
    color: String,
    secondary: String
  },
  setup(__props) {
    const props = __props;
    const name = ref("客户满意度");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("div", _hoisted_2, [
          createElementVNode("img", {
            class: "home-number-icon",
            alt: "",
            src: props.src
          }, null, 8, _hoisted_3)
        ]),
        createElementVNode("div", _hoisted_4, [
          createElementVNode("span", {
            style: normalizeStyle({ color: props.color })
          }, toDisplayString(props.title), 5)
        ]),
        createElementVNode("h3", _hoisted_5, toDisplayString(props.secondary) + " -- " + toDisplayString(name.value), 1)
      ]);
    };
  }
});
export {
  _sfc_main as default
};
