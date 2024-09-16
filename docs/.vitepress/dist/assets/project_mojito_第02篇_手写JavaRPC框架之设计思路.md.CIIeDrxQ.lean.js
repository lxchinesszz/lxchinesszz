import{_ as a,c as n,aa as i,o as p}from"./chunks/framework.CC62xl_U.js";const o=JSON.parse('{"title":"第02篇:手写JavaRPC框架之设计思路","description":"","frontmatter":{"breadcrumb":false,"navbar":true,"sidebar":true,"pageInfo":true,"contributor":true,"editLink":true,"updateTime":true,"prev":true,"next":true,"comment":true,"footer":true,"backtotop":true,"title":"第02篇:手写JavaRPC框架之设计思路","category":"Mojito"},"headers":[],"relativePath":"project/mojito/第02篇:手写JavaRPC框架之设计思路.md","filePath":"project/mojito/第02篇:手写JavaRPC框架之设计思路.md"}'),l={name:"project/mojito/第02篇:手写JavaRPC框架之设计思路.md"};function t(e,s,r,h,k,c){return p(),n("div",null,s[0]||(s[0]=[i(`<p><img src="https://img-blog.csdnimg.cn/img_convert/9f4a43fd785d69552fbe2f0463b3bd72.png" alt=""></p><blockquote><p>天下代码一大抄, 抄来抄去有提高, 看你会抄不会抄！</p></blockquote><p><img src="https://img-blog.csdnimg.cn/img_convert/10e3b1ba78ed2cd6afb33928df91a52f.gif" alt=""></p><h2 id="一、前言" tabindex="-1">一、前言 <a class="header-anchor" href="#一、前言" aria-label="Permalink to &quot;一、前言&quot;">​</a></h2><p>隔壁老李又在喷我了: &quot;完犊子了，小编这绝对是为了骗粉丝，而水的一篇文章，到了第二篇竟然还没有开始写代码，又是一篇纯概念文章&quot;。</p><p><strong>我也想写代码，但是在没有讲清楚思路之前，一定不要上来就蛮干</strong>，不然就毫无设计可言了。小编向各位观众老爷保证，下一篇文章绝对上代码。</p><p>本篇文章非常重要，这是我们本系列文章中的重中之重，本篇文章的主要内容就是设计我们自己的通信协议及架构，可以这样说如果没有了本篇文章的内容，就不可能实现RPC。因为RPC的最基本要求就是能实现远程通信。本篇文章是讲述通信层的设计思路，下一篇就是实战的编写。(ps: 其实下一篇比较好写，因为代码我早就写完了嘻嘻，而这一篇竟然酝酿了一周还写的...不忍直视)</p><h2 id="二、目标" tabindex="-1">二、目标 <a class="header-anchor" href="#二、目标" aria-label="Permalink to &quot;二、目标&quot;">​</a></h2><p>本篇文章主要会围绕以下三方面展开叙述，希望在通读全篇后，大家都能在脑子中形成对这三个方面的认识，因为下面的三个方面是通信层搭建的主要指导思想。</p><p><img src="https://img.springlearn.cn/blog/84baeb78cd51f010734381a55106c4d5.png" alt=""></p><ol><li>设计我们自己的通信协议</li><li>确定我们的通信层的架构</li><li>确定我们的工程结构</li></ol><h3 id="_2-1-为什么我们要设计自己的通信协议呢" tabindex="-1">2.1 为什么我们要设计自己的通信协议呢? <a class="header-anchor" href="#_2-1-为什么我们要设计自己的通信协议呢" aria-label="Permalink to &quot;2.1 为什么我们要设计自己的通信协议呢?&quot;">​</a></h3><p>上一篇我们也说了，实现RPC可以基于http也可以基于tcp。他们各有各的好处，如果是基于http其实我们的挑战就相对比较小一些，因为实现http的协议已经是在太多了，我们只用通过代理进行层层封装即可，而我们之所以要自己实现通信协议就是。</p><p><img src="https://img.springlearn.cn/blog/93db862c16863e2929f8f3fdef2f4fbf.png" alt=""> 作为Java程序猿还是要对底层通信协议的具体实现有点了解的。如果不了解的话也没关系，你只要知道他是二进制数据就可以了。<strong>我们一步一步通过代码编写将二进制数据转换成我们Java语言能够认识的数据就好了</strong>。如果这个过程你学会了，那么一通百通，http如何实现的其实大概也能知道猜到一点。</p><h3 id="_2-2-为什么要讲通信层的架构" tabindex="-1">2.2 为什么要讲通信层的架构？ <a class="header-anchor" href="#_2-2-为什么要讲通信层的架构" aria-label="Permalink to &quot;2.2 为什么要讲通信层的架构？&quot;">​</a></h3><p><strong>怎么理解架构？</strong></p><p>作为一个有经验的开发者，都会清楚，我们写代码就如同写文章。好的代码一定是思路清晰的，思路清晰的代码耦合性一定是很少的。我们举一个例子，最近大环境不好，大厂裁员较多，很多小伙伴都要面试吧，就举一个面试的问题，通过这个例子来解释下什么是架构。</p><ul><li>面试官说: 同学做一下自我介绍吧。</li></ul><p>首先我们不能懵啊，如果懵了就说明没有头绪了，这样就容易讲乱，没有头绪在开发过程中的体现就是代码写的杂乱。比如你在介绍家乡的时候突然穿插了一下爱好，而在讲爱好的时候，又穿插的讲了一下家乡。这样就会导致主题不分明，听者会感觉会乱。所以这里我们就需要 <strong>单一职责</strong>。首先定义清楚你的讲话的结构，然后每个结构点就一个职责。</p><p>如下我们设计的面试架构是这些点:</p><p>姓名，家乡，大学，专业，兴趣爱好，单位职称 .</p><p>下面我们只用实现每个点的内容(主题清晰)，最终将他组装成完成的自我介绍回答;</p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 姓名，家乡，大学，专业，兴趣爱好，单位职称 </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Introduce</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     // 这是一个介绍类,负责介绍自己</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">     public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> introduce</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> XiaoMing</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> implements</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Introduce</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     // 将任务进行拆分,拆分的维度是逻辑顺序,然后抽离出方法,抽离的维度是单一职责。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     // 这样的好处是工能化,模块化,便于复用。</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">     public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> introduce</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">         sout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;我叫小明&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">         // 主题介绍家乡</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">         introduceHometown</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">         // 主题介绍学校</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">         introduceSchool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">         // 主题介绍专业</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">         introduceMajor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">         // 主题介绍兴趣爱好</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">         introduceInterest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">         sout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;从业xx年,目前在公司的职称是xxx&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> introduceHometown</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">         sout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;我的老家是河南南阳&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">         sout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;我的家乡就坐落在河南南阳邓州市&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">         sout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;邓州市一个美丽的城市,是中国邓姓的发源地&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">         sout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;邓州也是河南境内人口最多的一个县级城市&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">     private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> introduceSchool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">         sout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;我大学是在河南大学&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">         sout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;河南大学简称河大，是一所位于中国河南省开封市涵盖文、史、哲、经、管、</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">         法、理、工、医、农、教育、艺术等12个学科门类的省部共建型综合性公立大学。&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">     private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> introduceMajor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">         sout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;我的专业是计算机与信息工程&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">     private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> introduceInterest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">         sout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;我的个人爱好是写博客、打游戏、做美食、偶会也会跑跑步&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div><p>有没有发现单一职责的设计，会很大程度提高我们的代码利用率呢? 我们要的就是这个效果，所以我们再开始编码之前，最好提前定义清楚我们的架构是怎么样的。</p><p>上面的例子，不知道小编有没有给大家解释清楚，但是总归我们的目的，是要在设计的时候就要<strong>明确责任划分，尽可能的单一职责</strong>。尽可能的解耦。</p><blockquote><p>要想设计一个好的框架，首先一定要有一个好的架构设计。这一点我们可以直接参考dubbo的设计架构。</p></blockquote><p><img src="https://img-blog.csdnimg.cn/396bb113af4142e68e5ec42641d3ee7d.png" alt="在这里插入图片描述"> 上半部分不用看，我们只用看通信层就好了。</p><ul><li>serialize 序列化层，负责将二进制数据转成Java认识的数据类型</li><li>transport 传输层，负责发送和接受数据</li><li>exchange 转换成，通信层和业务逻辑层转换的地方。</li><li>protocol 协议层，告诉serialize用什么协议来encode和decode数据的</li></ul><p>所以说，<strong>天下代码一大抄，抄来抄去有提高，就看你会抄不会抄了</strong>。 我们的设计就主要参考dubbo来了。</p><h3 id="_2-3-工程结构设计" tabindex="-1">2.3 工程结构设计 <a class="header-anchor" href="#_2-3-工程结构设计" aria-label="Permalink to &quot;2.3 工程结构设计&quot;">​</a></h3><p><img src="https://img.springlearn.cn/blog/752095b0de45bc72e7b12a88ec4d48e8.png" alt=""></p><p>目前市面上的框架基本上都是自己来定制通信层，而通信层基本也不会单独的提供出去。但是本系列小编希望是通信层和业务能分开。通信层可以做RPC也可以利用通信层去实现消息队列或者是web容器。所以因为这个设计，就要求我们的项目能单独的去发布。所以我们整体的项目结构是由三个部分组成的，如下。</p><p><img src="https://img.springlearn.cn/blog/e48f78a0091a911b5c8aecec3d528541.png" alt=""></p><h2 id="三、核心知识点" tabindex="-1">三、核心知识点 <a class="header-anchor" href="#三、核心知识点" aria-label="Permalink to &quot;三、核心知识点&quot;">​</a></h2><h3 id="_3-1-通信层协议定义" tabindex="-1">3.1 通信层协议定义 <a class="header-anchor" href="#_3-1-通信层协议定义" aria-label="Permalink to &quot;3.1 通信层协议定义&quot;">​</a></h3><p><strong>什么是协议呢?</strong></p><p>其实就是规则，我们按照什么样的方式将二进制数据转换成Java对象。</p><p>如下图，我们的一条数据会分为4个部分</p><ol><li>第一部分占用一个字节是协议标记，用来标记是http协议还是自定义协议。</li><li>第二部分占用一个字节是序列化标记，用来确定我们的真实报文使用什么来进行序列化和反序列化。</li><li>第三部分占用四个字节，用来表示数据的字节长度，确定真实报文的长度。</li><li>第四部分长度不固定，是真实的传输数据。最终会通过第二部分将这些二进制数据转换成Java对象。</li></ol><p><img src="https://img.springlearn.cn/blog/18634a291755ae51cd4e6ef64b0a8ac8.png" alt=""> 以上就是我们定义的数据解析协议，通过上面的规则将二进制数据，转换成Java对象。</p><p><strong>读到这里你有没有一点收获呢?</strong></p><p>有没有发现，其实协议的概念，其实很简单，就是一个规则或者说是约定。能让彼此都互相认识的一个约定。</p><p>在本系列中，我们会自定义一个协议，同时也会兼容支持http协议。如果感兴趣，就跟着小编一起coding吧。</p><h3 id="_3-2-通信层架构设计" tabindex="-1">3.2 通信层架构设计 <a class="header-anchor" href="#_3-2-通信层架构设计" aria-label="Permalink to &quot;3.2 通信层架构设计&quot;">​</a></h3><p>前面说了，我们是站在巨人的肩膀上的，根据dubbo的设计思路和我们的目标，我们也来画一张图。</p><p><img src="https://img.springlearn.cn/blog/learn_1600333949000.png" alt="在这里插入图片描述"> 我们的最终架构如上图。</p><table><thead><tr><th style="text-align:left;">包</th><th style="text-align:left;">作用</th></tr></thead><tbody><tr><td style="text-align:left;">serialize</td><td style="text-align:left;">序列化协议层,包含了多种序列化协议</td></tr><tr><td style="text-align:left;">codec</td><td style="text-align:left;">数据解码器和编码器的具体实现层</td></tr><tr><td style="text-align:left;">exchange</td><td style="text-align:left;">API交换层,业务层API和通信层API交换数据的地方，负责将业务数据转换成二进制数据发送，也负责将二进制数据转换成业务数据返回</td></tr><tr><td style="text-align:left;">model</td><td style="text-align:left;">基础数据模型</td></tr><tr><td style="text-align:left;">business</td><td style="text-align:left;">提供给开发者用来实现业务的api</td></tr><tr><td style="text-align:left;">api</td><td style="text-align:left;">Fluent 风格的api, 这种风格的好处是不需要记住接下来的步骤和方法</td></tr></tbody></table><h3 id="_3-3-工程结构" tabindex="-1">3.3 工程结构 <a class="header-anchor" href="#_3-3-工程结构" aria-label="Permalink to &quot;3.3 工程结构&quot;">​</a></h3><p><img src="https://img.springlearn.cn/blog/752095b0de45bc72e7b12a88ec4d48e8.png" alt=""></p><p>为了符合前面我们定的目标，所以我们要有一个大的工程。</p><table><thead><tr><th style="text-align:left;">项目名</th><th style="text-align:left;">职责</th></tr></thead><tbody><tr><td style="text-align:left;">mojito-net</td><td style="text-align:left;">底层通信模块</td></tr><tr><td style="text-align:left;">mojito-rpc</td><td style="text-align:left;">rpc模块</td></tr><tr><td style="text-align:left;">mojito-spring-boot-starter</td><td style="text-align:left;">springboot自动化配置</td></tr></tbody></table><p>由此我们的项目诞生了。下一篇我们就开始手撸代码吧。</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.</span></span>
<span class="line"><span>├── README.md</span></span>
<span class="line"><span>├── mojito-net</span></span>
<span class="line"><span>│   ├── pom.xml</span></span>
<span class="line"><span>│   └── src</span></span>
<span class="line"><span>│       ├── main</span></span>
<span class="line"><span>│       │   ├── java</span></span>
<span class="line"><span>│       │   └── resources</span></span>
<span class="line"><span>│       └── test</span></span>
<span class="line"><span>│           └── java</span></span>
<span class="line"><span>├── mojito-rpc</span></span>
<span class="line"><span>│   ├── pom.xml</span></span>
<span class="line"><span>│   └── src</span></span>
<span class="line"><span>│       ├── main</span></span>
<span class="line"><span>│       │   ├── java</span></span>
<span class="line"><span>│       │   └── resources</span></span>
<span class="line"><span>│       └── test</span></span>
<span class="line"><span>│           └── java</span></span>
<span class="line"><span>├── mojito-spring-boot-starter</span></span>
<span class="line"><span>│   ├── pom.xml</span></span>
<span class="line"><span>│   └── src</span></span>
<span class="line"><span>│       ├── main</span></span>
<span class="line"><span>│       │   ├── java</span></span>
<span class="line"><span>│       │   └── resources</span></span>
<span class="line"><span>│       └── test</span></span>
<span class="line"><span>│           └── java</span></span>
<span class="line"><span>└── pom.xml</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div>`,53)]))}const b=a(l,[["render",t]]);export{o as __pageData,b as default};
