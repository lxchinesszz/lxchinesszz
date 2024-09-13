import{_ as a,c as s,aa as e,o as l}from"./chunks/framework.swcE7GHT.js";const b=JSON.parse('{"title":"领域驱动模型的思考与认知","description":"","frontmatter":{"breadcrumb":false,"navbar":true,"sidebar":"auto","pageInfo":true,"contributor":true,"editLink":true,"updateTime":true,"prev":true,"next":true,"comment":false,"footer":true,"backtotop":true,"title":"领域驱动模型的思考与认知"},"headers":[],"relativePath":"design/领域驱动模型的思考与认知.md","filePath":"design/领域驱动模型的思考与认知.md"}'),p={name:"design/领域驱动模型的思考与认知.md"};function r(t,n,i,o,c,g){return l(),s("div",null,n[0]||(n[0]=[e(`<blockquote><p>本项目是基于小编的开发经验与心得,分享小编关于领域模型的理解, 个人愚见仅供参考,希望能为渴望进步的你提供帮助。如果你感到有用对你有帮助,请不要吝啬你的关注,求关注,求转发。 文章有三个议题，什么是领域模型,为什么需要领域模型设计,以及领域驱动的项目结构是什么样的?</p></blockquote><p><img src="https://img.springlearn.cn/blog/learn_1594392162000.png" alt=""></p><h2 id="一、领域驱动模型是什么" tabindex="-1">一、领域驱动模型是什么？ <a class="header-anchor" href="#一、领域驱动模型是什么" aria-label="Permalink to &quot;一、领域驱动模型是什么？&quot;">​</a></h2><p>如果你是第一次听到这个词,嗯,多么恐怖的一件事情呀! 什么是领域模型,一种新的技术吗? 领域模型到底有什么用呢? 为什么那么多大佬都在讲领域模型。网络上充斥着着各种高端的解释,各种高大上的名字,各种复杂的系统设计图。</p><p><img src="https://img.springlearn.cn/blog/learn_1595078884000.png" alt=""></p><p>fuck ! 身边总是有这样一群人的出现。总喜欢中文里加载者英文,英文中夹杂着中文,仿佛这样能使他们更加自信一样。把你讲懵了,他就自信了。 very fuck !</p><p>身为技术人,尽量想把一种事情给将清楚,说明白。而不是用各种抽象的晦涩难懂但看上去高大上的名词给解释。千万不要怕,下面我们通过先做一点小小的铺垫。最后在总结领域模型的理解。</p><h3 id="_1-贫血模型" tabindex="-1">1. 贫血模型 <a class="header-anchor" href="#_1-贫血模型" aria-label="Permalink to &quot;1. 贫血模型&quot;">​</a></h3><p>在讲清楚领域模型之前我们先来看引入一个词汇 <strong>“贫血模型”</strong> ，读到这里不要怕。只是一个词汇而已。是对我们平时的项目代码结构的一个形容词。相信无论面前的你 是一个大牛，还是一个刚入行的小菜鸟。你都一定写过这样的代码:</p><ul><li>dao层: 负责持久化</li><li>model层: 数据模型</li><li>service层: 服务层</li><li>web层: 提供对UI层的访问</li></ul><p>嗯。这就是一个典型的贫血模型, 哇,真的好形象,这是谁想出来的词汇,真想给他说一句 fuck you! 但是，但是，你还有更好的词汇来形容这种项目结构吗? 所谓贫血模型是指使用的领域对象中只有 <code>setter</code> 和 <code>getter</code> 方法（POJO），所有的业务逻辑都不包含在领域对象中而是放在业务逻辑层。</p><p>往往我们入行的初期我们都是在这样的项目结构中进行编程的,那个时候我们的业务往往都是简单的,对于那个时候的我们来说,这样的代码结构真是太好用了。清晰易懂。甚至想说一声 i love code !!!</p><p>这个时期,我们的关注点往往不是业务的复杂度,而是技术的使用,语法的使用。以及代码是否能编译通过。所以下面我们来总结一下贫血模型的优点。</p><h3 id="_2-贫血模型优点" tabindex="-1">2. 贫血模型优点 <a class="header-anchor" href="#_2-贫血模型优点" aria-label="Permalink to &quot;2. 贫血模型优点&quot;">​</a></h3><ol><li>被许多程序员所掌握，对于刚入行的同学来说，这种模型很自然很舒服，典型的MVC结构</li><li>它非常简单，对于并不复杂的业务，它工作得很好，开发起来非常迅速。它似乎也不需要对领域的充分了解，只要给出要实现功能的每一个步骤，就能实现它。</li><li>事务边界相当清楚，一般来说service的每个方法都可以看成一个事务。</li></ol><h3 id="_3-贫血模型缺点" tabindex="-1">3. 贫血模型缺点 <a class="header-anchor" href="#_3-贫血模型缺点" aria-label="Permalink to &quot;3. 贫血模型缺点&quot;">​</a></h3><p>随着发际线推移,随着历史的变迁,随着候鸟的迁徙。不知不觉我们的业务越来越复杂了。万恶的资本家,总想让我们一夜之间开发一个淘宝,一夜之间开发一个百度,一夜之间开发一个QQ。于是我们的service层,不断的 不断的增加。代码量从100行,200行,300行,10000行刹不住车了。终于小张忍不住了,辞职走了。留下了孤独的你独自承受这忧伤。 <img src="https://img.springlearn.cn/blog/learn_1594392402000.png" alt=""></p><p>这样代码是什么意思？ 这样代码能不能删？这行代码怎么没有走？这样代码能不能拆出去? 这样改万一项目上线崩溃了怎么办? 想一想老婆,望一望孩子。哎,算了吧。于是乎service复杂度指数般的递增。这就是贫血模型的缺点。</p><p><img src="https://img.springlearn.cn/blog/learn_1594392441000.png" alt=""></p><p><strong>缺点</strong></p><ol><li>所有的业务都在service中处理，当业越来越复杂时，service会变得越来越庞大，最终难以理解和维护，轻则项目组解散，重则妻离子散。</li><li>将所有的业务放在无状态的service中实际上是一个过程化的设计,这与面向对象的编程风格,相向而行。(你转身离开分手说不出来,海鸟跟鱼相爱只是一场意外)</li><li>项目代码写的不少,重用的不多。(fuck and fuck = double kill)</li></ol><h3 id="_4-充血模型" tabindex="-1">4. 充血模型 <a class="header-anchor" href="#_4-充血模型" aria-label="Permalink to &quot;4. 充血模型&quot;">​</a></h3><p>前面说我说了贫血模型,这里顺便提一下充血模型,也不要怕,也只是一个吓人的词汇。前面我们理解了贫血模型，那么充血模型，很容易就能理解。 前面我们说贫血模型实体类只有SET GET方法，逻辑基本在服务层实现。而**充血模型它的实体类里不但有状态，还有行为，即属性和方法都有。它的Service层很薄。**显然者不符合MVC的思想,因为充血模型中model中不仅有数据,还有状态。维护起来非常麻烦。</p><h3 id="_5-领域驱动总结" tabindex="-1">5. 领域驱动总结 <a class="header-anchor" href="#_5-领域驱动总结" aria-label="Permalink to &quot;5. 领域驱动总结&quot;">​</a></h3><p>针对贫血模型的service层非常复杂臃肿的缺点,领域模型的概念越来越流行起来,至少在一些很多的大公司中,非常盛行。领域模型的概念不仅可以重新去设计service,同时也在微服务设计中有重要的意义。 所以说领域模型其实就是要解决service越来越臃肿的一种设计思想。主要就是对service中的复杂的业务逻辑进行拆分,根据领域来进行拆分。用面向对象的思想去重新设计service。 有人给他起了一个高大上的词汇: 领域模型。</p><p>所以最后小编想用一大白话来总结一下领域模型。</p><p><strong>领域模型就是要用面向对象的思想去重新设计充斥着复杂业务逻辑的service层。</strong></p><h2 id="二、为什么要进行领域模型设计" tabindex="-1">二、为什么要进行领域模型设计? <a class="header-anchor" href="#二、为什么要进行领域模型设计" aria-label="Permalink to &quot;二、为什么要进行领域模型设计?&quot;">​</a></h2><p>相信看到这里的你,一定对领域模型有一个自己的认识。为什么要进行领域模型设计? 相信自己心里一定有一个自己的判断了。贫血模型的项目结构, service层无可避免的非常的臃肿，臃肿到一个方法可能深不见底。对于业务老油条，可能还凑合能看成，<br> 假如你是一个新的同学,当你看到这样的代码一定是崩溃的，假如说注释也没有,那你内心更是崩溃的。假如说这是一个很庞大的系统,很复杂的业务流程,这就更不用说了。 <img src="https://img.springlearn.cn/blog/learn_1594478376000.png" alt=""></p><p>如果读到这里,你还是对领域驱动设计感到迷茫，那么就其实这个标题也可以这样讲: <strong>我们如何对臃肿的service进行面向对象的设计。设计的过程就是对service层的代码进行领域设计。</strong><br> 而我们之所以这样做的目的。</p><ol><li>为了快乐的coding</li><li>为了业务系统的稳定</li><li>为了业务更快的迭代升级。</li></ol><p>当然这一切的前提是你对业务有一个全局的认识,有一个前瞻性的判断,否则也设计不出来,真正适合自身系统的领域驱动模型。</p><h2 id="三、领域驱动的项目结构是什么样的" tabindex="-1">三、领域驱动的项目结构是什么样的? <a class="header-anchor" href="#三、领域驱动的项目结构是什么样的" aria-label="Permalink to &quot;三、领域驱动的项目结构是什么样的?&quot;">​</a></h2><p>**一千个人眼里有一千个哈姆雷特,没有最好的项目结构,只有最适合自己的业务系统。**本文只是小编对领域驱动的模块的思考和认识。 仅供参考,希望对你有所启示和引导。</p><h3 id="_1-领域划分-模块化建造" tabindex="-1">1. 领域划分|模块化建造 <a class="header-anchor" href="#_1-领域划分-模块化建造" aria-label="Permalink to &quot;1. 领域划分|模块化建造&quot;">​</a></h3><p><img src="https://img.springlearn.cn/blog/learn_1594574191000.png" alt=""></p><p>领域划分,小编感觉用另外一个词形容也非常的合适,就是业务模块化。所有能力都进行能力化抽象,形成模块,形成领域。 当遇到新的业务逻辑,底层的数据结构和数据关系肯定也是一样的。那么就可以像堆积木一样,根据这些模块快速的组装成新的业务逻辑。快速的实现业务的迭代和升级。 关于这个问题,需要结合自己的业务系统来进行抽象和设计。而小编的能做的就是,提醒你<strong>模块化设计,领域化设计的重要意义。</strong></p><h3 id="_2-项目结构" tabindex="-1">2. 项目结构 <a class="header-anchor" href="#_2-项目结构" aria-label="Permalink to &quot;2. 项目结构&quot;">​</a></h3><p>基础层(外部调用,db操作) + 领域层(偏向领域的业务逻辑) + 业务层(对领域层的业务编排) + 外观层(可以提供能力,可以提供视图)。 有一个完善的领域层,可以方便快速便捷的对业务进行扩展。</p><p><img src="https://img.springlearn.cn/blog/learn_1595074590000.png" alt=""></p><p>领域层就是模块化设计的积木。丰富的模块化有助于业务扩展。</p><p>一定要控制项目的依赖情况。service只能出现领域层的依赖, 领域层只能存在dao层和第三方服务层。各个层代码不能平行调用。</p><p><img src="https://img.springlearn.cn/blog/learn_1595069641000.png" alt=""></p><h3 id="_3-编程规范" tabindex="-1">3. 编程规范 <a class="header-anchor" href="#_3-编程规范" aria-label="Permalink to &quot;3. 编程规范&quot;">​</a></h3><p>关于项目提出6个注意的点。如果把做项目比作是前线打仗,那么打仗最重要的是战斗成员目标要一致。在目标不一致的情况下一定要进行 充分讨论(项目负责人要做的),说明情况互相妥协指定出统一的项目编程规范。去进行执行。一旦指定不能违背。否则项目质量不保。</p><p><strong>项目固然重要,但是作为软件开发工程师,首先要对代码质量做保障。</strong></p><p><img src="https://img.springlearn.cn/blog/learn_1595078292000.png" alt=""></p><h3 id="_4-日志设计" tabindex="-1">4. 日志设计 <a class="header-anchor" href="#_4-日志设计" aria-label="Permalink to &quot;4. 日志设计&quot;">​</a></h3><p>天下没有完美的项目,任何系统不存在bug是不可能的。想要发现bug并快速定位问题,日志系统的不能缺少的。</p><p>日志系统是非常重要的系统, 对系统的监控, 在设计日志系统中,我们需要关注的点</p><ol><li>日志结构(目的是按照结构解析到日志引擎中) 如果想做日志的搜索平台,一定要进行日志结构化设计,方便被搜索平台的解析。如ELK日志搜索系统。</li><li>日志打印降级能力 在遇到大促时候,可以减少不必要的日志打印,要对日志打印做降级的设计</li><li>异步输入日志</li><li>日志归档</li></ol><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span></span>
<span class="line"><span>&lt;configuration&gt;</span></span>
<span class="line"><span>    &lt;!-- 系统日志打印 --&gt;</span></span>
<span class="line"><span>    &lt;appender name=&quot;logfile&quot; class=&quot;ch.qos.logback.core.rolling.RollingFileAppender&quot;&gt;</span></span>
<span class="line"><span>        &lt;File&gt;\${logger.logback.logpath}mbp-game-service.log&lt;/File&gt;</span></span>
<span class="line"><span>        &lt;encoder&gt;</span></span>
<span class="line"><span>            &lt;Pattern&gt;[%date] [%-5level] %c{40} %line --%mdc{client} [%X{TRACE_LOG_ID}] [%X{dstTraceId}] %msg%n&lt;/Pattern&gt;</span></span>
<span class="line"><span>            &lt;charset&gt;UTF-8&lt;/charset&gt;</span></span>
<span class="line"><span>        &lt;/encoder&gt;</span></span>
<span class="line"><span>        &lt;rollingPolicy class=&quot;ch.qos.logback.core.rolling.TimeBasedRollingPolicy&quot;&gt;</span></span>
<span class="line"><span>            &lt;fileNamePattern&gt;\${logger.logback.logpath}mbp-game-service.%d{yyyy-MM-dd}.%i.log&lt;/fileNamePattern&gt;</span></span>
<span class="line"><span>            &lt;maxHistory&gt;30&lt;/maxHistory&gt;</span></span>
<span class="line"><span>            &lt;TimeBasedFileNamingAndTriggeringPolicy class=&quot;ch.qos.logback.core.rolling.SizeAndTimeBasedFNATP&quot;&gt;</span></span>
<span class="line"><span>                &lt;maxFileSize&gt;512MB&lt;/maxFileSize&gt;</span></span>
<span class="line"><span>            &lt;/TimeBasedFileNamingAndTriggeringPolicy&gt;</span></span>
<span class="line"><span>        &lt;/rollingPolicy&gt;</span></span>
<span class="line"><span>    &lt;/appender&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;!-- 异步输出 --&gt;</span></span>
<span class="line"><span>    &lt;appender name=&quot;asyncAppender&quot; class=&quot;ch.qos.logback.classic.AsyncAppender&quot;&gt;</span></span>
<span class="line"><span>        &lt;!-- 不丢失日志.默认的,如果队列的80%已满,则会丢弃TRACT、DEBUG、INFO级别的日志 --&gt;</span></span>
<span class="line"><span>        &lt;discardingThreshold&gt;0&lt;/discardingThreshold&gt;</span></span>
<span class="line"><span>        &lt;!-- 更改默认的队列的深度,该值会影响性能.默认值为256 --&gt;</span></span>
<span class="line"><span>        &lt;queueSize&gt;1024&lt;/queueSize&gt;</span></span>
<span class="line"><span>        &lt;!-- 添加附加的appender,最多只能添加一个 --&gt;</span></span>
<span class="line"><span>        &lt;appender-ref ref=&quot;logfile&quot;/&gt;</span></span>
<span class="line"><span>    &lt;/appender&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;!-- 外部jar包 日志级别设置 --&gt;</span></span>
<span class="line"><span>    &lt;logger level=&quot;\${logger.outside.logLevel}&quot; name=&quot;com.ibatis&quot;/&gt;</span></span>
<span class="line"><span>    &lt;logger level=&quot;\${logger.outside.logLevel}&quot; name=&quot;org.springframework&quot;/&gt;</span></span>
<span class="line"><span>    &lt;logger level=&quot;\${logger.outside.logLevel}&quot; name=&quot;java.sql&quot;/&gt;</span></span>
<span class="line"><span>    &lt;logger level=&quot;\${logger.outside.logLevel}&quot; name=&quot;org.apache&quot;/&gt;</span></span>
<span class="line"><span>    &lt;logger level=&quot;\${logger.outside.logLevel}&quot; name=&quot;com.alibaba.dubbo&quot;/&gt;</span></span>
<span class="line"><span>    &lt;logger level=&quot;\${logger.outside.logLevel}&quot; name=&quot;org.I0Itec&quot;/&gt;</span></span>
<span class="line"><span>    &lt;logger level=&quot;\${logger.outside.logLevel}&quot; name=&quot;org.dozer&quot;/&gt;</span></span>
<span class="line"><span>    &lt;logger level=&quot;\${logger.outside.logLevel}&quot; name=&quot;kafka.producer.SyncProducer&quot;/&gt;</span></span>
<span class="line"><span>    &lt;logger level=&quot;\${logger.kafka.outside.logLevel}&quot; name=&quot;org.apache.kafka&quot;/&gt;</span></span>
<span class="line"><span>    &lt;logger level=&quot;\${logger.kafka.outside.logLevel}&quot; name=&quot;org.springframework.kafka&quot;/&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;!-- 输出到文件，可定义更多的 Appender --&gt;</span></span>
<span class="line"><span>    &lt;root level=&quot;\${logger.logLevel}&quot;&gt;</span></span>
<span class="line"><span>        &lt;appender-ref ref=&quot;asyncAppender&quot;/&gt;</span></span>
<span class="line"><span>    &lt;/root&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/configuration&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br></div></div><p>最后求关注,求订阅,谢谢你的阅读!</p><p><img src="https://img.springlearn.cn/blog/learn_1589360371000.png" alt=""></p>`,54)]))}const m=a(p,[["render",r]]);export{b as __pageData,m as default};
