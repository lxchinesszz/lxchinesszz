import{_ as n,o as t,c as l,m as p,a as i,H as e,w as h,a4 as k,C as r}from"./chunks/framework.B8fosacB.js";const F=JSON.parse('{"title":"事务回滚原理","description":"","frontmatter":{"breadcrumb":false,"navbar":true,"sidebar":true,"pageInfo":true,"contributor":true,"editLink":true,"updateTime":true,"prev":true,"next":true,"comment":false,"footer":true,"backtotop":true,"title":"事务回滚原理","category":"源码分析"},"headers":[],"relativePath":"post/test/事务回滚原理.md","filePath":"post/test/事务回滚原理.md","lastUpdated":null}'),E={name:"post/test/事务回滚原理.md"};function d(g,s,o,c,y,b){const a=r("Version");return t(),l("div",{"data-pagefind-body":!0},[p("p",null,[s[1]||(s[1]=i("在前文单测类注入中我们知道.JUnit提供了一些监听器,允许 当单测方法执行时候去对单测上下文进行调整。所以呢事务回滚也是基于 这里的特性完成的。")),e(a,null,{default:h(()=>s[0]||(s[0]=[i("基于SpringBoot 2.1.x版本分析")])),_:1})]),s[2]||(s[2]=k(`<p><img src="https://img.springlearn.cn/blog/learn_1617795655000.png" alt=""></p><h3 id="源码分析" tabindex="-1">源码分析 <a class="header-anchor" href="#源码分析" aria-label="Permalink to &quot;源码分析&quot;">​</a></h3><p>Spring中为了适配不通的数据库,提供了事务平台的概念。 <code>PlatformTransactionManager</code> 只要实现了该接口 就允许对事务进行控制。具体事务的控制是通过工具类来处理的。 <code>TransactionContextHolder</code> 可以获取当前线程 执行的事务上下文。JUnit通过该工具拿到事务的上下文,然后对此做响应的修改。具体的 修改逻辑见下文注释。两句话解释清楚。</p><p><code>TransactionalTestExecutionListener</code></p><p>伪代码分析</p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line highlighted"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 单测方法执行前,移除容器原来的事务管理器,然后开启一个新的事务</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Override</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> beforeTestMethod</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">final</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> TestContext testContext) throws Exception {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		Method testMethod </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> testContext.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getTestMethod</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		Class&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; testClass </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> testContext.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getTestClass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		Assert.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">notNull</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(testMethod, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Test method of supplied TestContext must not be null&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		TransactionContext txContext </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> TransactionContextHolder.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">removeCurrentTransactionContext</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		Assert.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">state</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(txContext </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Cannot start new transaction without ending existing transaction&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		PlatformTransactionManager tm </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		TransactionAttribute transactionAttribute </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.attributeSource.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getTransactionAttribute</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(testMethod, testClass);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">		if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (transactionAttribute </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			transactionAttribute </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> TestContextTransactionUtils.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createDelegatingTransactionAttribute</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(testContext,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">				transactionAttribute);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">			if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (logger.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">isDebugEnabled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">				logger.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">debug</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Explicit transaction definition [&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> transactionAttribute </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">						&quot;] found for test context &quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> testContext);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">			if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (transactionAttribute.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getPropagationBehavior</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> TransactionDefinition.PROPAGATION_NOT_SUPPORTED) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">				return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			tm </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getTransactionManager</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(testContext, transactionAttribute.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getQualifier</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">());</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			Assert.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">state</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(tm </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">					() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Failed to retrieve PlatformTransactionManager for @Transactional test: &quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> testContext);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">		if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (tm </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			txContext </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> TransactionContext</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(testContext, tm, transactionAttribute, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">isRollback</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(testContext));</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">			runBeforeTransactionMethods</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(testContext);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			txContext.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">startTransaction</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			TransactionContextHolder.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setCurrentTransactionContext</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(txContext);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	</span></span>
<span class="line highlighted"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	// 单测方法执行结束后,结束事务然后回滚或提交</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Override</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> afterTestMethod</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(TestContext testContext) throws Exception {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		Method testMethod </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> testContext.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getTestMethod</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		Assert.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">notNull</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(testMethod, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;The test method of the supplied TestContext must not be null&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		TransactionContext txContext </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> TransactionContextHolder.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">removeCurrentTransactionContext</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		// If there was (or perhaps still is) a transaction...</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">		if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (txContext </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			TransactionStatus transactionStatus </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> txContext.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getTransactionStatus</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">			try</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">				// If the transaction is still active...</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">				if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (transactionStatus </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &amp;&amp;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> !</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">transactionStatus.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">isCompleted</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">					txContext.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">endTransaction</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">				}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">			finally</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">				runAfterTransactionMethods</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(testContext);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br></div></div>`,6))])}const m=n(E,[["render",d]]);export{F as __pageData,m as default};
