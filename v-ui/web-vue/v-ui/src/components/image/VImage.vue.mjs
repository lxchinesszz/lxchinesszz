import { defineComponent, ref, useAttrs, onMounted, openBlock, createElementBlock, mergeProps, unref } from "vue";
const _hoisted_1 = ["src"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "VImage",
  props: {
    src: String
  },
  emits: ["success", "error"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const imgRef = ref();
    const attrs = useAttrs();
    onMounted(() => {
      if (imgRef.value) {
        imgRef.value.onload = function() {
          console.log("图片加载成功！");
          emits("success");
        };
        imgRef.value.onerror = function() {
          console.log("图片加载失败！");
          emits("error");
        };
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("img", mergeProps(unref(attrs), {
        ref_key: "imgRef",
        ref: imgRef,
        src: props.src
      }), null, 16, _hoisted_1);
    };
  }
});
export {
  _sfc_main as default
};
