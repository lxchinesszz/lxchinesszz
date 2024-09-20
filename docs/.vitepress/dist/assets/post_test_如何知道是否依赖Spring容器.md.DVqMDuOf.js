import{_ as e,c as a,m as n,a as i,H as p,w as r,aa as l,D as o,o as d}from"./chunks/framework.FHBy0zsw.js";const S=JSON.parse('{"title":"②如何知道是否依赖Spring容器","description":"","frontmatter":{"breadcrumb":false,"navbar":true,"sidebar":true,"pageInfo":true,"contributor":true,"editLink":true,"updateTime":true,"prev":true,"next":true,"comment":false,"footer":true,"backtotop":true,"title":"②如何知道是否依赖Spring容器","category":"源码分析"},"headers":[],"relativePath":"post/test/如何知道是否依赖Spring容器.md","filePath":"post/test/如何知道是否依赖Spring容器.md"}'),g={name:"post/test/如何知道是否依赖Spring容器.md"};function c(h,s,k,u,m,E){const t=o("Version");return d(),a("div",null,[n("p",null,[s[1]||(s[1]=i("默认使用 ")),s[2]||(s[2]=n("code",null,"BlockJUnit4ClassRunner",-1)),s[3]||(s[3]=i(" 来进行运行。即不依赖容器。 假如说如果需要容器怎么办呢 ? ")),p(t,null,{default:r(()=>s[0]||(s[0]=[i("基于SpringBoot 2.1.x版本分析")])),_:1})]),s[4]||(s[4]=l(`<div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">RunWith</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(SpringRunner.class)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SpringBootTest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">classes</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {Application.class}) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 指定启动类</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> BaseApplicationTest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>SpringRunner告诉JUnit要使用Spring容器</li><li>SpringBootTest告诉JUnit容器的引导类是这个</li></ul><p>JUnit是如何实现的呢?</p><p><img src="https://img.springlearn.cn/blog/learn_1617791013000.png" alt=""></p><p>前面启动类中我们使用的注解是 <code>@RunWith</code> 和 <code>@SpringBootTest</code> 那么哪里来解析这个的呢?</p><p><img src="https://img.springlearn.cn/blog/learn_1617791209000.png" alt=""></p><p>由此 <code>JUnit</code> 知道要使用 <code>SpringRunner</code> 进行引导。</p><p>由上图我们知道 <code>SpringRunner</code> 实例化的入参就是当前的测试类。那么后续所有的奥妙就在这里了。 我们跟进构造往下追究。</p><p><img src="https://img.springlearn.cn/blog/learn_1617795279000.png" alt=""></p><p><code>BootstrapUtils#resolveTestContextBootstrapper</code> 拿到SpringBoot的测试引导类 <code>SpringBootTestContextBootstrapper</code></p><p><img src="https://img.springlearn.cn/blog/learn_1617795346000.png" alt=""></p><p>拿到SpringBoot容器的启动 <code>Main</code> 函数。</p><p>到此已经拿到了所有的SpringBoot容器启动参数了。</p>`,13))])}const y=e(g,[["render",c]]);export{S as __pageData,y as default};
