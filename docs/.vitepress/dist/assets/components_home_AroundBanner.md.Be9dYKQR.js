import{_ as d,D as p,o as i,b as o,c as h,m as s,a,H as e,w as l,aa as b}from"./chunks/framework.FHBy0zsw.js";const m={};function u(t,r){const n=p("v-around-banner");return i(),o(n,{line:""})}const k=d(m,[["render",u]]),y=JSON.parse('{"title":"图片介绍","description":"","frontmatter":{"title":"图片介绍","editLink":true,"sidebar":true,"category":"02-首页模板","aside":false},"headers":[],"relativePath":"components/home/AroundBanner.md","filePath":"components/home/AroundBanner.md"}'),g={name:"components/home/AroundBanner.md"},f=Object.assign(g,{setup(t){return(r,n)=>{const c=p("demo");return i(),h("div",null,[n[1]||(n[1]=s("h1",{id:"首页模板",tabindex:"-1"},[a("首页模板 "),s("a",{class:"header-anchor",href:"#首页模板","aria-label":'Permalink to "首页模板"'},"​")],-1)),n[2]||(n[2]=s("p",null,"用于 PC 端，功能演示等。",-1)),n[3]||(n[3]=s("h2",{id:"完整示例",tabindex:"-1"},[a("完整示例 "),s("a",{class:"header-anchor",href:"#完整示例","aria-label":'Permalink to "完整示例"'},"​")],-1)),e(c,{customClass:"demoblock-custom",sourceCode:`
<template>
  <v-around-banner line />
</template>

<script setup>
<\/script>
`,options:'{"customClass":"demoblock-custom"}'},{highlight:l(()=>n[0]||(n[0]=[s("div",{class:"language-vue vp-adaptive-theme"},[s("span",{class:"lang"},"vue"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code","v-pre":""},[s("code",null,[s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  <"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"v-around-banner"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," line"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," />")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," setup"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])])],-1)])),default:l(()=>[e(k)]),_:1}),n[4]||(n[4]=b(`<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">字段</th><th style="text-align:left;">说明</th><th style="text-align:left;">示例</th></tr></thead><tbody><tr><td style="text-align:left;">line</td><td style="text-align:left;">当图片大于 2 个是否绘制线段</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:left;">template</td><td style="text-align:left;">类型AroundBannerType[]</td><td style="text-align:left;">标题</td></tr></tbody></table><h2 id="aroundbannertype" tabindex="-1">AroundBannerType <a class="header-anchor" href="#aroundbannertype" aria-label="Permalink to &quot;AroundBannerType&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span> {</span></span>
<span class="line"><span>          imagePosition: {</span></span>
<span class="line"><span>            image: {</span></span>
<span class="line"><span>              src: &#39;https://ritheme.com/wp-content/themes/ritheme-2023/assets/img/screen-1-1000x800.jpg&#39;,</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            position: &#39;left&#39;,</span></span>
<span class="line"><span>            animate: {</span></span>
<span class="line"><span>              type: &#39;fadeInUp&#39;,</span></span>
<span class="line"><span>              duration: 1,</span></span>
<span class="line"><span>              disable: false,</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          title: &#39;灵活轻量原生态的首页模块化配置&#39;,</span></span>
<span class="line"><span>          animate: {</span></span>
<span class="line"><span>            type: &#39;fadeInUp&#39;,</span></span>
<span class="line"><span>            duration: 2,</span></span>
<span class="line"><span>            disable: false,</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          secondary:</span></span>
<span class="line"><span>            &#39;现代化的前台页面，易于管理拖拽搭配的WP原生小工具模块化首页可拖拽设置。&#39;,</span></span>
<span class="line"><span>          textItems: [</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>              text: &#39;非常适合虚拟资源商城&#39;,</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>              text: &#39;所有功能界面自带，无需依赖插件&#39;,</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>          ],</span></span>
<span class="line"><span>        }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div>`,4))])}}});export{y as __pageData,f as default};
