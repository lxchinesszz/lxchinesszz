import{h as u,V as F,C as l,o as c,c as d,H as i,w as p,a,a4 as E,m as s}from"./chunks/framework.B8fosacB.js";const v={__name:"animate.md.demo.11be6dc7",setup(m){const t=u(),n=F({type:"animate__fadeInLeft",duration:1,disabled:!1,intersecting:!0});return(h,e)=>{const o=l("v-image"),g=l("v-animate"),y=l("a-input"),b=l("a-button"),r=l("a-space");return c(),d("div",null,[i(r,{direction:"vertical",align:"center"},{default:p(()=>[i(g,{ref_key:"animateRef",ref:t,animate:n},{default:p(()=>[i(o,{src:"https://ritheme.com/wp-content/themes/ritheme-2023/assets/img/screen-1-1000x800.jpg"})]),_:1},8,["animate"]),i(r,null,{default:p(()=>[i(y,{modelValue:n.type,"onUpdate:modelValue":e[0]||(e[0]=k=>n.type=k),placeholder:"输入css 动画样式"},null,8,["modelValue"]),i(b,{type:"primary",onClick:e[1]||(e[1]=k=>t.value.replay())},{default:p(()=>e[2]||(e[2]=[a("重新动画")])),_:1})]),_:1})]),_:1})])}}},B=JSON.parse('{"title":"v-animate","description":"","frontmatter":{"navbar":true,"title":"v-animate","category":"04-动画"},"headers":[],"relativePath":"components/animate/animate.md","filePath":"components/animate/animate.md","lastUpdated":1731158524000}'),f={name:"components/animate/animate.md"},_=Object.assign(f,{setup(m){return(t,n)=>{const h=l("demo");return c(),d("div",{"data-pagefind-body":!0},[n[1]||(n[1]=E(`<h1 id="快速上手" tabindex="-1">快速上手 <a class="header-anchor" href="#快速上手" aria-label="Permalink to &quot;快速上手&quot;">​</a></h1><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">v-animate</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :animate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">{type:</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> &#39;animate__fadeInLeft&#39;,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    duration:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> 1,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    disabled:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> false,}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">v-animate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="完整示例" tabindex="-1">完整示例 <a class="header-anchor" href="#完整示例" aria-label="Permalink to &quot;完整示例&quot;">​</a></h2>`,3)),i(h,{customClass:"demoblock-custom",sourceCode:`
<template>
  <div>
    <a-space direction="vertical" align="center">
      <v-animate ref="animateRef"
                 :animate="animateOptions"
      >
        <v-image
            src="https://ritheme.com/wp-content/themes/ritheme-2023/assets/img/screen-1-1000x800.jpg"
        />
      </v-animate>
      <a-space>
        <a-input v-model="animateOptions.type" placeholder="输入css 动画样式"/>
        <a-button type="primary" @click="animateRef.replay()">重新动画</a-button>
      </a-space>
    </a-space>
  </div>
</template>

<script setup>
  import {reactive, ref} from 'vue';

  const animateRef = ref();

  const animateOptions = reactive({
    type: 'animate__fadeInLeft',
    duration: 1,
    disabled: false,
    intersecting: true
  });
<\/script>
`,options:'{"customClass":"demoblock-custom"}'},{highlight:p(()=>n[0]||(n[0]=[s("div",{class:"language-vue vp-adaptive-theme"},[s("span",{class:"lang"},"vue"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code","v-pre":""},[s("code",null,[s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  <"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"div"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"a-space"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," direction"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"vertical"'),s("span",{style:{"--shiki-light":"#B31D28","--shiki-dark":"#FDAEB7","--shiki-light-font-style":"italic","--shiki-dark-font-style":"italic"}}," align"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"center"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      <"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"v-animate"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," ref"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"animateRef"')]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                 :"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"animate"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"animateOptions"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"')]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      >")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        <"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"v-image")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"            src"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"https://ritheme.com/wp-content/themes/ritheme-2023/assets/img/screen-1-1000x800.jpg"')]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        />")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      </"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"v-animate"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      <"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"a-space"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        <"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"a-input"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," v-model"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"animateOptions.type"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," placeholder"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"输入css 动画样式"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"/>")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        <"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"a-button"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," type"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"primary"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," @"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"click"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"animateRef."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"replay"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"()"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">重新动画</"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"a-button"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      </"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"a-space"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    </"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"a-space"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  </"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"div"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," setup"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"  import"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {reactive, ref} "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'vue'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"  const"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," animateRef"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," ref"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"();")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"  const"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," animateOptions"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," reactive"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"({")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    type: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'animate__fadeInLeft'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    duration: "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"1"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    disabled: "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"false"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    intersecting: "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"true")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  });")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])])],-1)])),default:p(()=>[i(v)]),_:1}),n[2]||(n[2]=E(`<p>支持动画: <a href="https://animate.style/" target="_blank" rel="noreferrer">https://animate.style/</a></p><h2 id="出现视图中播放动画" tabindex="-1">出现视图中播放动画 <a class="header-anchor" href="#出现视图中播放动画" aria-label="Permalink to &quot;出现视图中播放动画&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div id=&quot;container&quot;&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;card&quot; v-for=&quot;i in 98&quot; :key=&quot;i&quot; /&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  import { onMounted, onUnmounted } from &#39;vue&#39;;</span></span>
<span class="line"><span>  import { ScrollAnimate } from &#39;v-ui&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  const { createObserver, disconnect } = ScrollAnimate.useScrollAnimate();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  onMounted(() =&gt; {</span></span>
<span class="line"><span>    createObserver(&#39;.card&#39;, &#39;visible&#39;);</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  onUnmounted(() =&gt; {</span></span>
<span class="line"><span>    disconnect();</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span>  #container {</span></span>
<span class="line"><span>    display: flex;</span></span>
<span class="line"><span>    flex-direction: row;</span></span>
<span class="line"><span>    flex-wrap: wrap;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  .card {</span></span>
<span class="line"><span>    width: 450px;</span></span>
<span class="line"><span>    height: 200px;</span></span>
<span class="line"><span>    background: currentColor;</span></span>
<span class="line"><span>    border-radius: 5px;</span></span>
<span class="line"><span>    box-shadow: 0px 3.1px 17.7px rgba(0, 0, 0, 0.035),</span></span>
<span class="line"><span>    0px 25px 141px rgba(0, 0, 0, 0.07);</span></span>
<span class="line"><span>    color: rgba(255, 255, 255, 0.75);</span></span>
<span class="line"><span>    margin: 6px;</span></span>
<span class="line"><span>    transform: translateY(100px) scale(0.95);</span></span>
<span class="line"><span>    transition: opacity 0.6s ease, transform 0.3s ease;</span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     *不满足行就放大</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    flex-grow: 1;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  .visible {</span></span>
<span class="line"><span>    opacity: 1;</span></span>
<span class="line"><span>    transform: translateY(0) scale(1);;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br></div></div>`,3))])}}});export{B as __pageData,_ as default};
