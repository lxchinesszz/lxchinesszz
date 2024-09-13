import { defineComponent, useCssVars, ref, onMounted, computed, openBlock, createElementBlock, renderSlot } from "vue";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "VAnimate",
  props: {
    /**
     * 动画样式
     */
    animate: {
      type: Object,
      default: {
        type: "fadeIn",
        duration: 1,
        disabled: false
      }
    }
  },
  setup(__props, { expose: __expose }) {
    useCssVars((_ctx) => ({
      "b89eb9cc": animate.value,
      "e9e4370a": duration.value
    }));
    const props = __props;
    const boxRef = ref();
    const replay = () => {
      const classNames = boxRef.value.className.split(" ");
      classNames.push("animate__box");
      boxRef.value.className = classNames.join(" ");
    };
    const removeAnimate = () => {
      const classNames = boxRef.value.className.split(" ");
      const filteredClasses = classNames.filter(
        (className) => className !== "animate__box"
      );
      boxRef.value.className = filteredClasses.join(" ");
    };
    onMounted(() => {
      boxRef.value.addEventListener("animationend", function() {
        removeAnimate();
      });
    });
    __expose({ replay });
    const addAnimatePrefixIfNeeded = (className) => {
      if (className.startsWith("animate__")) {
        return className.replace("animate__", "");
      }
      return className;
    };
    const animate = computed(() => {
      if (props.animate.disabled) {
        return "";
      }
      return addAnimatePrefixIfNeeded(props.animate.type);
    });
    const duration = computed(() => {
      if (props.animate.disabled) {
        return "";
      }
      return `${props.animate.duration ?? 1}s`;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "boxRef",
        ref: boxRef,
        class: "animate__box"
      }, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 512);
    };
  }
});
export {
  _sfc_main as default
};
