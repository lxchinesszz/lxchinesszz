function cleanReturn(str) {
  return str.replace(/\n/g, '<br>');
}

export default function (slots, opt = {}) {
  const slotNames = Object.keys(slots);
  if (slotNames.length === 0) {
    return '';
  }

  return `
## Slots 插槽
| Name          | Description  | Bindings |
| ------------- | ------------ | -------- |
${slotNames
  .map((slotName) => {
    const { description, bindings, name } = slots[slotName];
    // 自定义忽略，如果注释<!-- @slot @ignore -->，忽略这个slot
    if (description === '@ignore') {
      return ''; // 可以选择返回一个空字符串或使用 filter 过滤掉
    }
    const readableBindings = // 序列化 bindings 以便以可读方式显示
      bindings && Object.keys(bindings).length
        ? JSON.stringify(bindings, null, 2)
        : '';
    return cleanReturn(`| ${name} | ${description} | ${readableBindings} |`); // 将换行符替换为 <br> 以允许它们在表格单元格中显示
  })
  .filter((row) => row !== '') // 过滤掉空字符串
  .join('\n')}
  `;
}
