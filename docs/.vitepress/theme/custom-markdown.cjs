// custom-markdown.js
module.exports = function suggestionPlugin(md) {
  // 使用 markdown-it 内置的 parser 规则注册新的 inline 规则
  md.inline.ruler.before('emphasis', 'suggestion', function (state, silent) {
    const start = state.pos;
    const markerStart = '*=';
    const markerEnd = '=*';

    // 检查当前位置是否为 *= 起始标记
    if (state.src.startsWith(markerStart, start)) {
      const end = state.src.indexOf(markerEnd, start + markerStart.length);
      if (end === -1) return false; // 如果没有找到 =* 结束标记，返回 false

      if (!silent) {
        // 插入 suggestion_open token
        const token = state.push('suggestion_open', 'span', 1);
        token.attrs = [['style', 'color: #e64b7d;font-weight: bold;background-color: var(--vp-code-bg);border-radius: 4px;\n' +
        '    padding: 3px 6px;']];

        // 获取 *= 和 =* 之间的内容
        const contentToken = state.push('text', '', 0);
        contentToken.content = state.src.slice(start + markerStart.length, end).trim();

        // 插入 suggestion_close token
        state.push('suggestion_close', 'span', -1);
      }

      // 更新位置到结束标记之后
      state.pos = end + markerEnd.length;
      return true;
    }

    return false;
  });

  // 渲染 suggestion_open 标签
  md.renderer.rules.suggestion_open = function (tokens, idx) {
    return `<span style="${tokens[idx].attrs[0][1]}">`;
  };

  // 渲染 suggestion_close 标签
  md.renderer.rules.suggestion_close = function () {
    return '</span>';
  };
};
