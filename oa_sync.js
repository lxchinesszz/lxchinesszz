function extractHeadings(html) {
  // 匹配 <h1>, <h2>, <h3> 标签内容的正则表达式，忽略标签内部嵌套的标签
  const regex = /<h[1-3][^>]*>(.*?)<\/h[1-3]>/gi;

  let matches = [];
  let match;

  // 使用 exec 循环查找所有匹配项
  while ((match = regex.exec(html)) !== null) {
    // 去除嵌套标签，只提取文本内容
    const cleanText = match[1].replace(/<[^>]*>/g, '');
    matches.push(cleanText);
  }

  // 返回以空格分隔的字符串
  return matches.join(' ');
}

const htmlString = `
<div class="info custom-block"><p class="custom-block-title">INFO</p>
<p>测试成本到底有多大? 你认为你写的代码需不需要测试? 为了引出成本的话题, 我们先从实际工作中出发
看看你能否经受住这些灵魂的考验吧。</p>
</div>
<h2 id="一、灵魂深处的拷问" tabindex="-1">一、灵魂深处的拷问 <a class="header-anchor" href="#一、灵魂深处的拷问" aria-label="Permalink to &quot;一、灵魂深处的拷问&quot;">&ZeroWidthSpace;</a></h2>
<ul>
<li>你的代码质量如何度量？</li>
<li>你是如何保证代码质量？</li>
<li>你敢随时重构代码吗？</li>
<li>你是如何确保重构的代码依然保持正确性？</li>
<li>你是否有足够信心在没有测试的情况下随时发布你的代码？</li>
</ul>
<p>📢 如果答案都比较犹豫，那么就证明我们非常需要单元测试。(ps: 不会有人心里想的是我们需要测试同学吧 😏)</p>
<p>==它能带给我们很多保障：==</p>
`;

// 执行函数
console.log(extractHeadings(htmlString));
// 输出: "一、灵魂深处的拷问"
