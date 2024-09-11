import{_ as s,c as a,o as n,ac as e}from"./chunks/framework.C9DUt1S1.js";const q=JSON.parse('{"title":"package.json","description":"","frontmatter":{"title":"package.json","editLink":true,"navbar":true,"category":"JavaScript","link":"https://zhuanlan.zhihu.com/p/711414119"},"headers":[],"relativePath":"guide/javascript/package.md","filePath":"guide/javascript/package.md"}'),t={name:"guide/javascript/package.md"},p=e(`<h1 id="package-json" tabindex="-1">package.json <a class="header-anchor" href="#package-json" aria-label="Permalink to &quot;package.json&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>在每个前端项目中，都有 package.json 文件，它是项目的配置文件，常见的配置有配置项目启动、打包命令，声明依赖包等。 package.json 文件是一个 JSON 对象，该对象的每一个成员就是当前项目的一项设置。</p><p><code>package.json</code> 其实就是一个配置文件,告诉 NPM 项目的相关信息。</p></div><p><a href="https://zhuanlan.zhihu.com/p/711414119" target="_blank" rel="noreferrer">原文地址</a></p><p>package.json 文件主要包括：</p><ul><li>列出项目所依赖的包</li><li>指定了项目可以使用/正在使用的包的版本</li><li>使您的构建过程可复制，因此更容易与其他开发人员共享</li><li>包含其他元数据，如项目描述、特定发行版中的项目版本、许可证信息，甚至属性数据等</li></ul><h2 id="快速创建" tabindex="-1">快速创建 <a class="header-anchor" href="#快速创建" aria-label="Permalink to &quot;快速创建&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm init -y</span></span></code></pre></div><h2 id="必须属性" tabindex="-1">必须属性 <a class="header-anchor" href="#必须属性" aria-label="Permalink to &quot;必须属性&quot;">​</a></h2><h3 id="name" tabindex="-1">name <a class="header-anchor" href="#name" aria-label="Permalink to &quot;name&quot;">​</a></h3><p>项目的名称，它是一个字符串。在给 name 字段命名时，需要注意以下几点</p><ol><li>名称的长度必须小于或等于 214 个字符，不能以 “.” 和“_”开头，不能包含大写字母</li><li>名称可以作为参数被传入 require(&quot;&quot;)，用来导入模块，所以应当尽可能的简短、语义化；</li><li>名称不能和其他模块的名称重复，可以使用 npm view 命令查询模块名是否重复，如果不重复就会提示 404：</li></ol><h3 id="version" tabindex="-1">version <a class="header-anchor" href="#version" aria-label="Permalink to &quot;version&quot;">​</a></h3><ul><li><strong>描述</strong>：表示该项目包的版本号，它是一个字符串。版本号的使用规范遵从语义化版本控制（Semantic Versioning, SemVer）规范，格式为<code>&lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;</code>。</li><li><strong>案例</strong>：<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&quot;version&quot;: &quot;0.1.0&quot;</span></span></code></pre></div></li></ul><h2 id="描述信息" tabindex="-1">描述信息 <a class="header-anchor" href="#描述信息" aria-label="Permalink to &quot;描述信息&quot;">​</a></h2><h3 id="description" tabindex="-1">description <a class="header-anchor" href="#description" aria-label="Permalink to &quot;description&quot;">​</a></h3><ul><li><strong>描述</strong>：项目的简短描述。</li><li><strong>案例</strong>：原文未直接给出具体案例，但通常形式如下：<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&quot;description&quot;: &quot;A simple React application.&quot;</span></span></code></pre></div></li></ul><h3 id="keywords" tabindex="-1">keywords <a class="header-anchor" href="#keywords" aria-label="Permalink to &quot;keywords&quot;">​</a></h3><ul><li><strong>描述</strong>：与项目相关的关键字数组，有助于搜索和分类。</li><li><strong>案例</strong>：<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&quot;keywords&quot;: [&quot;react&quot;, &quot;webpack&quot;, &quot;babel&quot;]</span></span></code></pre></div></li></ul><h3 id="author" tabindex="-1">author <a class="header-anchor" href="#author" aria-label="Permalink to &quot;author&quot;">​</a></h3><ul><li><strong>描述</strong>：项目的作者信息。可以是字符串或对象形式。</li><li><strong>案例</strong>（字符串形式）：<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&quot;author&quot;: &quot;CUGGZ &lt;xxxxx@xx.com&gt; (https://juejin.cn/user/3544481220801815)&quot;</span></span></code></pre></div></li><li><strong>案例</strong>（对象形式）：<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&quot;author&quot;: {</span></span>
<span class="line"><span>  &quot;name&quot;: &quot;CUGGZ&quot;,</span></span>
<span class="line"><span>  &quot;email&quot;: &quot;xxxxx@xx.com&quot;,</span></span>
<span class="line"><span>  &quot;url&quot;: &quot;https://juejin.cn/user/3544481220801815&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div></li></ul><h3 id="contributors" tabindex="-1">contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;contributors&quot;">​</a></h3><ul><li><strong>描述</strong>：项目的贡献者列表，与<code>author</code>类似，但<code>contributors</code>是一个数组。</li><li><strong>案例</strong>（数组中的字符串形式）：<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&quot;contributors&quot;: [</span></span>
<span class="line"><span>  &quot;CUGGZ0 &lt;xxxxx@xx.com&gt; (https://juejin.cn/user/3544481220801815)&quot;,</span></span>
<span class="line"><span>  &quot;CUGGZ1 &lt;xxxxx@xx.com&gt; (https://juejin.cn/user/3544481220801815)&quot;</span></span>
<span class="line"><span>]</span></span></code></pre></div></li><li><strong>案例</strong>（数组中的对象形式）：<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&quot;contributors&quot;: [</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    &quot;name&quot;: &quot;CUGGZ0&quot;,</span></span>
<span class="line"><span>    &quot;email&quot;: &quot;xxxxx@xx.com&quot;,</span></span>
<span class="line"><span>    &quot;url&quot;: &quot;https://juejin.cn/user/3544481220801815&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    &quot;name&quot;: &quot;CUGGZ1&quot;,</span></span>
<span class="line"><span>    &quot;email&quot;: &quot;xxxxx@xx.com&quot;,</span></span>
<span class="line"><span>    &quot;url&quot;: &quot;https://juejin.cn/user/3544481220801815&quot;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>]</span></span></code></pre></div></li></ul><h3 id="repository" tabindex="-1">repository <a class="header-anchor" href="#repository" aria-label="Permalink to &quot;repository&quot;">​</a></h3><ul><li><strong>描述</strong>：项目仓库的URL。</li><li><strong>案例</strong>（字符串形式）：<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&quot;repository&quot;: &quot;https://github.com/facebook/react.git&quot;</span></span></code></pre></div></li><li><strong>案例</strong>（对象形式）：<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&quot;repository&quot;: {</span></span>
<span class="line"><span>  &quot;type&quot;: &quot;git&quot;,</span></span>
<span class="line"><span>  &quot;url&quot;: &quot;https://github.com/facebook/react.git&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div></li></ul><h3 id="bugs" tabindex="-1">bugs <a class="header-anchor" href="#bugs" aria-label="Permalink to &quot;bugs&quot;">​</a></h3><ul><li><strong>描述</strong>：项目提交问题的地址。</li><li><strong>案例</strong>：<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&quot;bugs&quot;: {</span></span>
<span class="line"><span>  &quot;url&quot;: &quot;https://github.com/facebook/react/issues&quot;,</span></span>
<span class="line"><span>  &quot;email&quot;: &quot;xxxxx@xx.com&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div></li></ul><h3 id="homepage" tabindex="-1">homepage <a class="header-anchor" href="#homepage" aria-label="Permalink to &quot;homepage&quot;">​</a></h3><ul><li>项目地址，就是一个字符串。</li></ul><h2 id="脚本配置" tabindex="-1">脚本配置 <a class="header-anchor" href="#脚本配置" aria-label="Permalink to &quot;脚本配置&quot;">​</a></h2><h3 id="scripts" tabindex="-1">scripts <a class="header-anchor" href="#scripts" aria-label="Permalink to &quot;scripts&quot;">​</a></h3><ul><li><strong>描述</strong>：定义了一系列的脚本命令，这些命令可以通过<code>npm run [scriptName]</code>来执行。</li><li><strong>案例</strong>：<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&quot;scripts&quot;: {</span></span>
<span class="line"><span>  &quot;start&quot;: &quot;react-scripts start&quot;,</span></span>
<span class="line"><span>  &quot;build&quot;: &quot;react-scripts build&quot;,</span></span>
<span class="line"><span>  &quot;test&quot;: &quot;react-scripts test&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div></li><li>除了运行基本的 scripts 命令，还可以结合 pre 和 post 完成前置和后续操作。先来看一组 scripts：</li></ul><div class="language-json5 vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json5</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // index.js</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // console.log(&quot;scripts: index.js&quot;)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;dev&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;node index.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // beforeIndex.js</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // console.log(&quot;scripts: before index.js&quot;)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;predev&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;node beforeIndex.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // afterIndex.js</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // console.log(&quot;scripts: after index.js&quot;)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;postdev&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;node afterIndex.js&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>当我们执行 npm run dev 命令时，输出结果如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>scripts: before index.js</span></span>
<span class="line"><span>scripts: index.js</span></span>
<span class="line"><span>scripts: after index.js</span></span></code></pre></div><p>可以看到，三个命令都执行了，执行顺序是 predev→dev→postdev。如果 scripts 命令存在一定的先后关系，则可以使用这三个配置项，分别配置执行命令。</p><h3 id="config" tabindex="-1">config <a class="header-anchor" href="#config" aria-label="Permalink to &quot;config&quot;">​</a></h3><ul><li><strong>描述</strong>：配置<code>scripts</code>字段中命令使用的环境变量。</li><li><strong>案例</strong>：<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&quot;config&quot;: {</span></span>
<span class="line"><span>  &quot;port&quot;: 3000</span></span>
<span class="line"><span>}</span></span></code></pre></div></li></ul><p>如果运行 npm run start，则 port 字段会映射到npm_package_config_port环境变量中：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>console.log(process.env.npm_package_config_port) // 3000</span></span></code></pre></div><p>用户可以通过npm config set foo:port 3001 命令来重写 port 的值。</p><h2 id="文件-目录" tabindex="-1">文件 &amp; 目录 <a class="header-anchor" href="#文件-目录" aria-label="Permalink to &quot;文件 &amp; 目录&quot;">​</a></h2><h3 id="main" tabindex="-1">main <a class="header-anchor" href="#main" aria-label="Permalink to &quot;main&quot;">​</a></h3><p>main 字段用来指定加载的入口文件，在 browser 和 Node 环境中都可以使用。如果我们将项目发布为 npm 包，那么当使用 require 导入 npm 包时，返回的就是 main 字段所列出的文件的 module.exports 属性。如果不指定该字段，默认是项目根目录下的 index.js。如果没找到，就会报错。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&quot;main&quot;: &quot;./src/index.js&quot;,</span></span></code></pre></div><h3 id="browser" tabindex="-1">browser <a class="header-anchor" href="#browser" aria-label="Permalink to &quot;browser&quot;">​</a></h3><p>browser 字段可以定义 npm 包在 browser 环境下的入口文件。如果 npm 包只在 web 端使用，并且严禁在 server 端使用，使用 browser 来定义入口文件。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&quot;browser&quot;: &quot;./src/index.js&quot;</span></span></code></pre></div><h3 id="module" tabindex="-1">module <a class="header-anchor" href="#module" aria-label="Permalink to &quot;module&quot;">​</a></h3><p>module 字段可以定义 npm 包的 ESM 规范的入口文件，browser 环境和 node 环境均可使用。如果 npm 包导出的是 ESM 规范的包，使用 module 来定义入口文件。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&quot;module&quot;: &quot;./src/index.mjs&quot;,</span></span></code></pre></div><p>需要注意，.js 文件是使用 commonJS 规范的语法 (require(&#39;xxx&#39;))，.mjs 是用 ESM 规范的语法 (import &#39;xxx&#39;)。</p><p>上面三个的入口入口文件相关的配置是有差别的，特别是在不同的使用场景下。在 Web 环境中，</p><ul><li>如果使用 loader 加载 ESM（ES module）， 那么这三个配置的加载顺序是 browser→module→main</li><li>如果使用 require 加载 CommonJS 模块，则加载的顺序为 main→module→browser。</li></ul><p>Webpack 在进行项目构建时，有一个 target 选项，默认为 Web，即构建 Web 应用。如果需要编译一些同构项目， 如 node 项目，则只需将 webpack.config.js 的 target 选项设置为 node 进行构建即可。 如果在 Node 环境中加载 CommonJS 模块，或者 ESM，则只有 main 字段有效。</p><h3 id="bin" tabindex="-1">bin <a class="header-anchor" href="#bin" aria-label="Permalink to &quot;bin&quot;">​</a></h3><p>bin 字段用来指定各个内部命令对应的可执行文件的位置：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&quot;bin&quot;: {</span></span>
<span class="line"><span>  &quot;someTool&quot;: &quot;./bin/someTool.js&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><ol><li>这里，someTool 命令对应的可执行文件为 bin 目录下的 someTool.js</li><li>someTool.js 会建立符号链接 node_modules/.bin/someTool。</li><li>由于 node_modules/.bin / 目录会在运行时加入系统的 PATH 变量，因此在运行 npm 时，就可以不带路径，直接通过命令来调用这些脚本。因此，下面的写法可以简写：</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;bin&quot;: {</span></span>
<span class="line"><span>    &quot;someTool&quot;: &quot;./bin/someTool.js&quot;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  // 不用这样，可以使用下面简写。</span></span>
<span class="line"><span>  scripts: {  </span></span>
<span class="line"><span>    start: &#39;./node_modules/bin/someTool.js build&#39;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>  // 简写</span></span>
<span class="line"><span>  scripts: {  </span></span>
<span class="line"><span>    start: &#39;someTool build&#39;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="files" tabindex="-1">files <a class="header-anchor" href="#files" aria-label="Permalink to &quot;files&quot;">​</a></h3><p>files 配置是一个数组，用来描述当把 npm 包作为依赖包安装时需要说明的文件列表。当 npm 包发布时，files 指定的文件会被推送到 npm 服务器中，如果指定的是文件夹，那么该文件夹下面所有的文件都会被提交。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&quot;files&quot;: [</span></span>
<span class="line"><span>    &quot;LICENSE&quot;,</span></span>
<span class="line"><span>    &quot;Readme.md&quot;,</span></span>
<span class="line"><span>    &quot;index.js&quot;,</span></span>
<span class="line"><span>    &quot;lib/&quot;</span></span>
<span class="line"><span> ]</span></span></code></pre></div><p>如果有不想提交的文件，可以在项目根目录中新建一个. npmignore 文件，并在其中说明不需要提交的文件，防止垃圾文件推送到 npm 上。这个文件的形式和. gitignore 类似。写在这个文件中的文件即便被写在 files 属性里也会被排除在外。比如可以在该文件中这样写：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>node_modules</span></span>
<span class="line"><span>.vscode</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>build</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>.DS_Store</span></span></code></pre></div><h3 id="man" tabindex="-1">man <a class="header-anchor" href="#man" aria-label="Permalink to &quot;man&quot;">​</a></h3><p>man 命令是 Linux 中的帮助指令，通过该指令可以查看 Linux 中的指令帮助、配置文件帮助和编程帮助等信息。如果 node.js 模块是一个全局的命令行工具，在 package.json 通过 man 属性可以指定 man 命令查找的文档地址：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&quot;man&quot;: [</span></span>
<span class="line"><span> &quot;./man/npm-access.1&quot;,</span></span>
<span class="line"><span> &quot;./man/npm-audit.1&quot;</span></span>
<span class="line"><span>]</span></span></code></pre></div><p>man 字段可以指定一个或多个文件, 当执行 man {包名} 时, 会展现给用户文档内容</p><p><strong>需要注意：</strong></p><p>man 文件必须以数字结尾，如果经过压缩，还可以使用. gz 后缀。这个数字表示文件安装到哪个 man 节中； 如果 man 文件名称不是以模块名称开头的，安装的时候会加上模块名称前缀。</p><p>对于上面的配置，可以使用以下命令来执行查看文档：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>man npm-access</span></span>
<span class="line"><span>man npm-audit</span></span></code></pre></div><h3 id="directories" tabindex="-1">directories <a class="header-anchor" href="#directories" aria-label="Permalink to &quot;directories&quot;">​</a></h3><p>directories 字段用来规范项目的目录。node.js 模块是基于 CommonJS 模块化规范实现的，需要严格遵循 CommonJS 规范。模块目录下除了必须包含包项目描述文件 package.json 以外，还需要包含以下目录：</p><p>bin ：存放可执行二进制文件的目录 lib ：存放 js 代码的目录 doc ：存放文档的目录 test ：存放单元测试用例代码的目录 ... 在实际的项目目录中，我们可能没有按照这个规范进行命名，那么就可以在 directories 字段指定每个目录对应的文件路径：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&quot;directories&quot;: {</span></span>
<span class="line"><span>    &quot;bin&quot;: &quot;./bin&quot;,</span></span>
<span class="line"><span>    &quot;lib&quot;: &quot;./lib&quot;,</span></span>
<span class="line"><span>    &quot;doc&quot;: &quot;./doc&quot;,</span></span>
<span class="line"><span>    &quot;test&quot; &quot;./test&quot;,</span></span>
<span class="line"><span>    &quot;man&quot;: &quot;./man&quot;</span></span>
<span class="line"><span>},</span></span></code></pre></div><p><strong>这个属性实际上没有什么实际的作用，当然不排除未来会有什么比较有意义的用处。</strong></p><h2 id="发布配置" tabindex="-1">发布配置 <a class="header-anchor" href="#发布配置" aria-label="Permalink to &quot;发布配置&quot;">​</a></h2><h3 id="private" tabindex="-1">private <a class="header-anchor" href="#private" aria-label="Permalink to &quot;private&quot;">​</a></h3><p>private 字段可以防止我们意外地将私有库发布到 npm 服务器。只需要将该字段设置为 true：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&quot;private&quot;: true</span></span></code></pre></div><h3 id="preferglobal" tabindex="-1">preferGlobal <a class="header-anchor" href="#preferglobal" aria-label="Permalink to &quot;preferGlobal&quot;">​</a></h3><p>preferGlobal 字段表示当用户不把该模块安装为全局模块时，如果设置为 true 就会显示警告。它并不会真正的防止用户进行局部的安装，只是对用户进行提示，防止产生误解：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&quot;preferGlobal&quot;: true</span></span></code></pre></div><h3 id="publishconfig" tabindex="-1">publishConfig <a class="header-anchor" href="#publishconfig" aria-label="Permalink to &quot;publishConfig&quot;">​</a></h3><p>publishConfig 配置会在模块发布时生效，用于设置发布时一些配置项的集合。如果不想模块被默认标记为最新，或者不想发布到公共仓库，可以在这里配置 tag 或仓库地址。更详细的配置可以参考 npm-config[1]。</p><p>通常情况下，publishConfig 会配合 private 来使用，如果只想让模块发布到特定 npm 仓库，就可以这样来配置：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>private&quot;: true,</span></span>
<span class="line"><span>&quot;publishConfig&quot;: {</span></span>
<span class="line"><span>  &quot;tag&quot;: &quot;1.1.0&quot;,</span></span>
<span class="line"><span>  &quot;registry&quot;: &quot;https://registry.npmjs.org/&quot;,</span></span>
<span class="line"><span>  &quot;access&quot;: &quot;public&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="os" tabindex="-1">os <a class="header-anchor" href="#os" aria-label="Permalink to &quot;os&quot;">​</a></h3><p>os 字段可以让我们设置该 npm 包可以在什么操作系统使用，不能再什么操作系统使用。如果我们希望开发的 npm 包只运行在 linux，为了避免出现不必要的异常，建议使用 Windows 系统的用户不要安装它，这时就可以使用 os 配置：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&quot;os&quot; [&quot;linux&quot;]   // 适用的操作系统</span></span>
<span class="line"><span>&quot;os&quot; [&quot;!win32&quot;]  // 禁用的操作系统</span></span></code></pre></div><h3 id="cpu" tabindex="-1">cpu <a class="header-anchor" href="#cpu" aria-label="Permalink to &quot;cpu&quot;">​</a></h3><p>该配置和 OS 配置类似，用 CPU 可以更准确的限制用户的安装环境：</p><p>黑名单和白名单的区别就是，黑名单在前面加了一个 “!”。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&quot;cpu&quot; [&quot;x64&quot;, &quot;AMD64&quot;]   // 适用的cpu</span></span>
<span class="line"><span>&quot;cpu&quot; [&quot;!arm&quot;, &quot;!mips&quot;]  // 禁用的cpu</span></span></code></pre></div><h3 id="license" tabindex="-1">license <a class="header-anchor" href="#license" aria-label="Permalink to &quot;license&quot;">​</a></h3><p>license 字段用于指定软件的开源协议，开源协议表述了其他人获得代码后拥有的权利，可以对代码进行何种操作，何种操作又是被禁止的。常见的协议如下：</p><p>MIT ：只要用户在项目副本中包含了版权声明和许可声明，他们就可以拿你的代码做任何想做的事情，你也无需承担任何责任。 Apache ：类似于 MIT ，同时还包含了贡献者向用户提供专利授权相关的条款。 GPL ：修改项目代码的用户再次分发源码或二进制代码时，必须公布他的相关修改。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&quot;license&quot;: &quot;MIT&quot;</span></span></code></pre></div><h2 id="第三方配置" tabindex="-1">第三方配置 <a class="header-anchor" href="#第三方配置" aria-label="Permalink to &quot;第三方配置&quot;">​</a></h2><p>package.json 文件还可以承载命令特有的配置，例如 Babel、ESLint 等。它们每个都有特有的属性，例如 eslintConfig、babel 等。它们是命令特有的，可以在相应的命令 / 项目文档中找到如何使用它们。下面来看几个常用的第三方配置项。</p><h3 id="typings" tabindex="-1">typings <a class="header-anchor" href="#typings" aria-label="Permalink to &quot;typings&quot;">​</a></h3><p>typings 字段用来指定 TypeScript 的入口文件：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&quot;typings&quot;: &quot;types/index.d.ts&quot;,</span></span></code></pre></div><p>该字段的作用和 main 配置相同。</p><h3 id="eslintconfig" tabindex="-1">eslintConfig <a class="header-anchor" href="#eslintconfig" aria-label="Permalink to &quot;eslintConfig&quot;">​</a></h3><p>eslint 的配置可以写在单独的配置文件. eslintrc.json 中，也可以写在 package.json 文件的 eslintConfig 配置项中。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&quot;eslintConfig&quot;: {</span></span>
<span class="line"><span>      &quot;root&quot;: true,</span></span>
<span class="line"><span>      &quot;env&quot;: {</span></span>
<span class="line"><span>        &quot;node&quot;: true</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      &quot;extends&quot;: [</span></span>
<span class="line"><span>        &quot;plugin:vue/essential&quot;,</span></span>
<span class="line"><span>        &quot;eslint:recommended&quot;</span></span>
<span class="line"><span>      ],</span></span>
<span class="line"><span>      &quot;rules&quot;: {},</span></span>
<span class="line"><span>      &quot;parserOptions&quot;: {</span></span>
<span class="line"><span>        &quot;parser&quot;: &quot;babel-eslint&quot;</span></span>
<span class="line"><span>     },</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="babel" tabindex="-1">babel <a class="header-anchor" href="#babel" aria-label="Permalink to &quot;babel&quot;">​</a></h3><p>babel 用来指定 Babel 的编译配置，代码如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&quot;babel&quot;: {</span></span>
<span class="line"><span> &quot;presets&quot;: [&quot;@babel/preset-env&quot;],</span></span>
<span class="line"><span> &quot;plugins&quot;: [...]</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="unpkg" tabindex="-1">unpkg <a class="header-anchor" href="#unpkg" aria-label="Permalink to &quot;unpkg&quot;">​</a></h3><p>使用该字段可以让 npm 上所有的文件都开启 cdn 服务，该 CND 服务由 unpkg 提供：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&quot;unpkg&quot;: &quot;dist/vue.js&quot;</span></span></code></pre></div><h3 id="lint-staged" tabindex="-1">lint-staged <a class="header-anchor" href="#lint-staged" aria-label="Permalink to &quot;lint-staged&quot;">​</a></h3><p>lint-staged 是一个在 Git 暂存文件上运行 linters 的工具，配置后每次修改一个文件即可给所有文件执行一次 lint 检查，通常配合 gitHooks 一起使用。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&quot;lint-staged&quot;: {</span></span>
<span class="line"><span> &quot;*.js&quot;: [</span></span>
<span class="line"><span>   &quot;eslint --fix&quot;,</span></span>
<span class="line"><span>    &quot;git add&quot;</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="githooks" tabindex="-1">gitHooks <a class="header-anchor" href="#githooks" aria-label="Permalink to &quot;gitHooks&quot;">​</a></h3><p>gitHooks 用来定义一个钩子，在提交（commit）之前执行 ESlint 检查。在执行 lint 命令后，会自动修复暂存区的文件。修复之后的文件并不会存储在暂存区，所以需要用 git add 命令将修复后的文件重新加入暂存区。在执行 pre-commit 命令之后，如果没有错误，就会执行 git commit 命令：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&quot;gitHooks&quot;: {</span></span>
<span class="line"><span> &quot;pre-commit&quot;: &quot;lint-staged&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="browserslist" tabindex="-1">browserslist <a class="header-anchor" href="#browserslist" aria-label="Permalink to &quot;browserslist&quot;">​</a></h3><p>browserslist 字段用来告知支持哪些浏览器及版本。Babel、Autoprefixer 和其他工具会用到它，以将所需的 polyfill 和 fallback 添加到目标浏览器。比如最上面的例子中的该字段值：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&quot;browserslist&quot;: {</span></span>
<span class="line"><span>  &quot;production&quot;: [</span></span>
<span class="line"><span>    &quot;&gt;0.2%&quot;,</span></span>
<span class="line"><span>    &quot;not dead&quot;,</span></span>
<span class="line"><span>    &quot;not op_mini all&quot;</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  &quot;development&quot;: [</span></span>
<span class="line"><span>    &quot;last 1 chrome version&quot;,</span></span>
<span class="line"><span>    &quot;last 1 firefox version&quot;,</span></span>
<span class="line"><span>    &quot;last 1 safari version&quot;</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,123),i=[p];function o(l,c,u,r,d,h){return n(),a("div",null,i)}const b=s(t,[["render",o]]);export{q as __pageData,b as default};