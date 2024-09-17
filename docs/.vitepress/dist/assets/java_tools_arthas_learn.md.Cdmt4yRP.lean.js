import{_ as a,c as n,aa as e,o as i}from"./chunks/framework.bT2BobGK.js";const b=JSON.parse('{"title":"基础教程","description":"","frontmatter":{"breadcrumb":false,"navbar":true,"sidebar":true,"pageInfo":true,"contributor":true,"editLink":true,"updateTime":true,"prev":true,"next":true,"comment":false,"footer":true,"backtotop":true,"title":"基础教程","category":"Arthas"},"headers":[],"relativePath":"java/tools/arthas/learn.md","filePath":"java/tools/arthas/learn.md"}'),p={name:"java/tools/arthas/learn.md"};function t(l,s,r,c,h,o){return i(),n("div",null,s[0]||(s[0]=[e(`<h2 id="一、启动arthas" tabindex="-1">一、启动Arthas <a class="header-anchor" href="#一、启动arthas" aria-label="Permalink to &quot;一、启动Arthas&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>curl -O https://arthas.aliyun.com/arthas-boot.jar</span></span>
<span class="line"><span>java -jar arthas-boot.jar</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>启动命令 <code>java -jar arthas-boot.jar</code></p><h2 id="二、选择进程" tabindex="-1">二、选择进程 <a class="header-anchor" href="#二、选择进程" aria-label="Permalink to &quot;二、选择进程&quot;">​</a></h2><p><img src="https://img.springlearn.cn/blog/learn_1647178107000.png" alt=""></p><p>直接选择我们要监控的进程，输入3进入</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>[INFO] Attach process 28667 success.</span></span>
<span class="line"><span>[INFO] arthas-client connect 127.0.0.1 3658</span></span>
<span class="line"><span>  ,---.  ,------. ,--------.,--.  ,--.  ,---.   ,---.                           </span></span>
<span class="line"><span> /  O  \\ |  .--. &#39;&#39;--.  .--&#39;|  &#39;--&#39;  | /  O  \\ &#39;   .-&#39;                          </span></span>
<span class="line"><span>|  .-.  ||  &#39;--&#39;.&#39;   |  |   |  .--.  ||  .-.  |\`.  \`-.                          </span></span>
<span class="line"><span>|  | |  ||  |\\  \\    |  |   |  |  |  ||  | |  |.-&#39;    |                         </span></span>
<span class="line"><span>\`--&#39; \`--&#39;\`--&#39; &#39;--&#39;   \`--&#39;   \`--&#39;  \`--&#39;\`--&#39; \`--&#39;\`-----&#39;                          </span></span>
<span class="line"><span></span></span>
<span class="line"><span>wiki       https://arthas.aliyun.com/doc                                        </span></span>
<span class="line"><span>tutorials  https://arthas.aliyun.com/doc/arthas-tutorials.html                  </span></span>
<span class="line"><span>version    3.5.6                                                                </span></span>
<span class="line"><span>main_class com.example.demo.DemoApplication                                     </span></span>
<span class="line"><span>pid        28667                                                                </span></span>
<span class="line"><span>time       2022-03-13 21:31:04</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>提示已经连接上进程。</p><h2 id="三、基础信息查询命令" tabindex="-1">三、基础信息查询命令 <a class="header-anchor" href="#三、基础信息查询命令" aria-label="Permalink to &quot;三、基础信息查询命令&quot;">​</a></h2><h3 id="_3-1-dashboard-看板命令" tabindex="-1">3.1 dashboard 看板命令 <a class="header-anchor" href="#_3-1-dashboard-看板命令" aria-label="Permalink to &quot;3.1 dashboard 看板命令&quot;">​</a></h3><p>输入 <code>dashboard</code></p><p><img src="https://img.springlearn.cn/blog/learn_1647178404000.png" alt=""></p><p>会定时将应用信息输出到控制台上。</p><h3 id="_3-2-jad-反向编译" tabindex="-1">3.2 jad 反向编译 <a class="header-anchor" href="#_3-2-jad-反向编译" aria-label="Permalink to &quot;3.2 jad 反向编译&quot;">​</a></h3><p><code> jad com.example.demo.DemoApplication</code></p><p><img src="https://img.springlearn.cn/blog/learn_1647178673000.png" alt=""></p><h3 id="_3-3-watch-监控指令" tabindex="-1">3.3 watch 监控指令 <a class="header-anchor" href="#_3-3-watch-监控指令" aria-label="Permalink to &quot;3.3 watch 监控指令&quot;">​</a></h3><p>这个命令是比较常用的命令,可以用来分析系统性能。</p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">package</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> com.example.demo;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> org.springframework.web.bind.annotation.GetMapping;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> org.springframework.web.bind.annotation.ResponseBody;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> org.springframework.web.bind.annotation.RestController;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">RestController</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> WebController</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">GetMapping</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/get&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ResponseBody</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> String </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(String </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>监控这个类 <code>watch com.example.demo.WebController get returnObj</code></p><table><thead><tr><th style="text-align:center;">参数名</th><th style="text-align:center;">含义</th></tr></thead><tbody><tr><td style="text-align:center;">returnObj</td><td style="text-align:center;">返回值</td></tr><tr><td style="text-align:center;">params</td><td style="text-align:center;">入参</td></tr><tr><td style="text-align:center;">target</td><td style="text-align:center;">方法调用方</td></tr></tbody></table><p><code>watch com.example.demo.WebController get {params,returnObj,target}</code></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>[arthas@32818]$ watch com.example.demo.WebController get returnObj</span></span>
<span class="line"><span>Press Q or Ctrl+C to abort.</span></span>
<span class="line"><span>Affect(class count: 1 , method count: 1) cost in 120 ms, listenerId: 1</span></span>
<span class="line"><span>method=com.example.demo.WebController.get location=AtExit</span></span>
<span class="line"><span>ts=2022-03-13 21:41:56; [cost=1.317166ms] result=@String[123]</span></span>
<span class="line"><span>method=com.example.demo.WebController.get location=AtExit</span></span>
<span class="line"><span>ts=2022-03-13 21:42:03; [cost=0.051875ms] result=@String[测试]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h1 id="四、退出" tabindex="-1">四、退出 <a class="header-anchor" href="#四、退出" aria-label="Permalink to &quot;四、退出&quot;">​</a></h1><p>输入 <code>q</code></p>`,25)]))}const m=a(p,[["render",t]]);export{b as __pageData,m as default};
