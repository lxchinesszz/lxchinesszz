import { defineComponent, ref, onMounted, onUnmounted, resolveComponent, openBlock, createElementBlock, Fragment, renderList, createBlock, withCtx, createElementVNode, createVNode, createCommentVNode, createTextVNode, toDisplayString } from "vue";
import VTextCenter from "../text/VTextCenter.vue.mjs";
import LeaderLine from "../../../../node_modules/.pnpm/r2.cnpmjs.org_vue3-leaderline@1.2.11/node_modules/vue3-leaderline/leader-line.min.mjs";
import _sfc_main$2 from "../icon/VIcon.vue.mjs";
import VAnimate from "../animate/VAnimate.vue.mjs";
import _sfc_main$1 from "../image/VImage.vue.mjs";
const _hoisted_1 = {
  id: "container",
  style: { "width": "100%" }
};
const _hoisted_2 = { class: "banner-image" };
const _hoisted_3 = { class: "banner-image" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "VAroundBanner",
  props: {
    line: Boolean,
    template: {
      type: Object,
      default: [
        {
          imagePosition: {
            image: {
              src: "https://ritheme.com/wp-content/themes/ritheme-2023/assets/img/screen-1-1000x800.jpg"
            },
            position: "left",
            animate: {
              type: "fadeInUp",
              duration: 1,
              disable: false
            }
          },
          title: "灵活轻量原生态的首页模块化配置",
          animate: {
            type: "fadeInUp",
            duration: 2,
            disable: false
          },
          secondary: "现代化的前台页面，易于管理拖拽搭配的WP原生小工具模块化首页可拖拽设置。",
          textItems: [
            {
              text: "非常适合虚拟资源商城"
            },
            {
              text: "所有功能界面自带，无需依赖插件"
            }
          ]
        },
        {
          imagePosition: {
            image: {
              src: "https://ritheme.com/wp-content/themes/ritheme-2023/assets/img/screen-2-1000x800.jpg"
            },
            position: "right",
            animate: {
              type: "fadeInUp",
              duration: 1,
              disable: false
            }
          },
          animate: {
            type: "fadeInUp",
            duration: 2,
            disable: false
          },
          title: "灵活轻量原生态的首页模块化配置",
          secondary: "现代化的前台页面，易于管理拖拽搭配的WP原生小工具模块化首页可拖拽设置。",
          textItems: [
            {
              text: "非常适合虚拟资源商城"
            },
            {
              text: "所有功能界面自带，无需依赖插件"
            }
          ]
        },
        {
          imagePosition: {
            image: {
              src: "https://ritheme.com/wp-content/themes/ritheme-2023/assets/img/screen-1-1000x800.jpg"
            },
            position: "left",
            animate: {
              type: "fadeInUp",
              duration: 1,
              disable: false
            }
          },
          title: "灵活轻量原生态的首页模块化配置",
          animate: {
            type: "fadeInUp",
            duration: 2,
            disable: false
          },
          secondary: "现代化的前台页面，易于管理拖拽搭配的WP原生小工具模块化首页可拖拽设置。",
          textItems: [
            {
              text: "非常适合虚拟资源商城"
            },
            {
              text: "所有功能界面自带，无需依赖插件"
            }
          ]
        }
      ]
    }
  },
  setup(__props) {
    const props = __props;
    const linesRef = ref([]);
    const successCount = ref(0);
    const loadImageSuccessCount = () => {
      successCount.value += 1;
      if (props.line) {
        const imgNodeList = document.querySelectorAll(".around-banner-image");
        if (imgNodeList && imgNodeList.length == successCount.value && imgNodeList.length >= 2) {
          setTimeout(() => {
            for (let i = 0; i < imgNodeList.length - 1; i++) {
              const line = new LeaderLine(imgNodeList[i], imgNodeList[i + 1], {
                dash: {
                  animation: true
                },
                startPlug: "behind",
                endPlug: "behind",
                color: "#e7eaf0",
                startSocket: "bottom",
                endSocket: "top",
                hide: true
              });
              linesRef.value.push(line);
              line.show("draw");
              console.log("draw");
            }
          }, 1e3);
        }
      }
    };
    const position = () => {
      if (linesRef.value.length > 0) {
        for (let i = 0; i < linesRef.value.length; i++) {
          linesRef.value[i].position();
        }
      }
    };
    onMounted(() => {
      window.addEventListener("resize", position);
    });
    onUnmounted(() => {
      if (linesRef.value.length > 0) {
        for (let linesRefKey in linesRef.value) {
          linesRef.value[linesRefKey].remove();
        }
      }
      window.removeEventListener("resize", position);
    });
    return (_ctx, _cache) => {
      const _component_a_col = resolveComponent("a-col");
      const _component_a_typography_text = resolveComponent("a-typography-text");
      const _component_a_space = resolveComponent("a-space");
      const _component_a_row = resolveComponent("a-row");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(props.template, (item, index) => {
          return openBlock(), createBlock(_component_a_row, {
            key: index,
            class: "grid-demo",
            gutter: 12,
            style: { "margin": "5.5rem 0" },
            align: "center"
          }, {
            default: withCtx(() => [
              item.imagePosition.position === "left" ? (openBlock(), createBlock(_component_a_col, {
                key: 0,
                xs: 24,
                sm: 24,
                md: 22,
                lg: 12,
                xl: 12,
                xxl: 12,
                align: "center"
              }, {
                default: withCtx(() => [
                  createElementVNode("div", _hoisted_2, [
                    createVNode(VAnimate, {
                      animate: item.imagePosition.animate
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$1, {
                          class: "around-banner-image",
                          src: item.imagePosition.image.src,
                          alt: item.imagePosition.image.alt,
                          style: { "width": "70%", "object-fit": "contain" },
                          onSuccess: loadImageSuccessCount
                        }, null, 8, ["src", "alt"])
                      ]),
                      _: 2
                    }, 1032, ["animate"])
                  ])
                ]),
                _: 2
              }, 1024)) : createCommentVNode("", true),
              item.imagePosition.position === "left" ? (openBlock(), createBlock(_component_a_col, {
                key: 1,
                align: "center",
                xs: 24,
                sm: 12,
                md: 22,
                lg: 12,
                xl: 12,
                xxl: 12
              }, {
                default: withCtx(() => [
                  createVNode(_component_a_space, {
                    align: "start",
                    direction: "vertical",
                    size: "mini",
                    style: { "width": "70%" }
                  }, {
                    default: withCtx(() => [
                      createVNode(VAnimate, {
                        animate: item.animate,
                        style: { "text-align": "left" }
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextCenter, {
                            align: "start",
                            title: item.title,
                            style: { "margin": "1.5rem 0" },
                            secondary: item.secondary
                          }, null, 8, ["title", "secondary"]),
                          (openBlock(true), createElementBlock(Fragment, null, renderList(item.textItems, (textItem, idx) => {
                            return openBlock(), createElementBlock("div", {
                              key: idx,
                              style: { "padding-top": "0.5rem !important", "padding-bottom": "0.5rem !important" }
                            }, [
                              createVNode(_component_a_space, { size: "mini" }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$2, {
                                    icon: textItem.icon ?? "circle-blue"
                                  }, null, 8, ["icon"]),
                                  createVNode(_component_a_typography_text, { bold: "" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(textItem.text), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024)
                            ]);
                          }), 128))
                        ]),
                        _: 2
                      }, 1032, ["animate"])
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024)) : createCommentVNode("", true),
              item.imagePosition.position === "right" ? (openBlock(), createBlock(_component_a_col, {
                key: 2,
                xs: 24,
                sm: 12,
                md: 22,
                lg: 12,
                xl: 12,
                xxl: 12,
                align: "center"
              }, {
                default: withCtx(() => [
                  createVNode(_component_a_space, {
                    align: "start",
                    direction: "vertical",
                    size: "mini",
                    style: { "width": "70%" }
                  }, {
                    default: withCtx(() => [
                      createVNode(VAnimate, {
                        animate: item.animate,
                        style: { "text-align": "left" }
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextCenter, {
                            align: "start",
                            title: item.title,
                            style: { "margin": "1.5rem 0" },
                            secondary: item.secondary
                          }, null, 8, ["title", "secondary"]),
                          (openBlock(true), createElementBlock(Fragment, null, renderList(item.textItems, (textItem, idx) => {
                            return openBlock(), createElementBlock("div", {
                              key: idx,
                              style: { "padding-top": "0.5rem !important", "padding-bottom": "0.5rem !important" }
                            }, [
                              createVNode(_component_a_space, { size: "mini" }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$2, {
                                    icon: textItem.icon ?? "circle-blue"
                                  }, null, 8, ["icon"]),
                                  createVNode(_component_a_typography_text, { bold: "" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(textItem.text), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024)
                            ]);
                          }), 128))
                        ]),
                        _: 2
                      }, 1032, ["animate"])
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024)) : createCommentVNode("", true),
              item.imagePosition.position === "right" ? (openBlock(), createBlock(_component_a_col, {
                key: 3,
                xs: 24,
                sm: 12,
                md: 22,
                lg: 12,
                xl: 12,
                xxl: 12,
                align: "center"
              }, {
                default: withCtx(() => [
                  createElementVNode("div", _hoisted_3, [
                    createVNode(VAnimate, {
                      animate: item.imagePosition.animate
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$1, {
                          class: "around-banner-image",
                          src: item.imagePosition.image.src,
                          alt: item.imagePosition.image.alt,
                          style: { "width": "70%", "object-fit": "contain" },
                          onSuccess: loadImageSuccessCount
                        }, null, 8, ["src", "alt"])
                      ]),
                      _: 2
                    }, 1032, ["animate"])
                  ])
                ]),
                _: 2
              }, 1024)) : createCommentVNode("", true)
            ]),
            _: 2
          }, 1024);
        }), 128))
      ]);
    };
  }
});
export {
  _sfc_main as default
};
