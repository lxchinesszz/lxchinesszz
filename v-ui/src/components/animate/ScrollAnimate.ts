import { ref } from 'vue';

export function useScrollAnimate() {

  const observer = ref<IntersectionObserver>();

  function createObserver(cssName: string, changeClassName: string) {
    // 使用 Intersection Observer 来检测卡片的可见性
    observer.value = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(changeClassName);
        } else {
          entry.target.classList.remove(changeClassName);
        }
      });
    }, {
      threshold: 0.1, // 当 10% 的卡片可见时触发
    });
    // 观察所有卡片
    document.querySelectorAll(cssName).forEach(card => {
      observer.value.observe(card);
    });
  }

  /**
   * 配置 animated 使用
   * @param className
   */
  const addAnimatePrefixIfNeeded = (className: string) => {
    // 检查className是否以'animate__'开头
    if (className.startsWith('animate__')) {
      // 如果不是，则添加'animate__'前缀
      return className.replace('animate__', '');
    }
    // 如果是，则直接返回原字符串
    return className;
  };

  function disconnect() {
    observer.value.disconnect();
    observer.value = null;
  }

  return {
    createObserver, disconnect, addAnimatePrefixIfNeeded,
  };
}
