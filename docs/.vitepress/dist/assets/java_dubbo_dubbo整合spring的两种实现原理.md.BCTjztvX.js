import{_ as i,c as a,aa as n,o as e}from"./chunks/framework.bT2BobGK.js";const o=JSON.parse('{"title":"dubbo适配Spring原理","description":"","frontmatter":{"breadcrumb":false,"navbar":true,"sidebar":true,"pageInfo":true,"contributor":true,"editLink":true,"updateTime":true,"prev":true,"next":true,"comment":true,"footer":true,"backtotop":true,"title":"dubbo适配Spring原理","category":"Dubbo"},"headers":[],"relativePath":"java/dubbo/dubbo整合spring的两种实现原理.md","filePath":"java/dubbo/dubbo整合spring的两种实现原理.md"}'),l={name:"java/dubbo/dubbo整合spring的两种实现原理.md"};function t(p,s,h,r,k,E){return e(),a("div",null,s[0]||(s[0]=[n(`<blockquote><p>前面两篇博文,主要讲dubbo服务端和客户端的知识点,在对服务端和客户端有了一个新的认识之后,我们本篇 来看下spring是如何整合dubbo服务的</p></blockquote><h2 id="一、整合dubbo的两种方式" tabindex="-1">一、整合dubbo的两种方式 <a class="header-anchor" href="#一、整合dubbo的两种方式" aria-label="Permalink to &quot;一、整合dubbo的两种方式&quot;">​</a></h2><p>spring中使用dubbo一共有两种方式。这两种方式只是在解析dubbo类时候不同。一种通过xml方式，一种注解标签方式。 下面我们说下他们的原理。</p><ol><li>xml方式</li><li>注解方式</li></ol><h2 id="二、两种方式原理" tabindex="-1">二、两种方式原理 <a class="header-anchor" href="#二、两种方式原理" aria-label="Permalink to &quot;二、两种方式原理&quot;">​</a></h2><h3 id="_1-namespacehandler-xml方式" tabindex="-1">1. NamespaceHandler(xml方式) <a class="header-anchor" href="#_1-namespacehandler-xml方式" aria-label="Permalink to &quot;1. NamespaceHandler(xml方式)&quot;">​</a></h3><p>NamespaceHandler是spring提供的解析标签的类。dubbo首先继承该接口。在初始化时候 给每个标签绑定一个解析器。</p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DubboNamespaceHandler</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> NamespaceHandlerSupport</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	static</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		Version.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">checkDuplicate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(DubboNamespaceHandler.class);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> init</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	    registerBeanDefinitionParser</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;application&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DubboBeanDefinitionParser</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ApplicationConfig.class, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        registerBeanDefinitionParser</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;module&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DubboBeanDefinitionParser</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ModuleConfig.class, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        registerBeanDefinitionParser</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;registry&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DubboBeanDefinitionParser</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(RegistryConfig.class, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        registerBeanDefinitionParser</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;monitor&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DubboBeanDefinitionParser</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(MonitorConfig.class, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        registerBeanDefinitionParser</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;provider&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DubboBeanDefinitionParser</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ProviderConfig.class, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        registerBeanDefinitionParser</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;consumer&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DubboBeanDefinitionParser</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ConsumerConfig.class, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        registerBeanDefinitionParser</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;protocol&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DubboBeanDefinitionParser</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ProtocolConfig.class, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        registerBeanDefinitionParser</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;service&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DubboBeanDefinitionParser</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ServiceBean.class, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        registerBeanDefinitionParser</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;reference&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DubboBeanDefinitionParser</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ReferenceBean.class, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        registerBeanDefinitionParser</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;annotation&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DubboBeanDefinitionParser</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(AnnotationBean.class, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p><img src="https://img.springlearn.cn/blog/learn_1597065763000.png" alt=""></p><p>到这里spring就能解析各种的dubbo标签了。</p><h3 id="_2-解析注解方式" tabindex="-1">2. 解析注解方式 <a class="header-anchor" href="#_2-解析注解方式" aria-label="Permalink to &quot;2. 解析注解方式&quot;">​</a></h3><ul><li>服务端: BeanPostProcessor#postProcessAfterInitialization在服务端初始化后来根据Service注解生成服务并导出。</li><li>客户端: BeanPostProcessor#postProcessBeforeInitialization客户端在初始化前解析Reference,并注入到bean中</li></ul><h2 id="三、服务端servicebean" tabindex="-1">三、服务端ServiceBean <a class="header-anchor" href="#三、服务端servicebean" aria-label="Permalink to &quot;三、服务端ServiceBean&quot;">​</a></h2><p>服务端使用@Service或者是xml解析参数生成ServiceBean,用Spring进行管理处理容器完成事件和bean初始化事件来来导出服务。</p><p>ServiceBean是一个被Spring管理的bean。</p><ul><li>实现了InitializingBean#afterPropertiesSet初始化方法</li><li>实现了DisposableBean#destory销毁方法</li><li>实现了ApplicationListener的事件方法onApplicationEvent</li><li>实现了ApplicationContextAware注入上下文</li><li>实现了BeanNameAware注入beanName</li></ul><p>其中当Spring容器启动了,会发出<code>ContextRefreshedEvent</code>事件</p><p><img src="https://img.springlearn.cn/blog/learn_1597066316000.png" alt=""></p><h2 id="四、客户端referencebean" tabindex="-1">四、客户端ReferenceBean <a class="header-anchor" href="#四、客户端referencebean" aria-label="Permalink to &quot;四、客户端ReferenceBean&quot;">​</a></h2><p>客户端使用Reference生成ReferenceBean,ReferenceBean是一个FactoryBean。</p><p>ReferenceBean#getObject来生成代理类。</p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">   public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Object </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getObject</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() throws Exception {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">   public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> synchronized</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> T </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (destroyed){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            throw</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IllegalStateException</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Already destroyed!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    	if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (ref </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    		init</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    	}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    	return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ref;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="五、总结" tabindex="-1">五、总结 <a class="header-anchor" href="#五、总结" aria-label="Permalink to &quot;五、总结&quot;">​</a></h2><p>导出服务和创建远程服务的本地代理。原理是就是netty实现的。这是dubbo的逻辑。本篇就不说了。本篇的重点是 spring是如何整合dubbo的。你学习到了吗?</p>`,24)]))}const g=i(l,[["render",t]]);export{o as __pageData,g as default};
