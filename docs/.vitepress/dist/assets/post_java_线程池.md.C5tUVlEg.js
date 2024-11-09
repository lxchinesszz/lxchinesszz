import{_ as e,o as l,c as p,a4 as t,H as h,w as r,a,m as i,C as k}from"./chunks/framework.B8fosacB.js";const m=JSON.parse('{"title":"线程池扫盲","description":"","frontmatter":{"breadcrumb":false,"navbar":true,"sidebar":true,"pageInfo":true,"contributor":true,"editLink":true,"updateTime":true,"prev":true,"next":true,"comment":false,"footer":true,"backtotop":true,"title":"线程池扫盲","category":"Java进阶"},"headers":[],"relativePath":"post/java/线程池.md","filePath":"post/java/线程池.md","lastUpdated":1726844571000}'),d={name:"post/java/线程池.md"};function o(c,s,g,u,E,b){const n=k("font");return l(),p("div",{"data-pagefind-body":!0},[s[1]||(s[1]=t(`<p><img src="https://img.springlearn.cn/learn_c87a079fcea0d7893b03d4d57478bca7.png" alt=""></p><p><strong>作者</strong>: 西魏陶渊明 <strong>博客</strong>: <a href="https://blog.springlearn.cn/" target="_blank" rel="noreferrer">https://blog.springlearn.cn/</a></p><div class="tip custom-block"><p class="custom-block-title">西魏陶渊明</p><p>莫笑少年江湖梦，谁不少年梦江湖</p></div><blockquote><p>[!TIP] 本篇文章通读时间大概3分钟,希望在三分钟内的讲解，对你有所帮助， 一定要认真看并思考，好了。废话不多数，直接上干货,本节内容我们讲 的是Java的线程池,在讲之前我们首先看一下有哪些线程池，这些线程池 我们不过多讲解,因为我们的关注点是他们是如何实现的,和其运行的原理。</p></blockquote><h1 id="一、常用线程池列表" tabindex="-1">一、常用线程池列表 <a class="header-anchor" href="#一、常用线程池列表" aria-label="Permalink to &quot;一、常用线程池列表&quot;">​</a></h1><p>这部分内容,只是帮助你回顾一下线程池的知识，大家重点看方法内的实现</p><p>1、构造一个固定线程数目的线程池，配置的corePoolSize与maximumPoolSize大小相同，同时使用了一个无界LinkedBlockingQueue存放阻塞任务，因此多余的任务将存在再阻塞队列，不会由RejectedExecutionHandler处理</p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ExecutorService </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">newFixedThreadPool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> nThreads) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ThreadPoolExecutor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(nThreads, nThreads,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                                      0L</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, TimeUnit.MILLISECONDS,</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                                      new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> LinkedBlockingQueue&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Runnable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;());</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>2、构造一个缓冲功能的线程池，配置corePoolSize=0，maximumPoolSize=Integer.MAX_VALUE，keepAliveTime=60s,以及一个无容量的阻塞队列 SynchronousQueue，因此任务提交之后，将会创建新的线程执行；线程空闲超过60s将会销毁</p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ExecutorService </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">newCachedThreadPool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ThreadPoolExecutor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, Integer.MAX_VALUE,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                                      60L</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, TimeUnit.SECONDS,</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                                      new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SynchronousQueue&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Runnable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;());</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>3、构造一个只支持一个线程的线程池，配置corePoolSize=maximumPoolSize=1，无界阻塞队列LinkedBlockingQueue；保证任务由一个线程串行执行</p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ExecutorService </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">newSingleThreadExecutor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> FinalizableDelegatedExecutorService</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ThreadPoolExecutor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                                    0L</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, TimeUnit.MILLISECONDS,</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                                    new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> LinkedBlockingQueue&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Runnable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;()));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>4、构造有定时功能的线程池，配置corePoolSize，无界延迟阻塞队列DelayedWorkQueue；有意思的是：maximumPoolSize=Integer.MAX_VALUE，由于DelayedWorkQueue是无界队列，所以这个值是没有意义的</p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * Creates a thread pool that can schedule commands to run after a</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * given delay, or to execute periodically.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> corePoolSize</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> the number of threads to keep in the pool,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * even if they are idle</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@return</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> a newly created scheduled thread pool</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@throws</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IllegalArgumentException</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> if {@code corePoolSize &lt; 0}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ScheduledExecutorService </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">newScheduledThreadPool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> corePoolSize) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ScheduledThreadPoolExecutor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(corePoolSize);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h1 id="二、threadpoolexecutor" tabindex="-1">二、ThreadPoolExecutor <a class="header-anchor" href="#二、threadpoolexecutor" aria-label="Permalink to &quot;二、ThreadPoolExecutor&quot;">​</a></h1><p>相信大家从上面的众多线程池中都已经看到了这个类,因为上面的线程池底层的构造都是由这个类创建的,</p><p>那么我们就开始研究这个类</p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@since</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 1.5</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@author</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> Doug Lea</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ThreadPoolExecutor</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> AbstractExecutorService</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>首先看一下构造方法，关于注释一定要好好看，每个参数都理解了，那么你就弄懂了</p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> corePoolSize</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 核心线程池大小</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> maximumPoolSize</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 线程池最大容量</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> keepAliveTime</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 线程池空闲时，线程存活时间</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> unit</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 时间单位</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> workQueue</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 工作队列</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	 * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> threadFactory</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 线程工厂</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@throws</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IllegalArgumentException</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> if one of the following holds:&lt;br&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     *         {@code corePoolSize &lt; 0}&lt;br&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     *         {@code keepAliveTime &lt; 0}&lt;br&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     *         {@code maximumPoolSize &lt;= 0}&lt;br&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     *         {@code maximumPoolSize &lt; corePoolSize}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@throws</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> NullPointerException</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> if {@code workQueue} is null</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      public</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ThreadPoolExecutor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> corePoolSize,</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                                 int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> maximumPoolSize,</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                                 long</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> keepAliveTime,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                                 TimeUnit unit,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                                 BlockingQueue</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Runnable</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> workQueue,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                                 ThreadFactory threadFactory) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">           this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(corePoolSize, maximumPoolSize, keepAliveTime, unit, workQueue,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                threadFactory, defaultHandler);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">       }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h1 id="三、构造参数详解" tabindex="-1">三、构造参数详解 <a class="header-anchor" href="#三、构造参数详解" aria-label="Permalink to &quot;三、构造参数详解&quot;">​</a></h1><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>corePoolSize</td><td>核心的线程数</td></tr><tr><td>maximumPoolSize</td><td>最大线程池就是说你定义的线程池运行创建的最大线程数量</td></tr><tr><td>keepAliveTime</td><td>空闲时间回收，当这个时间后还没有任务执行就将线程回收</td></tr><tr><td>unit</td><td>单位,控制上面时间的单位，可以为秒，或者分钟</td></tr><tr><td>workQueue</td><td>核心线程都已经去执行任务但是，任务还有，那么久先放到这个队列里，就相当于集合</td></tr><tr><td>threadFactory</td><td>创建线程用户的线程工厂,里面只有一个方法就是newThread，你可以自定义线程名</td></tr></tbody></table>`,22)),h(n,{color:"red"},{default:r(()=>s[0]||(s[0]=[a("上面的文字可能你看的不太明白，小编这里画了一个图，大家仔细看看 ")])),_:1}),s[2]||(s[2]=i("p",null,"这张图是小编之前画的，但是头条压缩了，导致图不太清楚，大家看到字就行了",-1)),s[3]||(s[3]=i("p",null,[i("img",{src:"https://img.springlearn.cn/blog/learn_1640316132000.png",alt:""})],-1)),s[4]||(s[4]=i("h2",{id:"_1-执行顺序",tabindex:"-1"},[a("1. 执行顺序 "),i("a",{class:"header-anchor",href:"#_1-执行顺序","aria-label":'Permalink to "1. 执行顺序"'},"​")],-1)),s[5]||(s[5]=i("ol",null,[i("li",null,"首先交给核心线程数来执行corePoolSize"),i("li",null,"如果核心都用完了，就放到workQueue队列里面"),i("li",null,"当队列和核心线程数都满了，就继续创建线程，直到等于maximumPoolSize为止"),i("li",null,"当任务已经塞不下了，就开始执行拒绝策略(下一篇讲)")],-1))])}const A=e(d,[["render",o]]);export{m as __pageData,A as default};
