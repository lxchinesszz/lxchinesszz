import{_ as i,c as a,aa as n,o as e}from"./chunks/framework.FHBy0zsw.js";const c=JSON.parse('{"title":"Eslint和 Prettier使用","description":"","frontmatter":{"title":"Eslint和 Prettier使用","editLink":true,"navbar":true,"category":"Plugins"},"headers":[],"relativePath":"post/guide/eslint-plugin.md","filePath":"post/guide/eslint-plugin.md"}'),l={name:"post/guide/eslint-plugin.md"};function t(p,s,r,h,k,d){return e(),a("div",null,s[0]||(s[0]=[n(`<h1 id="eslint" tabindex="-1">eslint <a class="header-anchor" href="#eslint" aria-label="Permalink to &quot;eslint&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">ESLint</p><p><a href="https://eslint.org/docs/latest/use/getting-started" target="_blank" rel="noreferrer">ESLint</a> 是一个用于识别和报告在 ECMAScript/JavaScript 代码中发现的模式的工具，目的是使代码更加一致并避免错误。</p><p>ESLint 是完全可插拔的。每个规则都是一个插件，您可以在运行时添加更多规则。您还可以添加社区插件、配置和解析器来扩展 ESLint 的功能。</p></div><h2 id="eslint-plugin-vue" tabindex="-1">eslint-plugin-vue <a class="header-anchor" href="#eslint-plugin-vue" aria-label="Permalink to &quot;eslint-plugin-vue&quot;">​</a></h2><p><a href="https://eslint.vuejs.org/user-guide/" target="_blank" rel="noreferrer">官方文档</a></p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pluginVue </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;eslint-plugin-vue&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  ...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pluginVue.configs[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;flat/recommended&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>如果你想要禁用某个规则 <a href="https://eslint.vuejs.org/rules/" target="_blank" rel="noreferrer">规则官方文档</a></p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pluginVue </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;eslint-plugin-vue&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { files: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;**/*.{js,mjs,cjs,ts,vue}&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] },</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  ...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pluginVue.configs[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;flat/recommended&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    rules: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &#39;vue/require-valid-default-prop&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="eslint-plugin-prettier" tabindex="-1">eslint-plugin-prettier <a class="header-anchor" href="#eslint-plugin-prettier" aria-label="Permalink to &quot;eslint-plugin-prettier&quot;">​</a></h2><p><a href="https://github.com/prettier/eslint-plugin-prettier?tab=readme-ov-file#configuration-new-eslintconfigjs" target="_blank" rel="noreferrer">官方文档</a></p><p>用于 Prettier 格式化的 ESLint 插件, 将 Prettier 作为 ESLint 规则运行，并将差异报告为单个 ESLint 问题。</p><p><strong>注意的是，一定要在放在配置数组的最后一项，这样才能覆盖前面的规则，达到屏蔽规则冲突的目的</strong></p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> eslintPluginPrettierRecommended </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;eslint-plugin-prettier/recommended&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  eslintPluginPrettierRecommended,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="eslint-config-prettier" tabindex="-1">eslint-config-prettier <a class="header-anchor" href="#eslint-config-prettier" aria-label="Permalink to &quot;eslint-config-prettier&quot;">​</a></h2><p><a href="https://github.com/prettier/eslint-config-prettier" target="_blank" rel="noreferrer">官方文档</a></p><p>关闭所有不必要的规则或可能与 Prettier 冲突的规则。</p>`,15)]))}const g=i(l,[["render",t]]);export{c as __pageData,g as default};