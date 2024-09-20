import{_ as i,c as a,aa as n,o as t}from"./chunks/framework.FHBy0zsw.js";const g=JSON.parse('{"title":"Guava-retry重试组件","description":"","frontmatter":{"breadcrumb":false,"navbar":true,"sidebar":true,"pageInfo":true,"contributor":true,"editLink":true,"updateTime":true,"prev":true,"next":true,"comment":false,"footer":true,"backtotop":true,"title":"Guava-retry重试组件","category":"Guava"},"headers":[],"relativePath":"post/java/tools/guava/guava-retry.md","filePath":"post/java/tools/guava/guava-retry.md"}'),l={name:"post/java/tools/guava/guava-retry.md"};function e(p,s,h,k,r,E){return t(),a("div",null,s[0]||(s[0]=[n(`<h2 id="一、简介" tabindex="-1">一、简介 <a class="header-anchor" href="#一、简介" aria-label="Permalink to &quot;一、简介&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">Guava-retry</p><p>Guava 是一组来自 Google 的核心 Java 库，其中包括新的集合类型（例如 multimap 和 multiset）、不可变集合、图形库以及用于并发、I/O、散列、缓存、原语、字符串等的实用程序！它广泛用于 Google 内部的大多数 Java 项目，也被许多其他公司广泛使用。</p><p>API 非常的简单，我们可以非常轻松的使用，来封装成我们业务中自己的组件。</p></div><h2 id="二、依赖" tabindex="-1">二、依赖 <a class="header-anchor" href="#二、依赖" aria-label="Permalink to &quot;二、依赖&quot;">​</a></h2><div class="language-xml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">dependency</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">groupId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;com.github.rholder&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">groupId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">artifactId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;guava-retrying&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">artifactId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;2.0.0&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">dependency</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="三、使用" tabindex="-1">三、使用 <a class="header-anchor" href="#三、使用" aria-label="Permalink to &quot;三、使用&quot;">​</a></h2><h3 id="_3-1-指定异常" tabindex="-1">3.1 指定异常 <a class="header-anchor" href="#_3-1-指定异常" aria-label="Permalink to &quot;3.1 指定异常&quot;">​</a></h3><p>配置如果发生了 <code>Exception</code> 异常进行重试</p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Retryer&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">User</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; retry </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> RetryerBuilder.</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">User</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">newBuilder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                //发生ConnectException异常时重试</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">retryIfExceptionOfType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Exception.class)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                //重试的等待策略 初始等待1s，每次递增1s。如：第一次1s，第二次2s，第三次3s，以此类推...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">withWaitStrategy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(WaitStrategies.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">incrementingWait</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, TimeUnit.SECONDS, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, TimeUnit.SECONDS))</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                //重试3次后停止</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">withStopStrategy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(StopStrategies.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stopAfterAttempt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">build</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="_3-2-重试策略" tabindex="-1">3.2 重试策略 <a class="header-anchor" href="#_3-2-重试策略" aria-label="Permalink to &quot;3.2 重试策略&quot;">​</a></h3><p>WaitStrategy 重试策略</p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Retryer&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">User</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; retry </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> RetryerBuilder.</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">User</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">newBuilder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                //发生ConnectException异常时重试</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">retryIfExceptionOfType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Exception.class)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                //重试的等待策略 初始等待1s，每次递增1s。如：第一次1s，第二次2s，第三次3s，以此类推...</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">withWaitStrategy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(WaitStrategies.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">incrementingWait</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, TimeUnit.SECONDS, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, TimeUnit.SECONDS))</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                //重试3次后停止</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">withStopStrategy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(StopStrategies.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stopAfterAttempt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">build</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><table><thead><tr><th>策略</th><th>使用方法</th><th>说明</th></tr></thead><tbody><tr><td>固定策略</td><td>WaitStrategies.fixedWait(10,TimeUnit.SECONDS)</td><td>每10秒执行一次</td></tr><tr><td>随机策略</td><td>WaitStrategies.randomWait(100,TimeUnit.SECONDS)</td><td>0 到 100秒之间随机执行一次</td></tr><tr><td>随机策略</td><td>WaitStrategies.randomWait(10,TimeUnit.SECONDS,20,TimeUnit.SECONDS)</td><td>10 到 20秒之间随机执行一次</td></tr><tr><td>递增策略</td><td>WaitStrategies.incrementingWait(1, TimeUnit.SECONDS, 1, TimeUnit.SECONDS)</td><td>初始等待1s，每次递增1s。如：第一次1s，第二次2s，第三次3s，以此类推...</td></tr><tr><td>异常策略</td><td>WaitStrategies.exceptionWait(...)</td><td>不同的异常返回不同的重试时间</td></tr><tr><td>斐波那契数列策略</td><td>WaitStrategies.fibonacciWait(...)</td><td>1、1、2、3、5、8、13、21类推</td></tr></tbody></table><h3 id="_3-3-重试监听器" tabindex="-1">3.3 重试监听器 <a class="header-anchor" href="#_3-3-重试监听器" aria-label="Permalink to &quot;3.3 重试监听器&quot;">​</a></h3><p>Attempt 代表每次执行动作，可以获取执行次数，打印执行日志</p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Retryer&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">User</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; retry </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> RetryerBuilder.</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">User</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">newBuilder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                //发生ConnectException异常时重试</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">retryIfExceptionOfType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Exception.class)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                //重试的等待策略 初始等待1s，每次递增1s。如：第一次1s，第二次2s，第三次3s，以此类推...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">withWaitStrategy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(WaitStrategies.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">incrementingWait</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, TimeUnit.SECONDS, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, TimeUnit.SECONDS))</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                //重试监听器</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">withRetryListener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> RetryListener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Override</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                    public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">V</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> onRetry</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Attempt&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">V</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">attempt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;重试次数:&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> attempt.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getAttemptNumber</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">());</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;异常:&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> attempt.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getExceptionCause</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">());</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;返回值:&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">attempt.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">());</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                })</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                //重试3次后停止</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">withStopStrategy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(StopStrategies.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stopAfterAttempt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">build</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="_3-4-停止策略" tabindex="-1">3.4 停止策略 <a class="header-anchor" href="#_3-4-停止策略" aria-label="Permalink to &quot;3.4 停止策略&quot;">​</a></h3><p>StopStrategy 一般常用的就是重试多少次</p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Retryer&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">User</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; retry </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> RetryerBuilder.</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">User</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">newBuilder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                //发生ConnectException异常时重试</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">retryIfExceptionOfType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Exception.class)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                //重试的等待策略 初始等待1s，每次递增1s。如：第一次1s，第二次2s，第三次3s，以此类推...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">withWaitStrategy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(WaitStrategies.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">incrementingWait</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, TimeUnit.SECONDS, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, TimeUnit.SECONDS))</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                //重试3次后停止</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">withStopStrategy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(StopStrategies.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stopAfterAttempt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">build</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul><li>StopAfterDelayStrategy ：设定一个最长允许的执行时间；比如设定最长执行10s，无论任务执行次数，只要重试的时候超出了最长时间，则任务终止，并返回重试异常RetryException；</li><li>NeverStopStrategy ：不停止，用于需要一直轮训直到返回期望结果的情况；</li><li>StopAfterAttemptStrategy ：设定最大重试次数，如果超出最大重试次数则停止重试，并返回重试异常；</li></ul>`,19)]))}const y=i(l,[["render",e]]);export{g as __pageData,y as default};