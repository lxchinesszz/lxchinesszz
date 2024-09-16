import{_ as e,c as r,aa as t,o as n}from"./chunks/framework.CC62xl_U.js";const g=JSON.parse('{"title":"synchronized锁升级","description":"","frontmatter":{"breadcrumb":false,"navbar":true,"sidebar":true,"pageInfo":true,"contributor":true,"editLink":true,"updateTime":true,"prev":true,"next":true,"comment":false,"footer":true,"backtotop":true,"title":"synchronized锁升级","category":"Java进阶"},"headers":[],"relativePath":"java/synchronized.md","filePath":"java/synchronized.md"}'),p={name:"java/synchronized.md"};function l(i,a,o,s,c,d){return n(),r("div",null,a[0]||(a[0]=[t('<p><img src="https://img.springlearn.cn/blog/learn_1596467333000.png" alt=""></p><p><strong>作者</strong>: 西魏陶渊明 <strong>博客</strong>: <a href="https://blog.springlearn.cn/" target="_blank" rel="noreferrer">https://blog.springlearn.cn/</a></p><div class="tip custom-block"><p class="custom-block-title">西魏陶渊明</p><p>莫笑少年江湖梦，谁不少年梦江湖</p></div><h2 id="一、重量级锁" tabindex="-1">一、重量级锁 <a class="header-anchor" href="#一、重量级锁" aria-label="Permalink to &quot;一、重量级锁&quot;">​</a></h2><p>什么叫重量级锁？</p><p>就是申请资源必须经过kernel(内核也叫操作系统)，调用。</p><p><img src="https://img.springlearn.cn/blog/learn_1596467437000.png" alt=""></p><h2 id="二、轻量级锁" tabindex="-1">二、轻量级锁 <a class="header-anchor" href="#二、轻量级锁" aria-label="Permalink to &quot;二、轻量级锁&quot;">​</a></h2><p>轻量级锁,是不经过操作系统。轻量级锁是相对于重量级锁来叫的,也可以叫乐观锁。</p><p>在Java中乐观锁就是cas操作(compare and swap)根据英文翻译就是比较和交换。 底层都是调用的Unsafe里面的方法,可以看到这些方法是native方法。</p><p><img src="https://img.springlearn.cn/blog/learn_1596467628000.png" alt=""></p><p>通过看jvm源码,看到c++的代码有一个汇编语言支持cas</p><p><img src="https://img.springlearn.cn/blog/learn_1596467784000.png" alt=""></p><p>但是，这条cmpchg1不具有原子性，点进lock_if_mp(%4)里</p><p>最终实现是lock cmpxchg 指令：表示在硬件在执行后面的指令会锁定一个北桥总线。（相当于锁定总线，但是比锁总线要轻量级）解决了下面的问题</p><h2 id="三、偏向锁" tabindex="-1">三、偏向锁 <a class="header-anchor" href="#三、偏向锁" aria-label="Permalink to &quot;三、偏向锁&quot;">​</a></h2><p>顾名思义，它会偏向于第一个访问锁的线程，如果在运行过程中，同步锁只有一个线程访问，不存在多线程争用的情况，则线程是不需要触发同步的，这种情况下，就会给线程加一个偏向锁。 说白了,没有竞争,还叫啥锁呀。就是加了一个标记。认为没有人给你竞争。</p><h2 id="四、锁升级步骤" tabindex="-1">四、锁升级步骤 <a class="header-anchor" href="#四、锁升级步骤" aria-label="Permalink to &quot;四、锁升级步骤&quot;">​</a></h2><p>偏向锁 -&gt; 轻量级锁 -&gt; 重量级锁</p><p>在jdk1.6之前synchronized直接就是一个重量级锁,一了百了。 jdk优化后出现了,锁升级的概念。</p><p>那么其实synchronized的执行过程:</p><ol><li>检测Mark Word里面是不是当前线程的ID，如果是，表示当前线程处于偏向锁</li><li>如果不是，则使用CAS将当前线程的ID替换Mard Word，如果成功则表示当前线程获得偏向锁，置偏向标志位1(前面一个线程刚好释放的情况下,这个才能成功,否则看3)</li><li>如果失败，则说明发生竞争，撤销偏向锁，进而升级为轻量级锁。</li><li>当前线程使用CAS将对象头的Mark Word替换为锁记录指针，如果成功，当前线程获得锁</li><li>如果失败，表示其他线程竞争锁，当前线程便尝试使用自旋来获取锁。</li><li>如果自旋成功则依然处于轻量级状态。</li><li>如果自旋失败，则升级为重量级锁。</li></ol><p>翻译成白话问:</p><ol><li><p>当没有人跟你竞争就是一个偏向锁,当cas失败了,说明有人跟你竞争了,这个时候锁就从偏向锁升级成了轻量级锁。</p></li><li><p>轻量级锁的状态下,仍然还有很多线程来竞争,那么此时cas就会比较严重从而浪费cpu执行。就升级为重量级锁。 其次其他等待线程就进入了阻塞状态。</p></li></ol><p>最后求关注,求订阅,谢谢你的阅读!</p>',25)]))}const m=e(p,[["render",l]]);export{g as __pageData,m as default};