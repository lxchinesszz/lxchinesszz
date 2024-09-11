import{_ as a,c as s,o as n,ac as e}from"./chunks/framework.C9DUt1S1.js";const b=JSON.parse('{"title":"中文文档写作规范","description":"","frontmatter":{"breadcrumb":false,"navbar":true,"sidebar":"auto","pageInfo":true,"contributor":true,"editLink":true,"updateTime":true,"prev":true,"next":true,"comment":false,"footer":true,"backtotop":true,"title":"中文文档写作规范"},"headers":[],"relativePath":"design/中文文档写作规范.md","filePath":"design/中文文档写作规范.md"}'),i={name:"design/中文文档写作规范.md"},p=e(`<div class="tip custom-block"><p class="custom-block-title">中文技术文档的写作规范。</p><p>本篇文章参考与阮一峰大佬的网络日志, 总结比较细致。非常具有借鉴意义, 欢迎大家进行学习。</p><ul><li>文章参考地址: <a href="https://github.com/ruanyf/document-style-guide" target="_blank" rel="noreferrer">阮一峰的网络日志</a></li></ul></div><h1 id="目录" tabindex="-1">目录 <a class="header-anchor" href="#目录" aria-label="Permalink to &quot;目录&quot;">​</a></h1><ol><li><a href="#一、标题">标题</a></li><li><a href="#二、文本">文本</a></li><li><a href="#三、段落">段落</a></li><li><a href="#四、数值">数值</a></li><li><a href="#五、标点符号">标点符号</a></li><li><a href="#六、文档体系">文档体系</a></li><li><a href="#七、参考链接">参考链接</a></li></ol><h2 id="一、标题" tabindex="-1">一、标题 <a class="header-anchor" href="#一、标题" aria-label="Permalink to &quot;一、标题&quot;">​</a></h2><h3 id="层级" tabindex="-1">层级 <a class="header-anchor" href="#层级" aria-label="Permalink to &quot;层级&quot;">​</a></h3><p>标题分为四级。</p><ul><li>一级标题：文章的标题</li><li>二级标题：文章主要部分的大标题</li><li>三级标题：二级标题下面一级的小标题</li><li>四级标题：三级标题下面某一方面的小标题</li></ul><p>下面是示例。</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"># 一级标题</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">## 二级标题</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">### 三级标题</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">#### 四级标题</span></span></code></pre></div><h3 id="原则" tabindex="-1">原则 <a class="header-anchor" href="#原则" aria-label="Permalink to &quot;原则&quot;">​</a></h3><p>（1）一级标题下，不能直接出现三级标题。</p><p>示例：下面的文章结构，缺少二级标题。</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"># 一级标题</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">### 三级标题</span></span></code></pre></div><p>（2）标题要避免孤立编号（即同级标题只有一个）。</p><p>示例：下面的文章结构，<code>二级标题 A</code>只包含一个三级标题，完全可以省略<code>三级标题 A</code>。</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">## 二级标题 A</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">### 三级标题 A</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">## 二级标题 B</span></span></code></pre></div><p>（3）下级标题不重复上一级标题的名字。</p><p>示例：下面的文章结构，二级标题与下属的三级标题同名，建议避免。</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">## 概述</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">### 概述</span></span></code></pre></div><p>（4）谨慎使用四级标题，尽量避免出现，保持层级的简单，防止出现过于复杂的章节。</p><p>如果三级标题下有并列性的内容，建议只使用项目列表（Item list）。</p><p>示例：下面的结构二要好于结构一。后者适用的场景，主要是较长篇幅的内容。</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">结构一</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">### 三级标题</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">#### 四级标题 A</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">#### 四级标题 B</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">#### 四级标题 C</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">结构二</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">### 三级标题</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">**（1）A**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">**（2）B**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">**（3）C**</span></span></code></pre></div><h2 id="二、文本" tabindex="-1">二、文本 <a class="header-anchor" href="#二、文本" aria-label="Permalink to &quot;二、文本&quot;">​</a></h2><h3 id="字间距" tabindex="-1">字间距 <a class="header-anchor" href="#字间距" aria-label="Permalink to &quot;字间距&quot;">​</a></h3><p>（1）全角中文字符与半角英文字符之间，应有一个半角空格。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>错误：本文介绍如何快速启动Windows系统。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>正确：本文介绍如何快速启动 Windows 系统。</span></span></code></pre></div><p>（2）全角中文字符与半角阿拉伯数字之间，有没有半角空格都可，但必须保证风格统一，不能两种风格混杂。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>正确：2011年5月15日，我订购了5台笔记本电脑与10台平板电脑。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>正确：2011 年 5 月 15 日，我订购了 5 台笔记本电脑与 10 台平板电脑。</span></span></code></pre></div><p>半角的百分号，视同阿拉伯数字。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>正确：今年我国经济增长率是6.5%。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>正确：今年我国经济增长率是 6.5%。</span></span></code></pre></div><p>（3）英文单位若不翻译，单位前的阿拉伯数字与单位间不留空格。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>错误：一部容量为 16 GB 的智能手机</span></span>
<span class="line"><span></span></span>
<span class="line"><span>正确：一部容量为 16GB 的智能手机</span></span></code></pre></div><p>（4）半角英文字符和半角阿拉伯数字，与全角标点符号之间不留空格。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>错误：他的电脑是 MacBook Air 。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>正确：他的电脑是 MacBook Air。</span></span></code></pre></div><h3 id="句子" tabindex="-1">句子 <a class="header-anchor" href="#句子" aria-label="Permalink to &quot;句子&quot;">​</a></h3><p>（1）避免使用长句。</p><p>不包含任何标点符号的单个句子，或者以逗号分隔的句子构件，长度尽量保持在 20 个字以内；20～29 个字的句子，可以接受；30～39 个字的句子，语义必须明确，才能接受；多于 40 个字的句子，任何情况下都不能接受。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>错误：本产品适用于从由一台服务器进行动作控制的单一节点结构到由多台服务器进行动作控制的并行处理程序结构等多种体系结构。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>正确：本产品适用于多种体系结构。无论是由一台服务器（单一节点结构），还是由多台服务器（并行处理结构）进行动作控制，均可以使用本产品。</span></span></code></pre></div><p>逗号分割的长句，总长度不应该超过 100 字或者正文的 3 行。</p><p>（2）尽量使用简单句和并列句，避免使用复合句。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>并列句：他昨天生病了，没有参加会议。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>复合句：那个昨天生病的人没有参加会议。</span></span></code></pre></div><p>（3）同样一个意思，尽量使用肯定句表达，不使用否定句表达。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>错误：请确认没有接通装置的电源。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>正确：请确认装置的电源已关闭。</span></span></code></pre></div><p>（4）避免使用双重否定句。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>错误：没有删除权限的用户，不能删除此文件。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>正确：用户必须拥有删除权限，才能删除此文件。</span></span></code></pre></div><h3 id="写作风格" tabindex="-1">写作风格 <a class="header-anchor" href="#写作风格" aria-label="Permalink to &quot;写作风格&quot;">​</a></h3><p>（1）尽量不使用被动语态，改为使用主动语态。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>错误：假如此软件尚未被安装，</span></span>
<span class="line"><span></span></span>
<span class="line"><span>正确：假如尚未安装这个软件，</span></span></code></pre></div><p>（2）不使用非正式的语言风格。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>错误：Lady Gaga 的演唱会真是酷毙了，从没看过这么给力的表演！！！</span></span>
<span class="line"><span></span></span>
<span class="line"><span>正确：无法参加本次活动，我深感遗憾。</span></span></code></pre></div><p>（3）不使用冷僻、生造或者文言文的词语，而要使用现代汉语的常用表达方式。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>错误：这是唯二的快速启动的方法。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>正确：这是仅有的两种快速启动的方法。</span></span></code></pre></div><p>（4）用对“的”、“地”、“得”。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>她露出了开心的笑容。</span></span>
<span class="line"><span>（形容词＋的＋名词）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>她开心地笑了。</span></span>
<span class="line"><span>（副词＋地＋动词）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>她笑得很开心。</span></span>
<span class="line"><span>（动词＋得＋副词）</span></span></code></pre></div><p>（5）使用代词时（比如“其”、“该”、“此”、“这”等词），必须明确指代的内容，保证只有一个含义。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>错误：从管理系统可以监视中继系统和受其直接控制的分配系统。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>正确：从管理系统可以监视两个系统：中继系统和受中继系统直接控制的分配系统。</span></span></code></pre></div><p>（6）名词前不要使用过多的形容词。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>错误：此设备的使用必须在接受过本公司举办的正式的设备培训的技师的指导下进行。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>正确：此设备必须在技师的指导下使用，且指导技师必须接受过由本公司举办的正式设备培训。</span></span></code></pre></div><h3 id="英文处理" tabindex="-1">英文处理 <a class="header-anchor" href="#英文处理" aria-label="Permalink to &quot;英文处理&quot;">​</a></h3><p>（1）英文原文如果使用了复数形式，翻译成中文时，应该将其还原为单数形式。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>英文：⋯information stored in random access memory (RAMs)⋯</span></span>
<span class="line"><span></span></span>
<span class="line"><span>中文：……存储在随机存取存储器（RAM）里的信息……</span></span></code></pre></div><p>（2）外文缩写可以使用半角圆点(<code>.</code>)表示缩写。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>U.S.A.</span></span>
<span class="line"><span>Apple, Inc.</span></span></code></pre></div><p>（3）表示中文时，英文省略号（<code>⋯</code>）应改为中文省略号（<code>……</code>）。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>英文：5 minutes later⋯</span></span>
<span class="line"><span></span></span>
<span class="line"><span>中文：5 分钟过去了……</span></span></code></pre></div><p>（4）英文书名或电影名改用中文表达时，双引号应改为书名号。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>英文：He published an article entitled &quot;The Future of the Aviation&quot;.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>中文：他发表了一篇名为《航空业的未来》的文章。</span></span></code></pre></div><p>（5）第一次出现英文词汇时，在括号中给出中文标注。此后再次出现时，直接使用英文缩写即可。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>IOC（International Olympic Committee，国际奥林匹克委员会）。这样定义后，便可以直接使用“IOC”了。</span></span></code></pre></div><p>（6）专有名词中每个词第一个字母均应大写，非专有名词则不需要大写。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>“American Association of Physicists in Medicine”（美国医学物理学家协会）是专有名词，需要大写。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>“online transaction processing”（在线事务处理）不是专有名词，不应大写。</span></span></code></pre></div><h2 id="三、段落" tabindex="-1">三、段落 <a class="header-anchor" href="#三、段落" aria-label="Permalink to &quot;三、段落&quot;">​</a></h2><h3 id="原则-1" tabindex="-1">原则 <a class="header-anchor" href="#原则-1" aria-label="Permalink to &quot;原则&quot;">​</a></h3><ul><li>一个段落只能有一个主题，或一个中心句子。</li><li>段落的中心句子放在段首，对全段内容进行概述。后面陈述的句子为核心句服务。</li><li>一个段落的长度不能超过七行，最佳段落长度小于等于四行。</li><li>段落的句子语气要使用陈述和肯定语气，避免使用感叹语气。</li><li>段落之间使用一个空行隔开。</li><li>段落开头不要留出空白字符。</li></ul><h3 id="引用" tabindex="-1">引用 <a class="header-anchor" href="#引用" aria-label="Permalink to &quot;引用&quot;">​</a></h3><p>引用第三方内容时，应注明出处。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>One man’s constant is another man’s variable. — Alan Perlis</span></span></code></pre></div><p>如果是全篇转载，请在全文开头显著位置注明作者和出处，并链接至原文。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>本文转载自 WikiQuote</span></span></code></pre></div><p>使用外部图片时，必须在图片下方或文末标明来源。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>本文部分图片来自 Wikipedia</span></span></code></pre></div><h2 id="四、数值" tabindex="-1">四、数值 <a class="header-anchor" href="#四、数值" aria-label="Permalink to &quot;四、数值&quot;">​</a></h2><h3 id="半角数字" tabindex="-1">半角数字 <a class="header-anchor" href="#半角数字" aria-label="Permalink to &quot;半角数字&quot;">​</a></h3><p>阿拉伯数字一律使用半角形式，不得使用全角形式。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>错误： 这件商品的价格是１０００元。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>正确： 这件商品的价格是 1000 元。</span></span></code></pre></div><h3 id="千分号" tabindex="-1">千分号 <a class="header-anchor" href="#千分号" aria-label="Permalink to &quot;千分号&quot;">​</a></h3><p>数值为千位以上，应添加千分号（半角逗号）。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>XXX 公司的实收资本为 ￥1,258,000 人民币。</span></span></code></pre></div><p>对于 4 位以下的数值，千分号是选用的，比如<code>1000</code>和<code>1,000</code>都可以接受。对于 4 位以上的数值，千分号是必须的。</p><h3 id="货币" tabindex="-1">货币 <a class="header-anchor" href="#货币" aria-label="Permalink to &quot;货币&quot;">​</a></h3><p>货币应为阿拉伯数字，并在数字前写出货币符号，或在数字后写出货币中文名称。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$1,000</span></span>
<span class="line"><span>1,000 美元</span></span></code></pre></div><p>英文的货币名称，建议参考国际标准 <a href="https://en.wikipedia.org/wiki/ISO_4217" target="_blank" rel="noreferrer">ISO 4217</a>。</p><h3 id="数值范围" tabindex="-1">数值范围 <a class="header-anchor" href="#数值范围" aria-label="Permalink to &quot;数值范围&quot;">​</a></h3><p>表示数值范围时，用<code>～</code>或<code>——</code>连接。参见《标点符号》一节的“连接号”部分。</p><p>带有单位或百分号时，两个数字建议都要加上单位或百分号。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>132kg～234kg</span></span>
<span class="line"><span></span></span>
<span class="line"><span>67%～89%</span></span></code></pre></div><h3 id="变化程度的表示法" tabindex="-1">变化程度的表示法 <a class="header-anchor" href="#变化程度的表示法" aria-label="Permalink to &quot;变化程度的表示法&quot;">​</a></h3><p>数字的增加要使用“增加了”、“增加到”。“了”表示增量，“到”表示定量。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>增加到过去的两倍</span></span>
<span class="line"><span>（过去为一，现在为二）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>增加了两倍</span></span>
<span class="line"><span>（过去为一，现在为三）</span></span></code></pre></div><p>数字的减少要使用“降低了”、“降低到”。“了”表示增量，“到”表示定量。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>降低到百分之八十</span></span>
<span class="line"><span>（定额是一百，现在是八十）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>降低了百分之八十</span></span>
<span class="line"><span>（原来是一百，现在是二十）</span></span></code></pre></div><p>不能用“降低 N 倍”或“减少 N 倍”的表示法，要用“降低百分之几”或“减少百分之几”。因为减少（或降低）一倍表示数值原来为一百，现在等于零。</p><h2 id="五、标点符号" tabindex="-1">五、标点符号 <a class="header-anchor" href="#五、标点符号" aria-label="Permalink to &quot;五、标点符号&quot;">​</a></h2><h3 id="原则-2" tabindex="-1">原则 <a class="header-anchor" href="#原则-2" aria-label="Permalink to &quot;原则&quot;">​</a></h3><p>（1）中文语句的标点符号，均应该采取全角符号，这样可以与全角文字保持视觉的一致。</p><p>（2）如果整句为英文，则该句使用英文/半角标点。</p><p>（3）句号、问号、叹号、逗号、顿号、分号和冒号不得出现在一行之首。</p><h3 id="句号" tabindex="-1">句号 <a class="header-anchor" href="#句号" aria-label="Permalink to &quot;句号&quot;">​</a></h3><p>（1）中文语句的结尾处应该用全角句号（<code>。</code>）。</p><p>（2）句子末尾用括号加注时，句号应在括号之外。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>错误：关于文件的输出，请参照第 1.3 节（见第 26 页。）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>正确：关于文件的输出，请参照第 1.3 节（见第 26 页）。</span></span></code></pre></div><h3 id="逗号" tabindex="-1">逗号 <a class="header-anchor" href="#逗号" aria-label="Permalink to &quot;逗号&quot;">​</a></h3><p>（1）逗号（<code>，</code>）表示句子内部的一般性停顿。</p><p>（2）注意避免“一逗到底”，即整个段落除了结尾，全部停顿都使用逗号。</p><h3 id="顿号" tabindex="-1">顿号 <a class="header-anchor" href="#顿号" aria-label="Permalink to &quot;顿号&quot;">​</a></h3><p>（1）句子内部的并列词，应该用全角顿号(<code>、</code>) 分隔，而不用逗号，即使并列词是英语也是如此。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>错误：我最欣赏的科技公司有 Google, Facebook, 腾讯, 阿里和百度等。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>正确：我最欣赏的科技公司有 Google、Facebook、腾讯、阿里和百度等。</span></span></code></pre></div><p>（2）英文句子中，并列词语之间使用半角逗号（<code>,</code>）分隔。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>例句：Microsoft Office includes Word, Excel, PowerPoint, Outlook and other components.</span></span></code></pre></div><h3 id="分号" tabindex="-1">分号 <a class="header-anchor" href="#分号" aria-label="Permalink to &quot;分号&quot;">​</a></h3><p>（1）分号（<code>；</code>）表示复句内部并列分句之间的停顿。</p><h3 id="引号" tabindex="-1">引号 <a class="header-anchor" href="#引号" aria-label="Permalink to &quot;引号&quot;">​</a></h3><p>（1）引用时，应该使用全角双引号（<code>“ ”</code>），注意前后双引号不同。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>例句：许多人都认为客户服务的核心是“友好”和“专业”。</span></span></code></pre></div><p>（2）引号里面还要用引号时，外面一层用双引号，里面一层用单引号（<code>‘ ’</code>），注意前后单引号不同。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>例句：鲍勃解释道：“我要放音乐，可萨利说，‘不行！’。”</span></span></code></pre></div><h3 id="括号" tabindex="-1">括号 <a class="header-anchor" href="#括号" aria-label="Permalink to &quot;括号&quot;">​</a></h3><p>（1）补充说明时，使用全角圆括号（<code>（）</code>），括号前后不加空格。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>例句：请确认所有的连接（电缆和接插件）均安装牢固。</span></span></code></pre></div><p>（2）几种括号的中英文名称。</p><table><thead><tr><th></th><th style="text-align:center;">英文</th><th style="text-align:right;">中文</th></tr></thead><tbody><tr><td><code>{ }</code></td><td style="text-align:center;">braces 或 curly brackets</td><td style="text-align:right;">大括号</td></tr><tr><td><code>[ ]</code></td><td style="text-align:center;">square brackets 或 brackets</td><td style="text-align:right;">方括号</td></tr><tr><td><code>&lt; &gt;</code></td><td style="text-align:center;">angled brackets</td><td style="text-align:right;">尖括号</td></tr><tr><td><code>( )</code></td><td style="text-align:center;">parentheses</td><td style="text-align:right;">圆括号</td></tr></tbody></table><h3 id="冒号" tabindex="-1">冒号 <a class="header-anchor" href="#冒号" aria-label="Permalink to &quot;冒号&quot;">​</a></h3><p>（1）全角冒号（<code>：</code>）常用在需要解释的词语后边，引出解释和说明。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>例句：请确认以下几项内容：时间、地点、活动名称，以及来宾数量。</span></span></code></pre></div><p>（2）表示时间时，应使用半角冒号（<code>:</code>）。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>例句：早上 8:00</span></span></code></pre></div><h3 id="省略号" tabindex="-1">省略号 <a class="header-anchor" href="#省略号" aria-label="Permalink to &quot;省略号&quot;">​</a></h3><p>（1）省略号（<code>……</code>）表示语句未完、或者语气的不连续。</p><p>（2）省略号占两个汉字空间、包含六个省略点，不要使用<code>。。。</code>或<code>...</code>等非标准形式。</p><p>（3）省略号不应与“等”这个词一起使用。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>错误：我们为会餐准备了香蕉、苹果、梨…等各色水果。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>正确：我们为会餐准备了各色水果，有香蕉、苹果、梨……</span></span>
<span class="line"><span></span></span>
<span class="line"><span>正确：我们为会餐准备了香蕉、苹果、梨等各色水果。</span></span></code></pre></div><h3 id="感叹号" tabindex="-1">感叹号 <a class="header-anchor" href="#感叹号" aria-label="Permalink to &quot;感叹号&quot;">​</a></h3><p>（1）应该使用平静的语气叙述，尽量避免使用感叹号（<code>！</code>）。</p><p>（2）不得多个感叹号连用，比如<code>！！</code>和<code>!!!</code>。</p><h3 id="破折号" tabindex="-1">破折号 <a class="header-anchor" href="#破折号" aria-label="Permalink to &quot;破折号&quot;">​</a></h3><p>（1）破折号<code>————</code>一般用于进一步解释。</p><p>（2）破折号应占两个汉字的位置。如果破折号本身只占一个汉字的位置，那么前后应该留出一个半角空格。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>例句：直觉————尽管它并不总是可靠的————告诉我，这事可能出了些问题。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>例句：直觉 —— 尽管它并不总是可靠的 —— 告诉我，这事可能出了些问题。</span></span></code></pre></div><h3 id="连接号" tabindex="-1">连接号 <a class="header-anchor" href="#连接号" aria-label="Permalink to &quot;连接号&quot;">​</a></h3><p>（1）连接号用于连接两个类似的词。</p><p>（2）以下场合应该使用直线连接号（<code>-</code>），占一个半角字符的位置。</p><ul><li>两个名词的复合</li><li>图表编号</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>例句：氧化-还原反应</span></span>
<span class="line"><span></span></span>
<span class="line"><span>例句：图 1-1</span></span></code></pre></div><p>（3）数值范围（例如日期、时间或数字）应该使用波浪连接号（<code>～</code>），占一个全角字符的位置。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>例句：2009 年～2011 年</span></span></code></pre></div><p>注意，波浪连接号前后两个值都应该加上单位。</p><p>（4）波浪连接号也可以用汉字“至”代替。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>例句：周围温度：-20°C 至 -10°C</span></span></code></pre></div><h2 id="六、文档体系" tabindex="-1">六、文档体系 <a class="header-anchor" href="#六、文档体系" aria-label="Permalink to &quot;六、文档体系&quot;">​</a></h2><h3 id="结构" tabindex="-1">结构 <a class="header-anchor" href="#结构" aria-label="Permalink to &quot;结构&quot;">​</a></h3><p>软件手册是一部完整的书，建议采用下面的结构。</p><ul><li><strong>简介</strong>（Introduction）： [必备] [文件] 提供对产品和文档本身的总体的、扼要的说明</li><li><strong>快速上手</strong>（Getting Started）：[可选] [文件] 如何最快速地使用产品</li><li><strong>入门篇</strong>（Basics）： [必备] [目录] 又称”使用篇“，提供初级的使用教程 <ul><li><strong>环境准备</strong>（Prerequisite）：[必备] [文件] 软件使用需要满足的前置条件</li><li><strong>安装</strong>（Installation）：[可选] [文件] 软件的安装方法</li><li><strong>设置</strong>（Configuration）：[必备] [文件] 软件的设置</li></ul></li><li><strong>进阶篇</strong>（Advanced)：[可选] [目录] 又称”开发篇“，提供中高级的开发教程</li><li><strong>API</strong>（Reference）：[可选] [目录|文件] 软件 API 的逐一介绍</li><li><strong>FAQ</strong>：[可选] [文件] 常见问题解答</li><li><strong>附录</strong>（Appendix）：[可选] [目录] 不属于教程本身、但对阅读教程有帮助的内容 <ul><li><strong>Glossary</strong>：[可选] [文件] 名词解释</li><li><strong>Recipes</strong>：[可选] [文件] 最佳实践</li><li><strong>Troubleshooting</strong>：[可选] [文件] 故障处理</li><li><strong>ChangeLog</strong>：[可选] [文件] 版本说明</li><li><strong>Feedback</strong>：[可选] [文件] 反馈方式</li></ul></li></ul><p>下面是两个真实范例，可参考。</p><ul><li><a href="http://redux.js.org/index.html" target="_blank" rel="noreferrer">Redux 手册</a></li><li><a href="http://flight-manual.atom.io/" target="_blank" rel="noreferrer">Atom 手册</a></li></ul><h3 id="文件名" tabindex="-1">文件名 <a class="header-anchor" href="#文件名" aria-label="Permalink to &quot;文件名&quot;">​</a></h3><p>文档的文件名不得含有空格。</p><p>文件名必须使用半角字符，不得使用全角字符。这也意味着，中文不能用于文件名。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>错误： 名词解释.md</span></span>
<span class="line"><span></span></span>
<span class="line"><span>正确： glossary.md</span></span></code></pre></div><p>文件名建议只使用小写字母，不使用大写字母。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>错误：TroubleShooting.md</span></span>
<span class="line"><span></span></span>
<span class="line"><span>正确：troubleshooting.md</span></span></code></pre></div><p>为了醒目，某些说明文件的文件名，可以使用大写字母，比如<code>README</code>、<code>LICENSE</code>。</p><p>文件名包含多个单词时，单词之间建议使用半角的连词线（<code>-</code>）分隔。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>不佳：advanced_usage.md</span></span>
<span class="line"><span></span></span>
<span class="line"><span>正确：advanced-usage.md</span></span></code></pre></div><h2 id="七、参考链接" tabindex="-1">七、参考链接 <a class="header-anchor" href="#七、参考链接" aria-label="Permalink to &quot;七、参考链接&quot;">​</a></h2><ul><li><a href="http://wenku.baidu.com/view/23cc1a6527d3240c8447efbf.html" target="_blank" rel="noreferrer">产品手册中文写作规范</a>, by 华为</li><li><a href="http://guide.daocloud.io/dcs/%E5%86%99%E4%BD%9C%E8%A7%84%E8%8C%83%E5%92%8C%E6%A0%BC%E5%BC%8F%E8%A7%84%E8%8C%83-9153803.html" target="_blank" rel="noreferrer">写作规范和格式规范</a>, by DaoCloud</li><li><a href="http://www.hitachi-tc.co.jp/company/thesis/thesis.pdf" target="_blank" rel="noreferrer">技术写作技巧在日汉翻译中的应用</a>, by 刘方</li><li><a href="https://www.lengoo.de/documents/styleguides/lengoo_styleguide_ZH.pdf" target="_blank" rel="noreferrer">简体中文规范指南</a>, by lengoo</li><li><a href="https://open.leancloud.cn/copywriting-style-guide.html" target="_blank" rel="noreferrer">文档风格指南</a>, by LeanCloud</li><li><a href="https://docs.google.com/document/d/1R8lMCPf6zCD5KEA8ekZ5knK77iw9J-vJ6vEopPemqZM/edit" target="_blank" rel="noreferrer">豌豆荚文案风格指南</a>, by 豌豆荚</li><li><a href="https://github.com/sparanoid/chinese-copywriting-guidelines" target="_blank" rel="noreferrer">中文文案排版指北</a>, by sparanoid</li><li><a href="http://w3c.github.io/clreq/" target="_blank" rel="noreferrer">中文排版需求</a>, by W3C</li><li><a href="http://www.ruanyifeng.com/blog/2017/02/filename-should-be-lowercase.html" target="_blank" rel="noreferrer">为什么文件名要小写？</a>, by 阮一峰</li><li><a href="https://developers.google.com/style/" target="_blank" rel="noreferrer">Google Developer Documentation Style Guide</a>, by Google</li><li><a href="http://www.moe.gov.cn/ewebeditor/uploadfile/2015/01/13/20150113091154536.pdf" target="_blank" rel="noreferrer">出版物上数字用法的规定（国家标准GBT15835－2011）</a></li><li><a href="https://baike.baidu.com/item/%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E5%9B%BD%E5%AE%B6%E6%A0%87%E5%87%86%E5%87%BA%E7%89%88%E7%89%A9%E6%95%B0%E5%AD%97%E7%94%A8%E6%B3%95" target="_blank" rel="noreferrer">中华人民共和国国家标准出版物数字用法</a></li></ul>`,177),l=[p];function t(o,c,d,h,r,g){return n(),s("div",null,l)}const k=a(i,[["render",t]]);export{b as __pageData,k as default};
