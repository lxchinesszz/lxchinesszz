import{_ as s,c as n,o as a,ac as p}from"./chunks/framework.C9DUt1S1.js";const b=JSON.parse('{"title":"JVM钩子hooks函数","description":"","frontmatter":{"breadcrumb":false,"navbar":true,"sidebar":true,"pageInfo":true,"contributor":true,"editLink":true,"updateTime":true,"prev":true,"next":true,"comment":false,"footer":true,"backtotop":true,"title":"JVM钩子hooks函数","category":"Java进阶"},"headers":[],"relativePath":"java/hooks函数.md","filePath":"java/hooks函数.md"}'),e={name:"java/hooks函数.md"},t=p(`<p><img src="https://img.springlearn.cn/blog/learn_1589383784000.png" alt=""></p><p><strong>作者</strong>: 西魏陶渊明 <strong>博客</strong>: <a href="https://blog.springlearn.cn/" target="_blank" rel="noreferrer">https://blog.springlearn.cn/</a></p><div class="tip custom-block"><p class="custom-block-title">西魏陶渊明</p><p>莫笑少年江湖梦，谁不少年梦江湖</p></div><p>什么是钩子函数,在学习钩子函数之前,小编先提一个问题。</p><p><strong>请问在Spring中,如果JVM异常终止,Spring是如何保证会释放掉占用的资源,比如说数据库连接等资源呢?</strong></p><p>钩子函数非常简单,简单到小编只用摘抄一段Spring代码即可。走你,现在开始。</p><h1 id="问题" tabindex="-1">问题 <a class="header-anchor" href="#问题" aria-label="Permalink to &quot;问题&quot;">​</a></h1><p><code>Spring</code> 容器中 <code>Bean</code> 在什么时候执行销毁方法?</p><p>我们知道在Spring中定义销毁方法有两种方式</p><ol><li>实现 <code>DisposableBean</code> 的 <code>destroy</code> 方法。</li><li>使用 <code>@PreDestroy</code> 注解修饰方法</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>@Component</span></span>
<span class="line"><span>public class DataCollectBean implements DisposableBean {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 第一种方法实现 DisposableBean#destroy方法</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @throws Exception 异常</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void destroy() throws Exception {</span></span>
<span class="line"><span>        System.err.println(&quot;执行销毁方法&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 第二种方法使用PreDestroy注解声明销毁方法</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @PreDestroy</span></span>
<span class="line"><span>    public void customerDestroy() {</span></span>
<span class="line"><span>        System.err.println(&quot;执行自定义销毁方法&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="那么在什么时候执行销毁方法" tabindex="-1">那么在什么时候执行销毁方法? <a class="header-anchor" href="#那么在什么时候执行销毁方法" aria-label="Permalink to &quot;那么在什么时候执行销毁方法?&quot;">​</a></h2><p><img src="https://img.springlearn.cn/blog/learn_1589471346000.png" alt=""></p><ol><li>主动执行销毁bean</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        ConfigurableApplicationContext run = SpringApplication.run(DemoApplication.class, args);</span></span>
<span class="line"><span>        DataCollectBean bean = run.getBean(DataCollectBean.class);</span></span>
<span class="line"><span>        //1. 主动销毁bean</span></span>
<span class="line"><span>        run.getBeanFactory().destroyBean(bean);</span></span>
<span class="line"><span>    }</span></span></code></pre></div><ol start="2"><li>JVM关闭时候自动执行销毁方法。</li></ol><p>这里就要用到钩子函数了, <code>Spring</code> 的钩子函数在 <code>AbstractApplicationContext#shutdownHook属性</code></p><p>如果我们是SpringBoot项目我们看到在SpringApplication启动时候会注册一个钩子函数</p><p><img src="https://img.springlearn.cn/blog/learn_1589473259000.png" alt=""></p><h1 id="如何定义钩子函数" tabindex="-1">如何定义钩子函数? <a class="header-anchor" href="#如何定义钩子函数" aria-label="Permalink to &quot;如何定义钩子函数?&quot;">​</a></h1><p>简直太简单了，没有任何学习成本。一行代码就能搞定。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>public class HooksTester {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        Runtime.getRuntime().addShutdownHook(new Thread(new Runnable() {</span></span>
<span class="line"><span>            @Override</span></span>
<span class="line"><span>            public void run() {</span></span>
<span class="line"><span>                System.out.println(&quot;钩子函数执行&quot;);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }));</span></span>
<span class="line"><span>        //当主动关闭应用</span></span>
<span class="line"><span>        while (true);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><img src="https://img.springlearn.cn/blog/learn_1589471574000.png" alt=""></p><h1 id="触发钩子函数的场景" tabindex="-1">触发钩子函数的场景 <a class="header-anchor" href="#触发钩子函数的场景" aria-label="Permalink to &quot;触发钩子函数的场景&quot;">​</a></h1><p>只要不是机器断电，强制kill -9 强制杀进程，都会触发。</p><p><img src="https://img.springlearn.cn/blog/learn_1589473502000.png" alt=""></p><h1 id="钩子函数能做什么" tabindex="-1">钩子函数能做什么？ <a class="header-anchor" href="#钩子函数能做什么" aria-label="Permalink to &quot;钩子函数能做什么？&quot;">​</a></h1><p><img src="https://img.springlearn.cn/blog/learn_1589383970000.png" alt=""></p><p>正如上图所示优雅停机,在项目将要关闭时候,主动释放程序占用的资源信息,释放db连接池的连接等其他占用的资源信息。 如果我们是 <code>Spring</code> 项目其实我们不用自己定义钩子函数,我们只要使用Spring提供给我们的销毁方法即可。因为 Spring定义的钩子函数中会去执行, <code>DisposableBean.destory()</code> 和被 <code>PreDestroy</code> 修饰的方法。</p><p>我们看下源码</p><p><img src="https://img.springlearn.cn/blog/learn_1589472185000.png" alt=""></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>protected void doClose() {</span></span>
<span class="line"><span>		// Check whether an actual close attempt is necessary...</span></span>
<span class="line"><span>		if (this.active.get() &amp;&amp; this.closed.compareAndSet(false, true)) {</span></span>
<span class="line"><span>			if (logger.isDebugEnabled()) {</span></span>
<span class="line"><span>				logger.debug(&quot;Closing &quot; + this);</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>			LiveBeansView.unregisterApplicationContext(this);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>			try {</span></span>
<span class="line"><span>				// Publish shutdown event.</span></span>
<span class="line"><span>				publishEvent(new ContextClosedEvent(this));</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			catch (Throwable ex) {</span></span>
<span class="line"><span>				logger.warn(&quot;Exception thrown from ApplicationListener handling ContextClosedEvent&quot;, ex);</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>			// Stop all Lifecycle beans, to avoid delays during individual destruction.</span></span>
<span class="line"><span>			if (this.lifecycleProcessor != null) {</span></span>
<span class="line"><span>				try {</span></span>
<span class="line"><span>					this.lifecycleProcessor.onClose();</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>				catch (Throwable ex) {</span></span>
<span class="line"><span>					logger.warn(&quot;Exception thrown from LifecycleProcessor on context close&quot;, ex);</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>			// Destroy all cached singletons in the context&#39;s BeanFactory.</span></span>
<span class="line"><span>			destroyBeans();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>			// Close the state of this context itself.</span></span>
<span class="line"><span>			closeBeanFactory();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>			// Let subclasses do some final clean-up if they wish...</span></span>
<span class="line"><span>			onClose();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>			// Reset local application listeners to pre-refresh state.</span></span>
<span class="line"><span>			if (this.earlyApplicationListeners != null) {</span></span>
<span class="line"><span>				this.applicationListeners.clear();</span></span>
<span class="line"><span>				this.applicationListeners.addAll(this.earlyApplicationListeners);</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>			// Switch to inactive.</span></span>
<span class="line"><span>			this.active.set(false);</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span></code></pre></div><p>可以看到：doClose()方法会执行bean的destroy()，也会执行SmartLifeCycle的stop()方法，我们就可以通过重写这些方法来实现对象的关闭，生命周期的管理，实现平滑shutdown</p><p><img src="https://i03piccdn.sogoucdn.com/7eac32473373b70a" alt=""></p><p>最后求关注,求订阅,谢谢你的阅读!</p><p><img src="https://img.springlearn.cn/blog/learn_1589360371000.png" alt=""></p>`,36),l=[t];function i(c,o,r,d,g,h){return a(),n("div",null,l)}const m=s(e,[["render",i]]);export{b as __pageData,m as default};
