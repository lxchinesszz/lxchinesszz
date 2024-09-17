import{_ as a,C as e,c as p,H as t,aa as r,o as l}from"./chunks/framework.bT2BobGK.js";const h=JSON.parse('{"title":"字符串常量池","description":"","frontmatter":{"breadcrumb":false,"navbar":true,"sidebar":true,"pageInfo":true,"contributor":true,"editLink":true,"updateTime":true,"prev":true,"next":true,"comment":true,"footer":true,"backtotop":true,"title":"字符串常量池","category":"字符串常量池"},"headers":[],"relativePath":"java/tools/pool2/字符串常量池.md","filePath":"java/tools/pool2/字符串常量池.md"}'),i={name:"java/tools/pool2/字符串常量池.md"};function o(c,n,u,d,b,m){const s=e("Djt");return l(),p("div",null,[t(s),n[0]||(n[0]=r(`<p><strong>本篇课程不来虚的,上来就是干活,现在发车。小编通过代码案例及比喻,带你一窥究竟。</strong></p><h2 id="为什么会有常量池的概念" tabindex="-1">为什么会有常量池的概念? <a class="header-anchor" href="#为什么会有常量池的概念" aria-label="Permalink to &quot;为什么会有常量池的概念?&quot;">​</a></h2><p>不知道小伙伴们是否有思考过这个问题? 没有思考也无所谓,小编在这里类比一下,大家就会清晰了。 什么是池? 我们听的最多的池,应该是数据库连接池. 为什么会有数据库连接池,其实就是为了节省资源,提高性能,防止重复创建连接,避免占用内存和网络资源。</p><p>常量池其实就是跟数据库连接池的目的都是一样的。那么他是如何实现的呢? 因为常量池是JVM的概念，源码我们也不好看,所以我们还以连接池来类比,请看下文。</p><h2 id="池化的目标就是缓存和管理" tabindex="-1">池化的目标就是缓存和管理 <a class="header-anchor" href="#池化的目标就是缓存和管理" aria-label="Permalink to &quot;池化的目标就是缓存和管理&quot;">​</a></h2><p>稍微提一点池化的概念,其实就是对资源做一个包装,在包装层来加一些对这个资源的属性信息,比如使用次数,最后操作时间,最长生命周期一样。然后通过后台线程对资源包装层的扫描,来对真实资源的做一个管理。Google的Guava的Cache就是这么做的,我们自己也可以利用 <code>common-pool2</code> 工具包自己来做,或者说池化。</p><h2 id="jvm常量池就相当于一个缓存" tabindex="-1">JVM常量池就相当于一个缓存 <a class="header-anchor" href="#jvm常量池就相当于一个缓存" aria-label="Permalink to &quot;JVM常量池就相当于一个缓存&quot;">​</a></h2><p>常量就是不会改变的信息,那么既然是不会改变的信息,系统中只存在一份,就可以了。存在多份也是浪费内存资源。然而在Java中只要是new的信息都会在堆上开辟一个新的空间,为了解决这个问题,JVM中才出现了字符串常量池的概念。但是只有直接用<code>&quot;&quot;</code> 修饰的字符,才会被加入到常量池中,当再次用<code>&quot;&quot;</code>创建的时候,会首先从常量池中去获取。</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>String s1 = &quot;1&quot;;</span></span>
<span class="line"><span>String s2 = &quot;1&quot;;</span></span>
<span class="line"><span>//true</span></span>
<span class="line"><span>System.out.print(s1==s2); </span></span>
<span class="line"><span>String s3 = new String(&quot;1&quot;);</span></span>
<span class="line"><span>String s4 = new String(&quot;1&quot;);</span></span>
<span class="line"><span>//false</span></span>
<span class="line"><span>System.out.print(s3==s4);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>我们可以把常量池理解为一个Map&lt;String,String&gt;做的缓存容器。只不过这个缓存机制是有JVM使用C语言写的。我们看不到而已。</p><h2 id="string-intern-的使用" tabindex="-1">String.intern()的使用 <a class="header-anchor" href="#string-intern-的使用" aria-label="Permalink to &quot;String.intern()的使用&quot;">​</a></h2><p><img src="https://img.springlearn.cn/blog/learn_1567773914000.png" alt=""></p><p><code>new</code> 出来的 <code>String</code> 类型是否也能使用常量池呢? 当然可以,就是通过 <code>intern</code> 方法 这个方法的意思就是先到缓存中(也就是常量池中)查询当前对象是否存在,存在就返回常量池中地址,不存在就加入常量池。我们可以用一段伪代码来解释一波。</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>        //双引号直接放入常量池</span></span>
<span class="line"><span>        String s1 = &quot;1&quot;;</span></span>
<span class="line"><span>        String s2 = new String(&quot;1&quot;);</span></span>
<span class="line"><span>        //false</span></span>
<span class="line"><span>        System.out.println(s1 == s2);</span></span>
<span class="line"><span>        //先到常量池中查询是否有”1“,存在就将常量池中对象返回,不存在就放到常量池中(此时常量池中存在s1)</span></span>
<span class="line"><span>        //于是就将s1的值重新复制给s3,所以s1 == s3</span></span>
<span class="line"><span>        String s3 = new String(&quot;1&quot;).intern();</span></span>
<span class="line"><span>        //true</span></span>
<span class="line"><span>        System.out.println(s1 == s3);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,14))])}const q=a(i,[["render",o]]);export{h as __pageData,q as default};
