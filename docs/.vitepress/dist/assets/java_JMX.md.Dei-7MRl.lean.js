import{_ as n,c as a,aa as i,o as p}from"./chunks/framework.swcE7GHT.js";const o=JSON.parse('{"title":"Java管理扩展","description":"","frontmatter":{"breadcrumb":false,"navbar":true,"sidebar":true,"pageInfo":true,"contributor":true,"editLink":true,"updateTime":true,"prev":true,"next":true,"comment":false,"footer":true,"backtotop":true,"title":"Java管理扩展","category":"Java进阶"},"headers":[],"relativePath":"java/JMX.md","filePath":"java/JMX.md"}'),e={name:"java/JMX.md"};function l(t,s,r,h,k,c){return p(),a("div",null,s[0]||(s[0]=[i(`<p><img src="https://img.springlearn.cn/blog/learn_1590919227000.png" alt=""></p><p><strong>作者</strong>: 西魏陶渊明 <strong>博客</strong>: <a href="https://blog.springlearn.cn/" target="_blank" rel="noreferrer">https://blog.springlearn.cn/</a></p><div class="tip custom-block"><p class="custom-block-title">西魏陶渊明</p><p>莫笑少年江湖梦，谁不少年梦江湖</p></div><p><strong>JMX（Java Management Extensions，即Java管理扩展）是一个为应用程序、设备、系统等植入管理功能的框架。JMX可以跨越一系列异构操作系统平台、系统体系结构和网络传输协议，灵活的开发无缝集成的系统、网络和服务管理应用。</strong></p><p>前面是对JMX的介绍，那么JMX在我们日常的开发过程中，有什么实际的意义呢? 相信很多做Java开发的同学都使用过JDK自带的 jconsole 或者 jvisualvm 监控过JVM的运行情况，但不知道有没有留意过它们会有一个MBean的功能/标签，通过MBean可以看到在JVM中运行的组件的一些属性和操作。下面小编就通过一个SpringBoot应用来一探究竟。并教会你如何自定义扩展。</p><h2 id="一、实际意义" tabindex="-1">一、实际意义 <a class="header-anchor" href="#一、实际意义" aria-label="Permalink to &quot;一、实际意义&quot;">​</a></h2><h3 id="_1-启动一个springboot应用" tabindex="-1">1. 启动一个SpringBoot应用 <a class="header-anchor" href="#_1-启动一个springboot应用" aria-label="Permalink to &quot;1. 启动一个SpringBoot应用&quot;">​</a></h3><p>下面我们以SpringBoot应用为例子，启动一个SpringBoot项目。端口是 <code>8080</code></p><p><img src="https://img.springlearn.cn/blog/learn_1590921574000.png" alt=""></p><h3 id="_2-命令行打开jconsole" tabindex="-1">2. 命令行打开Jconsole <a class="header-anchor" href="#_2-命令行打开jconsole" aria-label="Permalink to &quot;2. 命令行打开Jconsole&quot;">​</a></h3><p><img src="https://img.springlearn.cn/blog/learn_1590921682000.png" alt=""></p><h3 id="_3-连接前面的应用" tabindex="-1">3. 连接前面的应用 <a class="header-anchor" href="#_3-连接前面的应用" aria-label="Permalink to &quot;3. 连接前面的应用&quot;">​</a></h3><p><img src="https://tva1.sinaimg.cn/large/007S8ZIlly1gfbtkkzi1bj30p00ku761.jpg" alt="image-20200531184151871"></p><p>选中MBean标签,然后可以看到一个SpringApplication的类。shutdown是服务下线。</p><p><img src="https://img.springlearn.cn/blog/learn_1590921783000.png" alt=""></p><p>当我们点击了shutdown方法后,应用就会自动的关闭了。导致Jconsole连接丢失 <img src="https://tva1.sinaimg.cn/large/007S8ZIlly1gfbtpwfbbqj30oy0i2gof.jpg" alt="image-20200531184702204"></p><p>getProperty方法是获取应用中的配置信息。如图我们获取redis的相关信息。可以看到返回值是Spring应用中我们定义的值 6379</p><p><img src="https://img.springlearn.cn/blog/learn_1590921918000.png" alt=""></p><p><img src="https://tva1.sinaimg.cn/large/007S8ZIlly1gfbtoo8x1yj30lc07imy6.jpg" alt="image-20200531184553346"></p><p>那么其实这个能力就是利用JMX提供的接口来实现的。下面我们通过分析SpringBoot中的源码来看他是如何实现的。</p><hr><h2 id="二、源码追踪看springboot应用如何实现" tabindex="-1">二、源码追踪看SpringBoot应用如何实现? <a class="header-anchor" href="#二、源码追踪看springboot应用如何实现" aria-label="Permalink to &quot;二、源码追踪看SpringBoot应用如何实现?&quot;">​</a></h2><p>我们通过看Jconsole工具,可以看到工具里面的类名叫SpringApplication，目录是admin，于是我们就根据这个推测SpringBoot中的命名,果然我们找到两个实现类。</p><p><img src="https://img.springlearn.cn/blog/learn_1590922192000.png" alt=""></p><p><strong>1. SpringApplicationAdminMXBean</strong></p><p>这个类就是JMX中的MBean，我们可以简单理解这个里面的方法都是可以通过Jconsole来调用的。 通过将这个类注册给JMX管理器就能实现在Jconsole中的数据展示。</p><p>首先看<strong>SpringApplicationAdminMXBean</strong></p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SpringApplicationAdminMXBean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   //是否可读</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">   boolean</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> isReady</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   //是否web应用</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">   boolean</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> isEmbeddedWebApplication</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   //获取配置信息</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   String </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getProperty</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(String </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   //下线应用</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">   void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> shutdown</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>实现类<strong>SpringApplicationAdmin</strong>,是SpringApplicationAdminMXBeanRegistrar的内部类</p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SpringApplicationAdmin</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> implements</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SpringApplicationAdminMXBean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 是否可读，当应用还没起来时候这个值是false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Override</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> boolean</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> isReady</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">         return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SpringApplicationAdminMXBeanRegistrar.this.ready;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 是否是web应用</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Override</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> boolean</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> isEmbeddedWebApplication</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">         return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SpringApplicationAdminMXBeanRegistrar.this.embeddedWebApplication;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 从Spring的配置信息中实时读取值</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Override</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> String </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getProperty</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(String </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">         return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SpringApplicationAdminMXBeanRegistrar.this.environment.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getProperty</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(key);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 关闭Spring应用</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Override</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> shutdown</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         logger.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">info</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Application shutdown requested.&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         SpringApplicationAdminMXBeanRegistrar.this.applicationContext.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">close</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p><strong>2. SpringApplicationAdminMXBeanRegistrar</strong></p><p>提供注册能力。这个类中我们可以知道如何注册JMX以及如何取消注册。下面我看这个类如何利用Spring提供的接口能力,来实现应用下线。及注册到JMX上的吧。</p><p><img src="https://img.springlearn.cn/blog/learn_1590922871000.png" alt=""></p><p>自动化配置将SpringApplicationAdminMXBeanRegistrar声明成一个Spring中的Bean对象。并配置JMX中的命名及目录。 <img src="https://img.springlearn.cn/blog/learn_1590923451000.png" alt=""></p><h3 id="_1-applicationcontextaware" tabindex="-1">1. ApplicationContextAware <a class="header-anchor" href="#_1-applicationcontextaware" aria-label="Permalink to &quot;1. ApplicationContextAware&quot;">​</a></h3><p>获得读取上下文能力。在Spring容器中一个bean如何实现了该方法则就可以获取上下文对象。</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>   @Override</span></span>
<span class="line"><span>   public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {</span></span>
<span class="line"><span>      Assert.state(applicationContext instanceof ConfigurableApplicationContext,</span></span>
<span class="line"><span>            &quot;ApplicationContext does not implement ConfigurableApplicationContext&quot;);</span></span>
<span class="line"><span>      this.applicationContext = (ConfigurableApplicationContext) applicationContext;</span></span>
<span class="line"><span>   }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="_2-genericapplicationlistener" tabindex="-1">2. GenericApplicationListener <a class="header-anchor" href="#_2-genericapplicationlistener" aria-label="Permalink to &quot;2. GenericApplicationListener&quot;">​</a></h3><p>获取处理事件的能力,同样在Spring中只要实现该接口,就获取了事件监听的能力,不过具体监听什么事件要自己去判断。大家可以根据例子 来理解。</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>  // 根据事件泛型判断是否需要处理，这里判断如果是ApplicationReadyEvent和WebServerInitializedEvent</span></span>
<span class="line"><span>  // 事件就处理</span></span>
<span class="line"><span>  @Override</span></span>
<span class="line"><span>   public boolean supportsEventType(ResolvableType eventType) {</span></span>
<span class="line"><span>      Class&lt;?&gt; type = eventType.getRawClass();</span></span>
<span class="line"><span>      if (type == null) {</span></span>
<span class="line"><span>         return false;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      return ApplicationReadyEvent.class.isAssignableFrom(type)</span></span>
<span class="line"><span>            || WebServerInitializedEvent.class.isAssignableFrom(type);</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   @Override</span></span>
<span class="line"><span>   public boolean supportsSourceType(Class&lt;?&gt; sourceType) {</span></span>
<span class="line"><span>      return true;</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   @Override</span></span>
<span class="line"><span>   public void onApplicationEvent(ApplicationEvent event) {</span></span>
<span class="line"><span>    // 如果Spring已经准备好了,就将this.ready = true;</span></span>
<span class="line"><span>      if (event instanceof ApplicationReadyEvent) {</span></span>
<span class="line"><span>         onApplicationReadyEvent((ApplicationReadyEvent) event);</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    // 如果是Web应用,this.embeddedWebApplication = true</span></span>
<span class="line"><span>      if (event instanceof WebServerInitializedEvent) {</span></span>
<span class="line"><span>         onWebServerInitializedEvent((WebServerInitializedEvent) event);</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>   //优先级</span></span>
<span class="line"><span>   @Override</span></span>
<span class="line"><span>   public int getOrder() {</span></span>
<span class="line"><span>      return Ordered.HIGHEST_PRECEDENCE;</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   void onApplicationReadyEvent(ApplicationReadyEvent event) {</span></span>
<span class="line"><span>      if (this.applicationContext.equals(event.getApplicationContext())) {</span></span>
<span class="line"><span>         this.ready = true;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   void onWebServerInitializedEvent(WebServerInitializedEvent event) {</span></span>
<span class="line"><span>      if (this.applicationContext.equals(event.getApplicationContext())) {</span></span>
<span class="line"><span>         this.embeddedWebApplication = true;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>   }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div><h3 id="_3-environmentaware" tabindex="-1">3. EnvironmentAware <a class="header-anchor" href="#_3-environmentaware" aria-label="Permalink to &quot;3. EnvironmentAware&quot;">​</a></h3><p>获取应用配置信息, 和上面一样实现了Aware结尾的接口,都能获取对象的Spring内容的对象实例，然后我们就可以根据该实例,来进行功能扩展。</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>@Override</span></span>
<span class="line"><span>   public void setEnvironment(Environment environment) {</span></span>
<span class="line"><span>      this.environment = environment;</span></span>
<span class="line"><span>   }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="_4-initializingbean" tabindex="-1">4. InitializingBean <a class="header-anchor" href="#_4-initializingbean" aria-label="Permalink to &quot;4. InitializingBean&quot;">​</a></h3><p>这里就要着重看了，在初始化时候将MBean注册到JMX上。当然我们可以通过 @PostConstruct注解来声明初始化方法。</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>@Override</span></span>
<span class="line"><span>   public void afterPropertiesSet() throws Exception {</span></span>
<span class="line"><span>      MBeanServer server = ManagementFactory.getPlatformMBeanServer();</span></span>
<span class="line"><span>      server.registerMBean(new SpringApplicationAdmin(), this.objectName);</span></span>
<span class="line"><span>      if (logger.isDebugEnabled()) {</span></span>
<span class="line"><span>         logger.debug(&quot;Application Admin MBean registered with name &#39;&quot; + this.objectName + &quot;&#39;&quot;);</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>   }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="_5-disposablebean" tabindex="-1">5. DisposableBean <a class="header-anchor" href="#_5-disposablebean" aria-label="Permalink to &quot;5. DisposableBean&quot;">​</a></h3><p>应用销毁时候,取消注册。同样我们也可以用@PreDestroy注解来实现</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>@Override</span></span>
<span class="line"><span>   public void destroy() throws Exception {</span></span>
<span class="line"><span>      ManagementFactory.getPlatformMBeanServer().unregisterMBean(this.objectName);</span></span>
<span class="line"><span>   }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>通过对SpringBoot应用源码的追踪，我们大概已经明白JMX的实际意义了，并且能自定义一个能提供类似能力的MBean了吧，但是JMX能做的远远不止如此。</p><h2 id="三、自定义mbean" tabindex="-1">三、自定义MBean <a class="header-anchor" href="#三、自定义mbean" aria-label="Permalink to &quot;三、自定义MBean&quot;">​</a></h2><p>注意接口名必须是MBean结尾，实现类必须去掉MBean</p><p>如CustomMBean接口对应的实现类必须是Custom。</p><h3 id="_1-代码实现" tabindex="-1">1. 代码实现 <a class="header-anchor" href="#_1-代码实现" aria-label="Permalink to &quot;1. 代码实现&quot;">​</a></h3><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Component</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CustomMbeanRegistrar</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> implements</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ApplicationContextAware</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">InitializingBean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">DisposableBean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ConfigurableApplicationContext applicationContext;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ObjectName objectName </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ObjectName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;com.example.demo:type=CustomAdmin,name=CustomMXBean&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CustomMbeanRegistrar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">throws</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> MalformedObjectNameException {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Override</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> destroy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">throws</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Exception {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ManagementFactory.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getPlatformMBeanServer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">unregisterMBean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.objectName);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Override</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> afterPropertiesSet</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">throws</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Exception {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        MBeanServer server </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ManagementFactory.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getPlatformMBeanServer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        server.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">registerMBean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Custom</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.objectName);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Override</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setApplicationContext</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ApplicationContext </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">applicationContext</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">throws</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> BeansException {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.applicationContext </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (ConfigurableApplicationContext) applicationContext;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CustomMBean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getDatabaseConnectionPoolSize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> customShutdown</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Custom</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> implements</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CustomMBean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">         * 获取数据库连接池大小</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">         *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">         * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@return</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 模拟</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">         */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Override</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getDatabaseConnectionPoolSize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Random</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nextInt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">         * 自定义一个销毁方法</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">         */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> customShutdown</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            CustomMbeanRegistrar.this.applicationContext.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">close</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div><h3 id="_2-演示" tabindex="-1">2. 演示 <a class="header-anchor" href="#_2-演示" aria-label="Permalink to &quot;2. 演示&quot;">​</a></h3><p><img src="https://img.springlearn.cn/blog/learn_1590924584000.png" alt=""></p><h2 id="四、总结" tabindex="-1">四、总结 <a class="header-anchor" href="#四、总结" aria-label="Permalink to &quot;四、总结&quot;">​</a></h2><p>通过前面的演示,大概我们对JMX在实际中的用处有一个大概的了解了吧。根据这个特性,我们就可以根据我们的需求来定制属于自己的能力。</p><p>最后求关注,求订阅,谢谢你的阅读!</p><p><img src="https://img.springlearn.cn/blog/learn_1589360371000.png" alt=""></p>`,61)]))}const d=n(e,[["render",l]]);export{o as __pageData,d as default};
