import{_ as a,c as s,aa as p,o as e}from"./chunks/framework.swcE7GHT.js";const u=JSON.parse('{"title":"Java","description":"","frontmatter":{"title":"Java","editLink":true,"navbar":true},"headers":[],"relativePath":"java/index.md","filePath":"java/index.md"}'),c={name:"java/index.md"};function r(t,n,l,i,o,d){return e(),s("div",null,n[0]||(n[0]=[p(`<p><img src="https://img.springlearn.cn/blog/learn_1589293715000.png" alt=""></p><p><strong>作者</strong>: 西魏陶渊明 <strong>博客</strong>: <a href="https://blog.springlearn.cn/" target="_blank" rel="noreferrer">https://blog.springlearn.cn/</a></p><div class="tip custom-block"><p class="custom-block-title">西魏陶渊明</p><p>莫笑少年江湖梦，谁不少年梦江湖</p></div><p>知己知彼方能百战不殆,在小编初学Java时候特别怕程序报异常,经常会因为异常不知所措,相信这个问题应该是所有 初学者都会有的心理感受;如果你也有这种感受,那么只有一种解决方法: 迎难而上,攻克Java异常体系,长痛不如短痛,只要清楚了Java的异常体系,就不会再有这种感受了。下面跟着小编来窥探Java的异常体系吧。</p><h1 id="一、java异常体系其实很简单" tabindex="-1">一、Java异常体系其实很简单 <a class="header-anchor" href="#一、java异常体系其实很简单" aria-label="Permalink to &quot;一、Java异常体系其实很简单&quot;">​</a></h1><p>其实Java的异常体系是非常简单的,简单到只要你看过本文就能明白百分之八九十的样子。当你清楚了Java的异常体系 那么在遇到项目执行异常的时候,基本看报错的异常就大概明白问题出在哪里,遇到的错误多了,就成长了,处理的问题就是 你未来在技术路上所积累的财富。</p><p><img src="https://img.springlearn.cn/blog/learn_1589294764000.png" alt=""></p><p>在Java的异常体系中 <code>Throwable</code> 我们可以理解为是一个根异常,即所有的异常都是它的子类</p><p><img src="https://img.springlearn.cn/blog/learn_1589295509000.png" alt=""></p><h1 id="二、error" tabindex="-1">二、Error <a class="header-anchor" href="#二、error" aria-label="Permalink to &quot;二、Error&quot;">​</a></h1><p>前面我们说了Java的异常体系中 <code>Throwable</code> 可以理解是一个根异常,那么 <code>Error</code> 就是这个根节点的一个子节点。 <code>Error</code> 类对象由 <code>Java</code> 虚拟机生成并抛出，大多数错误与代码编写者所执行的操作无关。程序无法处理的异常，一般伴随者jvm虚拟机停止，或者断电之类 这种问题，是无法通过程序来解决的。</p><p><strong>这种异常基本很少,如果遇到也不要慌,跟你的业务逻辑没有关系,顶多是Java代码写的有问题,只要不是业务问题其实大多都能先通过重启解决; 但是假如项目还未上线,只是在开发过程中出现这种问题一定要弄清楚原因,是那一部分代码编写异常导致的,否则上线可能有重大隐患</strong></p><p><strong>经验教学:</strong></p><ol><li>如果是在项目系统过程中遇到这种问题,可能是因为Jar包冲突导致的。</li><li>如果是在项目运行过程中遇到这种问题,可能是因为对象创建过多没有释放,导致堆栈溢出。这个时候就要看GC是否频繁,然后对堆栈日志进行分析,看存在最多的对象是哪一个,然后分析代码解决。</li></ol><h1 id="三、exception" tabindex="-1">三、Exception <a class="header-anchor" href="#三、exception" aria-label="Permalink to &quot;三、Exception&quot;">​</a></h1><p><code>Exception</code> 异常时我们平时在开发中遇到最多，其实 <code>Exception</code> 也分为两种即:</p><ol><li><code>checkException</code> 编译异常，这种异常，是哪些没有遵守java语言规则，容易看出和解决的</li><li><code>uncheckException</code> 运行异常，运行异常，具有不确定性，往往难以排查，包括处理逻辑问题。</li></ol><p>然而 <code>checkException</code> 和 <code>uncheckException</code> 其实只是一个概念,并没有对应的 <code>Java异常类</code>。我们基本可以忽略 <code>checkException</code> 因为这种异常基本现在的编译器都会给我们做了，我们在写代码时候就会实时的给我提示错误了。我们 只用关心 <code>uncheckException</code>即可。</p><p><strong>uncheckException</strong></p><p><img src="https://img.springlearn.cn/blog/learn_1589297073000.png" alt=""></p><p><code>RuntimeException</code> + <code>Error</code> 和其子类都是属于 <code>uncheckException</code></p><p>前面我们已经对 <code>Error</code> 做了说明，现在就主要来看下 <code>RuntimeException</code>。 <code>RuntimeException</code> 从名字来看就是 运行异常,所谓运行异常就是可能在程序运行过程中发生的异常,这种异常一般是可以通过代码逻辑进行处理的。 我们举例一个例子,我们都知道0不能作为除数。但是假如在下面这个代码中</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>public class Tester {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        Scanner sc = new Scanner(System.in);</span></span>
<span class="line"><span>        System.out.print(&quot;请输入被除数a:&quot;);</span></span>
<span class="line"><span>        int a = sc.nextInt();</span></span>
<span class="line"><span>        System.out.print(&quot;请输入除数b:&quot;);</span></span>
<span class="line"><span>        int b = sc.nextInt();</span></span>
<span class="line"><span>        System.out.println(&quot;a/b=&quot; + a / b);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>当输入a=8,b=2,那么结果就是4。</p><p><img src="https://i02piccdn.sogoucdn.com/8206a4441e0386c3" alt=""></p><p><strong>假如我们输入b=0呢?</strong></p><p>学过数学都知道0不能做除数,程序也不运行你这么输入,但是却不能阻止你,只能通过报错的方式来告诉你。</p><p><img src="https://img.springlearn.cn/blog/learn_1589298143000.png" alt=""></p><p>那么我们就要对这个异常进行处理,当发现有这个异常就在控制台来提醒用户。那么代码就会变成这样</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>public class Tester {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        Scanner sc = new Scanner(System.in);</span></span>
<span class="line"><span>        System.out.print(&quot;请输入被除数a:&quot;);</span></span>
<span class="line"><span>        int a = sc.nextInt();</span></span>
<span class="line"><span>        System.out.print(&quot;请输入除数b:&quot;);</span></span>
<span class="line"><span>        int b = sc.nextInt();</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            System.out.println(&quot;a/b=&quot; + a / b);</span></span>
<span class="line"><span>        } catch (ArithmeticException ate) {</span></span>
<span class="line"><span>            //对算术异常进行捕捉</span></span>
<span class="line"><span>            System.err.println(&quot;0不能作为除数,请输入不为0的任意数&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>当出现算术异常直接提示: &quot;0不能作为除数,请输入不为0的任意数&quot; <img src="https://img.springlearn.cn/blog/learn_1589298261000.png" alt=""></p><p>那么像这种程序中无可避免会出现,且又能通过逻辑来处理的异常就是运行异常。运行异常一般都可以正常运行,只是在特定情况下会导致异常发生。 像这面这个例子,我们只要看到 <code>ArithmeticException</code> 就知道是算术异常。所以只要我们对运行异常类有一个认识，其实就能解决大多数的程序问题了。 下面我们来看下运行异常都要有哪些类把。</p><p><img src="https://i03piccdn.sogoucdn.com/f960e6a461d218d2" alt=""></p><p><strong>只要对下面运行异常类进行熟悉了,基本就清楚掌握了Java的异常体系了</strong></p><p><img src="https://img.springlearn.cn/blog/learn_1589299119000.png" alt=""></p><p><img src="https://img.springlearn.cn/blog/learn_1589299523000.png" alt=""></p><p>以上就是常见的运行异常类,当然Java中还有很多不常见的异常类。剩下的我们就可以在日常工作中去学习了。</p>`,37)]))}const m=a(c,[["render",r]]);export{u as __pageData,m as default};