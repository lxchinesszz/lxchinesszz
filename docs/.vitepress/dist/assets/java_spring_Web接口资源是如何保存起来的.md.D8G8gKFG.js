import{_ as s,c as a,aa as e,o as p}from"./chunks/framework.swcE7GHT.js";const d=JSON.parse('{"title":"Web接口资源是如何保存起来的?","description":"","frontmatter":{"breadcrumb":false,"navbar":true,"sidebar":true,"pageInfo":true,"contributor":true,"editLink":true,"updateTime":true,"prev":true,"next":true,"comment":true,"footer":true,"backtotop":true,"title":"Web接口资源是如何保存起来的?","category":"SpringBoot"},"headers":[],"relativePath":"java/spring/Web接口资源是如何保存起来的.md","filePath":"java/spring/Web接口资源是如何保存起来的.md"}'),l={name:"java/spring/Web接口资源是如何保存起来的.md"};function i(t,n,r,c,o,b){return p(),a("div",null,n[0]||(n[0]=[e(`<h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>在我们使用 <code>SpringBoot</code> 开发中,我们定义一接口是下面这样的</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>@RestController</span></span>
<span class="line"><span>public class UserController{</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    @GetMapping( name = &quot;/getUserName&quot;)</span></span>
<span class="line"><span>    public String getUserName(){</span></span>
<span class="line"><span>        return &quot;Hello World&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>这时候我们思考一个问题,我们在浏览器上只输入了一个URL地址,怎么就能访问到这个接口的呢？于是乎就引出了 今天我们要讨论的话题。Spring中的Web接口资源是如何保存起来的?</p><h2 id="一、spring中的web接口资源是如何保存起来的" tabindex="-1">一、Spring中的Web接口资源是如何保存起来的? <a class="header-anchor" href="#一、spring中的web接口资源是如何保存起来的" aria-label="Permalink to &quot;一、Spring中的Web接口资源是如何保存起来的?&quot;">​</a></h2><p>在我们学习之前我们可以先自己来进行思考一下。处理逻辑是什么样的？</p><ul><li>Spring容器解析 <code>@RequestMapping</code> 注解。当然这个注解又派生了其他的注解比如。</li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>@Target(ElementType.METHOD)</span></span>
<span class="line"><span>@Retention(RetentionPolicy.RUNTIME)</span></span>
<span class="line"><span>@Documented</span></span>
<span class="line"><span>@RequestMapping(method = RequestMethod.POST)</span></span>
<span class="line"><span>public @interface PostMapping {}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Target(ElementType.METHOD)</span></span>
<span class="line"><span>@Retention(RetentionPolicy.RUNTIME)</span></span>
<span class="line"><span>@Documented</span></span>
<span class="line"><span>@RequestMapping(method = RequestMethod.PUT)</span></span>
<span class="line"><span>public @interface PutMapping {}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Target(ElementType.METHOD)</span></span>
<span class="line"><span>@Retention(RetentionPolicy.RUNTIME)</span></span>
<span class="line"><span>@Documented</span></span>
<span class="line"><span>@RequestMapping(method = RequestMethod.GET)</span></span>
<span class="line"><span>public @interface GetMapping {}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Target(ElementType.METHOD)</span></span>
<span class="line"><span>@Retention(RetentionPolicy.RUNTIME)</span></span>
<span class="line"><span>@Documented</span></span>
<span class="line"><span>@RequestMapping(method = RequestMethod.DELETE)</span></span>
<span class="line"><span>public @interface DeleteMapping {}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><ul><li>我们猜测Spring源码中一定会对<code>@RestController</code> 和 <code>@Controller</code>标记的类,里面的每个 Method进行处理,判断是否包含了上面的注解。注解那么多Spring肯定不会这样一个一个去处理。我们可以看到 上面的注解都使用了<code>@AliasFor</code>注解。其中奥妙就在这里。看下面例子代码。</li><li>我们猜测Spring肯定对这些Method判断是否有<code>@RequestMapping</code>有注解。</li></ul><h3 id="_1-aliasfor使用" tabindex="-1">1. @AliasFor使用 <a class="header-anchor" href="#_1-aliasfor使用" aria-label="Permalink to &quot;1. @AliasFor使用&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>@RestController</span></span>
<span class="line"><span>public class PostController {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @ApiOperation(value = &quot;查询Bbs所有文章&quot;)</span></span>
<span class="line"><span>    @PostMapping(value = &quot;/query/bbs/posts&quot;, produces = MediaType.APPLICATION_JSON_VALUE)</span></span>
<span class="line"><span>    public Result&lt;PostAllResponse&gt; queryBbsPostAll(@RequestBody PostAllSelectRequest postAllSelectRequest) {</span></span>
<span class="line"><span>        return postBiz.queryBbsPostAll(postAllSelectRequest);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        Method queryBbsPostAll = ClassUtils.getMethod(PostController.class, &quot;queryBbsPostAll&quot;,PostAllSelectRequest.class);</span></span>
<span class="line"><span>        PostMapping annotation = AnnotationUtils.findAnnotation(queryBbsPostAll, PostMapping.class);</span></span>
<span class="line"><span>        ///query/bbs/posts</span></span>
<span class="line"><span>        System.out.println(StringUtils.arrayToCommaDelimitedString(annotation.value()));</span></span>
<span class="line"><span>        //application/json</span></span>
<span class="line"><span>        System.out.println(StringUtils.arrayToCommaDelimitedString(annotation.produces()));</span></span>
<span class="line"><span>        //是否包含RequestMapping: true</span></span>
<span class="line"><span>        System.out.println(&quot;是否包含RequestMapping: &quot;+AnnotatedElementUtils.hasAnnotation(queryBbsPostAll,RequestMapping.class));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        RequestMapping mergedAnnotation = AnnotatedElementUtils.getMergedAnnotation(queryBbsPostAll, RequestMapping.class);</span></span>
<span class="line"><span>        ///query/bbs/posts</span></span>
<span class="line"><span>        System.out.println(StringUtils.arrayToCommaDelimitedString(mergedAnnotation.value()));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>可以看到只要使用下面代码就能把被<code>@PostMapping</code>等等的注解都涵盖了。</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>System.out.println(&quot;是否包含RequestMapping: &quot;+AnnotatedElementUtils.hasAnnotation(queryBbsPostAll,RequestMapping.class));</span></span>
<span class="line"><span>RequestMapping mergedAnnotation = AnnotatedElementUtils.getMergedAnnotation(queryBbsPostAll, RequestMapping.class);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="_2-解析请求method" tabindex="-1">2. 解析请求Method <a class="header-anchor" href="#_2-解析请求method" aria-label="Permalink to &quot;2. 解析请求Method&quot;">​</a></h3><p><code>AbstractHandlerMethodMapping</code> 实现 <code>InitializingBean</code>。在当前 <code>Bean</code>初始化时候会执行</p><p><code>afterPropertiesSet -&gt; initHandlerMethods</code></p><p>从这里开始解析Web资源类的信息。请小伙伴们看下面的截图,截图中源码已经把类名也截上了,方便小伙伴们自己在根据截图看一遍源码。</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>public abstract class AbstractHandlerMethodMapping&lt;T&gt; extends AbstractHandlerMapping implements InitializingBean {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void afterPropertiesSet() {</span></span>
<span class="line"><span>        initHandlerMethods();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>	 * Scan beans in the ApplicationContext, detect and register handler methods.</span></span>
<span class="line"><span>	 * @see #getCandidateBeanNames()</span></span>
<span class="line"><span>	 * @see #processCandidateBean</span></span>
<span class="line"><span>	 * @see #handlerMethodsInitialized</span></span>
<span class="line"><span>	 */</span></span>
<span class="line"><span>    protected void initHandlerMethods() {</span></span>
<span class="line"><span>        for (String beanName : getCandidateBeanNames()) {</span></span>
<span class="line"><span>            if (!beanName.startsWith(SCOPED_TARGET_NAME_PREFIX)) {</span></span>
<span class="line"><span>                processCandidateBean(beanName);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        handlerMethodsInitialized(getHandlerMethods());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p><strong>RequestMappingHandlerMapping解析Method上的RequestMapping信息</strong></p><p><img src="https://img.springlearn.cn/blog/learn_1596563456000.png" alt=""></p><p>isHandler 方法判断是否是web资源类。 当一个类被标记了 <code>@Controller 或者@RequestMapping</code>。 注意 <code>@RestController</code> 是<code>@Controller</code>的派生类。所以这里只用判断 <code>@Controller 或者@RequestMapping</code>就行了。</p><p><img src="https://img.springlearn.cn/blog/learn_1596563605000.png" alt=""></p><p>detectHandlerMethods方法就是真正开始解析Method的逻辑。通过解析Method上的 <code>@RequestMapping</code>或者其他派生的注解。生成请求信息。 注意这个请求信息里面也是有很多逻辑的不过不是本篇讨论的重点,就不说了。稍微提一下。根据规则来匹配url逻辑就在这里面。</p><p><img src="https://img.springlearn.cn/blog/learn_1596563872000.png" alt=""></p><p>这里我们能看到源码里拿到了Method并拿到了执行这个Method的实例Bean。在这里封装成了HandlerMethod并注册到了MappingRegistry中。 <img src="https://img.springlearn.cn/blog/learn_1596564039000.png" alt=""></p><p>在注册的过程中把RequestMapping中的路径信息同事也放到一个urlLookup中。key是url,value是Mapping信息。 <img src="https://img.springlearn.cn/blog/learn_1596564246000.png" alt=""></p><p>到这里其实我们就把本篇的议题就说明清楚了。下面我们在看下SpringWeb是如何将http请求信息路由到具体的HandlerMethod的吧。</p><h3 id="_3-最后串一下流程" tabindex="-1">3. 最后串一下流程 <a class="header-anchor" href="#_3-最后串一下流程" aria-label="Permalink to &quot;3. 最后串一下流程&quot;">​</a></h3><p>看了前面的截图,我们知道Spring是如何把这些Web资源信息给保存起来的了。然后就看是<code>DispatcherServlet</code>的逻辑了。</p><p>首先<code>DispatcherServlet</code> 是一个Servlet。Servlet相信大家都都知道就不重点说原理。 我们直接看 <code>doService</code> -&gt; <code>doDispatch</code> 方法</p><p><img src="https://img.springlearn.cn/blog/learn_1596564523000.png" alt=""></p><p>根据请求路径,找到从Mapping信息,然后根据Mapping信息匹配到具体的HandlerMethod。 ok本篇内容就到这里。谢谢大家。 <img src="https://img.springlearn.cn/blog/learn_1596565589000.png" alt=""><img src="https://img.springlearn.cn/blog/learn_1596564759000.png" alt=""></p>`,32)]))}const m=s(l,[["render",i]]);export{d as __pageData,m as default};
