import{_ as n,c as s,aa as p,o as e}from"./chunks/framework.swcE7GHT.js";const h=JSON.parse('{"title":"面试再也不怕被HashMap欺负了","description":"","frontmatter":{"breadcrumb":false,"navbar":true,"sidebar":true,"pageInfo":true,"contributor":true,"editLink":true,"updateTime":true,"prev":true,"next":true,"comment":false,"footer":true,"backtotop":true,"title":"面试再也不怕被HashMap欺负了","category":"Java进阶"},"headers":[],"relativePath":"java/HashMap.md","filePath":"java/HashMap.md"}'),l={name:"java/HashMap.md"};function r(t,a,i,c,b,o){return e(),s("div",null,a[0]||(a[0]=[p(`<p><img src="https://img.springlearn.cn/blog/learn_1596467333000.png" alt=""></p><p><strong>作者</strong>: 西魏陶渊明 <strong>博客</strong>: <a href="https://blog.springlearn.cn/" target="_blank" rel="noreferrer">https://blog.springlearn.cn/</a></p><div class="tip custom-block"><p class="custom-block-title">西魏陶渊明</p><p>莫笑少年江湖梦，谁不少年梦江湖</p></div><blockquote><p>HashMap是我们在日常开发中经常使用的一个结合类型,同时也是面试时候最好提问的集合类型,在这里进行整理 一起学习,进步。</p></blockquote><h2 id="一、数据结构" tabindex="-1">一、数据结构 <a class="header-anchor" href="#一、数据结构" aria-label="Permalink to &quot;一、数据结构&quot;">​</a></h2><p>先说两种数据结构, 不用怕, 如果要对付面试只要了解就行了。不用手写实现, 同时也因为已经有人帮我写好,所以开发中我们只要用就行。</p><h3 id="_1-二叉树" tabindex="-1">1. 二叉树 <a class="header-anchor" href="#_1-二叉树" aria-label="Permalink to &quot;1. 二叉树&quot;">​</a></h3><p><a href="https://www.cs.usfca.edu/~galles/visualization/BST.html" target="_blank" rel="noreferrer">动画展示二叉树</a></p><p>本来是一个相对平衡的二叉树(当前数据 &gt; 根节点 ？ 从右边插入 : 从左边插入)。 <img src="https://img.springlearn.cn/blog/learn_1596522740000.png" alt=""> 但是由于在使用的过程中的删除,慢慢的变成了一个瘸腿。此时树的高度越高,数据越多,导致查询叶子 的耗时越长。 <img src="https://img.springlearn.cn/blog/learn_1596522608000.png" alt=""></p><p>于是乎人们在这个数据结构的基础上,研究出新的结构,就是下面的红黑树。</p><h3 id="_2-红黑树" tabindex="-1">2. 红黑树 <a class="header-anchor" href="#_2-红黑树" aria-label="Permalink to &quot;2. 红黑树&quot;">​</a></h3><p><a href="https://www.cs.usfca.edu/~galles/visualization/RedBlack.html" target="_blank" rel="noreferrer">动画展示红黑树</a></p><p>依次插入7 5 3 2 4 6 8 9 12 11 17 13 14 16</p><p>很明显我们可以看出红黑树比二叉树相对比较平衡。 <img src="https://img.springlearn.cn/blog/learn_1596523217000.png" alt=""></p><p>在对比一下二叉树</p><p><img src="https://img.springlearn.cn/blog/learn_1596523318000.png" alt=""></p><p>好了关于数据结构的知识就说这么多,可以通过图就能知道这两种数据结构情况了。因为数据结构不是我们本篇研究的点。 所以就提这么多。</p><h2 id="二、源码分析" tabindex="-1">二、源码分析 <a class="header-anchor" href="#二、源码分析" aria-label="Permalink to &quot;二、源码分析&quot;">​</a></h2><p>HashMap 实现了 Map 接口,JDK1.7由 数组 + 链表实现， 1.8后由 数组 + 链表 + 红黑树实现</p><p><img src="https://img.springlearn.cn/blog/learn_1596527068000.png" alt=""></p><h3 id="_1-put的源码分析" tabindex="-1">1. put的源码分析 <a class="header-anchor" href="#_1-put的源码分析" aria-label="Permalink to &quot;1. put的源码分析&quot;">​</a></h3><p>HashMap中声明的常量信息,注意看。下面源码中会提到。</p><table><thead><tr><th>变量</th><th>含义</th></tr></thead><tbody><tr><td>DEFAULT_INITIAL_CAPACITY</td><td>默认的初始容量</td></tr><tr><td>MAXIMUM_CAPACITY</td><td>最大的容量2^30</td></tr><tr><td>DEFAULT_LOAD_FACTOR</td><td>容器个数 size &gt; 负载因子 * 数组长度 就需要进行扩容</td></tr><tr><td>TREEIFY_THRESHOLD</td><td>如果数组中某一个链表 &gt;= 8 需要转化为红黑树</td></tr><tr><td>UNTREEIFY_THRESHOLD</td><td>如果数组中某一个链表转化为红黑树后的节点 &lt; 6 的时候 继续转为 链表</td></tr></tbody></table><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span> final V putVal(int hash, K key, V value, boolean onlyIfAbsent,</span></span>
<span class="line"><span>                   boolean evict) {</span></span>
<span class="line"><span>        Node&lt;K,V&gt;[] tab; Node&lt;K,V&gt; p; int n, i;</span></span>
<span class="line"><span>        if ((tab = table) == null || (n = tab.length) == 0)</span></span>
<span class="line"><span>            n = (tab = resize()).length;</span></span>
<span class="line"><span>        if ((p = tab[i = (n - 1) &amp; hash]) == null)</span></span>
<span class="line"><span>            tab[i] = newNode(hash, key, value, null);</span></span>
<span class="line"><span>        else {</span></span>
<span class="line"><span>            Node&lt;K,V&gt; e; K k;</span></span>
<span class="line"><span>            if (p.hash == hash &amp;&amp;</span></span>
<span class="line"><span>                ((k = p.key) == key || (key != null &amp;&amp; key.equals(k))))</span></span>
<span class="line"><span>                e = p;</span></span>
<span class="line"><span>            //判断是否是树    </span></span>
<span class="line"><span>            else if (p instanceof TreeNode)</span></span>
<span class="line"><span>                e = ((TreeNode&lt;K,V&gt;)p).putTreeVal(this, tab, hash, key, value);</span></span>
<span class="line"><span>            //继续用链表    </span></span>
<span class="line"><span>            else {</span></span>
<span class="line"><span>                // 循环链表</span></span>
<span class="line"><span>                for (int binCount = 0; ; ++binCount) {</span></span>
<span class="line"><span>                    if ((e = p.next) == null) {</span></span>
<span class="line"><span>                        // 新建节点存储</span></span>
<span class="line"><span>                        p.next = newNode(hash, key, value, null);</span></span>
<span class="line"><span>                        if (binCount &gt;= TREEIFY_THRESHOLD - 1) // -1 for 1st</span></span>
<span class="line"><span>                            //大于树的阀值,就转换为树结构</span></span>
<span class="line"><span>                            treeifyBin(tab, hash);</span></span>
<span class="line"><span>                        break;</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                    if (e.hash == hash &amp;&amp;</span></span>
<span class="line"><span>                        ((k = e.key) == key || (key != null &amp;&amp; key.equals(k))))</span></span>
<span class="line"><span>                        break;</span></span>
<span class="line"><span>                    p = e;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            if (e != null) { // existing mapping for key</span></span>
<span class="line"><span>                V oldValue = e.value;</span></span>
<span class="line"><span>                if (!onlyIfAbsent || oldValue == null)</span></span>
<span class="line"><span>                    e.value = value;</span></span>
<span class="line"><span>                afterNodeAccess(e);</span></span>
<span class="line"><span>                return oldValue;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        ++modCount;</span></span>
<span class="line"><span>        if (++size &gt; threshold)</span></span>
<span class="line"><span>            resize();</span></span>
<span class="line"><span>        afterNodeInsertion(evict);</span></span>
<span class="line"><span>        return null;</span></span>
<span class="line"><span>    }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br></div></div><p>从上面源码中我们可以看到在put时候会判断是链表结构还是红黑树。如果是树就用树put <code>((TreeNode&lt;K,V&gt;)p).putTreeVal(this, tab, hash, key, value);</code>。</p><p>如果是链表就循环列表插入数据,如果发现列表长度大于树的阀值就讲链表转换为树</p><h3 id="_2-put流程赘述" tabindex="-1">2. put流程赘述 <a class="header-anchor" href="#_2-put流程赘述" aria-label="Permalink to &quot;2. put流程赘述&quot;">​</a></h3><ol><li>判断 table 是否为 null。为 null 则新建一个 table 数组</li><li>调用 hash 获取 该 key 的 hash 值 <img src="https://img.springlearn.cn/blog/learn_1596528441000.png" alt=""></li><li>将hash &amp; n-1的值当做下标去找数据</li><li>如果发现有数据 <ol><li>但是数据的hash和key都和当前要插入的一致就替换。(此时还是一个Node节点)</li><li>但是数据的hash一致,但是key不一致,说明是hash冲突了。就转换成一个Node链表,数据放到链表尾部</li></ol></li><li>如果发现链表长度大于等于8,就转换成红黑树 <img src="https://img.springlearn.cn/blog/learn_1596528854000.png" alt=""></li></ol><h2 id="三、面试知识扩展" tabindex="-1">三、面试知识扩展 <a class="header-anchor" href="#三、面试知识扩展" aria-label="Permalink to &quot;三、面试知识扩展&quot;">​</a></h2><p>前面我们知道了HashMap在1.8之后的优化。这里我们最后再说一个面试题。 问: 1.7时候hashmap在扩容时候回出现死链的问题。问题原因是什么? 已经出现的场景是什么?</p><p>首先看下扩容方法 <code>resize</code><img src="https://img.springlearn.cn/blog/learn_1596530770000.png" alt=""></p><h3 id="_1-优化1" tabindex="-1">1. 优化1 <a class="header-anchor" href="#_1-优化1" aria-label="Permalink to &quot;1. 优化1&quot;">​</a></h3><p>jdk1.8在对链表进行扩容时候时候不是直接都去hash了。而是 <code>(e.hash &amp; oldCap) == 0</code> 下标不变 <code>(e.hash &amp; oldCap) != 0</code> 下标 = 原下标 + oldCap</p><h3 id="_2-出现的场景" tabindex="-1">2. 出现的场景 <a class="header-anchor" href="#_2-出现的场景" aria-label="Permalink to &quot;2. 出现的场景&quot;">​</a></h3><p>多线程操作扩容</p><p><img src="https://img.springlearn.cn/blog/learn_1596531864000.png" alt=""></p><p>最后求关注,求订阅,谢谢你的阅读!</p>`,37)]))}const d=n(l,[["render",r]]);export{h as __pageData,d as default};
