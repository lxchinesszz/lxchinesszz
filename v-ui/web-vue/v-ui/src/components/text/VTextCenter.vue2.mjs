import { defineComponent, resolveComponent, openBlock, createBlock, withCtx, createTextVNode, toDisplayString, createCommentVNode, createVNode } from "vue";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "VTextCenter",
  props: {
    align: {
      type: Object,
      default: "center"
    },
    title: String,
    secondary: String,
    tag: Object
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      const _component_a_tag = resolveComponent("a-tag");
      const _component_a_typography_title = resolveComponent("a-typography-title");
      const _component_a_typography_text = resolveComponent("a-typography-text");
      const _component_a_space = resolveComponent("a-space");
      return openBlock(), createBlock(_component_a_space, {
        align: props.align,
        direction: "vertical",
        size: "mini",
        style: { "text-align": "left" }
      }, {
        default: withCtx(() => [
          props.tag ? (openBlock(), createBlock(_component_a_tag, {
            key: 0,
            color: props.tag.color
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(props.tag.tag), 1)
            ]),
            _: 1
          }, 8, ["color"])) : createCommentVNode("", true),
          createVNode(_component_a_typography_title, { heading: 3 }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(props.title ?? ""), 1)
            ]),
            _: 1
          }),
          createVNode(_component_a_typography_text, {
            type: "secondary",
            style: { "font-size": "1.17rem" }
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(props.secondary ?? ""), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["align"]);
    };
  }
});
export {
  _sfc_main as default
};
