import{_ as e,c as a,aa as l,o as s}from"./chunks/framework.FHBy0zsw.js";const f=JSON.parse('{"title":"线程状态","description":"","frontmatter":{"breadcrumb":false,"navbar":true,"sidebar":true,"pageInfo":true,"contributor":true,"editLink":true,"updateTime":true,"prev":true,"next":true,"comment":false,"footer":true,"backtotop":true,"title":"线程状态","category":"Java进阶"},"headers":[],"relativePath":"post/java/线程的工作状态.md","filePath":"post/java/线程的工作状态.md"}'),n={name:"post/java/线程的工作状态.md"};function r(i,t,d,o,p,c){return s(),a("div",null,t[0]||(t[0]=[l(`<h3 id="代码" tabindex="-1">代码 <a class="header-anchor" href="#代码" aria-label="Permalink to &quot;代码&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>    public enum State {</span></span>
<span class="line"><span>        NEW、RUNNABLE、WAITING、TIMED_WAITING、TERMINATED</span></span>
<span class="line"><span>    }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="状态介绍" tabindex="-1">状态介绍 <a class="header-anchor" href="#状态介绍" aria-label="Permalink to &quot;状态介绍&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">状态</th><th style="text-align:left;">介绍</th></tr></thead><tbody><tr><td style="text-align:left;">NEW</td><td style="text-align:left;">尚未启动的线程处于此状态。</td></tr><tr><td style="text-align:left;">RUNNABLE</td><td style="text-align:left;">在 Java 虚拟机中执行的线程处于这种状态。</td></tr><tr><td style="text-align:left;">BLOCKED</td><td style="text-align:left;">阻塞等待监视器锁的线程处于此状态。</td></tr><tr><td style="text-align:left;">WAITING</td><td style="text-align:left;">无限期等待另一个线程执行特定操作的线程处于此状态。</td></tr><tr><td style="text-align:left;">TIMED_WAITING</td><td style="text-align:left;">具有指定等待时间的等待线程的线程状态。线程由于调用了以下方法之一而处于定时等待状态，并具有指定的正等待时间：sleep、wait、join、LockSupport.parkNanos、LockSupport.parkUntil</td></tr><tr><td style="text-align:left;">TERMINATED</td><td style="text-align:left;">已终止线程的线程状态。线程已完成执行。</td></tr></tbody></table><ul><li>WAITING 无限期等待,除非有现成给唤醒</li><li>TIMED_WAITING 等待指定的时间,时间到了自己唤醒</li></ul>`,5)]))}const b=e(n,[["render",r]]);export{f as __pageData,b as default};
