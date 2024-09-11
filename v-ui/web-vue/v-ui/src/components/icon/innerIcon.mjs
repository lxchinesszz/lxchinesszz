function useInnerTag() {
  const innerTagStyle = [
    { key: "tag-blue", tagValue: "blue", tagStyle: "blue" },
    { key: "tag-red", tagValue: "red", tagStyle: "red" },
    { key: "tag-green", tagValue: "green", tagStyle: "green" },
    { key: "tag-yellow", tagValue: "yellow", tagStyle: "yellow" },
    { key: "tag-orange", tagValue: "orange", tagStyle: "orange" },
    { key: "tag-purple", tagValue: "purple", tagStyle: "purple" },
    { key: "tag-pink", tagValue: "pink", tagStyle: "pink" },
    { key: "tag-gray", tagValue: "gray", tagStyle: "gray" }
  ];
  const innerCircleStyle = [
    { key: "circle-blue", tagValue: "blue", tagStyle: "blue" },
    { key: "circle-red", tagValue: "red", tagStyle: "red" },
    { key: "circle-green", tagValue: "green", tagStyle: "green" },
    { key: "circle-yellow", tagValue: "yellow", tagStyle: "yellow" },
    { key: "circle-orange", tagValue: "orange", tagStyle: "orange" },
    { key: "circle-purple", tagValue: "purple", tagStyle: "purple" },
    { key: "circle-pink", tagValue: "pink", tagStyle: "pink" },
    { key: "circle-gray", tagValue: "gray", tagStyle: "gray" }
  ];
  const hasInnerTagIcon = (icon) => {
    return innerTagStyle.find((x) => {
      return x.key === icon;
    });
  };
  const hasInnerNoticeIcon = (icon) => {
    const findIndex = innerCircleStyle.findIndex((x) => {
      return x.key === icon;
    });
    return findIndex >= 0;
  };
  function convertToTagFormat(tag) {
    return {
      title: tag.key,
      name: tag.key,
      category: "内置Tag标记",
      categoryCN: "内置Tag标记"
    };
  }
  function convertToNewFormat(tag) {
    return {
      title: tag.key,
      name: tag.key,
      category: "内置状态图标",
      categoryCN: "内置状态图标"
    };
  }
  const loadInnerTag = (dict) => {
    dict["内置Tag标记"] = innerTagStyle.map(convertToTagFormat);
  };
  const loadInnerNoticeIcon = (dict) => {
    dict["内置状态图标"] = innerCircleStyle.map(convertToNewFormat);
  };
  return {
    hasInnerTagIcon,
    loadInnerTag,
    loadInnerNoticeIcon,
    hasInnerNoticeIcon,
    innerTagStyle,
    innerCircleStyle
  };
}
export {
  useInnerTag as default
};
