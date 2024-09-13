import{_ as a,c as n,aa as i,o as e}from"./chunks/framework.swcE7GHT.js";const u=JSON.parse('{"title":"数据模型导出","description":"","frontmatter":{"breadcrumb":false,"navbar":true,"sidebar":true,"pageInfo":true,"contributor":true,"editLink":true,"updateTime":true,"prev":true,"next":true,"comment":true,"footer":true,"backtotop":true,"title":"数据模型导出","category":"JMVN"},"headers":[],"relativePath":"project/jmvn/jmvn-export.md","filePath":"project/jmvn/jmvn-export.md"}'),p={name:"project/jmvn/jmvn-export.md"};function l(t,s,r,o,c,h){return e(),n("div",null,s[0]||(s[0]=[i(`<div class="tip custom-block"><p class="custom-block-title">jmvn export 数据模型导出</p><p><code>jmvn</code> 另一个好用的功能就是数据导出，这个功能的主要用处是，在写技术方案时候将数据模型输出到文档中。支持markdown语法。</p></div><h2 id="自动读取配置进行导出" tabindex="-1">自动读取配置进行导出 <a class="header-anchor" href="#自动读取配置进行导出" aria-label="Permalink to &quot;自动读取配置进行导出&quot;">​</a></h2><p>如果你已经在配置文件中了dbConfig相关信息，则会自动读取配置信息。你只需要输入要导出的表名即可。</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;namespace&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;config&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {},</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;dbConfig&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;host&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;10.80.20.8&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;user&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;abm_dev&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;password&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;pOj*4Z%^izKy0o23o8aH&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;database&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;pms_dev&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="根据命令提示完成导出" tabindex="-1">根据命令提示完成导出 <a class="header-anchor" href="#根据命令提示完成导出" aria-label="Permalink to &quot;根据命令提示完成导出&quot;">​</a></h2><p>如果你没有在配置文件中添加dbConfig相关信息，请根据命令提示来进行完成导出。</p><p><img src="https://img.springlearn.cn/learn_53218775085b88f319e37ca3811c5cd7.gif" alt=""></p><h2 id="纯命令方式导出" tabindex="-1">纯命令方式导出 <a class="header-anchor" href="#纯命令方式导出" aria-label="Permalink to &quot;纯命令方式导出&quot;">​</a></h2><p>如果你在配置文件中已经添加了dbConfig相关信息，但是又不想使用这个进行导出。则可以在命令后添加 <code>-c</code> 以强制使用输入参数来进行导出。</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>jmvn export -c -m -h 10.80.20.8 -u abm_dev -p &#39;pOj*4Z%^izKy0o23o8aH&#39; -t replenish_order -db pms_dev</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="查看导出帮助文档" tabindex="-1">查看导出帮助文档 <a class="header-anchor" href="#查看导出帮助文档" aria-label="Permalink to &quot;查看导出帮助文档&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>➜ jmvn help export                                                                                   </span></span>
<span class="line"><span>JMVN CLI v1.0.6</span></span>
<span class="line"><span>Usage: jmvn export [options]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>导出数据模型 (支持命令行模式 &amp; 交互模式)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Options:</span></span>
<span class="line"><span>  -c, --commanded [String]  命令行模式运行</span></span>
<span class="line"><span>  -m, --markdown [String]   导出markdown格式</span></span>
<span class="line"><span>  -h, --host [String]       数据库[host]</span></span>
<span class="line"><span>  -u, --user [String]       数据库登陆用户</span></span>
<span class="line"><span>  -p, --password [String]   登陆密码(明文请注意安全)</span></span>
<span class="line"><span>  -t, --tables [String]     要导出的表模型(支持,分隔)</span></span>
<span class="line"><span>  -db, --database [String]  指定要导出的库</span></span>
<span class="line"><span>  --help                    display help for command</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>`,12)]))}const b=a(p,[["render",l]]);export{u as __pageData,b as default};
