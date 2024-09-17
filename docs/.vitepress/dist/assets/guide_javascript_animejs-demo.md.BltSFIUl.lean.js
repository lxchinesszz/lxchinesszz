import{_ as s,c as a,aa as p,o as l}from"./chunks/framework.bT2BobGK.js";const o=JSON.parse('{"title":"CommonJs和ECMAScript","description":"","frontmatter":{"title":"CommonJs和ECMAScript","editLink":true,"navbar":true,"category":"JavaScript"},"headers":[],"relativePath":"guide/javascript/animejs-demo.md","filePath":"guide/javascript/animejs-demo.md"}'),e={name:"guide/javascript/animejs-demo.md"};function i(r,n,c,t,b,m){return l(),a("div",null,n[0]||(n[0]=[p(`<h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div id=&quot;container&quot;&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;block&quot; v-for=&quot;i in 100&quot; :key=&quot;i&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span>  import { onMounted, onUnmounted, ref, watchEffect } from &#39;vue&#39;;</span></span>
<span class="line"><span>  import anime from &#39;animejs&#39;;</span></span>
<span class="line"><span>  import { useData } from &#39;vitepress&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>  const customAnimation = () =&gt; {</span></span>
<span class="line"><span>    let tl = anime.timeline({</span></span>
<span class="line"><span>      targets: &#39;.block&#39;,</span></span>
<span class="line"><span>      autoplay: false,</span></span>
<span class="line"><span>      duration: function() {</span></span>
<span class="line"><span>        return anime.random(100, 2000);</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      easing: &#39;easeInOutExpo&#39;,</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>    tl.add({</span></span>
<span class="line"><span>      opacity: 1,</span></span>
<span class="line"><span>      translateX: () =&gt; anime.random(-500, 500),</span></span>
<span class="line"><span>      translateY: () =&gt; anime.random(-300, 300),</span></span>
<span class="line"><span>      scale: () =&gt; anime.random(1, 5),</span></span>
<span class="line"><span>      easing: &#39;linear&#39;,</span></span>
<span class="line"><span>      duration: 3000,</span></span>
<span class="line"><span>      delay: anime.stagger(10),</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>    tl.add({</span></span>
<span class="line"><span>      opacity: 0,</span></span>
<span class="line"><span>      translateX: () =&gt; anime.random(0, 0),</span></span>
<span class="line"><span>      translateY: () =&gt; anime.random(0, 0),</span></span>
<span class="line"><span>      scale: () =&gt; anime.random(1, 5),</span></span>
<span class="line"><span>      easing: &#39;linear&#39;,</span></span>
<span class="line"><span>      duration: 3000,</span></span>
<span class="line"><span>      delay: anime.stagger(10),</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>    return tl;</span></span>
<span class="line"><span>  };</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>  onMounted(() =&gt; {</span></span>
<span class="line"><span>    customAnimationRef.value = customAnimation();</span></span>
<span class="line"><span>    customAnimationRef.value.play();</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  onUnmounted(() =&gt; {</span></span>
<span class="line"><span>    customAnimationRef.value = null;</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  #container {</span></span>
<span class="line"><span>    display: flex;</span></span>
<span class="line"><span>    justify-content: center;</span></span>
<span class="line"><span>    align-items: center;</span></span>
<span class="line"><span>    position: absolute;</span></span>
<span class="line"><span>    width: 100%;</span></span>
<span class="line"><span>    height: 100vh;</span></span>
<span class="line"><span>    padding: 10%;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  .block {</span></span>
<span class="line"><span>    position: absolute;</span></span>
<span class="line"><span>    height: 60px;</span></span>
<span class="line"><span>    width: 60px;</span></span>
<span class="line"><span>    opacity: 0;</span></span>
<span class="line"><span>    background: #901ed2;</span></span>
<span class="line"><span>    -webkit-box-shadow: 10px 10px 50px rgba(0, 0, 0, 0.2);</span></span>
<span class="line"><span>    box-shadow: 10px 10px 50px rgba(0, 0, 0, 0.2);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br></div></div>`,2)]))}const d=s(e,[["render",i]]);export{o as __pageData,d as default};
