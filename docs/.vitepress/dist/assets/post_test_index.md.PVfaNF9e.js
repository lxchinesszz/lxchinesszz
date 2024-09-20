import{_ as e,c as h,aa as n,m as t,a as i,H as l,w as p,D as r,o as k}from"./chunks/framework.FHBy0zsw.js";const y=JSON.parse('{"title":"单元测试专题","description":"","frontmatter":{"breadcrumb":false,"navbar":true,"sidebar":true,"pageInfo":true,"contributor":true,"editLink":true,"updateTime":true,"prev":true,"next":true,"comment":true,"footer":true,"backtotop":true,"title":"单元测试专题"},"headers":[],"relativePath":"post/test/index.md","filePath":"post/test/index.md"}'),E={name:"post/test/index.md"};function d(o,s,u,c,g,b){const a=r("Highlight");return k(),h("div",null,[s[8]||(s[8]=n('<p><img src="https://img.springlearn.cn/blog/learn_1617880083000.png" alt=""></p><p>沉淀、分享、成长、让自己和他人都有所收货。</p><h2 id="一、前言" tabindex="-1">一、前言 <a class="header-anchor" href="#一、前言" aria-label="Permalink to &quot;一、前言&quot;">​</a></h2><p>本系列文章主要的目的是提高大家对代码的单测意识, 其中文章主要会分享单测过程中,常见的测试场景及这些场景的解决方案和处理思路。 为了能使大家更好的了解单元测试,作为程序员首先从源码入手,分享JUnit的运行原理。在先了解了JUnit的原理后,再来回顾我们的问题场景, 就自然而然的从根源深处解决大家的测单痛点以及大家对单测框架不熟悉的情况。</p><h2 id="二、单测的意义" tabindex="-1">二、单测的意义 <a class="header-anchor" href="#二、单测的意义" aria-label="Permalink to &quot;二、单测的意义&quot;">​</a></h2><p><img src="https://img.springlearn.cn/blog/learn_1617886822000.png" alt=""></p><p>很多人说单测没有意义, 这是完全不正确的思想。相信随着码龄增加你会越发的认同这句话。据国外研究统计软件系统中最大的成本是 维护成本,所以你能看到凡是开源的框架单测一定是非常丰富的,因为它要去迭代升级,要去向下兼容版本。如果没有单测那就是完全的黑盒。 是好是坏听从天意,这是没有质量保证的。这点是软件系统都具有的所以说就这一点,就证明了单测的必须性。下面谈几个不写单元测试的说法。</p><h3 id="_2-1-压缩开发时间-任务延期" tabindex="-1">2.1 压缩开发时间,任务延期 <a class="header-anchor" href="#_2-1-压缩开发时间-任务延期" aria-label="Permalink to &quot;2.1 压缩开发时间,任务延期&quot;">​</a></h3><p>或许说中国的国情跟国外的不一样,中国的系统或者说是业务系统更新的快,单测用完就失效。写单测会压缩开发时间,导致任务延期。从眼下看是压缩了开发的时间,但是它提高了开发的质量,一定程度上减少了系统的维护成本。其次单测并不是说要对你所有的方法进行测试, 这个要针对业务系统情况,把系统的核心业务中使用到的核心方法进行详细的单测维护即可。系统的核心逻辑是不会经常变动的, 所以这部分的单测就是你整个单测的核心。</p><h3 id="_2-2-公司性质" tabindex="-1">2.2 公司性质 <a class="header-anchor" href="#_2-2-公司性质" aria-label="Permalink to &quot;2.2 公司性质&quot;">​</a></h3><p>像一般政府的项目基本都会给到外部的公司来竞争,部分的外包公司只注重交付,不注重质量。或者说这个项目就是一个xx工程, 没有实用价值。 只要上线就行。也不用维护。对于这种的确实现状是都不会写单元测试。(因为整个项目就是没有任何实用价值)</p><h3 id="_2-3-别人都不写-我为啥要写" tabindex="-1">2.3 别人都不写,我为啥要写 <a class="header-anchor" href="#_2-3-别人都不写-我为啥要写" aria-label="Permalink to &quot;2.3 别人都不写,我为啥要写&quot;">​</a></h3>',12)),t("p",null,[s[1]||(s[1]=i("代码是有温度的,养成好的习惯从自己做起。好习惯会传染,需要一个")),l(a,{color:"green"},{default:p(()=>s[0]||(s[0]=[i("好的带头人")])),_:1}),s[2]||(s[2]=i("。团队内部成员每个人都有自己负责的功能区域。 只要每个人针对自己的功能区域的核心计算逻辑写好单测,那么一定是好处大于坏处的。另外要写在平时,不要专门找时间来写代码。那样就容易把单测当做是任务去完成,就失去了写单测的意义。"))]),l(a,{color:"red"},{default:p(()=>s[3]||(s[3]=[i("相信你所认为虽然很正确,但是做起来很傻逼的事情,一定有人在默默的坚持着。努力做一个优秀的人。")])),_:1}),s[9]||(s[9]=n('<h3 id="_2-4-代码都测完了-要测试干嘛" tabindex="-1">2.4 代码都测完了,要测试干嘛 <a class="header-anchor" href="#_2-4-代码都测完了-要测试干嘛" aria-label="Permalink to &quot;2.4 代码都测完了,要测试干嘛&quot;">​</a></h3><p>自己测完了,要测试干嘛。首先如果你有这样的想法,那么一定是因为你不了解测试的工作。测试是开发的补充,他一定不是开发的保姆。测试 是对应用或系统的整体场景或者说功能的验证, 他不能对你代码的最小单元进行验证。所谓代码的最小单元一定是开发同学最了解的,代码的最小单元 就是你定义的代码块,方法,技术框架。这部分测试同学是无法帮你验证的。我们这里举一个例子。</p><p>软件工程师好比是盖大楼的,具体每一堵墙砖头如何摆放,房间如何设计,是否关注采光这是你设计师要干的事情,而测试好比质量验收,会看你整栋 大楼是否有倾斜,水电煤气是否可以使用。测试同学并不了解所有的细节。</p><p><img src="https://img.springlearn.cn/blog/learn_1618206722000.png" alt=""></p><p>开发和测试看到的东西不是完全一样的,越往上测试的黑盒越大。</p><p><img src="https://img.springlearn.cn/blog/learn_1618051810000.png" alt=""></p><h3 id="_2-5-应付覆盖率指标" tabindex="-1">2.5 应付覆盖率指标 <a class="header-anchor" href="#_2-5-应付覆盖率指标" aria-label="Permalink to &quot;2.5 应付覆盖率指标&quot;">​</a></h3><p>当然如果公司对这个有要求,一定会有应付的办法。最差的情况就是全部都是为了应付而写代码。从价值观上来看,这是不对的。从实用性上来看这是没有任何价值的。那么如何解决这个办法呢? 价值观来保证咯。那么就需要一个指标了(非硬性指标), 把数据量化展示出来,作为应用质量的一个参考的因素。 就算你全是应付而写,也一定有一定的价值。</p>',8)),t("p",null,[s[5]||(s[5]=i("另外要说一点的是")),l(a,{color:"red"},{default:p(()=>s[4]||(s[4]=[i("单测行覆盖率高不代表应用的质量就一定高,")])),_:1}),s[6]||(s[6]=i("但是单测行覆盖率低一定代表着这个应用出现质量问题的可能性就越大。 这无疑增加了业务风险和测试成本。为了减少业务风险和测试成本,希望大家提高对单测的意识。"))]),s[10]||(s[10]=n('<p><strong>那么我们在上升一点总结下如何提高应用的质量呢? 请看下文</strong></p><h2 id="三、应用质量的看法" tabindex="-1">三、应用质量的看法 <a class="header-anchor" href="#三、应用质量的看法" aria-label="Permalink to &quot;三、应用质量的看法&quot;">​</a></h2><p>应用质量如何来衡量, 这是一个完全可以通过指标来进行衡量的。那么究竟如何指标化呢? 这里首先对应用质量进行一个拆分。</p><p><img src="https://img.springlearn.cn/blog/learn_1617889750000.png" alt=""></p><p>可以将应用质量分为两种:</p><ol><li>代码编程质量(编程风格)</li><li>业务编程质量(业务是否清晰,异常场景的考虑)</li></ol><h3 id="_3-1-代码编程质量" tabindex="-1">3.1 代码编程质量 <a class="header-anchor" href="#_3-1-代码编程质量" aria-label="Permalink to &quot;3.1 代码编程质量&quot;">​</a></h3><p>代码编程质量往往只的是开发人员的编程风格,基于团队成员风格的相似度。 也可以说是代码的可读性,可维护性,方法的复杂度,方法的执行效率。这个是最容易指标化处理的。 基于规则引擎,进行静态代码扫描就可以扫描出。Sonar 或者 阿里规约都可以完成。 他们都会把问题分为四个等级Blocker, Critical, Major, Minor/Trivial。</p><h4 id="_3-1-1-blocker" tabindex="-1">3.1.1 Blocker <a class="header-anchor" href="#_3-1-1-blocker" aria-label="Permalink to &quot;3.1.1  Blocker&quot;">​</a></h4><p>即系统无法执行、崩溃或严重资源不足、应用模块无法启动或异常退出、无法测试、造成系统不稳定。</p><h4 id="_3-1-2-critical" tabindex="-1">3.1.2 Critical <a class="header-anchor" href="#_3-1-2-critical" aria-label="Permalink to &quot;3.1.2 Critical&quot;">​</a></h4><p>即影响系统功能或操作，主要功能存在严重缺陷，但不会影响到系统稳定性。</p><h4 id="_3-1-3-major" tabindex="-1">3.1.3 Major <a class="header-anchor" href="#_3-1-3-major" aria-label="Permalink to &quot;3.1.3 Major&quot;">​</a></h4><p>即界面、性能缺陷、兼容性。</p><h4 id="_3-1-4-minor-trivial" tabindex="-1">3.1.4 Minor/Trivial <a class="header-anchor" href="#_3-1-4-minor-trivial" aria-label="Permalink to &quot;3.1.4 Minor/Trivial&quot;">​</a></h4><p>即易用性及建议性问题。</p>',16)),l(a,{color:"red"},{default:p(()=>s[7]||(s[7]=[i("质量分计算")])),_:1}),s[11]||(s[11]=n(`<div class="danger custom-block"><p class="custom-block-title">质量分计算</p><p>100-(Blocker<em>100+Critical</em>10+Major*1)/(代码数/100)</p><ul><li>Blocker 占比100%,因为是比较严重的问题</li><li>Critical 低于Blocker占比10%</li><li>Major 性能缺陷占比1%</li></ul></div><h3 id="_2-2-业务编程质量" tabindex="-1">2.2 业务编程质量 <a class="header-anchor" href="#_2-2-业务编程质量" aria-label="Permalink to &quot;2.2 业务编程质量&quot;">​</a></h3><ul><li>对软件设计的最小单位进行正确性检测，如函数或一个类的方法。</li><li>系统集成测试</li></ul><p><img src="https://img.springlearn.cn/blog/learn_1618206722000.png" alt=""></p><h4 id="_2-2-1-ut由开发同学保证" tabindex="-1">2.2.1 UT由开发同学保证 <a class="header-anchor" href="#_2-2-1-ut由开发同学保证" aria-label="Permalink to &quot;2.2.1 UT由开发同学保证&quot;">​</a></h4><p>开发同学进行最小单元测试, 数据如何进行衡量呢?</p><p>基于Jenkins的 <code>Jcoco</code> 插件,会统计行覆盖率，类覆盖率，复杂方法覆盖率等。输出一个 可视化的图表。</p><h4 id="_2-2-2-it由自动化测试同学编写" tabindex="-1">2.2.2 IT由自动化测试同学编写 <a class="header-anchor" href="#_2-2-2-it由自动化测试同学编写" aria-label="Permalink to &quot;2.2.2 IT由自动化测试同学编写&quot;">​</a></h4><h2 id="四、代码编程质量例子" tabindex="-1">四、代码编程质量例子 <a class="header-anchor" href="#四、代码编程质量例子" aria-label="Permalink to &quot;四、代码编程质量例子&quot;">​</a></h2><p>面向对象的思想写入复用性高的代码</p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 姓名，家乡，大学，专业，兴趣爱好，单位职称 </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Introduce</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     // 这是一个介绍类,负责介绍自己</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">     public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> introduce</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> XiaoMing</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> implements</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Introduce</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">     public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> introduce</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">         sout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;我叫小明&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">         sout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;我的老家是河南南阳&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">         sout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;我的家乡就坐落在河南南阳邓州市&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">         sout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;邓州市一个美丽的城市,是中国邓姓的发源地&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">         sout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;邓州也是河南境内人口最多的一个县级城市&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">         sout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;我大学是在河南大学&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">         sout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;河南大学简称河大，是一所位于中国河南省开封市涵盖文、史、哲、经、管、</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">         法、理、工、医、农、教育、艺术等12个学科门类的省部共建型综合性公立大学。&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">         sout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;我的专业是计算机与信息工程&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">         sout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;我的个人爱好是写博客、打游戏、做美食、偶会也会跑跑步&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">         sout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;从业xx年,目前在公司的职称是xxx&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> XiaoMing</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> implements</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Introduce</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">     private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> introduceHometown</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
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
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     // 将任务进行拆分,拆分的维度是逻辑顺序,然后抽离出方法,抽离的维度是单一职责。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     // 这样的好处是工能化,模块化,便于复用。</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">     public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> introduce</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">         sout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;我叫小明&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">         introduceHometown</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">         introduceSchool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">         introduceMajor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">         introduceInterest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">         sout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;从业xx年,目前在公司的职称是xxx&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br></div></div><p>有人会说了,明明很简单就搞定了,为啥多写了这么多方法。这是因为你的思维没有转变过来,简单来说就是要 学会用面向对象的方法去写代码,不要写面向过程的代码了。如果高级点说就是代码层面上的领域驱动。 领域驱动和面向过程最大的相同就是思想上都是要对问题进行拆分成最小粒度,已解决代码冗余重复,以方便重复组装利用 ,以达到快速简单维护的目的。</p>`,12))])}const m=e(E,[["render",d]]);export{y as __pageData,m as default};