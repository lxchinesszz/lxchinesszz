import{_ as s,c as a,aa as e,o as p}from"./chunks/framework.swcE7GHT.js";const m=JSON.parse('{"title":"Java并发包队列之BlockingQueue","description":"","frontmatter":{"breadcrumb":false,"navbar":true,"sidebar":true,"pageInfo":true,"contributor":true,"editLink":true,"updateTime":true,"prev":true,"next":true,"comment":false,"footer":true,"backtotop":true,"title":"Java并发包队列之BlockingQueue","category":"Java进阶"},"headers":[],"relativePath":"java/BlockingQueue.md","filePath":"java/BlockingQueue.md"}'),l={name:"java/BlockingQueue.md"};function i(r,n,t,u,c,b){return p(),a("div",null,n[0]||(n[0]=[e(`<h2 id="一、什么是blockingqueue" tabindex="-1">一、什么是BlockingQueue <a class="header-anchor" href="#一、什么是blockingqueue" aria-label="Permalink to &quot;一、什么是BlockingQueue&quot;">​</a></h2><p>BlockingQueue即阻塞队列，从阻塞这个词可以看出，在某些情况下对阻塞队列的访问可能会造成阻塞。被阻塞的情况主要有如下两种：</p><ol><li>当队列满了的时候进行入队列操作</li><li>当队列空了的时候进行出队列操作 因此，当一个线程试图对一个已经满了的队列进行入队列操作时，它将会被阻塞，除非有另一个线程做了出队列操作；同样，当一个线程试图对一个空队列进行出队列操作时，它将会被阻塞，除非有另一个线程进行了入队列操作。</li></ol><h2 id="二、blockingqueue的用法" tabindex="-1">二、BlockingQueue的用法 <a class="header-anchor" href="#二、blockingqueue的用法" aria-label="Permalink to &quot;二、BlockingQueue的用法&quot;">​</a></h2><p>阻塞队列主要用在生产者/消费者的场景，下面这幅图展示了一个线程生产、一个线程消费的场景：</p><p><img src="http://img.blog.csdn.net/20150929153140497" alt=""></p><p>负责生产的线程不断的制造新对象并插入到阻塞队列中，直到达到这个队列的上限值。队列达到上限值之后生产线程将会被阻塞，直到消费的线程对这个队列进行消费。同理，负责消费的线程不断的从队列中消费对象，直到这个队列为空，当队列为空时，消费线程将会被阻塞，除非队列中有新的对象被插入。</p><h2 id="三、blockingqueue接口中的方法" tabindex="-1">三、BlockingQueue接口中的方法 <a class="header-anchor" href="#三、blockingqueue接口中的方法" aria-label="Permalink to &quot;三、BlockingQueue接口中的方法&quot;">​</a></h2><p>阻塞队列一共有四套方法分别用来进行insert、remove和examine，当每套方法对应的操作不能马上执行时会有不同的反应，下面这个表格就分类列出了这些方法：</p><table><thead><tr><th>-</th><th>Throws Exception</th><th>Special Value</th><th>Blocks</th><th>Times Out</th></tr></thead><tbody><tr><td>Insert</td><td>add(o)</td><td>offer(o)</td><td>put(o)</td><td>offer(o, timeout, timeunit)</td></tr><tr><td>Remove</td><td>remove(o)</td><td>poll()</td><td>take()</td><td>poll(timeout, timeunit)</td></tr><tr><td>Examine</td><td>element()</td><td>peek()</td><td></td><td></td></tr></tbody></table><ol><li>ThrowsException：如果操作不能马上进行，则抛出异常</li><li>SpecialValue：如果操作不能马上进行，将会返回一个特殊的值，一般是true或者false</li><li>Blocks:如果操作不能马上进行，操作会被阻塞</li><li>TimesOut:如果操作不能马上进行，操作会被阻塞指定的时间，如果指定时间没执行，则返回一个特殊值，一般是true或者false 需要注意的是，我们不能向BlockingQueue中插入null，否则会报NullPointerException。</li></ol><h2 id="四、blockingqueue的实现类" tabindex="-1">四、BlockingQueue的实现类 <a class="header-anchor" href="#四、blockingqueue的实现类" aria-label="Permalink to &quot;四、BlockingQueue的实现类&quot;">​</a></h2><p>BlockingQueue只是java.util.concurrent包中的一个接口，而在具体使用时，我们用到的是它的实现类，当然这些实现类也位于java.util.concurrent包中。在Java6中，BlockingQueue的实现类主要有以下几种：</p><ol><li>ArrayBlockingQueue</li><li>DelayQueue</li><li>LinkedBlockingQueue</li><li>PriorityBlockingQueue</li><li>SynchronousQueue</li></ol><h3 id="_4-1-arrayblockingqueue" tabindex="-1">4.1 ArrayBlockingQueue <a class="header-anchor" href="#_4-1-arrayblockingqueue" aria-label="Permalink to &quot;4.1 ArrayBlockingQueue&quot;">​</a></h3><p>ArrayBlockingQueue是一个有边界的阻塞队列，它的内部实现是一个数组。有边界的意思是它的容量是有限的，我们必须在其初始化的时候指定它的容量大小，容量大小一旦指定就不可改变。</p><p>ArrayBlockingQueue是以先进先出的方式存储数据，最新插入的对象是尾部，最新移出的对象是头部。下面是一个初始化和使用ArrayBlockingQueue的例子：</p><p>BlockingQueue queue = new ArrayBlockingQueue(1024); queue.put(&quot;1&quot;); Object object = queue.take();</p><h3 id="_4-2-delayqueue" tabindex="-1">4.2 DelayQueue <a class="header-anchor" href="#_4-2-delayqueue" aria-label="Permalink to &quot;4.2 DelayQueue&quot;">​</a></h3><p>DelayQueue阻塞的是其内部元素，DelayQueue中的元素必须实现 java.util.concurrent.Delayed接口，这个接口的定义非常简单：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>public interface Delayed extends Comparable&lt;Delayed&gt; {</span></span>
<span class="line"><span>long getDelay(TimeUnit unit);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>getDelay()方法的返回值就是队列元素被释放前的保持时间，如果返回0或者一个负值，就意味着该元素已经到期需要被释放，此时DelayedQueue会通过其take()方法释放此对象。</p><p>从上面Delayed 接口定义可以看到，它还继承了Comparable接口，这是因为DelayedQueue中的元素需要进行排序，一般情况，我们都是按元素过期时间的优先级进行排序。</p><p>例1：为一个对象指定过期时间</p><p>首先，我们先定义一个元素，这个元素要实现Delayed接口</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>public class DelayedElement implements Delayed {</span></span>
<span class="line"><span>  private long expired;</span></span>
<span class="line"><span>  private long delay;</span></span>
<span class="line"><span>  private String name;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  DelayedElement(String elementName, long delay) {</span></span>
<span class="line"><span>         this. name = elementName;</span></span>
<span class="line"><span>         this. delay= delay;</span></span>
<span class="line"><span>         expired = ( delay + System. currentTimeMillis());</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  @Override</span></span>
<span class="line"><span>  public int compareTo(Delayed o) {</span></span>
<span class="line"><span>        DelayedElement cached=(DelayedElement) o;</span></span>
<span class="line"><span>         return cached.getExpired()&gt; expired?1:-1;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  @Override</span></span>
<span class="line"><span>  public long getDelay(TimeUnit unit) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>         return ( expired - System. currentTimeMillis());</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  @Override</span></span>
<span class="line"><span>  public String toString() {</span></span>
<span class="line"><span>         return &quot;DelayedElement [delay=&quot; + delay + &quot;, name=&quot; + name + &quot;]&quot;;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  public long getExpired() {</span></span>
<span class="line"><span>         return expired;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><p>设置这个元素的过期时间为3s</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>public class DelayQueueExample {</span></span>
<span class="line"><span>  public static void main(String[] args) throws InterruptedException {</span></span>
<span class="line"><span>        DelayQueue&lt;DelayedElement&gt; queue= new DelayQueue&lt;&gt;();</span></span>
<span class="line"><span>        DelayedElement ele= new DelayedElement( &quot;cache 3 seconds&quot;,3000);</span></span>
<span class="line"><span>         queue.put( ele);</span></span>
<span class="line"><span>        System. out.println( queue.take());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>运行这个main函数，我们可以发现，我们需要等待3s之后才会打印这个对象。</p><p>其实DelayQueue应用场景很多，比如定时关闭连接、缓存对象，超时处理等各种场景，下面我们就拿学生考试为例让大家更深入的理解DelayQueue的使用。</p><p>例2：把所有考试的学生看做是一个DelayQueue，谁先做完题目释放谁</p><p>首先，我们构造一个学生对象</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>public class Student implements Runnable,Delayed{</span></span>
<span class="line"><span>  private String name;  //姓名</span></span>
<span class="line"><span>  private long costTime;//做试题的时间</span></span>
<span class="line"><span>  private long finishedTime;//完成时间</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  public Student(String name, long costTime) {</span></span>
<span class="line"><span>         this. name = name;</span></span>
<span class="line"><span>         this. costTime= costTime;</span></span>
<span class="line"><span>         finishedTime = costTime + System. currentTimeMillis();</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  @Override</span></span>
<span class="line"><span>  public void run() {</span></span>
<span class="line"><span>        System. out.println( name + &quot; 交卷,用时&quot; + costTime /1000);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  @Override</span></span>
<span class="line"><span>  public long getDelay(TimeUnit unit) {</span></span>
<span class="line"><span>         return ( finishedTime - System. currentTimeMillis());</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  @Override</span></span>
<span class="line"><span>  public int compareTo(Delayed o) {</span></span>
<span class="line"><span>        Student other = (Student) o;</span></span>
<span class="line"><span>         return costTime &gt;= other. costTime?1:-1;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>然后在构造一个教师对象对学生进行考试</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>public class Teacher {</span></span>
<span class="line"><span>  static final int STUDENT_SIZE = 30;</span></span>
<span class="line"><span>  public static void main(String[] args) throws InterruptedException {</span></span>
<span class="line"><span>        Random r = new Random();</span></span>
<span class="line"><span>        //把所有学生看做一个延迟队列</span></span>
<span class="line"><span>        DelayQueue&lt;Student&gt; students = new DelayQueue&lt;Student&gt;();</span></span>
<span class="line"><span>        //构造一个线程池用来让学生们“做作业”</span></span>
<span class="line"><span>        ExecutorService exec = Executors.newFixedThreadPool(STUDENT_SIZE);</span></span>
<span class="line"><span>         for ( int i = 0; i &lt; STUDENT_SIZE; i++) {</span></span>
<span class="line"><span>               //初始化学生的姓名和做题时间</span></span>
<span class="line"><span>               students.put( new Student( &quot;学生&quot; + (i + 1), 3000 + r.nextInt(10000)));</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        //开始做题</span></span>
<span class="line"><span>        while(! students.isEmpty()){</span></span>
<span class="line"><span>               exec.execute( students.take());</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>         exec.shutdown();</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>我们看一下运行结果：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>学生2 交卷,用时3</span></span>
<span class="line"><span>学生1 交卷,用时5</span></span>
<span class="line"><span>学生5 交卷,用时7</span></span>
<span class="line"><span>学生4 交卷,用时8</span></span>
<span class="line"><span>学生3 交卷,用时11</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>通过运行结果我们可以发现，每个学生在指定开始时间到达之后就会“交卷”（取决于getDelay()方法），并且是先做完的先交卷（取决于compareTo()方法）。</p><h3 id="_4-3-linkedblockingqueue" tabindex="-1">4.3 LinkedBlockingQueue <a class="header-anchor" href="#_4-3-linkedblockingqueue" aria-label="Permalink to &quot;4.3 LinkedBlockingQueue&quot;">​</a></h3><p>LinkedBlockingQueue阻塞队列大小的配置是可选的，如果我们初始化时指定一个大小，它就是有边界的，如果不指定，它就是无边界的。说是无边界，其实是采用了默认大小为Integer.MAX_VALUE的容量 。它的内部实现是一个链表。</p><p>和ArrayBlockingQueue一样，LinkedBlockingQueue 也是以先进先出的方式存储数据，最新插入的对象是尾部，最新移出的对象是头部。下面是一个初始化和使LinkedBlockingQueue的例子：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>BlockingQueue&lt;String&gt; unbounded = new LinkedBlockingQueue&lt;String&gt;();</span></span>
<span class="line"><span>BlockingQueue&lt;String&gt; bounded   = new LinkedBlockingQueue&lt;String&gt;(1024);</span></span>
<span class="line"><span>bounded.put(&quot;Value&quot;);</span></span>
<span class="line"><span>String value = bounded.take();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="_4-4-priorityblockingqueue" tabindex="-1">4.4 PriorityBlockingQueue <a class="header-anchor" href="#_4-4-priorityblockingqueue" aria-label="Permalink to &quot;4.4 PriorityBlockingQueue&quot;">​</a></h3><p>PriorityBlockingQueue是一个没有边界的队列，它的排序规则和 java.util.PriorityQueue一样。需要注意，PriorityBlockingQueue中允许插入null对象。</p><p>所有插入PriorityBlockingQueue的对象必须实现 java.lang.Comparable接口，队列优先级的排序规则就是按照我们对这个接口的实现来定义的。</p><p>另外，我们可以从PriorityBlockingQueue获得一个迭代器Iterator，但这个迭代器并不保证按照优先级顺序进行迭代。</p><p>下面我们举个例子来说明一下，首先我们定义一个对象类型，这个对象需要实现Comparable接口：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>public class PriorityElement implements Comparable&lt;PriorityElement&gt; {</span></span>
<span class="line"><span>private int priority;//定义优先级</span></span>
<span class="line"><span>PriorityElement(int priority) {</span></span>
<span class="line"><span>    //初始化优先级</span></span>
<span class="line"><span>    this.priority = priority;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>@Override</span></span>
<span class="line"><span>public int compareTo(PriorityElement o) {</span></span>
<span class="line"><span>    //按照优先级大小进行排序</span></span>
<span class="line"><span>    return priority &gt;= o.getPriority() ? 1 : -1;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>public int getPriority() {</span></span>
<span class="line"><span>    return priority;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>public void setPriority(int priority) {</span></span>
<span class="line"><span>    this.priority = priority;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>@Override</span></span>
<span class="line"><span>public String toString() {</span></span>
<span class="line"><span>    return &quot;PriorityElement [priority=&quot; + priority + &quot;]&quot;;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>然后我们把这些元素随机设置优先级放入队列中</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>public class PriorityBlockingQueueExample {</span></span>
<span class="line"><span>public static void main(String[] args) throws InterruptedException {</span></span>
<span class="line"><span>    PriorityBlockingQueue&lt;PriorityElement&gt; queue = new PriorityBlockingQueue&lt;&gt;();</span></span>
<span class="line"><span>    for (int i = 0; i &lt; 5; i++) {</span></span>
<span class="line"><span>        Random random=new Random();</span></span>
<span class="line"><span>        PriorityElement ele = new PriorityElement(random.nextInt(10));</span></span>
<span class="line"><span>        queue.put(ele);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    while(!queue.isEmpty()){</span></span>
<span class="line"><span>        System.out.println(queue.take());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>看一下运行结果：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>PriorityElement [priority=3]</span></span>
<span class="line"><span>PriorityElement [priority=4]</span></span>
<span class="line"><span>PriorityElement [priority=5]</span></span>
<span class="line"><span>PriorityElement [priority=8]</span></span>
<span class="line"><span>PriorityElement [priority=9]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_4-5-synchronousqueue" tabindex="-1">4.5 SynchronousQueue <a class="header-anchor" href="#_4-5-synchronousqueue" aria-label="Permalink to &quot;4.5 SynchronousQueue&quot;">​</a></h3><p>SynchronousQueue队列内部仅允许容纳一个元素。当一个线程插入一个元素后会被阻塞，除非这个元素被另一个线程消费。</p>`,54)]))}const d=s(l,[["render",i]]);export{m as __pageData,d as default};
