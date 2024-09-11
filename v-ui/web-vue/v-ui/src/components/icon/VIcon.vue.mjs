import { defineComponent, openBlock, createElementBlock, unref, createBlock, withCtx, createTextVNode, toDisplayString, createCommentVNode } from "vue";
import iconfonts from "./icons.json.mjs";
import useInnerTag from "./innerIcon.mjs";
import VCircle from "./VCircle.vue.mjs";
import _sfc_main$1 from "./VTag.vue.mjs";
import Icon from "../../../../node_modules/.pnpm/@arco-design_web-vue@2.56.1_vue@3.4.37/node_modules/@arco-design/web-vue/es/icon-component/index.mjs";
const _hoisted_1 = { style: { "display": "flex", "justify-content": "center", "align-items": "center" } };
const href = "//at.alicdn.com/t/c/font_902793_kono671wie.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "VIcon",
  props: {
    icon: String
  },
  setup(__props) {
    const props = __props;
    const IconFont = Icon.addFromIconFontCn({
      src: `https://${href}`,
      extraProps: {
        // fill: 'white',
      }
    });
    const iconFontList = [];
    iconfonts.forEach((item) => {
      iconFontList.push(item.name);
    });
    const hasIconFont = (icon) => {
      return iconFontList.findIndex((x) => {
        return x === icon;
      }) >= 0;
    };
    const { hasInnerTagIcon, hasInnerNoticeIcon, innerCircleStyle } = useInnerTag();
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        unref(hasInnerTagIcon)(props.icon) ? (openBlock(), createBlock(_sfc_main$1, {
          key: 0,
          color: (_a = unref(hasInnerTagIcon)(props.icon)) == null ? void 0 : _a.tagStyle
        }, {
          default: withCtx(() => {
            var _a2;
            return [
              createTextVNode(toDisplayString((_a2 = unref(hasInnerTagIcon)(props.icon)) == null ? void 0 : _a2.tagStyle), 1)
            ];
          }),
          _: 1
        }, 8, ["color"])) : unref(hasInnerNoticeIcon)(props.icon) ? (openBlock(), createBlock(VCircle, {
          key: 1,
          value: unref(innerCircleStyle),
          "tag-key": props.icon
        }, null, 8, ["value", "tag-key"])) : createCommentVNode("", true),
        hasIconFont(props.icon) ? (openBlock(), createBlock(unref(IconFont), {
          key: 2,
          type: props.icon
        }, null, 8, ["type"])) : createCommentVNode("", true)
      ]);
    };
  }
});
export {
  _sfc_main as default
};
