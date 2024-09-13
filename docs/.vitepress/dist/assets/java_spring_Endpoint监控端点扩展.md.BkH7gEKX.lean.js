import{_ as a,c as n,aa as i,o as e}from"./chunks/framework.swcE7GHT.js";const k=JSON.parse('{"title":"Spring Boot Endpoint监控端点扩展","description":"","frontmatter":{"breadcrumb":false,"navbar":true,"sidebar":true,"pageInfo":true,"contributor":true,"editLink":true,"updateTime":true,"prev":true,"next":true,"comment":true,"footer":true,"backtotop":true,"title":"Spring Boot Endpoint监控端点扩展","category":"SpringBoot"},"headers":[],"relativePath":"java/spring/Endpoint监控端点扩展.md","filePath":"java/spring/Endpoint监控端点扩展.md"}'),t={name:"java/spring/Endpoint监控端点扩展.md"};function p(l,s,r,d,o,h){return e(),n("div",null,s[0]||(s[0]=[i(`<div class="tip custom-block"><p class="custom-block-title">TIP</p><p>什么是端点? 端点就是SpringBoot通过web或者jmx的方式向外部暴露应用的信息,或者上下文的信息。SpringCloud-Admin就是根据此技术来进行实现的。他们用到的技术就是@Endpoint，而不是通过自己@GetMapping之类进行实现的。下面小编就带大家一起来学习端点的使用。学会本文后在利用前面我们讲过的autoconfigure的自动化配置后，你就可以开发更高级的SpringBoot应用(非业务系统)。本教程将带你从业务系统开发者转变为研发系统开发者。</p></div><p>用过SpringBoot的同学可能知道，SpringBoot有很多监控端点,比如当我们引入健康监控组件</p><div class="language-xml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">dependency</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">groupId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;org.springframework.boot&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">groupId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">artifactId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;spring-boot-starter-actuator&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">artifactId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;2.6.7&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">dependency</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>系统就会自动暴露出许多,web端口供外部调用，获取应用的信息，或者上下文的信息。</p><p><img src="https://img.springlearn.cn/learn_010cf865b5c13bd4a2c855dbf383a81d.jpg" alt="image-20190308191019856"></p><h2 id="一、如何定义端点" tabindex="-1">一、如何定义端点 <a class="header-anchor" href="#一、如何定义端点" aria-label="Permalink to &quot;一、如何定义端点&quot;">​</a></h2><p>可以使用<code>@Endpoint</code>,<code>@WebEndpoint</code>,<code>@JmxEndpoint</code>,或者<code>EndpointWebExtension</code>来实现HTTP方式的端点,可以是传统SpringMVC也可以是最新的<code>Spring WebFlux</code></p><ul><li><p><code>@Endpoint</code>相当于<code>@WebEndpoint</code>和<code>@JmxEndpoint</code>的整合。web和jmx方式都支持</p></li><li><p><code>@WebEndpoint</code> 只会生成web的方式的端点监控</p></li></ul><p><img src="https://img.springlearn.cn/learn_b2c367712133b4affaf175b38eaad3cc.jpg" alt="image-20190308190517126"></p><ul><li><code>JmxEndpoint</code> 只会生成Jmx的方式监控</li></ul><p><img src="https://img.springlearn.cn/learn_6490cd4917d5633fbbe9b205eb191dde.jpg" alt="image-20190308183731989"></p><table><thead><tr><th>Operation</th><th>HTTP method</th></tr></thead><tbody><tr><td><code>@ReadOperation</code></td><td><code>GET</code></td></tr><tr><td><code>@WriteOperation</code></td><td><code>POST</code></td></tr><tr><td><code>@DeleteOperation</code></td><td><code>DELETE</code></td></tr></tbody></table><h2 id="二、路径规则" tabindex="-1">二、路径规则 <a class="header-anchor" href="#二、路径规则" aria-label="Permalink to &quot;二、路径规则&quot;">​</a></h2><p>默认的基础路径是<code> /actuator</code>,如果一个端点配置的路径是<code>sessions</code>,那么它的全路径就是<code>/actuator/sessions</code></p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Component</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">WebEndpoint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">id</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;sessions&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MyHealthEndpoint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ReadOperation</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Info </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Selector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> String </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Info</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(name, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;23&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><code>@Selector</code> 的含义是让这个路径变成<code>/actuator/sessions/{name}</code> 我们能从路径上获取一个入参。</p><h2 id="三、相关配置" tabindex="-1">三、相关配置 <a class="header-anchor" href="#三、相关配置" aria-label="Permalink to &quot;三、相关配置&quot;">​</a></h2><h3 id="_3-1-自定义管理端点路径" tabindex="-1">3.1 自定义管理端点路径 <a class="header-anchor" href="#_3-1-自定义管理端点路径" aria-label="Permalink to &quot;3.1 自定义管理端点路径&quot;">​</a></h3><p><code>management.endpoints.web.base-path = /manage</code></p><p>此配置会将<code>/actuator/sessions/{name}</code>转换成<code>/manage/sessions/{name}</code></p><h3 id="_3-2-自定义管理服务器地址" tabindex="-1">3.2 自定义管理服务器地址 <a class="header-anchor" href="#_3-2-自定义管理服务器地址" aria-label="Permalink to &quot;3.2 自定义管理服务器地址&quot;">​</a></h3><p>默认端口和应用的端口是一致的,但是也可以通过配置的方式改变端口</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>management.server.port = 8081</span></span>
<span class="line"><span>management.server.address = 127.0.0.1</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="_3-3-激活端点" tabindex="-1">3.3 激活端点 <a class="header-anchor" href="#_3-3-激活端点" aria-label="Permalink to &quot;3.3 激活端点&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>//激活所有的端点的web方式请求</span></span>
<span class="line"><span>management.endpoints.web.exposure.include=*</span></span>
<span class="line"><span>//关闭端点web方式</span></span>
<span class="line"><span>management.endpoints.web.exposure.exclude=env,beans</span></span>
<span class="line"><span>//激活所有的JMX方式请求</span></span>
<span class="line"><span>management.endpoints.jmx.exposure.include=*</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="_3-4-跨域方式请求" tabindex="-1">3.4 跨域方式请求 <a class="header-anchor" href="#_3-4-跨域方式请求" aria-label="Permalink to &quot;3.4 跨域方式请求&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>//允许跨域的网址</span></span>
<span class="line"><span>management.endpoints.web.cors.allowed-origins=http://example.com</span></span>
<span class="line"><span>//允许跨域的方法</span></span>
<span class="line"><span>management.endpoints.web.cors.allowed-methods=GET,POST</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="四、总结" tabindex="-1">四、总结 <a class="header-anchor" href="#四、总结" aria-label="Permalink to &quot;四、总结&quot;">​</a></h2><p>最后我们来总结。 其实@WebEndpoint 就相当于<code>声明成一个@RestController</code>的控制类而请求方法分别被下面注解代替。</p><table><thead><tr><th>Operation</th><th>HTTP method</th></tr></thead><tbody><tr><td><code>@ReadOperation</code></td><td><code>GET</code></td></tr><tr><td><code>@WriteOperation</code></td><td><code>POST</code></td></tr><tr><td><code>@DeleteOperation</code></td><td><code>DELETE</code></td></tr></tbody></table>`,30)]))}const E=a(t,[["render",p]]);export{k as __pageData,E as default};
