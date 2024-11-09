import{_ as n,o as s,c as e,a4 as p}from"./chunks/framework.B8fosacB.js";const m=JSON.parse('{"title":"Redis缓存穿透雪崩问题","description":"","frontmatter":{"breadcrumb":false,"navbar":true,"sidebar":true,"pageInfo":true,"contributor":true,"editLink":true,"updateTime":true,"prev":true,"next":true,"comment":false,"footer":true,"backtotop":true,"title":"Redis缓存穿透雪崩问题","category":"缓存"},"headers":[],"relativePath":"post/java/高并发/Redis缓存穿透雪崩问题.md","filePath":"post/java/高并发/Redis缓存穿透雪崩问题.md","lastUpdated":1731158524000}'),l={name:"post/java/高并发/Redis缓存穿透雪崩问题.md"};function r(i,a,t,c,b,o){return s(),e("div",{"data-pagefind-body":!0},a[0]||(a[0]=[p(`<p><img src="https://img.springlearn.cn/learn_c87a079fcea0d7893b03d4d57478bca7.png" alt=""></p><p><strong>作者</strong>: 西魏陶渊明 <strong>博客</strong>: <a href="https://blog.springlearn.cn/" target="_blank" rel="noreferrer">https://blog.springlearn.cn/</a></p><div class="tip custom-block"><p class="custom-block-title">西魏陶渊明</p><p>莫笑少年江湖梦，谁不少年梦江湖</p></div><h2 id="一、缓存穿透" tabindex="-1">一、缓存穿透 <a class="header-anchor" href="#一、缓存穿透" aria-label="Permalink to &quot;一、缓存穿透&quot;">​</a></h2><p><strong>数据层没有,导致查询一直都是穿透了缓存去查db。</strong></p><p>缓存穿透的概念很简单，用户想要查询一个数据，发现redis内存数据库没有，也就是缓存没有命中，于是向持久层数据库查询。发现也没有，于是本次查询失败。当用户很多的时候，缓存都没有命中，于是都去请求了持久层数据库。这会给持久层数据库造成很大的压力，这时候就相当于出现了缓存穿透。</p><h3 id="解决方案" tabindex="-1">解决方案 <a class="header-anchor" href="#解决方案" aria-label="Permalink to &quot;解决方案&quot;">​</a></h3><h4 id="_1-布隆过滤器" tabindex="-1">（1）布隆过滤器 <a class="header-anchor" href="#_1-布隆过滤器" aria-label="Permalink to &quot;（1）布隆过滤器&quot;">​</a></h4><p>布隆过滤器是一种数据结构，垃圾网站和正常网站加起来全世界据统计也有几十亿个。网警要过滤这些垃圾网站，总不能到数据库里面一个一个去比较吧，这就可以使用布隆过滤器。假设我们存储一亿个垃圾网站地址。将者一亿个都放到布隆过滤器中。</p><p>原理: 将User中的指定的字段进行hash计算到某一个位置上,比如在本案例中name和age是两个字段分别映射到了。1和4。</p><p><img src="https://img.springlearn.cn/blog/learn_1596446105000.png" alt=""></p><p>当用xiaoming去查询发现，1和4都已经被标记成1了,说明就有这个值了。 而用xiaozhang去查询,发现小张对应的位置上都还是0说明就不存在这个值。</p><p>但是这也存在一个问题,假如说xiaozhang也被hash映射到了1和4,不存在xiaozhang但是布隆判断缺存在。</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>public class BloomFilterTest {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private static class User {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        private String name;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        private int age;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        public User(String name, int age) {</span></span>
<span class="line"><span>            this.name = name;</span></span>
<span class="line"><span>            this.age = age;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        public String getName() {</span></span>
<span class="line"><span>            return name;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        public int getAge() {</span></span>
<span class="line"><span>            return age;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        public void setName(String name) {</span></span>
<span class="line"><span>            this.name = name;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        public void setAge(int age) {</span></span>
<span class="line"><span>            this.age = age;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        BloomFilter&lt;User&gt; bloomFilter = BloomFilter.create((Funnel&lt;User&gt;) (user, primitiveSink) -&gt; primitiveSink.putString(user.getName(), Charset.defaultCharset())</span></span>
<span class="line"><span>                .putInt(user.getAge()), 10, 0.01);</span></span>
<span class="line"><span>        User xiaoming = new User(&quot;xiaoming&quot;, 1);</span></span>
<span class="line"><span>        bloomFilter.put(xiaoming);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        System.out.println(bloomFilter.mightContain(xiaoming));</span></span>
<span class="line"><span>        System.out.println(bloomFilter.mightContain(new User(&quot;xiaozhang&quot;, 2)));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><h4 id="_2-设置空对象" tabindex="-1">（2） 设置空对象 <a class="header-anchor" href="#_2-设置空对象" aria-label="Permalink to &quot;（2） 设置空对象&quot;">​</a></h4><p>当存储层不命中后，即使返回的空对象也将其缓存起来，同时会设置一个过期时间，之后再访问这个数据将会从缓存中获取，保护了后端数据源；</p><p>当数据层也没有发现就放一个空对象,空对象设置一个过期时间</p><h2 id="二、缓存击穿" tabindex="-1">二、缓存击穿 <a class="header-anchor" href="#二、缓存击穿" aria-label="Permalink to &quot;二、缓存击穿&quot;">​</a></h2><p>这种数据正常情况。就是给了一个说法名字而已</p><p><strong>缓存中本来存在,但是某一个顺序缓存过期失效了,就被击穿访问到db层。</strong></p><p>缓存击穿，是指一个key非常热点，在不停的扛着大并发，大并发集中对这一个点进行访问，当这个key在失效的瞬间，持续的大并发就穿破缓存，直接请求数据库，就像在一个屏障上凿开了一个洞。</p><h2 id="三、缓存雪崩" tabindex="-1">三、缓存雪崩 <a class="header-anchor" href="#三、缓存雪崩" aria-label="Permalink to &quot;三、缓存雪崩&quot;">​</a></h2><p>缓存雪崩是指，缓存层出现了错误，不能正常工作了。于是所有的请求都会达到存储层，存储层的调用量会暴增，造成存储层也会挂掉的情况。</p><h3 id="解决方案-1" tabindex="-1">解决方案 <a class="header-anchor" href="#解决方案-1" aria-label="Permalink to &quot;解决方案&quot;">​</a></h3><h4 id="_1-redis高可用" tabindex="-1">（1）redis高可用 <a class="header-anchor" href="#_1-redis高可用" aria-label="Permalink to &quot;（1）redis高可用&quot;">​</a></h4><p>这个思想的含义是，既然redis有可能挂掉，那我多增设几台redis，这样一台挂掉之后其他的还可以继续工作，其实就是搭建的集群。</p><h4 id="_2-限流降级" tabindex="-1">（2）限流降级 <a class="header-anchor" href="#_2-限流降级" aria-label="Permalink to &quot;（2）限流降级&quot;">​</a></h4><p>这个解决方案的思想是，在缓存失效后，通过加锁或者队列来控制读数据库写缓存的线程数量。比如对某个key只允许一个线程查询数据和写缓存，其他线程等待。</p><h4 id="_3-数据预热" tabindex="-1">（3）数据预热 <a class="header-anchor" href="#_3-数据预热" aria-label="Permalink to &quot;（3）数据预热&quot;">​</a></h4><p>数据加热的含义就是在正式部署之前，我先把可能的数据先预先访问一遍，这样部分可能大量访问的数据就会加载到缓存中。在即将发生大并发访问前手动触发加载缓存不同的key，设置不同的过期时间，让缓存失效的时间点尽量均匀。</p><p>最后求关注,求订阅,谢谢你的阅读!</p>`,31)]))}const d=n(l,[["render",r]]);export{m as __pageData,d as default};
