import{_ as n,c as a,aa as p,o as e}from"./chunks/framework.CC62xl_U.js";const m=JSON.parse('{"title":"线程安全之原子操作","description":"","frontmatter":{"breadcrumb":false,"navbar":true,"sidebar":true,"pageInfo":true,"contributor":true,"editLink":true,"updateTime":true,"prev":true,"next":true,"comment":false,"footer":true,"backtotop":true,"title":"线程安全之原子操作","category":"Java进阶"},"headers":[],"relativePath":"java/原子操作.md","filePath":"java/原子操作.md"}'),l={name:"java/原子操作.md"};function r(i,s,t,c,b,u){return e(),a("div",null,s[0]||(s[0]=[p(`<p><img src="https://img.springlearn.cn/blog/learn_1589361031000.png" alt=""></p><p><strong>作者</strong>: 西魏陶渊明 <strong>博客</strong>: <a href="https://blog.springlearn.cn/" target="_blank" rel="noreferrer">https://blog.springlearn.cn/</a></p><div class="tip custom-block"><p class="custom-block-title">西魏陶渊明</p><p>莫笑少年江湖梦，谁不少年梦江湖</p></div><p><strong>原子特性: 原子是最小的粒子,不可再分</strong></p><p>这并不是一个化学课,而是巧妙的借用了化学上的一个概念,即原子是最小的粒子,不可再分;原子操作也是不能再分的操作; 为了能把这个讲明白,下文基本都是大白话,其实Java本来并不是很难,而是总有一些人喜欢把简单的概念给复杂化。小编不喜欢 那种说辞,所以尽量简单易懂。如有问题,欢迎提出问题。共同交流进步,最后谢谢你的阅读。</p><hr><h1 id="举例说明原子操作重要性" tabindex="-1">举例说明原子操作重要性 <a class="header-anchor" href="#举例说明原子操作重要性" aria-label="Permalink to &quot;举例说明原子操作重要性&quot;">​</a></h1><p>在很多场景中我们需要我们的操作是原子特性的,如果我们写的程序都是单线程的,其实我们没必要考虑原子操作。但是假如 我们写多线程操作,或者是在Web服务中来更新对象属性,那么就必须要来考虑原子操作问题了。</p><p>举一个🌰例子A:</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>int a = 1;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>可以看到程序对变量 <code>a</code> 操作,其实是有多个步骤进行的。在单线程环境下基本不会发生任何问题 <img src="https://img.springlearn.cn/blog/learn_1589372995000.png" alt=""></p><p>举一个🌰例子B(单线程操作):</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>public class Tester {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private static Integer a = 1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private static AtomicInteger aa = new AtomicInteger(1);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private static void restore() {</span></span>
<span class="line"><span>        a = 1;</span></span>
<span class="line"><span>        aa = new AtomicInteger(1);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        for (int i = 0; i &lt; 10; i++) {</span></span>
<span class="line"><span>            test(&quot;第&quot; + i + &quot;次&quot;);</span></span>
<span class="line"><span>            restore();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private static void test(String str) {</span></span>
<span class="line"><span>        for (int i = 1; i &lt;= 1000; i++) {</span></span>
<span class="line"><span>            new Thread(() -&gt; a = a + 1).start();</span></span>
<span class="line"><span>            new Thread(() -&gt; aa.addAndGet(1)).start();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        System.out.print(str + &quot;常规操作a=&quot; + a);</span></span>
<span class="line"><span>        System.out.println(&quot; &lt;===&gt; &quot;+str+&quot;原子操作操作aa=&quot; + aa);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>规律:</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>        /**</span></span>
<span class="line"><span>         * i              i+1</span></span>
<span class="line"><span>         * 1: a = 1 + 1 = 2</span></span>
<span class="line"><span>         * 2: a = 2 + 1 = 3</span></span>
<span class="line"><span>         * 3: a = 3 + 1 = 4</span></span>
<span class="line"><span>         * 4: a = 4 + 1 = 5</span></span>
<span class="line"><span>         * 5: a = 5 + 1 = 6</span></span>
<span class="line"><span>         * 6: a = 6 + 1 = 7</span></span>
<span class="line"><span>         * 7: a = 7 + 1 = 8</span></span>
<span class="line"><span>         * 8: a = 8 + 1 = 9</span></span>
<span class="line"><span>         * 9: a = 9 + 1 = 10</span></span>
<span class="line"><span>         * 10:a = 10 + 1 = 11</span></span>
<span class="line"><span>         */</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>如上面代码变量a是基本类型,变量aa是原子类型,正常情况对a或者aa进行1000次操作结果都应该是 <code>1001</code>。正常情况我们可以理解是单线程操作。结果也是没有问题的。</p><p><img src="https://img.springlearn.cn/blog/learn_1589380382000.png" alt=""></p><p>举一个🌰例子C(多线程操作):</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>public class Tester {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private static Integer a = 1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private static AtomicInteger aa = new AtomicInteger(1);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private static void restore() {</span></span>
<span class="line"><span>        a = 1;</span></span>
<span class="line"><span>        aa = new AtomicInteger(1);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void main(String[] args) throws Exception {</span></span>
<span class="line"><span>        for (int i = 0; i &lt; 10; i++) {</span></span>
<span class="line"><span>            test(&quot;第&quot; + i + &quot;次&quot;);</span></span>
<span class="line"><span>            restore();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private static void test(String str) throws Exception {</span></span>
<span class="line"><span>        for (int i = 1; i &lt;= 100; i++) {</span></span>
<span class="line"><span>            new Thread(() -&gt; a = a + 1).start();</span></span>
<span class="line"><span>            new Thread(() -&gt; a = a + 1).start();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            new Thread(() -&gt; aa.addAndGet(1)).start();</span></span>
<span class="line"><span>            new Thread(() -&gt; aa.addAndGet(1)).start();</span></span>
<span class="line"><span>            Thread.sleep(1);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        System.out.print(str + &quot;常规操作a=&quot; + a);</span></span>
<span class="line"><span>        System.out.println(&quot; &lt;===&gt; &quot; + str + &quot;原子操作操作aa=&quot; + aa);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><p>规律:</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>    /**</span></span>
<span class="line"><span>     * i          2 * i + 1</span></span>
<span class="line"><span>     * 1: a = 1 + 1 + 1 = 3</span></span>
<span class="line"><span>     * 2: a = 3 + 1 + 1 = 5</span></span>
<span class="line"><span>     * 3: a = 5 + 1 + 1 = 7</span></span>
<span class="line"><span>     * 4: a = 7 + 1 + 1 = 9</span></span>
<span class="line"><span>     * 5:                 11</span></span>
<span class="line"><span>     * 6:                 13</span></span>
<span class="line"><span>     * 7:                 15</span></span>
<span class="line"><span>     * 8:                 17</span></span>
<span class="line"><span>     * 9:                 19</span></span>
<span class="line"><span>     * 10:                21</span></span>
<span class="line"><span>     */</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>多线程环境下操作会不会有问题呢? 出现了问题。我们看到使用常规操作的a变量出现了数据不一致情况。</p><p><img src="https://img.springlearn.cn/blog/learn_1589375176000.png" alt=""></p><p>实际上当循环的次数越多,出现错误的几率就越大,如下我们循环了1000次。</p><p><img src="https://img.springlearn.cn/blog/learn_1589375386000.png" alt=""></p><h1 id="问题分析" tabindex="-1">问题分析 <a class="header-anchor" href="#问题分析" aria-label="Permalink to &quot;问题分析&quot;">​</a></h1><p>我们思考为什么基本类型进行多线程操作时候会出现这种情况呢? 其实问题答案最开始已经说了。 我们通过这张图 就可以找到原因。</p><p><img src="https://img.springlearn.cn/blog/learn_1589372995000.png" alt=""></p><p>对变量的每次操作其实都有3个步骤</p><ol><li>读取变量值</li><li>变量值操作</li><li>变量重新赋值。</li></ol><p>我们模拟一下错误的原因。</p><p>当A线程读取a=1,并对1+1。但是还未对变量重新赋值a=2的时候， B线程也读取了A还未赋值的变量,此时变量还是1,那么B线程因为读取了还未更新的数据,所以也做1+1的操作。然后B对a 重新赋值了此时a=2,是B赋值的。这个时候A因为已经执行完了前两个步骤,最后也重新赋值了a=2。</p><p>这样数据就更新丢了。这就是因为数据更新不是原子性从而导致的问题。</p><p>因为数据更新丢了,所以出现了。</p><p><img src="https://img.springlearn.cn/blog/learn_1589380830000.png" alt=""></p><h1 id="如何解决这种问题" tabindex="-1">如何解决这种问题 <a class="header-anchor" href="#如何解决这种问题" aria-label="Permalink to &quot;如何解决这种问题&quot;">​</a></h1><p>如何解决这种问题,其实很简单只要我们保证我们的操作是原子操作即可,简单来说就是将更新的三个步骤合并成一个步骤即可,在Java中JDK已经为我们提供了很多的 原子操作每一个基本类型都对应一个原子操作。</p><h2 id="原子基础类" tabindex="-1">原子基础类 <a class="header-anchor" href="#原子基础类" aria-label="Permalink to &quot;原子基础类&quot;">​</a></h2><p><img src="https://img.springlearn.cn/blog/learn_1589378016000.png" alt=""></p><p><strong>原子基础类API</strong></p><p><img src="https://img.springlearn.cn/blog/learn_1589378409000.png" alt=""></p><h2 id="原子数组类" tabindex="-1">原子数组类 <a class="header-anchor" href="#原子数组类" aria-label="Permalink to &quot;原子数组类&quot;">​</a></h2><p><img src="https://img.springlearn.cn/blog/learn_1589378718000.png" alt=""></p><p><strong>原子更新数组API</strong></p><p><img src="https://img.springlearn.cn/blog/learn_1589378583000.png" alt=""></p><h2 id="原子引用类" tabindex="-1">原子引用类 <a class="header-anchor" href="#原子引用类" aria-label="Permalink to &quot;原子引用类&quot;">​</a></h2><p><img src="https://img.springlearn.cn/blog/learn_1589379304000.png" alt=""></p><p><strong>注意:</strong></p><p>想要原子的更新字段，需要两个步骤：</p><p>1.每次使用的时候必须使用静态方法newUpdater()创建一个更新器，并且需要设置想要更新的类和属性</p><p>2.更新类的字段（属性）必须使用public volatile修饰符</p><h1 id="最后我们看一下原子操作的原理" tabindex="-1">最后我们看一下原子操作的原理 <a class="header-anchor" href="#最后我们看一下原子操作的原理" aria-label="Permalink to &quot;最后我们看一下原子操作的原理&quot;">​</a></h1><p><img src="https://img.springlearn.cn/blog/learn_1589379629000.png" alt=""></p><p>最后求关注,求订阅,谢谢你的阅读!</p><p><img src="https://img.springlearn.cn/blog/learn_1589360371000.png" alt=""></p>`,55)]))}const g=n(l,[["render",r]]);export{m as __pageData,g as default};
