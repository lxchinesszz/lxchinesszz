import{_ as a,o as i,c as e,a4 as t}from"./chunks/framework.B8fosacB.js";const c=JSON.parse('{"title":"Mojito介绍","description":"","frontmatter":{"breadcrumb":false,"navbar":true,"sidebar":true,"pageInfo":true,"contributor":true,"editLink":true,"updateTime":true,"prev":true,"next":true,"comment":true,"footer":true,"backtotop":true,"title":"Mojito介绍","category":"Mojito"},"headers":[],"relativePath":"post/project/mojito/index.md","filePath":"post/project/mojito/index.md","lastUpdated":1726844571000}'),n={name:"post/project/mojito/index.md"};function p(r,s,l,h,o,k){return i(),e("div",{"data-pagefind-body":!0},s[0]||(s[0]=[t(`<p><img src="https://img.springlearn.cn/blog/dd74eb95dc1ea6c3d0a5ea341f2f62cf.png" alt=""></p><p><a href="https://mojito.springlearn.cn" target="_blank" rel="noreferrer">Mojito Framework</a></p><p>名字以周杰伦新专辑《Mojito》命名。</p><h3 id="一、为什么要写这个项目-🥳" tabindex="-1">一、为什么要写这个项目？🥳 <a class="header-anchor" href="#一、为什么要写这个项目-🥳" aria-label="Permalink to &quot;一、为什么要写这个项目？🥳&quot;">​</a></h3><h4 id="原因1" tabindex="-1">原因1 <a class="header-anchor" href="#原因1" aria-label="Permalink to &quot;原因1&quot;">​</a></h4><p>其实小编个人,比较热衷于造轮子。在造轮子的过程中，设计到的通信一直都是一个问题，在SpringBoot的环境下，不得不引入<code>actuator</code>模块,进行端点构建。 虽然SpringBoot升级到2版本之后<a href="https://blog.springlearn.cn/posts/40046/" target="_blank" rel="noreferrer">WebEndpoint</a>会更加方便,但是感觉还是比较复杂,以使我在关于业务逻辑的同时，还要去适配 WebEndpoint的编程方式。于是就有了,构建一个简单方便的通信层框架。因为Java的Socket编程API不够友好,所以小编在Socket编程上选择Netty进行封装。</p><h4 id="原因2" tabindex="-1">原因2 <a class="header-anchor" href="#原因2" aria-label="Permalink to &quot;原因2&quot;">​</a></h4><p>作为开发者,无论我们写什么业务,最终都会通过web接口暴露进行通信。传统的方式是我们引入一个 web容器,比如tomcat、jboss等等。</p><p>在分布式环境下，我们使用到的通信框架，如dubbo、hsf、springcloud之类也离不开通信。这些是已经造好的轮子,但是我只需要轮子中的⛓链条,只要通信层。所以就将通信层 给抽离出来，并提供更加简单的API.</p><h3 id="二、主要运用在什么地方-🚀" tabindex="-1">二、主要运用在什么地方？🚀 <a class="header-anchor" href="#二、主要运用在什么地方-🚀" aria-label="Permalink to &quot;二、主要运用在什么地方？🚀&quot;">​</a></h3><p>mojito的定位是通信层框架,其本质是基于Netty进行二次封装,提供更加简单的API,方便开发者进行调用。 如果你要写一个通信类的组件，但是又不希望引入web容器，或者rpc之类的框架。此时mojito就是最佳选择,因为它提供非常简单API可以快速的构建通信模块,代码量缺只有一点点的样子。当然如果你对Netty比较熟悉,也可以直接使用Netty进行开发。</p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Test</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> serverTest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() throws Exception {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        Mojito.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(RpcUserRequest.class, RpcUserResponse.class)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                //这里接受客户端的请求,并返回一个相应</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">serverHandler</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((channel, rpcRequest) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> RpcUserResponse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;服务端返回: &quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> rpcRequest.message))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">create</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">12306</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,12)]))}const E=a(n,[["render",p]]);export{c as __pageData,E as default};
