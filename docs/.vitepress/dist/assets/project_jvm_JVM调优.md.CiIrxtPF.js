import{_ as a,c as s,o as i,ac as n}from"./chunks/framework.C9DUt1S1.js";const E=JSON.parse('{"title":"JVM调优","description":"","frontmatter":{"breadcrumb":false,"navbar":true,"sidebar":true,"pageInfo":true,"contributor":true,"editLink":true,"updateTime":true,"prev":true,"next":true,"comment":false,"footer":true,"backtotop":true,"sidebarDepth":3,"title":"JVM调优","password":123,"icon":"zuanshi","image":"https://img.springlearn.cn/blog/learn_1654183539000.png","category":"JVM"},"headers":[],"relativePath":"project/jvm/JVM调优.md","filePath":"project/jvm/JVM调优.md"}'),e={name:"project/jvm/JVM调优.md"},l=n(`<p><a href="https://github.com/lxchinesszz/learn-example/blob/master/learn-jvm/src/test/java/learn/jvm" target="_blank" rel="noreferrer">示例代码地址</a></p><h2 id="一、jvm内存介绍" tabindex="-1">一、JVM内存介绍 <a class="header-anchor" href="#一、jvm内存介绍" aria-label="Permalink to &quot;一、JVM内存介绍&quot;">​</a></h2><p>我们在学习JVM的内存管理的时候,我们的思维要跳出Java的局限。我们要这么理解。我们写的Java代码，是运行在JVM上的。 如果让你来实现JVM那么。你会怎么处理呢?</p><ul><li>公共部分(堆heap) <ul><li><code>Class字节码</code>是公共的,是共享的,所有线程都要认识字节码。</li><li><code>new的对象</code>是公共的,也是共享的,所有线程要都能认识这些实例对象,能读取到实例的数据。</li></ul></li><li>私有部分 (栈stock) <ul><li>Java中每个线程的执行中的代码，及代码中的局部变量等信息是私有的。每个线程之间都要维护一份。</li><li>JVM虚拟栈和本地方法栈。</li><li>代码是怎么执行的,当然是一行一行执行。那么这一行一行的代码是放在哪里的呢? 是放在栈里面的。Java代码是在JVM来执行的。 所以这个栈，我们称为<code>JVM虚拟栈</code>。</li><li>JVM中有些方法是调用其他语言实现的, 会使用<code>本地方法栈</code>。</li><li>那么谁来读取栈里面的数据,来出栈执行呢? 这叫做<code>PC寄存区</code>。</li></ul></li></ul><h2 id="_1-1-堆空间" tabindex="-1">1.1 堆空间 <a class="header-anchor" href="#_1-1-堆空间" aria-label="Permalink to &quot;1.1 堆空间&quot;">​</a></h2><p><a href="/project/jvm/JVM参数配置说明.html">JVM参数配置说明</a></p><p><img src="https://img.springlearn.cn/blog/learn_1654183539000.png" alt=""></p><h3 id="_1-1-1-堆上信息" tabindex="-1">1.1.1 堆上信息 <a class="header-anchor" href="#_1-1-1-堆上信息" aria-label="Permalink to &quot;1.1.1 堆上信息&quot;">​</a></h3><p><img src="https://img.springlearn.cn/blog/learn_1654188805000.png" alt=""></p><p><code>new</code> 出来的对象都在堆上。当堆的内存不足，会触发gc。<a href="/">GC策略</a>。</p><h3 id="_1-1-2-堆的相关配置" tabindex="-1">1.1.2 堆的相关配置 <a class="header-anchor" href="#_1-1-2-堆的相关配置" aria-label="Permalink to &quot;1.1.2 堆的相关配置&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">配置参数</th><th style="text-align:left;">说明</th><th style="text-align:left;">示例</th></tr></thead><tbody><tr><td style="text-align:left;"><code>-Xmx</code></td><td style="text-align:left;">设置最大堆大小。</td><td style="text-align:left;"><code>-Xmx3550m</code>，设置JVM最大可用内存为3550 MB。</td></tr><tr><td style="text-align:left;"><code>-Xms</code></td><td style="text-align:left;">设置JVM初始内存。</td><td style="text-align:left;"><code>-Xms3550m</code>，设置JVM初始内存为3550 MB。此值建议与<code>-Xmx</code>相同，避免每次垃圾回收完成后JVM重新分配内存。</td></tr><tr><td style="text-align:left;"><code>-Xmn2g</code></td><td style="text-align:left;">设置年轻代大小。</td><td style="text-align:left;"><code>-Xmn2g</code>，设置年轻代大小为2 GB。整个JVM内存大小=年轻代大小+年老代大小+持久代大小。持久代一般固定大小为64 MB，所以增大年轻代后，将会减小年老代大小。此值对系统性能影响较大，Sun官方推荐配置为整个堆的3/8。</td></tr><tr><td style="text-align:left;"><code>-XX:NewRatio=n</code></td><td style="text-align:left;">设置年轻代和年老代的比值。</td><td style="text-align:left;"><code>-XX:NewRatio=4</code>，设置年轻代（包括Eden和两个Survivor区）与年老代的比值（除去持久代）。如果设置为4，那么年轻代与年老代所占比值为1:4，年轻代占整个堆栈的1/5。</td></tr><tr><td style="text-align:left;"><code>-XX:SurvivorRatio=n</code></td><td style="text-align:left;">年轻代中Eden区与两个Survivor区的比值。</td><td style="text-align:left;"><code>-XX:SurvivorRatio=4</code>，设置年轻代中Eden区与Survivor区的大小比值。如果设置为4，那么两个Survivor区与一个Eden区的比值为2:4，一个Survivor区占整个年轻代的1/6。</td></tr><tr><td style="text-align:left;"><code>-XX:MaxPermSize=n</code></td><td style="text-align:left;">设置持久代大小。(JDK8以移除)</td><td style="text-align:left;"><code>-XX:MaxPermSize=16m</code>，设置持久代大小为16 MB。</td></tr><tr><td style="text-align:left;"><code>-XX:MaxTenuringThreshold=n</code></td><td style="text-align:left;">设置垃圾最大年龄。</td><td style="text-align:left;"><code>-XX:MaxTenuringThreshold=0</code>，设置垃圾最大年龄。如果设置为0，那么年轻代对象不经过Survivor区，直接进入年老代。对于年老代比较多的应用，提高了效率。如果将此值设置为较大值，那么年轻代对象会在Survivor区进行多次复制，增加了对象在年轻代的存活时间，增加在年轻代即被回收的概率。</td></tr></tbody></table><h3 id="_1-1-3-常见问题" tabindex="-1">1.1.3 常见问题 <a class="header-anchor" href="#_1-1-3-常见问题" aria-label="Permalink to &quot;1.1.3 常见问题&quot;">​</a></h3><ul><li>大对象，无法释放，导致内存移除。 <strong>堆上的问题是比较容易排查的,可以通过工具把堆的信息给dump下来,然后就能直接定位到大对象,并通过调用链路定位到具体的代码,后面会介绍工具</strong></li></ul><h2 id="_1-2-非堆空间" tabindex="-1">1.2 非堆空间 <a class="header-anchor" href="#_1-2-非堆空间" aria-label="Permalink to &quot;1.2 非堆空间&quot;">​</a></h2><p><img src="https://img.springlearn.cn/blog/learn_1654188048000.png" alt=""></p><h3 id="_1-2-1-非堆上的信息" tabindex="-1">1.2.1 非堆上的信息 <a class="header-anchor" href="#_1-2-1-非堆上的信息" aria-label="Permalink to &quot;1.2.1 非堆上的信息&quot;">​</a></h3><p><img src="https://img.springlearn.cn/blog/learn_1654188805000.png" alt=""></p><ul><li><code>Thread</code> 配置线程的栈大小，决定了你调用链的深度。</li><li><code>Metaspace</code> 可加载类的信息大小</li></ul><h3 id="_1-2-2-相关配置" tabindex="-1">1.2.2 相关配置 <a class="header-anchor" href="#_1-2-2-相关配置" aria-label="Permalink to &quot;1.2.2 相关配置&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">配置参数</th><th style="text-align:left;">说明</th><th style="text-align:left;">示例</th></tr></thead><tbody><tr><td style="text-align:left;"><code>-Xss</code></td><td style="text-align:left;">设置线程的栈大小。</td><td style="text-align:left;"><code>-Xss128k</code>，设置每个线程的栈大小为128 KB。<strong>说明</strong> JDK 5.0版本以后每个线程栈大小为1 MB，JDK 5.0以前版本每个线程栈大小为256 KB。请依据应用的线程所需内存大小进行调整。在相同物理内存下，减小该值可以生成更多的线程。但是操作系统对一个进程内的线程个数有一定的限制，无法无限生成，一般在3000个~5000个。</td></tr><tr><td style="text-align:left;"><code>-XX:MaxMetaspace=n</code></td><td style="text-align:left;">设置元空间大小。</td><td style="text-align:left;"><code>-XX:MaxMetaspace=16m</code>，设置元空间大小为16 MB。</td></tr></tbody></table><h2 id="二、工具介绍" tabindex="-1">二、工具介绍 <a class="header-anchor" href="#二、工具介绍" aria-label="Permalink to &quot;二、工具介绍&quot;">​</a></h2><h2 id="_2-1-原生命令" tabindex="-1">2.1 原生命令 <a class="header-anchor" href="#_2-1-原生命令" aria-label="Permalink to &quot;2.1 原生命令&quot;">​</a></h2><h2 id="_2-2-二方可视化分析" tabindex="-1">2.2 二方可视化分析 <a class="header-anchor" href="#_2-2-二方可视化分析" aria-label="Permalink to &quot;2.2 二方可视化分析&quot;">​</a></h2><h3 id="_2-2-1-idea-插件visualgc" tabindex="-1">2.2.1 idea 插件VisualGC <a class="header-anchor" href="#_2-2-1-idea-插件visualgc" aria-label="Permalink to &quot;2.2.1 idea 插件VisualGC&quot;">​</a></h3><p><img src="https://img.springlearn.cn/blog/learn_1654189397000.png" alt=""></p><p><img src="https://img.springlearn.cn/blog/learn_1654189362000.png" alt=""></p><h3 id="_2-2-2-jprofile" tabindex="-1">2.2.2 JProfile <a class="header-anchor" href="#_2-2-2-jprofile" aria-label="Permalink to &quot;2.2.2 JProfile&quot;">​</a></h3><p><a href="https://www.ej-technologies.com/products/jprofiler/overview.html" target="_blank" rel="noreferrer">JProfile</a></p><p><img src="https://img.springlearn.cn/blog/learn_1654189623000.png" alt=""></p><h3 id="_2-2-3-arthas" tabindex="-1">2.2.3 Arthas <a class="header-anchor" href="#_2-2-3-arthas" aria-label="Permalink to &quot;2.2.3 Arthas&quot;">​</a></h3><p><a href="https://arthas.aliyun.com/zh-cn/" target="_blank" rel="noreferrer">Arthas</a></p><p><strong>Arthas功能是比较强大的,非常适合用于排查些疑难问题</strong></p><p><img src="https://img.springlearn.cn/blog/learn_1654189757000.png" alt=""></p><h2 id="_2-3-gc日志学习" tabindex="-1">2.3 GC日志学习 <a class="header-anchor" href="#_2-3-gc日志学习" aria-label="Permalink to &quot;2.3 GC日志学习&quot;">​</a></h2><ul><li>开启GC日志参数 <code>-XX:+PrintGCDateStamps -XX:+PrintGCDetails -XX:+PrintGCDateStamps</code></li></ul><h3 id="_2-3-1-年轻代gc" tabindex="-1">2.3.1 年轻代GC <a class="header-anchor" href="#_2-3-1-年轻代gc" aria-label="Permalink to &quot;2.3.1 年轻代GC&quot;">​</a></h3><ul><li>首先是年轻代GC</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>2022-06-03T00:13:48.801-0800: </span></span>
<span class="line"><span>0.369: </span></span>
<span class="line"><span>[GC (Allocation Failure) </span></span>
<span class="line"><span>[PSYoungGen: 7168K-&gt;1513K(8704K)] 7168K-&gt;4097K(49664K), 0.0183816 secs] </span></span>
<span class="line"><span>[Times: user=0.02 sys=0.01, real=0.02 secs]</span></span></code></pre></div><ul><li><code>2022-06-03T00:13:48.801-0800</code> -XX:+PrintGCDateStamps 打印日期</li><li><code>0.369</code> -XX:+PrintGCDateStamps JVM启动到当前日期的总时长的时间戳形式</li><li><code>[GC (Allocation Failure)</code> GC 原因(Allocation Failure) 分配失败 <ul><li>==Allocation Failure== 分配失败</li><li>==Metadata GC Threshold== 元空间不足</li><li>==Last ditch collection== 元空间GC后,仍然不足,即触发</li></ul></li><li><code>PSYoungGen</code> 年轻代GC</li><li><code>Times</code> 耗时统计 <ul><li><code>user</code> 表示GC线程执行所使用的CPU总时间</li><li><code>sys</code> 进程在内核态消耗的CPU时间</li><li><code>real</code> 程序从开始到结束所用的时钟时间,这个时间接近 sys + user</li></ul></li></ul><p><strong>由于多核的原因,一般的GC事件中, real time是小于sys + user time的,因为一般是多个线程并发的去做GC,所以real time是要小于systuser time的</strong></p><h3 id="_2-3-2-老年代gc" tabindex="-1">2.3.2 老年代GC <a class="header-anchor" href="#_2-3-2-老年代gc" aria-label="Permalink to &quot;2.3.2 老年代GC&quot;">​</a></h3><p>老年代执行的是 Full GC，Full GC执行的时候，不止回收老年代，还会回收新生代和元数据空间</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>2022-06-03T00:22:27.829-0800:</span></span>
<span class="line"><span>0.798: </span></span>
<span class="line"><span>[Full GC (Allocation Failure) </span></span>
<span class="line"><span>[PSYoungGen: 0K-&gt;0K(8704K)] </span></span>
<span class="line"><span>[ParOldGen: 36024K-&gt;36006K(40960K)] 36024K-&gt;36006K(49664K), </span></span>
<span class="line"><span>[Metaspace: 3078K-&gt;3078K(1056768K)], 0.2006976 secs] </span></span>
<span class="line"><span>[Times: user=1.11 sys=0.01, real=0.21 secs]</span></span></code></pre></div><ul><li><code>2022-06-03T00:13:48.801-0800</code> -XX:+PrintGCDateStamps 打印日期</li><li><code>0.369</code> -XX:+PrintGCDateStamps JVM启动到当前日期的总时长的时间戳形式</li><li><code>[Full GC (Allocation Failure)</code> GC 原因(Allocation Failure) 分配失败 <ul><li>==Allocation Failure== 分配失败</li><li>==Metadata GC Threshold== 元空间不足</li><li>==Last ditch collection== 元空间GC后,仍然不足,即触发</li></ul></li><li><code>PSYoungGen</code> 年轻代GC</li><li><code>ParOldGen</code> 老年代GC</li><li><code>Metaspace</code> 元空间或者叫方法区GC</li><li><code>Times</code> 耗时统计 <ul><li><code>user</code> 表示GC线程执行所使用的CPU总时间</li><li><code>sys</code> 进程在内核态消耗的CPU时间</li><li><code>real</code> 程序从开始到结束所用的时钟时间,这个时间接近 sys + user</li></ul></li></ul><h2 id="三、场景分析" tabindex="-1">三、场景分析 <a class="header-anchor" href="#三、场景分析" aria-label="Permalink to &quot;三、场景分析&quot;">​</a></h2><h2 id="_3-1-堆空间导致oom" tabindex="-1">3.1 堆空间导致OOM <a class="header-anchor" href="#_3-1-堆空间导致oom" aria-label="Permalink to &quot;3.1 堆空间导致OOM&quot;">​</a></h2><h3 id="_3-1-1-模拟堆栈" tabindex="-1">3.1.1 模拟堆栈 <a class="header-anchor" href="#_3-1-1-模拟堆栈" aria-label="Permalink to &quot;3.1.1 模拟堆栈&quot;">​</a></h3><ul><li><code>HeapOverflowTest</code></li><li><code>StackOverflowTest</code></li></ul><h3 id="_3-1-2-现象" tabindex="-1">3.1.2 现象 <a class="header-anchor" href="#_3-1-2-现象" aria-label="Permalink to &quot;3.1.2 现象&quot;">​</a></h3><ol><li>频繁进行fu gc</li><li>应用吞吐量下降</li><li>应用rt上升</li><li>方法调用报错<strong>OutOfMemoryError : Java heap space</strong></li></ol><h3 id="_3-1-3-解决方案" tabindex="-1">3.1.3 解决方案 <a class="header-anchor" href="#_3-1-3-解决方案" aria-label="Permalink to &quot;3.1.3 解决方案&quot;">​</a></h3><ol><li><code>jps</code> 找到应用 <code>pid</code></li><li>把堆信息dump下来 <code>jmap -dump:format=b,file=heap.hprof \${pid}</code></li><li>打开JProfile 打开文件,直接看到大对象是哪个。</li></ol><p><img src="https://img.springlearn.cn/blog/learn_1654191631000.png" alt=""></p><h2 id="_3-2-cpu飙升" tabindex="-1">3.2 CPU飙升 <a class="header-anchor" href="#_3-2-cpu飙升" aria-label="Permalink to &quot;3.2 CPU飙升&quot;">​</a></h2><p>CPU飙升,可能是有线程一直在占用CPU。发生了死锁，发生了死循环之类的。这些情况是有问题的。 但是当你的机器流量比较大时候,同样也会导致CPU飙升,此时可能就需要加机器来进行解决。或者仅限限流。下面 只说有问题的场景,如何查看线程状态。</p><h3 id="_3-2-1-模拟异常" tabindex="-1">3.2.1 模拟异常 <a class="header-anchor" href="#_3-2-1-模拟异常" aria-label="Permalink to &quot;3.2.1 模拟异常&quot;">​</a></h3><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CPU</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[] </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">args</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Thread</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="_3-2-2-现象" tabindex="-1">3.2.2 现象 <a class="header-anchor" href="#_3-2-2-现象" aria-label="Permalink to &quot;3.2.2 现象&quot;">​</a></h3><ul><li>系统卡顿,吞吐量下降</li><li>如果没有限制启动参数,可能会导致宿主机也非常卡段,引用占用了很大CPU</li></ul><h3 id="_3-2-3-解决方案" tabindex="-1">3.2.3 解决方案 <a class="header-anchor" href="#_3-2-3-解决方案" aria-label="Permalink to &quot;3.2.3 解决方案&quot;">​</a></h3><ol><li>找到那些线程在阻塞 <code>jstack $PID</code></li><li>如下片段发现线程都是 <code>BLOCKED</code> 状态, 调用点都在 <code>CPU.java:18</code></li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&quot;Thread-497&quot; #508 prio=5 os_prio=31 tid=0x00007f88f58a0000 nid=0x41903 waiting for monitor entry [0x0000000326ea5000]</span></span>
<span class="line"><span>   java.lang.Thread.State: BLOCKED (on object monitor)</span></span>
<span class="line"><span>	at java.io.PrintStream.println(PrintStream.java:735)</span></span>
<span class="line"><span>	- waiting to lock &lt;0x00000007bce02720&gt; (a java.io.PrintStream)</span></span>
<span class="line"><span>	at learn.jvm.CPU.lambda$main$0(CPU.java:18)</span></span>
<span class="line"><span>	at learn.jvm.CPU$$Lambda$1/189568618.run(Unknown Source)</span></span>
<span class="line"><span>	at java.lang.Thread.run(Thread.java:748)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&quot;Thread-496&quot; #507 prio=5 os_prio=31 tid=0x00007f88f589f800 nid=0x41a03 waiting for monitor entry [0x0000000326da2000]</span></span>
<span class="line"><span>   java.lang.Thread.State: BLOCKED (on object monitor)</span></span>
<span class="line"><span>	at java.io.PrintStream.println(PrintStream.java:735)</span></span>
<span class="line"><span>	- waiting to lock &lt;0x00000007bce02720&gt; (a java.io.PrintStream)</span></span>
<span class="line"><span>	at learn.jvm.CPU.lambda$main$0(CPU.java:18)</span></span>
<span class="line"><span>	at learn.jvm.CPU$$Lambda$1/189568618.run(Unknown Source)</span></span>
<span class="line"><span>	at java.lang.Thread.run(Thread.java:748)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&quot;Thread-495&quot; #506 prio=5 os_prio=31 tid=0x00007f8905034000 nid=0x41c03 waiting for monitor entry [0x0000000326c9f000]</span></span>
<span class="line"><span>   java.lang.Thread.State: BLOCKED (on object monitor)</span></span>
<span class="line"><span>	at java.io.PrintStream.println(PrintStream.java:735)</span></span>
<span class="line"><span>	- waiting to lock &lt;0x00000007bce02720&gt; (a java.io.PrintStream)</span></span>
<span class="line"><span>	at learn.jvm.CPU.lambda$main$0(CPU.java:18)</span></span>
<span class="line"><span>	at learn.jvm.CPU$$Lambda$1/189568618.run(Unknown Source)</span></span>
<span class="line"><span>	at java.lang.Thread.run(Thread.java:748)</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">Arthas</p><p>当然如果你安装了 <code>Arthas</code></p><p>你可以 <code>thread -n 3</code> 打印出最忙的三个线程 <a href="https://arthas.gitee.io/thread.html#cpu" target="_blank" rel="noreferrer">thread</a>. 直接输入cpu使用量</p><p>thread -b, 找出当前阻塞其他线程的线程</p></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&quot;Thread-8&quot; Id=19 cpuUsage=89.17% deltaTime=188ms time=17319ms RUNNABLE</span></span>
<span class="line"><span>    at learn.jvm.CPU.lambda$main$0(CPU.java:13)</span></span>
<span class="line"><span>    at learn.jvm.CPU$$Lambda$1/500977346.run(Unknown Source)</span></span>
<span class="line"><span>    at java.lang.Thread.run(Thread.java:748)</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&quot;Thread-1&quot; Id=12 cpuUsage=85.62% deltaTime=180ms time=17296ms RUNNABLE</span></span>
<span class="line"><span>    at learn.jvm.CPU.lambda$main$0(CPU.java:13)</span></span>
<span class="line"><span>    at learn.jvm.CPU$$Lambda$1/500977346.run(Unknown Source)</span></span>
<span class="line"><span>    at java.lang.Thread.run(Thread.java:748)</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&quot;Thread-3&quot; Id=14 cpuUsage=84.42% deltaTime=178ms time=17315ms RUNNABLE</span></span>
<span class="line"><span>    at learn.jvm.CPU.lambda$main$0(CPU.java:13)</span></span>
<span class="line"><span>    at learn.jvm.CPU$$Lambda$1/500977346.run(Unknown Source)</span></span>
<span class="line"><span>    at java.lang.Thread.run(Thread.java:748)</span></span></code></pre></div><h2 id="_3-3-非堆空间导致oom" tabindex="-1">3.3 非堆空间导致OOM <a class="header-anchor" href="#_3-3-非堆空间导致oom" aria-label="Permalink to &quot;3.3 非堆空间导致OOM&quot;">​</a></h2><h3 id="_3-3-1-模拟异常" tabindex="-1">3.3.1 模拟异常 <a class="header-anchor" href="#_3-3-1-模拟异常" aria-label="Permalink to &quot;3.3.1 模拟异常&quot;">​</a></h3><p>启动参数: <code>-XX:MetaspaceSize=120m -XX:MaxMetaspaceSize=120m -XX:+PrintGCDetails -XX:+PrintGCDateStamps -Xloggc:/Users/liuxin/Github/learn-example/logs/gc.log</code></p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MetaspaceOverflowTest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * 查看元空间配置</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * java -XX:+PrintFlagsFinal -version | grep Metaspace</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * 方法区是JVM规范。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * - 永久代和元空间是实现</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * 元空间调优规则:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * 1. 最大最小设置成一样大</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * 防止内存抖动</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> args</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> -XX:MetaspaceSize=20m</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     *             -XX:MaxMetaspaceSize=20m</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     *             java.lang.OutOfMemoryError--&gt;Metaspace</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[] </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">args</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//        while (true) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            Sleeps.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sleep</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                Enhancer enhancer </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Enhancer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                enhancer.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setSuperclass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(MetaspaceOverflowTest.class);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                enhancer.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setUseCache</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                enhancer.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setCallback</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MethodInterceptor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Override</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                    public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Object </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">intercept</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Object </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">o</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, Method </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">method</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Object</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[] </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">objects</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, MethodProxy </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">methodProxy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">throws</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Throwable {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> methodProxy.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">invokeSuper</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(objects, args);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;create InstanceKlass...&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                enhancer.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">create</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//        }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        //  java.lang.OutOfMemoryError--&gt;Metaspace</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="_3-3-2-现象" tabindex="-1">3.3.2 现象 <a class="header-anchor" href="#_3-3-2-现象" aria-label="Permalink to &quot;3.3.2 现象&quot;">​</a></h3><p>当你收到运维告警,或者是明显感觉到系统吞吐量下降,甚至会有oom异常的时候,首先先去看下 GC日志，找到GC的原因。下面看下非堆空间溢出导致的GC日志,并配上前面的GC日志学习。来 排查下问题。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>CommandLine flags: -XX:CompressedClassSpaceSize=12582912 -XX:InitialHeapSize=268435456 -XX:MaxHeapSize=4294967296 -XX:MaxMetaspaceSize=20971520 -XX:MetaspaceSize=20971520 -XX:+PrintGC -XX:+PrintGCDateStamps -XX:+PrintGCDetails -XX:+PrintGCTimeStamps -XX:+UseCompressedClassPointers -XX:+UseCompressedOops -XX:+UseParallelGC </span></span>
<span class="line"><span>2022-06-20T18:12:26.411-0800: 1.749: [GC (Allocation Failure) [PSYoungGen: 65536K-&gt;3006K(76288K)] 65536K-&gt;3006K(251392K), 0.0233877 secs] [Times: user=0.06 sys=0.02, real=0.02 secs] </span></span>
<span class="line"><span>2022-06-20T18:12:26.960-0800: 2.298: [GC (Allocation Failure) [PSYoungGen: 68542K-&gt;3264K(141824K)] 68542K-&gt;3272K(316928K), 0.0194187 secs] [Times: user=0.08 sys=0.02, real=0.02 secs] </span></span>
<span class="line"><span>2022-06-20T18:12:27.824-0800: 3.162: \`[GC (Allocation Failure)\` [PSYoungGen: 134336K-&gt;5264K(141824K)] 134344K-&gt;5280K(316928K), 0.0145565 secs] [Times: user=0.06 sys=0.02, real=0.01 secs] </span></span>
<span class="line"><span>2022-06-20T18:12:28.526-0800: 3.864: [GC (Allocation Failure) [PSYoungGen: 136336K-&gt;6928K(272896K)] 136352K-&gt;6952K(448000K), 0.0198281 secs] [Times: user=0.09 sys=0.03, real=0.02 secs] </span></span>
<span class="line"><span>2022-06-20T18:12:29.252-0800: 4.590: [GC (Metadata GC Threshold) [PSYoungGen: 187304K-&gt;8848K(272896K)] 187328K-&gt;8880K(448000K), 0.0217320 secs] [Times: user=0.10 sys=0.02, real=0.02 secs] </span></span>
<span class="line"><span>2022-06-20T18:12:29.274-0800: 4.612: [Full GC (Metadata GC Threshold) [PSYoungGen: 8848K-&gt;0K(272896K)] [ParOldGen: 32K-&gt;8685K(86016K)] 8880K-&gt;8685K(358912K), [Metaspace: 20088K-&gt;20088K(1069056K)], 0.0245986 secs] [Times: user=0.10 sys=0.01, real=0.02 secs] </span></span>
<span class="line"><span>2022-06-20T18:12:29.299-0800: 4.637: [GC (Last ditch collection) [PSYoungGen: 0K-&gt;0K(476160K)] 8685K-&gt;8685K(562176K), 0.0005319 secs] [Times: user=0.01 sys=0.00, real=0.01 secs] </span></span>
<span class="line"><span>2022-06-20T18:12:29.300-0800: 4.638: [Full GC (Last ditch collection) [PSYoungGen: 0K-&gt;0K(476160K)] [ParOldGen: 8685K-&gt;3731K(155648K)] 8685K-&gt;3731K(631808K), [Metaspace: 20088K-&gt;20088K(1069056K)], 0.0187273 secs] [Times: user=0.07 sys=0.01, real=0.01 secs]</span></span></code></pre></div><p>从面的GC日志中我们能找到些GC原因,通过前面的学习。我们可以判断出来。</p><p><img src="https://img.springlearn.cn/blog/learn_1655720314000.png" alt=""></p><p>属于非堆空间造成的OOM。</p><h3 id="_3-3-3-解决方案" tabindex="-1">3.3.3 解决方案 <a class="header-anchor" href="#_3-3-3-解决方案" aria-label="Permalink to &quot;3.3.3 解决方案&quot;">​</a></h3><ol><li>排查看应用中是否有动态创建Class的地方</li><li>添加元空间大小(如果应用配置限制元空间大小,还出现了这样的问题,一般一定是程序中有bug导致)</li></ol>`,77),t=[l];function p(h,r,d,o,c,k){return i(),s("div",null,t)}const u=a(e,[["render",p]]);export{E as __pageData,u as default};
