import{_ as i,c as a,aa as n,o as e}from"./chunks/framework.FHBy0zsw.js";const o=JSON.parse('{"title":"信号量 Semaphore","description":"","frontmatter":{"breadcrumb":false,"navbar":true,"sidebar":true,"pageInfo":true,"contributor":true,"editLink":true,"updateTime":true,"prev":true,"next":true,"comment":false,"footer":true,"backtotop":true,"title":"信号量 Semaphore","category":"Java进阶"},"headers":[],"relativePath":"post/java/Semaphore.md","filePath":"post/java/Semaphore.md"}'),l={name:"post/java/Semaphore.md"};function p(t,s,r,h,k,d){return e(),a("div",null,s[0]||(s[0]=[n(`<p><img src="https://img.springlearn.cn/learn_c87a079fcea0d7893b03d4d57478bca7.png" alt=""></p><p><strong>作者</strong>: 西魏陶渊明 <strong>博客</strong>: <a href="https://blog.springlearn.cn/" target="_blank" rel="noreferrer">https://blog.springlearn.cn/</a></p><div class="tip custom-block"><p class="custom-block-title">西魏陶渊明</p><p>莫笑少年江湖梦，谁不少年梦江湖</p></div><h2 id="🚀-知识快读" tabindex="-1">🚀 知识快读 <a class="header-anchor" href="#🚀-知识快读" aria-label="Permalink to &quot;🚀 知识快读&quot;">​</a></h2><p><code>Semaphore</code> 翻译过来就是信号量, 其根本原理就是基于 <code>CAS</code> 共享锁的一种实现。举一个例子。 假设停车场只有三个车位，一开始三个车位都是空的。这时如果同时来了五辆车，看门人允许其中三辆不受阻碍的进入，然后放下车拦，剩下的车则必须在入口等待，此后来的车也都不得不在入口处等待。这时，有一辆车离开停车场，看门人得知后，打开车拦，放入一辆，如果又离开两辆，则又可以放入两辆，如此往复。</p><p>那么上面的这个例子可以这样理解，资源一共有3个, 即三个车位。如何来控制这5辆汽车，来合理的使用这3个资源呢? <code>Semaphore</code> 可以这样来定义。</p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 1. 定一个信号量,声明有3个资源。使用公平模式线程将会按到达的顺序（FIFO）执行(也就是等待时间最长的先执行),如果是非公平，则可以后请求的有可能排在队列的头部。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Semaphore semp </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Semaphore</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 2. 获取1个许可 - 最大允许3个进入，一但超过就让其等待,除非已经释放</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">semp.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">acquire</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();  </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 3. 释放1个许可 </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">semp.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">release</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 4. 获取1许可,失败就返回,不等待</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">semp.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tryAcquire</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();  </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 5. 获取2许可,失败就返回,不等待</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">semp.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tryAcquire</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);  </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 6. 不允许被中断</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">semp.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">acquireUninterruptibly</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="知识点1-fair-nofair" tabindex="-1">知识点1: Fair &amp; NoFair <a class="header-anchor" href="#知识点1-fair-nofair" aria-label="Permalink to &quot;知识点1: Fair &amp; NoFair&quot;">​</a></h2><p><code>Semaphore</code> 的模式配置,只是构造来定义。</p><ul><li>默认构造不公平模式, 谁来申请资源,就先尝试获取资源。排队的要等到没有资源进来申请才能继续申请</li></ul><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Semaphore</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> permits) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        sync </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> NonfairSync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(permits);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Semaphore</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> permits, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fair) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        sync </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fair </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> FairSync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(permits) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> NonfairSync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(permits);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><img src="https://img.springlearn.cn/blog/learn_1640531082000.png" alt=""></p><h2 id="知识点2-申请资源" tabindex="-1">知识点2: 申请资源 <a class="header-anchor" href="#知识点2-申请资源" aria-label="Permalink to &quot;知识点2: 申请资源&quot;">​</a></h2><ul><li>acquire() 获取1个资源,获取不到就等待,如果线程中断,会直接中断。</li><li>acquire(2) 获取2个资源,获取不到就等待,如果线程中断,会直接中断。</li><li>tryAcquire() 获取1个资源,获取不到就返回 <code>false</code>,如果线程中断,会直接中断。</li><li>acquireUninterruptibly() 获取1个资源,获取不到就等待,不会关心线程中断。</li></ul><h2 id="知识点3-释放资源" tabindex="-1">知识点3: 释放资源 <a class="header-anchor" href="#知识点3-释放资源" aria-label="Permalink to &quot;知识点3: 释放资源&quot;">​</a></h2><ul><li>release() 释放一个资源</li><li>release(2) 释放两个资源</li></ul><h2 id="知识点4-其他api" tabindex="-1">知识点4: 其他API <a class="header-anchor" href="#知识点4-其他api" aria-label="Permalink to &quot;知识点4: 其他API&quot;">​</a></h2><ul><li>availablePermits() 当前资源数量</li><li>drainPermits() 获取当前资源数量，并将剩余资源清零，直接赋值0</li><li>reducePermits(2) 将资源数量，扣减2个</li><li>isFair() 是否公平</li><li>hasQueuedThreads() 是否还有线程等待</li><li>getQueueLength() 还有多少线程等待</li><li>getQueuedThreads() 获取所有的线程集合</li></ul>`,18)]))}const E=i(l,[["render",p]]);export{o as __pageData,E as default};
