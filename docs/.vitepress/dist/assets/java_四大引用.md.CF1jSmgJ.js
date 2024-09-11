import{_ as t,c as e,o as a,ac as r}from"./chunks/framework.C9DUt1S1.js";const b=JSON.parse('{"title":"Java四大引用","description":"","frontmatter":{"breadcrumb":false,"navbar":true,"sidebar":true,"pageInfo":true,"contributor":true,"editLink":true,"updateTime":true,"prev":true,"next":true,"comment":false,"footer":true,"backtotop":true,"title":"Java四大引用","category":"Java进阶"},"headers":[],"relativePath":"java/四大引用.md","filePath":"java/四大引用.md"}'),d={name:"java/四大引用.md"},o=r('<p><img src="https://img.springlearn.cn/learn_c87a079fcea0d7893b03d4d57478bca7.png" alt=""></p><p><strong>作者</strong>: 西魏陶渊明 <strong>博客</strong>: <a href="https://blog.springlearn.cn/" target="_blank" rel="noreferrer">https://blog.springlearn.cn/</a></p><div class="tip custom-block"><p class="custom-block-title">西魏陶渊明</p><p>莫笑少年江湖梦，谁不少年梦江湖</p></div><h1 id="一、概念" tabindex="-1">一、概念 <a class="header-anchor" href="#一、概念" aria-label="Permalink to &quot;一、概念&quot;">​</a></h1><h2 id="_1-强引用" tabindex="-1">1. 强引用 <a class="header-anchor" href="#_1-强引用" aria-label="Permalink to &quot;1. 强引用&quot;">​</a></h2><p>new 对象并指向引用变量的都是强引用,开发中大部分都是强引用。对于强引用,JVM宁愿报错<code>OutOfMemoryError</code>错误,是程序异常终止, 也不会回收强引用来解决内存, 对这类情况,可以通过赋值强引用对象=null,从而被JVM回收。 但是一般我们在方法中定义的强引用,会存在方法栈中,当方法运行完,退出,此时方法中的强引用也会因为引用数为0,从而被回收。</p><h2 id="_2-软引用" tabindex="-1">2. 软引用 <a class="header-anchor" href="#_2-软引用" aria-label="Permalink to &quot;2. 软引用&quot;">​</a></h2><p>在内存充足情况下,GC不会回收软引用对象,如果内存空间不足了,才会回收这些对象的内存。也正因为这个特性,所以软引用经常用作缓存对象使用。</p><h2 id="_3-弱引用" tabindex="-1">3. 弱引用 <a class="header-anchor" href="#_3-弱引用" aria-label="Permalink to &quot;3. 弱引用&quot;">​</a></h2><p>任意GC都会清理掉软引用对象,弱引用是最容易记的,任何的GC动作都会将弱引用对象给回收掉。</p><h2 id="_4-虚引用" tabindex="-1">4. 虚引用 <a class="header-anchor" href="#_4-虚引用" aria-label="Permalink to &quot;4. 虚引用&quot;">​</a></h2><p>和其他三个不一样,这个不对生命周期,有影响,而是当要回收时候,加入到Queue队列中</p><h1 id="二、在jdk中的体现" tabindex="-1">二、在JDK中的体现 <a class="header-anchor" href="#二、在jdk中的体现" aria-label="Permalink to &quot;二、在JDK中的体现&quot;">​</a></h1><table><thead><tr><th>类</th><th>引用说明</th><th>用途</th><th>生存时间</th><th>被垃圾回收时间</th></tr></thead><tbody><tr><td>Object</td><td>默认new出来的都是强引用</td><td>对象正常状态</td><td>JVM停止或者无引用被回收</td><td>无任务对象使用</td></tr><tr><td>SoftReference</td><td>软引用</td><td>常用作缓存</td><td>当内存不足时候终止</td><td>内存不足时候回收</td></tr><tr><td>WeakReference</td><td>弱引用</td><td>常用作缓存</td><td>垃圾回收后终止</td><td>任何垃圾回收时</td></tr><tr><td>PhantomReference</td><td>虚引用</td><td>用于跟踪对象是否被回收</td><td>垃圾回收后终止</td><td>任何垃圾回收时</td></tr></tbody></table><p>最后求关注,求订阅,谢谢你的阅读!</p><p><img src="https://img.springlearn.cn/blog/learn_1589360371000.png" alt=""></p>',16),n=[o];function c(l,s,i,h,p,_){return a(),e("div",null,n)}const m=t(d,[["render",c]]);export{b as __pageData,m as default};
