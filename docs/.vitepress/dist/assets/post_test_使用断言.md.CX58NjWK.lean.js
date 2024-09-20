import{_ as t,c as n,m as a,a as i,H as l,w as h,aa as p,D as r,o as k}from"./chunks/framework.FHBy0zsw.js";const m=JSON.parse('{"title":"使用断言","description":"","frontmatter":{"breadcrumb":false,"navbar":true,"sidebar":true,"pageInfo":true,"contributor":true,"editLink":true,"updateTime":true,"prev":true,"next":true,"comment":false,"footer":true,"backtotop":true,"title":"使用断言","category":"单测规范"},"headers":[],"relativePath":"post/test/使用断言.md","filePath":"post/test/使用断言.md"}'),d={name:"post/test/使用断言.md"};function E(o,s,c,g,u,y){const e=r("Highlight");return k(),n("div",null,[s[2]||(s[2]=a("div",{class:"danger custom-block"},[a("p",{class:"custom-block-title"},"断言"),a("p",null,"单测方法尽可能去使用断言,明确方法的执行结果")],-1)),s[3]||(s[3]=a("h2",{id:"一、单测的目的",tabindex:"-1"},[i("一、单测的目的 "),a("a",{class:"header-anchor",href:"#一、单测的目的","aria-label":'Permalink to "一、单测的目的"'},"​")],-1)),s[4]||(s[4]=a("p",null,"我们单测的目的就是为了确定,被测试的方法或者是接口是否符合业务要求。 其中一些方法是只要跑成功就算成功了,但是其实大部分方法还是要看其中的返回值是否符合预期。",-1)),a("p",null,[s[1]||(s[1]=i("在平时的开发中发现许多同学只是喜欢把结果打印出来,人工去验证数据。这其实就跟JUnit的口号相违背了。 JUnit的口号: ")),l(e,{color:"green"},{default:h(()=>s[0]||(s[0]=[i("keep the bar green to keep the code clean。")])),_:1})]),s[5]||(s[5]=p(`<h3 id="_1-1-正确的单测一定是有断言的" tabindex="-1">1.1 正确的单测一定是有断言的 <a class="header-anchor" href="#_1-1-正确的单测一定是有断言的" aria-label="Permalink to &quot;1.1 正确的单测一定是有断言的&quot;">​</a></h3><p>断言明确执行结果,如果你要看数据也可以把结果打印出来。但是断言也要加上。 <code>JUnit</code> 为我们提供了一些辅助的函数，就是用来帮助我们来判断被测试的方法是否如我们预期的效果一样正常执行。</p><h2 id="二、断言api" tabindex="-1">二、断言API <a class="header-anchor" href="#二、断言api" aria-label="Permalink to &quot;二、断言API&quot;">​</a></h2><h3 id="_2-1-assertequals" tabindex="-1">2.1 assertEquals <a class="header-anchor" href="#_2-1-assertequals" aria-label="Permalink to &quot;2.1 assertEquals&quot;">​</a></h3><ul><li>assertEquals(Object expected, Object actual)</li><li>assertEquals(String message, Object expected, Object actual)</li></ul><p>String message： 可选参数，将在发生错误时报告这个消息 Object expected： 期望值，一般为用户指定的内容 Object actual： 被测试的代码实际返回的结果</p><h3 id="_2-2-asserttrue-与-assertfalse" tabindex="-1">2.2 assertTrue 与 assertFalse <a class="header-anchor" href="#_2-2-asserttrue-与-assertfalse" aria-label="Permalink to &quot;2.2 assertTrue 与 assertFalse&quot;">​</a></h3><ul><li>assertTrue(boolean condition)</li><li>assertTrue(String message, boolean condition)</li></ul><p>String message： 可选参数，将在发生错误时报告这个消息 boolean condition：待验证的 Boolean 类型值</p><p>assertTrue 该断言用来验证给定的布尔型值是否为真，如果结果为假，则验证失败； 相反，assertFalse 用来验证给定的布尔型值是否为假，如果结果为真，则验证失败。</p><h3 id="_2-3-assertnull-与-assertnotnull" tabindex="-1">2.3 assertNull 与 assertNotNull <a class="header-anchor" href="#_2-3-assertnull-与-assertnotnull" aria-label="Permalink to &quot;2.3 assertNull 与 assertNotNull&quot;">​</a></h3><ul><li>assertNull(Object object)</li><li>assertNull(String message, Object object)</li></ul><p>String message： 可选参数，将会在发生错误时报告这个消息 Object object： 待验证是否为 Null 的对象</p><p>assertNull 该断言用来验证给定的对象是否为 Null ,如果给定对象为 非Null，则验证失败。 相反，assertNotNull 用来验证给定的对象是否为 非Null，如果为 Null，则验证失败。</p><h3 id="_2-4-assertsame-与-assertnotsame" tabindex="-1">2.4 assertSame 与 assertNotSame <a class="header-anchor" href="#_2-4-assertsame-与-assertnotsame" aria-label="Permalink to &quot;2.4 assertSame 与 assertNotSame&quot;">​</a></h3><ul><li>assertSame(Object expected, Object actual)</li><li>assertSame(String message, Object expected, Object actual)</li></ul><p>String message： 可选参数，将会在发生错误时报告这个消息 Object expected：期望值 Object actual：被测试代码返回的实际值</p><p>assertSame 该断言用来验证 expected 和 actual 的引用是否为同一个对象的引用，如果不是同一引用，则验证失败。 相反，assertNotSame 用来验证 expected 和 actual 的引用是否为不同对象的引用，如果为同一对象引用，则验证失败。</p><h3 id="_2-5-fail" tabindex="-1">2.5 Fail <a class="header-anchor" href="#_2-5-fail" aria-label="Permalink to &quot;2.5 Fail&quot;">​</a></h3><ul><li>Fail()</li><li>Fail(String message)</li></ul><p>String message是个可选参数，假如提供，将会在发生错误时报告这个消息。</p><p>该断言会使测试立即失败，通常用在测试不能达到的分支上（如异常）。</p><h2 id="三、断言匹配" tabindex="-1">三、断言匹配 <a class="header-anchor" href="#三、断言匹配" aria-label="Permalink to &quot;三、断言匹配&quot;">​</a></h2><p>依赖包</p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> org.hamcrest.Matchers;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> org.hamcrest.core.AllOf;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> org.hamcrest.core.AnyOf;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_3-1-matchers匹配器" tabindex="-1">3.1 Matchers匹配器 <a class="header-anchor" href="#_3-1-matchers匹配器" aria-label="Permalink to &quot;3.1 Matchers匹配器&quot;">​</a></h3><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 是否相等</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        Assert.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">assertThat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, Matchers.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">is</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 2 小于等于2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        Assert.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">assertThat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,Matchers.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lessThanOrEqualTo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        Map&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; map </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> HashMap&lt;&gt;();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        map.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">put</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;jay&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // map 中是否包含key为name的元素</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        Assert.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">assertThat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(map,Matchers.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hasKey</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // map 中是否包含value为jay的元素</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        Assert.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">assertThat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(map,Matchers.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hasValue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;jay&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // map 中是否包含name等于jay的元素</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        Assert.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">assertThat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(map,Matchers.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hasEntry</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;jay&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="_3-2-allof" tabindex="-1">3.2 AllOf <a class="header-anchor" href="#_3-2-allof" aria-label="Permalink to &quot;3.2 AllOf&quot;">​</a></h3><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   // 2 小于4同时也小于3</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   Assert.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">assertThat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, AllOf.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">allOf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Matchers.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lessThan</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), Matchers.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lessThan</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)));</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="_3-3-anyof" tabindex="-1">3.3 AnyOf <a class="header-anchor" href="#_3-3-anyof" aria-label="Permalink to &quot;3.3 AnyOf&quot;">​</a></h3><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   // 2 大于1小于3</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   Assert.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">assertThat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, AnyOf.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">anyOf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Matchers.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">greaterThan</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), Matchers.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lessThan</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)));</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,31))])}const F=t(d,[["render",E]]);export{m as __pageData,F as default};
