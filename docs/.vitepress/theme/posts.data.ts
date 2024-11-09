import { createContentLoader } from 'vitepress';

export interface Post {
  title: string;
  url: string;
  date: {
    time: number
    string: string
  };
  category: string;
  excerpt: string | undefined;
}

declare const data: Post[];
export { data };


function removeHeadingsNumbers(text) {
  // 匹配中文大写数字 "一、二、三..." 和数字序号 "1.1"、"1.2" 等
  const regex = /[一二三四五六七八九十]+、|(\d+\.\d+)|(\d+、)/g;

  // 用空字符串替换匹配的序号
  return text.replace(regex, '').trim();
}

function extractHeadings(html) {
  // 匹配 <h1>, <h2>, <h3> 标签内容的正则表达式，忽略标签内部嵌套的标签
  const regex = /<h[1-3][^>]*>(.*?)<\/h[1-3]>/gi;

  let matches = [];
  let match;

  // 使用 exec 循环查找所有匹配项
  while ((match = regex.exec(html)) !== null) {
    // 去除嵌套标签，只提取文本内容
    const cleanText = match[1].replace(/<[^>]*>/g, '');
    matches.push(removeHeadingsNumbers((cleanText as string).replace('&ZeroWidthSpace;', '')));
  }

  // 返回以空格分隔的字符串
  return matches.join(' ');
}


export default createContentLoader('post/**/*.md', {
  excerpt: true,
  transform(raw): Post[] {
    return raw
      .map(({ url, frontmatter, excerpt }) => ({
        title: frontmatter.title,
        url,
        excerpt,
        category: frontmatter.category,
        date: formatDate(frontmatter.date),
      }))
      .sort((a, b) => b.date.time - a.date.time);
  },
});

function formatDate(raw: string): Post['date'] {
  const date = new Date(raw);
  date.setUTCHours(12);
  return {
    time: +date,
    string: date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
  };
}
