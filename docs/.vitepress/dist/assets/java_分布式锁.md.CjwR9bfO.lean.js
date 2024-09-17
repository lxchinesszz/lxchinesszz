import{_ as s,c as a,aa as e,o as p}from"./chunks/framework.bT2BobGK.js";const d=JSON.parse('{"title":"分布式锁","description":"","frontmatter":{"breadcrumb":false,"navbar":true,"sidebar":true,"pageInfo":true,"contributor":true,"editLink":true,"updateTime":true,"prev":true,"next":true,"comment":false,"footer":true,"backtotop":true,"title":"分布式锁","category":"Java进阶"},"headers":[],"relativePath":"java/分布式锁.md","filePath":"java/分布式锁.md"}'),l={name:"java/分布式锁.md"};function r(i,n,t,c,o,b){return p(),a("div",null,n[0]||(n[0]=[e(`<p><img src="https://img.springlearn.cn/blog/learn_1596467333000.png" alt=""></p><p><strong>作者</strong>: 西魏陶渊明 <strong>博客</strong>: <a href="https://blog.springlearn.cn/" target="_blank" rel="noreferrer">https://blog.springlearn.cn/</a></p><div class="tip custom-block"><p class="custom-block-title">西魏陶渊明</p><p>在单机环境下多线程操作共享数据时候回用到锁的概念,因为是单机可以直接使用jdk提供的锁机制就可以满足。 但是在微服务场景下,因为是多服务共享数据,此时jdk提供的锁就不能再使用了。于是乎就有了分布式锁。 本文介绍常见的几种可以使用的生产的分布式锁</p></div><p><strong>本文面向有开发经验的同学,所以场景就不赘述,直接上干货</strong></p><h2 id="一、分布式锁具有的品格" tabindex="-1">一、分布式锁具有的品格 <a class="header-anchor" href="#一、分布式锁具有的品格" aria-label="Permalink to &quot;一、分布式锁具有的品格&quot;">​</a></h2><ul><li>基本的加锁和释放锁</li><li>具备锁失效机制,防止死锁</li><li>非阻塞机制</li><li>高性能和高可用</li></ul><h2 id="二、思考一下如何自己实现" tabindex="-1">二、思考一下如何自己实现? <a class="header-anchor" href="#二、思考一下如何自己实现" aria-label="Permalink to &quot;二、思考一下如何自己实现?&quot;">​</a></h2><h3 id="_1-db" tabindex="-1">1. db <a class="header-anchor" href="#_1-db" aria-label="Permalink to &quot;1. db&quot;">​</a></h3><p>根据上面提出的要求,发现只要能满足多服务之前通信就能实现。 比如我们可以用mysql就能实现,比如A服务对一个表加锁和释放锁。B服务就会发现表加了锁。此时B就阻塞了。</p><p>当然这明显不满足,非阻塞的机制。另外如果要用一个数据库来做锁的场景也太浪费性能了。</p><h3 id="_2-redis" tabindex="-1">2. redis <a class="header-anchor" href="#_2-redis" aria-label="Permalink to &quot;2. redis&quot;">​</a></h3><p>利用redis命令来实现,如果返回ok说明获取锁。返回nil说明没有获取到锁。</p><p>不阻塞,防止死锁,高性能,都满足</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>set key value [EX seconds] [PX milliseconds] [NX|XX]</span></span>
<span class="line"><span>EX seconds：设置失效时长，单位秒</span></span>
<span class="line"><span>PX milliseconds：设置失效时长，单位毫秒</span></span>
<span class="line"><span>NX：key不存在时设置value，成功返回OK，失败返回(nil)</span></span>
<span class="line"><span>XX：key存在时设置value，成功返回OK，失败返回(nil)</span></span>
<span class="line"><span>//对资源加一个锁 key为资源名 value可以为任意 ex为秒 1为过期时间 nx为</span></span>
<span class="line"><span>127.0.0.1:6379&gt; set ziyuanming 1 ex 1 nx</span></span>
<span class="line"><span>OK</span></span>
<span class="line"><span>127.0.0.1:6379&gt; set ziyuanming 1 ex 1 nx</span></span>
<span class="line"><span>(nil)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="_3-zookeeper" tabindex="-1">3. zookeeper <a class="header-anchor" href="#_3-zookeeper" aria-label="Permalink to &quot;3. zookeeper&quot;">​</a></h3><h4 id="获取锁" tabindex="-1">获取锁 <a class="header-anchor" href="#获取锁" aria-label="Permalink to &quot;获取锁&quot;">​</a></h4><ol><li>在Zookeeper当中创建一个持久节点ParentLock。当第一个客户端想要获得锁时，需要在ParentLock这个节点下面创建一个临时顺序节点 Lock1。</li><li>Client1查找ParentLock下面所有的临时顺序节点并排序，判断自己所创建的节点Lock1是不是顺序最靠前的一个。如果是第一个节点，则成功获得锁。</li><li>如果再有一个客户端 Client2 前来获取锁，则在ParentLock下载再创建一个临时顺序节点Lock2。 此时Client2发现自己并不是最靠前的就像Lock1注册了一个Watcher,用于监听Lock1节点释放。此时Client2就进入等待状态</li><li>Client3,4以此类推</li></ol><h4 id="释放锁" tabindex="-1">释放锁 <a class="header-anchor" href="#释放锁" aria-label="Permalink to &quot;释放锁&quot;">​</a></h4><ol><li>Client1释放了锁,此时Zookeeper就讲Lock1移出,并触发了Lock1的Watcher。</li><li>Client2一直在监听Lock1的状态,当Lock1节点被删除,Client2里面收到通知获得了锁。</li></ol><h2 id="三、现成的解决方案" tabindex="-1">三、现成的解决方案 <a class="header-anchor" href="#三、现成的解决方案" aria-label="Permalink to &quot;三、现成的解决方案&quot;">​</a></h2><h3 id="_1-db的方式就不考虑了" tabindex="-1">1. db的方式就不考虑了 <a class="header-anchor" href="#_1-db的方式就不考虑了" aria-label="Permalink to &quot;1. db的方式就不考虑了&quot;">​</a></h3><p>实现简单,但是不划算,性能也不是最好的。</p><h3 id="_2-redis-1" tabindex="-1">2. redis <a class="header-anchor" href="#_2-redis-1" aria-label="Permalink to &quot;2. redis&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;org.redisson&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;redisson&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;version&gt;3.11.0&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>public class RedLockTester {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        //连接redis</span></span>
<span class="line"><span>        Config config = new Config();</span></span>
<span class="line"><span>        config.useSingleServer().setAddress(&quot;redis://127.0.0.1:6379&quot;);</span></span>
<span class="line"><span>        RedissonClient redisson = Redisson.create(config);</span></span>
<span class="line"><span>        log.info(&quot;连接Redis&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //1.定义锁</span></span>
<span class="line"><span>        RLock lock = redisson.getLock(&quot;myTest001&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            //尝试加锁的超时时间</span></span>
<span class="line"><span>            Long timeout = 300L;</span></span>
<span class="line"><span>            //锁过期时间</span></span>
<span class="line"><span>            Long expire = 30L;</span></span>
<span class="line"><span>            //2.获取锁</span></span>
<span class="line"><span>            if (lock.tryLock(timeout, expire, TimeUnit.MILLISECONDS)) {</span></span>
<span class="line"><span>                //2.1.获取锁成功的处理</span></span>
<span class="line"><span>                log.info(&quot;加锁成功&quot;);</span></span>
<span class="line"><span>                //...do something</span></span>
<span class="line"><span>                log.info(&quot;使用完毕&quot;);</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>                //2.2.获取锁失败的处理</span></span>
<span class="line"><span>                log.info(&quot;加锁失败&quot;);</span></span>
<span class="line"><span>                log.info(&quot;其他处理&quot;);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        } catch (InterruptedException e) {</span></span>
<span class="line"><span>            log.error(&quot;尝试获取分布式锁失败&quot;, e);</span></span>
<span class="line"><span>        } finally {</span></span>
<span class="line"><span>            //3.释放锁</span></span>
<span class="line"><span>            try {</span></span>
<span class="line"><span>                lock.unlock();</span></span>
<span class="line"><span>                log.info(&quot;锁释放成功&quot;);</span></span>
<span class="line"><span>            } catch (Exception e) {</span></span>
<span class="line"><span>                //do nothing...</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //关闭连接</span></span>
<span class="line"><span>        redisson.shutdown();</span></span>
<span class="line"><span>        log.info(&quot;关闭redis连接&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div><p>通过官方文档能找到实现第三方工具</p><p><img src="https://img.springlearn.cn/blog/learn_1596471713000.png" alt=""></p><p><a href="https://www.cnblogs.com/rgcLOVEyaya/p/RGC_LOVE_YAYA_1003days.html" target="_blank" rel="noreferrer">参考文章</a></p><h3 id="_3-zookeeper-1" tabindex="-1">3. zookeeper <a class="header-anchor" href="#_3-zookeeper-1" aria-label="Permalink to &quot;3. zookeeper&quot;">​</a></h3><p><a href="https://curator.apache.org/" target="_blank" rel="noreferrer">Curator</a></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!-- 对zookeeper的底层api的一些封装 --&gt;</span></span>
<span class="line"><span>        &lt;dependency&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;org.apache.curator&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;curator-framework&lt;/artifactId&gt;</span></span>
<span class="line"><span>            &lt;version&gt;2.12.0&lt;/version&gt;</span></span>
<span class="line"><span>        &lt;/dependency&gt;</span></span>
<span class="line"><span>        &lt;!-- 封装了一些高级特性，如：Cache事件监听、选举、分布式锁、分布式Barrier --&gt;</span></span>
<span class="line"><span>        &lt;dependency&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;org.apache.curator&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;curator-recipes&lt;/artifactId&gt;</span></span>
<span class="line"><span>            &lt;version&gt;2.12.0&lt;/version&gt;</span></span>
<span class="line"><span>        &lt;/dependency&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>几乎对所有的JDK锁都实现了,基于Zookeeper的分布式锁。具体使用方法可以自行百度。</p><ul><li>InterProcessMutex：分布式可重入排它锁</li><li>InterProcessSemaphoreMutex：分布式排它锁</li><li>InterProcessReadWriteLock：分布式读写锁</li><li>InterProcessMultiLock：将多个锁作为单个实体管理的容器</li><li>InterProcessSemaphoreV2 信号量</li><li>DistributedBarrier 分布式栅栏</li><li>DistributedDoubleBarrier 分布式栅栏</li></ul><p>最后求关注,求订阅,谢谢你的阅读!</p>`,34)]))}const m=s(l,[["render",r]]);export{d as __pageData,m as default};
