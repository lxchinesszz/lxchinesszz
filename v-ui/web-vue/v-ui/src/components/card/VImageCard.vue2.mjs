import { defineComponent, openBlock, createElementBlock, unref, normalizeStyle, toDisplayString, createCommentVNode, createElementVNode, createVNode, withCtx, Fragment, renderList, createBlock, createTextVNode, normalizeProps, guardReactiveProps, renderSlot } from "vue";
import Space from "../../../../node_modules/.pnpm/@arco-design_web-vue@2.56.1_vue@3.4.37/node_modules/@arco-design/web-vue/es/space/index.mjs";
import Tag from "../../../../node_modules/.pnpm/@arco-design_web-vue@2.56.1_vue@3.4.37/node_modules/@arco-design/web-vue/es/tag/index.mjs";
import TypographyParagraph from "../../../../node_modules/.pnpm/@arco-design_web-vue@2.56.1_vue@3.4.37/node_modules/@arco-design/web-vue/es/typography/paragraph.mjs";
import Button from "../../../../node_modules/.pnpm/@arco-design_web-vue@2.56.1_vue@3.4.37/node_modules/@arco-design/web-vue/es/button/index.mjs";
const _hoisted_1 = { id: "container" };
const _hoisted_2 = { id: "head" };
const _hoisted_3 = { class: "title" };
const _hoisted_4 = {
  href: "https://ritheme.com/theme/riplus.html",
  class: "text-dark",
  style: { "color": "inherit", "text-decoration": "none" }
};
const _hoisted_5 = { class: "descBox" };
const _hoisted_6 = { class: "body" };
const _hoisted_7 = ["src", "alt"];
const _hoisted_8 = { id: "footer" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "VImageCard",
  props: {
    template: {
      type: Object,
      default: {
        title: "${title}",
        image: {
          src: "https://ritheme.com/wp-content/uploads/2023/06/theme-ripro-v5-300x200.jpg"
        },
        tags: [
          {
            tag: "V8.1",
            color: "#86909c"
          },
          {
            tag: "强大首选",
            color: "#d16c74"
          }
        ],
        description: {
          rows: 2,
          content: "A design is a plan or specification for theconstruction of an object or system or for the implementation of an activity or process, or the result of that plan or specification in the form of a prototype, product or\n          process. The verb to design expresses the process of developing a design. The verb to design expresses the\n          process of developing a design.A design is a plan or specification for the construction of an object or system\n          or for the implementation of an activity or process, or the result of that plan or specification in the form\n          of a prototype, product or process. The verb to design expresses the process of developing a design. The verb\n          to design expresses the process of developing a design."
        },
        footButton: {
          leftButton: {
            text: "主题介绍",
            type: "",
            status: "danger"
          },
          rightButton: {
            text: "正版演示",
            type: "primary",
            status: "normal"
          }
        }
      }
    }
  },
  setup(__props) {
    const props = __props;
    const data = props.template;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        unref(data).badge ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "badge",
          style: normalizeStyle({
            backgroundColor: unref(data).badge.bgColor ?? "red",
            color: unref(data).badge.color ?? "white"
          })
        }, toDisplayString(unref(data).badge.text), 5)) : createCommentVNode("", true),
        createElementVNode("div", _hoisted_2, [
          createElementVNode("div", _hoisted_3, [
            createVNode(unref(Space), null, {
              default: withCtx(() => [
                createElementVNode("a", _hoisted_4, toDisplayString(unref(data).title), 1),
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(data).tags, (tag) => {
                  return openBlock(), createBlock(unref(Tag), {
                    key: tag.tag,
                    size: "small",
                    color: tag.color
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(tag.tag), 1)
                    ]),
                    _: 2
                  }, 1032, ["color"]);
                }), 128))
              ]),
              _: 1
            })
          ]),
          createElementVNode("div", _hoisted_5, [
            createVNode(unref(TypographyParagraph), {
              ellipsis: {
                rows: unref(data).description.rows
              }
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(data).description.content), 1)
              ]),
              _: 1
            }, 8, ["ellipsis"])
          ])
        ]),
        createElementVNode("div", _hoisted_6, [
          createElementVNode("img", {
            class: "theme-item-media",
            src: unref(data).image.src,
            alt: unref(data).image.alt
          }, null, 8, _hoisted_7)
        ]),
        createElementVNode("div", _hoisted_8, [
          unref(data).footButton ? (openBlock(), createBlock(unref(Space), { key: 0 }, {
            default: withCtx(() => [
              createVNode(unref(Button), normalizeProps(guardReactiveProps(unref(data).footButton.leftButton)), {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(data).footButton.leftButton.text), 1)
                ]),
                _: 1
              }, 16),
              createVNode(unref(Button), normalizeProps(guardReactiveProps(unref(data).footButton.rightButton)), {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(data).footButton.rightButton.text), 1)
                ]),
                _: 1
              }, 16)
            ]),
            _: 1
          })) : renderSlot(_ctx.$slots, "footer", { key: 1 }, void 0, true)
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
