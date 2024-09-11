import { defineComponent, useAttrs, resolveComponent, openBlock, createElementBlock, createVNode, normalizeProps, guardReactiveProps, unref, withCtx, renderSlot } from "vue";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "VTag",
  setup(__props) {
    const attr = useAttrs();
    return (_ctx, _cache) => {
      const _component_a_tag = resolveComponent("a-tag");
      return openBlock(), createElementBlock("div", null, [
        createVNode(_component_a_tag, normalizeProps(guardReactiveProps(unref(attr))), {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]);
    };
  }
});
export {
  _sfc_main as default
};
