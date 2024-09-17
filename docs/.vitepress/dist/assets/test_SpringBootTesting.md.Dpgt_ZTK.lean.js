import{_ as i,c as a,aa as n,o as l}from"./chunks/framework.bT2BobGK.js";const o=JSON.parse('{"title":"SpringBoot Testing","description":"","frontmatter":{"breadcrumb":false,"navbar":true,"sidebar":true,"pageInfo":true,"contributor":true,"editLink":true,"updateTime":true,"prev":true,"next":true,"comment":false,"footer":true,"backtotop":true,"title":"SpringBoot Testing","category":"技术框架"},"headers":[],"relativePath":"test/SpringBootTesting.md","filePath":"test/SpringBootTesting.md"}'),p={name:"test/SpringBootTesting.md"};function e(t,s,h,k,r,E){return l(),a("div",null,s[0]||(s[0]=[n(`<p><img src="https://img.springlearn.cn/blog/learn_1618140868000.png" alt=""></p><p>前面我们对Mockito的用法有了一个了解,这里告诉大家一个好消息,SpringBoot已经帮我们继承了 这些框架,而且提供了更加简单好用的API。</p><h2 id="一、mockito加载方式" tabindex="-1">一、Mockito加载方式 <a class="header-anchor" href="#一、mockito加载方式" aria-label="Permalink to &quot;一、Mockito加载方式&quot;">​</a></h2><p>前面我们说了两种加载方式 <code>MockitoJUnitRunner</code> 和 <code> MockitoAnnotations.initMocks(this);</code> 这些在SpringBoot中都不需要了。</p><p>所以这一段就是废话, 不用在看了。但是相信你已经看完了。</p><h2 id="二、mockito必知概念" tabindex="-1">二、Mockito必知概念 <a class="header-anchor" href="#二、mockito必知概念" aria-label="Permalink to &quot;二、Mockito必知概念&quot;">​</a></h2><p>这些概念,参考Mockito章节,概念统统保留。</p><h3 id="_2-1-完全模拟-mockbean" tabindex="-1">2.1 完全模拟 MockBean <a class="header-anchor" href="#_2-1-完全模拟-mockbean" aria-label="Permalink to &quot;2.1 完全模拟 MockBean&quot;">​</a></h3><p>只需要将@Mock 换成 @MockBean即可</p><h3 id="_2-2-部分模拟-spybean" tabindex="-1">2.2 部分模拟 SpyBean <a class="header-anchor" href="#_2-2-部分模拟-spybean" aria-label="Permalink to &quot;2.2 部分模拟 SpyBean&quot;">​</a></h3><p>只需要将@Spy 换成 @MockBean即可。主要这里有一个小坑。 如果是Feign接口,使用@SpyBean会报错。提示final class不能被代理。</p><p>原因是SpringBoot依赖的Mockito版本太古老了,是2.23.4。从Mockito2.7.6 开始已经解决了这个问题, 我们可以通过引入下面依赖解决。</p><div class="language-xml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">dependency</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">groupId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;org.mockito&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">groupId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">artifactId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;mockito-inline&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">artifactId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;3.3.3&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">dependency</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>解决方案就是帮我们新增了一个配置,启动Mockit的插件来生成代理。 大概原理就是及不实用JDK代理,也不是Cglib代理。 <code>DefaultMockitoPlugins</code> &amp; <code>InlineByteBuddyMockMaker</code><img src="https://img.springlearn.cn/blog/learn_1617877205000.png" alt=""></p><h2 id="三、代码实例" tabindex="-1">三、代码实例 <a class="header-anchor" href="#三、代码实例" aria-label="Permalink to &quot;三、代码实例&quot;">​</a></h2><h3 id="_3-1-mockbean-完全模拟" tabindex="-1">3.1 @MockBean 完全模拟 <a class="header-anchor" href="#_3-1-mockbean-完全模拟" aria-label="Permalink to &quot;3.1 @MockBean 完全模拟&quot;">​</a></h3><p>没有被声明的方法返回值,对象类型返回null,基本类型是返回默认类型。</p><p>@MockBean完全模拟</p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> TradeShopIntegrationImplTest</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> BaseApplicationTest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Autowired</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> TradeShopIntegration shopBrandIntegration;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">MockBean</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> BrandServiceApi brandService;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">MockBean</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GoodsStockApi goodsStockApi;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Test</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> testGetAllBrands</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        Mockito.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">doReturn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(JsonResult.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">failure</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;fail&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">when</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(goodsStockApi).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getSkuList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Mockito.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">());</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 底层调用的是goodsStockApi.getSkuList()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        List&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">GoodsBaseMsgDTO</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; goodsBaseMsgDTOS </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> shopBrandIntegration.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">queryAllSku</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 因为前面声明了返回fail。所以这里没有数据返回。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        JsonConsoleUtils.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(goodsBaseMsgDTOS);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 这里因为使用的是Mock完全模拟,所以尽管前面没有声明返回值,就默认返回null</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        List&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">OutBrandDTO</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; allBrands </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> shopBrandIntegration.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getAllBrands</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        JsonConsoleUtils.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(allBrands);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h3 id="_3-1-spybean-部分模拟" tabindex="-1">3.1 @SpyBean 部分模拟 <a class="header-anchor" href="#_3-1-spybean-部分模拟" aria-label="Permalink to &quot;3.1 @SpyBean 部分模拟&quot;">​</a></h3><p>没有被声明的方法返回值,走原来逻辑。</p><p>@SpyBean部分模拟</p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> TradeShopIntegrationImplTest</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> BaseApplicationTest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Autowired</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> TradeShopIntegration shopBrandIntegration;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">MockBean</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> BrandServiceApi brandService;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">MockBean</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GoodsStockApi goodsStockApi;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Test</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> testGetAllBrands</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        Mockito.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">doReturn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(JsonResult.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">failure</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;fail&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">when</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(goodsStockApi).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getSkuList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Mockito.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">());</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 底层调用的是goodsStockApi.getSkuList()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        List&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">GoodsBaseMsgDTO</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; goodsBaseMsgDTOS </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> shopBrandIntegration.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">queryAllSku</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 因为前面声明了返回fail。所以这里没有数据返回。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        JsonConsoleUtils.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(goodsBaseMsgDTOS);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 这里跟上面的区别就是,如果没有声明返回值,就走原来的方法。</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        List&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">OutBrandDTO</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; allBrands </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> shopBrandIntegration.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getAllBrands</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        JsonConsoleUtils.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(allBrands);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div>`,23)]))}const c=i(p,[["render",e]]);export{o as __pageData,c as default};
