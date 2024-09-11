import { defineComponent, computed, openBlock, createElementBlock, normalizeClass } from "vue";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "VCircle",
  props: {
    value: {
      type: Object,
      required: true
    },
    tagKey: [String, Number]
  },
  setup(__props) {
    function findIndex(arr, filter) {
      if (arr !== void 0 && arr instanceof Array && arr.length > 0) {
        for (let i = 0; i < arr.length; i += 1) {
          const t = arr[i];
          if (filter(t)) {
            return i;
          }
        }
      }
      return -1;
    }
    function find(arr, filter) {
      const index = findIndex(arr, filter);
      if (index >= 0) {
        return arr[index];
      }
      return null;
    }
    const props = __props;
    const tagIndex = computed(() => props.tagKey);
    const tagStyle = computed(() => {
      const currentTag = find(props.value, (v) => {
        return v.key === tagIndex.value;
      });
      if (currentTag !== null) {
        return currentTag.tagStyle;
      }
      return tagIndex;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        class: normalizeClass(["circle", tagStyle.value])
      }, null, 2);
    };
  }
});
export {
  _sfc_main as default
};
