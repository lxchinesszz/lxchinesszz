import{_ as s,c as a,o as n,ac as p}from"./chunks/framework.C9DUt1S1.js";const b=JSON.parse('{"title":"SPI服务发现机制","description":"","frontmatter":{"breadcrumb":false,"navbar":true,"sidebar":true,"pageInfo":true,"contributor":true,"editLink":true,"updateTime":true,"prev":true,"next":true,"comment":false,"footer":true,"backtotop":true,"title":"SPI服务发现机制","category":"Java进阶"},"headers":[],"relativePath":"java/SPI.md","filePath":"java/SPI.md"}'),e={name:"java/SPI.md"},i=p(`<p><img src="https://img.springlearn.cn/blog/learn_1590160192000.png" alt=""></p><p><strong>作者</strong>: 西魏陶渊明 <strong>博客</strong>: <a href="https://blog.springlearn.cn/" target="_blank" rel="noreferrer">https://blog.springlearn.cn/</a></p><div class="tip custom-block"><p class="custom-block-title">西魏陶渊明</p><p>莫笑少年江湖梦，谁不少年梦江湖</p></div><h2 id="一、什么是spi" tabindex="-1">一、什么是SPI <a class="header-anchor" href="#一、什么是spi" aria-label="Permalink to &quot;一、什么是SPI&quot;">​</a></h2><p>SPI ，全称为 Service Provider Interface，是一种服务发现机制。JDK中的SPI是通过在ClassPath路径下的META-INF/services文件夹查找扩展文件,自动加载文件里所定义的类。</p><p>在小编的理解来,觉得它更是一种思想。即找到服务的接口, 美其名曰: 服务发现机制思想。很多开源框架都有借用这种思想，比如dubbo、jdbc。</p><h2 id="二、spi在jdk中如何使用" tabindex="-1">二、SPI在JDK中如何使用 <a class="header-anchor" href="#二、spi在jdk中如何使用" aria-label="Permalink to &quot;二、SPI在JDK中如何使用&quot;">​</a></h2><p>SPI在JDK中,我们可以使用 <code>ServiceLoader</code> 类进行使用。 <img src="https://img.springlearn.cn/blog/learn_1590225886000.png" alt=""></p><h3 id="_1-前提准备" tabindex="-1">1. 前提准备 <a class="header-anchor" href="#_1-前提准备" aria-label="Permalink to &quot;1. 前提准备&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>public interface SpiService {</span></span>
<span class="line"><span>    String say();</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>两个实现类</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>public class ASpiServiceImpl implements SpiService {</span></span>
<span class="line"><span>    static {</span></span>
<span class="line"><span>        System.out.println(&quot;static init a&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        System.out.println(&quot;init a&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public String say() {</span></span>
<span class="line"><span>        return &quot;A&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>public class BSpiServiceImpl implements SpiService {</span></span>
<span class="line"><span>    static {</span></span>
<span class="line"><span>        System.out.println(&quot;static init b&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        System.out.println(&quot;init b&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public String say() {</span></span>
<span class="line"><span>        return &quot;B&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_2-进行配置" tabindex="-1">2. 进行配置 <a class="header-anchor" href="#_2-进行配置" aria-label="Permalink to &quot;2. 进行配置&quot;">​</a></h3><p>在resources中创建META-INF/services目录</p><p><img src="https://img.springlearn.cn/blog/learn_1590225980000.png" alt=""></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>│  └── resources</span></span>
<span class="line"><span>│      └── META-INF</span></span>
<span class="line"><span>│          └── services</span></span>
<span class="line"><span>│              └── com.github.easylog.spi.SpiService</span></span></code></pre></div><p>com.github.easylog.spi.SpiService文件内容</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>com.github.easylog.spi.impl.ASpiServiceImpl</span></span>
<span class="line"><span>com.github.easylog.spi.impl.BSpiServiceImpl</span></span></code></pre></div><h3 id="_3-使用" tabindex="-1">3. 使用 <a class="header-anchor" href="#_3-使用" aria-label="Permalink to &quot;3. 使用&quot;">​</a></h3><p>通过ServiceLoader类我们可以加载到所有配置的实现类,并对实现类进行处理。需要注意一点的是，看4使用注意。</p><p><img src="https://img.springlearn.cn/blog/learn_1590226089000.png" alt=""></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>public class SpiTester {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        ServiceLoader&lt;SpiService&gt; spiServices = ServiceLoader.load(SpiService.class);</span></span>
<span class="line"><span>        Iterator&lt;SpiService&gt; iterator = spiServices.iterator();</span></span>
<span class="line"><span>        while (iterator.hasNext()) {</span></span>
<span class="line"><span>            SpiService next = iterator.next();</span></span>
<span class="line"><span>            System.out.println(next.say());</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_4-使用注意" tabindex="-1">4. 使用注意 <a class="header-anchor" href="#_4-使用注意" aria-label="Permalink to &quot;4. 使用注意&quot;">​</a></h3><p>可以看下小编前面声明的两个实现类,都定义了静态代码块和非静态代码块。正常情况当这个字节码被加载,就会执行静态代码块里面的内容，但是实际运行时候却没有执行, 其实是有原因的。</p><p><img src="https://img.springlearn.cn/blog/learn_1590223793000.png" alt=""></p><p>可以看到第二个参数是false。即加载时候不进行初始化。</p><h2 id="三、dubbo中服务发现思想" tabindex="-1">三、Dubbo中服务发现思想 <a class="header-anchor" href="#三、dubbo中服务发现思想" aria-label="Permalink to &quot;三、Dubbo中服务发现思想&quot;">​</a></h2><p>服务发现这种思想的特点是: 代码不是硬编码的方式,而是可配置的。只要将要支持的实现类放到指定配置文件下面,就会自动被加载起来了。然后代码中只关心使用即可。我们可以利用这种思想来实现, 框架的扩展,比如前面说了。Dubbo会利用SPI的思想进行，加载用户自定义的过滤器。</p><p>这种思想特别适合做服务扩展。现在大多数开源框架中都会使用到这种思想。</p><h3 id="_1-定义过滤器" tabindex="-1">1. 定义过滤器 <a class="header-anchor" href="#_1-定义过滤器" aria-label="Permalink to &quot;1. 定义过滤器&quot;">​</a></h3><p><img src="https://img.springlearn.cn/blog/learn_1590226192000.png" alt=""></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>@Activate(group = { Constants.PROVIDER })</span></span>
<span class="line"><span>public class ProviderHelloFilter implements Filter {</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public Result invoke(Invoker&lt;?&gt; invoker, Invocation invocation) throws RpcException {</span></span>
<span class="line"><span>        System.out.pringln(&quot;hello ok!&quot;);</span></span>
<span class="line"><span>        return invoker.invoke(invocation);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_2-添加配置文件" tabindex="-1">2. 添加配置文件 <a class="header-anchor" href="#_2-添加配置文件" aria-label="Permalink to &quot;2. 添加配置文件&quot;">​</a></h3><p><code>META-INF/dubbo/Interal/com.alibaba.dubbo.rpc.Filter</code></p><p>默认支持的过滤器</p><p><img src="https://img.springlearn.cn/blog/learn_1590224576000.png" alt=""></p><p>利用SPI原理,我们自定义一个过滤器</p><p><img src="https://img.springlearn.cn/blog/learn_1590224824000.png" alt=""></p><h3 id="_3-使用-1" tabindex="-1">3. 使用 <a class="header-anchor" href="#_3-使用-1" aria-label="Permalink to &quot;3. 使用&quot;">​</a></h3><p>其实API跟JDK中使用ServiceLoader的方式,非常类同。唯一不同的是Dubbo中是使用ExtensionLoader。因为dubbo中做了一些特殊的增强处理。比如在配置文件中支持自定义一个别名key。如上图hello就是key。通过getExtension(&quot;hello&quot;)就能获取指定的实现类。</p><p><img src="https://img.springlearn.cn/blog/learn_1590226285000.png" alt=""></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>public class SpiTester {</span></span>
<span class="line"><span>    public static void main(String[] args) throws Exception{</span></span>
<span class="line"><span>        ExtensionLoader&lt;Filter&gt; filterExtensionLoader = ExtensionLoader.getExtensionLoader(Filter.class);</span></span>
<span class="line"><span>        Set&lt;String&gt; supportedExtensions = filterExtensionLoader.getSupportedExtensions();</span></span>
<span class="line"><span>        System.out.println(supportedExtensions);</span></span>
<span class="line"><span>        //[accesslog, activelimit, cache...]</span></span>
<span class="line"><span>        Filter hello = filterExtensionLoader.getExtension(&quot;hello&quot;);</span></span>
<span class="line"><span>        //com.github.easylog.spi.ProviderHelloFilter@299a06ac</span></span>
<span class="line"><span>        System.out.println(hello);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span></code></pre></div><p>**那么这种思想你学会了吗? **</p><p><img src="https://i04piccdn.sogoucdn.com/96a6f7554ee28b9c" alt=""></p><p>最后求关注,求订阅,谢谢你的阅读!</p><p><img src="https://img.springlearn.cn/blog/learn_1589360371000.png" alt=""></p>`,47),t=[i];function l(c,o,r,d,h,u){return n(),a("div",null,t)}const m=s(e,[["render",l]]);export{b as __pageData,m as default};
