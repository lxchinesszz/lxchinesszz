import{_ as e,C as p,c as l,m as n,H as r,aa as i,o as t}from"./chunks/framework.swcE7GHT.js";const x=JSON.parse('{"title":"Spring EL表达式使用指南","description":"","frontmatter":{"breadcrumb":false,"navbar":true,"sidebar":true,"pageInfo":true,"contributor":true,"editLink":true,"updateTime":true,"prev":true,"next":true,"comment":true,"footer":true,"backtotop":true,"title":"Spring EL表达式使用指南","category":"Spring Framework"},"headers":[],"relativePath":"java/spring/EL.md","filePath":"java/spring/EL.md"}'),o={name:"java/spring/EL.md"};function c(u,s,b,m,d,h){const a=p("Djt");return t(),l("div",null,[s[0]||(s[0]=n("p",null,[n("img",{src:"https://img.springlearn.cn/blog/learn_1610710891000.png",alt:""})],-1)),r(a),s[1]||(s[1]=i(`<blockquote><p>好久没有发现这么好的文章了,今天逛头条发现了一篇好文章,在这里转载一下 大家可以学习一下,文章原文地址见参考。希望支持原作者,在头条点一个关注。</p></blockquote><h2 id="一、概述" tabindex="-1">一、概述 <a class="header-anchor" href="#一、概述" aria-label="Permalink to &quot;一、概述&quot;">​</a></h2><p>Spring表达式语言全称为“Spring Expression Language”，缩写为“SpEL”。是一个支持查询，并在运行时操纵一个对象图功能、是一门强大的表达式语言。SpEL是单独模块，只依赖于core模块，可以被独立使用、运行。</p><p><strong>参考文章</strong></p><p><a href="https://docs.spring.io/spring-integration/docs/5.3.0.RELEASE/reference/html/spel.html#spel" target="_blank" rel="noreferrer">SpringEpel</a></p><p><a href="https://www.toutiao.com/i6911604368844292620/" target="_blank" rel="noreferrer">玩转SpEL</a></p><h2 id="二、作用" tabindex="-1">二、作用 <a class="header-anchor" href="#二、作用" aria-label="Permalink to &quot;二、作用&quot;">​</a></h2><h3 id="_2-1-基本表达式" tabindex="-1">2.1 基本表达式 <a class="header-anchor" href="#_2-1-基本表达式" aria-label="Permalink to &quot;2.1 基本表达式&quot;">​</a></h3><p>字面量表达式、关系，逻辑与算数运算表达式、字符串连接及截取表达式、三目运算、正则表达式、括号优先级表达式；</p><h3 id="_2-2-类相关表达式" tabindex="-1">2.2 类相关表达式 <a class="header-anchor" href="#_2-2-类相关表达式" aria-label="Permalink to &quot;2.2 类相关表达式&quot;">​</a></h3><p>类类型表达式、类实例化、instanceof表达式、变量定义及引用、赋值表达式、自定义函数、对象属性存取及安全导航表达式、对象方法调用、Bean引用；</p><h3 id="_2-3-集合相关表达式" tabindex="-1">2.3 集合相关表达式 <a class="header-anchor" href="#_2-3-集合相关表达式" aria-label="Permalink to &quot;2.3 集合相关表达式&quot;">​</a></h3><p>内联List、内联数组、集合，字典访问、列表，字典，数组修改、集合投影、集合选择；不支持多维内联数组初始化；不支持内联字典定义；</p><h3 id="_2-4-其他表达式" tabindex="-1">2.4 其他表达式 <a class="header-anchor" href="#_2-4-其他表达式" aria-label="Permalink to &quot;2.4 其他表达式&quot;">​</a></h3><p>模板表达式。</p><h2 id="三、主要类" tabindex="-1">三、主要类 <a class="header-anchor" href="#三、主要类" aria-label="Permalink to &quot;三、主要类&quot;">​</a></h2><h3 id="_3-1-expressionparser" tabindex="-1">3.1 ExpressionParser <a class="header-anchor" href="#_3-1-expressionparser" aria-label="Permalink to &quot;3.1 ExpressionParser&quot;">​</a></h3><p>表达式解析器接口，包含了(Expression) parseExpression(String), (Expression) parseExpression(String, ParserContext)两个接口方法</p><h3 id="_3-2-parsercontext" tabindex="-1">3.2 ParserContext <a class="header-anchor" href="#_3-2-parsercontext" aria-label="Permalink to &quot;3.2 ParserContext&quot;">​</a></h3><p>解析器上下文接口，主要是对解析器Token的抽象类，包含3个方法：getExpressionPrefix,getExpressionSuffix和isTemplate，就是表示表达式从什么符号开始什么符号结束，是否是作为模板（包含字面量和表达式）解析。</p><h3 id="_3-3-expression" tabindex="-1">3.3 Expression <a class="header-anchor" href="#_3-3-expression" aria-label="Permalink to &quot;3.3 Expression&quot;">​</a></h3><p>表达式的抽象，是经过解析后的字符串表达式的形式表示。通过expressionInstance.getValue方法，可以获取表示式的值。也可以通过调用getValue(EvaluationContext)，从评估（evaluation)上下文中获取表达式对于当前上下文的值</p><h3 id="_3-4-evaluationcontext" tabindex="-1">3.4 EvaluationContext <a class="header-anchor" href="#_3-4-evaluationcontext" aria-label="Permalink to &quot;3.4 EvaluationContext&quot;">​</a></h3><p>估值上下文接口，只有一个setter方法：<code>setVariable(String, Object)</code>，通过调用该方法，可以为evaluation提供上下文变量</p><h2 id="四、案例运用" tabindex="-1">四、案例运用 <a class="header-anchor" href="#四、案例运用" aria-label="Permalink to &quot;四、案例运用&quot;">​</a></h2><h3 id="_4-1-基础的hello" tabindex="-1">4.1 基础的Hello <a class="header-anchor" href="#_4-1-基础的hello" aria-label="Permalink to &quot;4.1 基础的Hello&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>@Test</span></span>
<span class="line"><span>public void baseTest() {</span></span>
<span class="line"><span>// 字符串表达式</span></span>
<span class="line"><span>    String exp = &quot;Hello , #{ #username }&quot;;</span></span>
<span class="line"><span>    // 表达式解析器</span></span>
<span class="line"><span>    ExpressionParser parser = new SpelExpressionParser();</span></span>
<span class="line"><span>    // 表达式上下文</span></span>
<span class="line"><span>    EvaluationContext context = new StandardEvaluationContext();</span></span>
<span class="line"><span>    context.setVariable(&quot;username&quot;, &quot;纹银三百两&quot;);</span></span>
<span class="line"><span>    // 解析</span></span>
<span class="line"><span>    Expression expression = parser.parseExpression(exp, new TemplateParserContext());</span></span>
<span class="line"><span>    System.out.println(expression.getValue(context, String.class));</span></span>
<span class="line"><span>  }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>基础结果：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Hello , 纹银三百两</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_4-2-关系运算符" tabindex="-1">4.2 关系运算符 <a class="header-anchor" href="#_4-2-关系运算符" aria-label="Permalink to &quot;4.2 关系运算符&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>//true</span></span>
<span class="line"><span>boolean trueValue1 = parser.parseExpression(&quot;2 == 2&quot;).getValue(Boolean.class);</span></span>
<span class="line"><span>//false</span></span>
<span class="line"><span>boolean falseValue1 = parser.parseExpression(&quot;2 &lt; -5.0&quot;).getValue(Boolean.class);</span></span>
<span class="line"><span>//true</span></span>
<span class="line"><span>boolean trueValue2 = parser.parseExpression(&quot;&#39;black&#39; &lt; &#39;block&#39;&quot;).getValue(Boolean.class);</span></span>
<span class="line"><span>//false，字符xyz是否为int类型</span></span>
<span class="line"><span>boolean falseValue2 = parser.parseExpression(&quot;&#39;xyz&#39; instanceof T(int)&quot;).getValue(Boolean.class);</span></span>
<span class="line"><span>//true，正则是否匹配</span></span>
<span class="line"><span>boolean trueValue3 =parser.parseExpression(&quot;&#39;5.00&#39; matches &#39;^-?\\\\d+(\\\\.\\\\d{2})?$&#39;&quot;).getValue(Boolean.class);</span></span>
<span class="line"><span>//false</span></span>
<span class="line"><span>boolean falseValue3=parser.parseExpression(&quot;&#39;5.0067&#39; matches &#39;^-?\\\\d+(\\\\.\\\\d{2})?$&#39;&quot;).getValue(Boolean.class);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="_4-3-逻辑运算符" tabindex="-1">4.3 逻辑运算符 <a class="header-anchor" href="#_4-3-逻辑运算符" aria-label="Permalink to &quot;4.3 逻辑运算符&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// -- AND 与运算 --</span></span>
<span class="line"><span>//false </span></span>
<span class="line"><span>boolean falseValue4 = parser.parseExpression(&quot;true and false&quot;).getValue(Boolean.class);</span></span>
<span class="line"><span> // -- OR 或运算--</span></span>
<span class="line"><span>//true</span></span>
<span class="line"><span>boolean trueValue5 = parser.parseExpression(&quot;true or false&quot;).getValue(Boolean.class);</span></span>
<span class="line"><span>//false</span></span>
<span class="line"><span>boolean falseValue5 = parser.parseExpression(&quot;!true&quot;).getValue(Boolean.class);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="_4-4-算术运算符" tabindex="-1">4.4 算术运算符 <a class="header-anchor" href="#_4-4-算术运算符" aria-label="Permalink to &quot;4.4 算术运算符&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// Addition</span></span>
<span class="line"><span>int two = parser.parseExpression(&quot;1 + 1&quot;).getValue(Integer.class); // 2</span></span>
<span class="line"><span>String testString =</span></span>
<span class="line"><span>parser.parseExpression(&quot;&#39;test&#39; + &#39; &#39; + &#39;string&#39;&quot;).getValue(String.class); // &#39;test string&#39;</span></span>
<span class="line"><span>// Subtraction</span></span>
<span class="line"><span>int four = parser.parseExpression(&quot;1 - -3&quot;).getValue(Integer.class); // 4</span></span>
<span class="line"><span>double d = parser.parseExpression(&quot;1000.00 - 1e4&quot;).getValue(Double.class); // -9000</span></span>
<span class="line"><span>// Multiplication</span></span>
<span class="line"><span>int six = parser.parseExpression(&quot;-2 * -3&quot;).getValue(Integer.class); // 6</span></span>
<span class="line"><span>double twentyFour = parser.parseExpression(&quot;2.0 * 3e0 * 4&quot;).getValue(Double.class); // 24.0</span></span>
<span class="line"><span>// Division</span></span>
<span class="line"><span>int minusTwo = parser.parseExpression(&quot;6 / -3&quot;).getValue(Integer.class); // -2</span></span>
<span class="line"><span>double one = parser.parseExpression(&quot;8.0 / 4e0 / 2&quot;).getValue(Double.class); // 1.0</span></span>
<span class="line"><span>// Modulus</span></span>
<span class="line"><span>int three = parser.parseExpression(&quot;7 % 4&quot;).getValue(Integer.class); // 3</span></span>
<span class="line"><span>int one = parser.parseExpression(&quot;8 / 5 % 2&quot;).getValue(Integer.class); // 1</span></span>
<span class="line"><span>// Operator precedence</span></span>
<span class="line"><span>int minusTwentyOne = parser.parseExpression(&quot;1+2-3*8&quot;).getValue(Integer.class); // -21</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="五、组合使用" tabindex="-1">五、组合使用 <a class="header-anchor" href="#五、组合使用" aria-label="Permalink to &quot;五、组合使用&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>@Test</span></span>
<span class="line"><span>  public void expressionTest() {</span></span>
<span class="line"><span>    String exp = &quot;1 between {1, 2} and 1&gt;2&quot;;</span></span>
<span class="line"><span>    ExpressionParser parser = new SpelExpressionParser();</span></span>
<span class="line"><span>    Expression expression = parser.parseExpression(exp);</span></span>
<span class="line"><span>    //false</span></span>
<span class="line"><span>    System.out.println(expression.getValue(boolean.class));</span></span>
<span class="line"><span>  }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="六、操作类" tabindex="-1">六、操作类 <a class="header-anchor" href="#六、操作类" aria-label="Permalink to &quot;六、操作类&quot;">​</a></h2><h3 id="_6-1-类类型" tabindex="-1">6.1 类类型 <a class="header-anchor" href="#_6-1-类类型" aria-label="Permalink to &quot;6.1 类类型&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>@Test</span></span>
<span class="line"><span>public void classTypeTest() {</span></span>
<span class="line"><span>    ExpressionParser parser = new SpelExpressionParser();</span></span>
<span class="line"><span>    //java.lang包类访问</span></span>
<span class="line"><span>    Class&lt;String&gt; result1 = parser.parseExpression(&quot;T(String)&quot;).getValue(Class.class);</span></span>
<span class="line"><span>    //class java.lang.String</span></span>
<span class="line"><span>    System.out.println(result1);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //其他包类访问</span></span>
<span class="line"><span>    String expression2 = &quot;T(spel.SpElTest)&quot;;</span></span>
<span class="line"><span>    Class&lt;SpElTest&gt; value = parser.parseExpression(expression2).getValue(Class.class);</span></span>
<span class="line"><span>    //true</span></span>
<span class="line"><span>    System.out.println(value == SpElTest.class);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //类静态字段访问</span></span>
<span class="line"><span>    int result3 = parser.parseExpression(&quot;T(Integer).MAX_VALUE&quot;).getValue(int.class);</span></span>
<span class="line"><span>    //true</span></span>
<span class="line"><span>    System.out.println(result3 == Integer.MAX_VALUE);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //类静态方法调用</span></span>
<span class="line"><span>    int result4 = parser.parseExpression(&quot;T(Integer).parseInt(&#39;1&#39;)&quot;).getValue(int.class);</span></span>
<span class="line"><span>    //1</span></span>
<span class="line"><span>    System.out.println(result4);</span></span>
<span class="line"><span>  }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h3 id="_6-2-自定义函数" tabindex="-1">6.2 自定义函数 <a class="header-anchor" href="#_6-2-自定义函数" aria-label="Permalink to &quot;6.2 自定义函数&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/**</span></span>
<span class="line"><span>   * 两数之和</span></span>
<span class="line"><span>   */</span></span>
<span class="line"><span>public static Integer add(Integer x, Integer y) {</span></span>
<span class="line"><span>    return x + y;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Test</span></span>
<span class="line"><span>public void functionTest() throws NoSuchMethodException {</span></span>
<span class="line"><span>    // 表达式</span></span>
<span class="line"><span>    String exp = &quot;#{ #add(4,5)}&quot;;</span></span>
<span class="line"><span>    // 表达式上下文</span></span>
<span class="line"><span>    StandardEvaluationContext context = new StandardEvaluationContext();</span></span>
<span class="line"><span>    Method add = SpElTest.class.getDeclaredMethod(&quot;add&quot;, Integer.class, Integer.class);</span></span>
<span class="line"><span>    context.registerFunction(&quot;add&quot;, add);</span></span>
<span class="line"><span>    // 表达式解析器</span></span>
<span class="line"><span>    ExpressionParser parser = new SpelExpressionParser();</span></span>
<span class="line"><span>    // 解析</span></span>
<span class="line"><span>    Expression expression = parser.parseExpression(exp, new TemplateParserContext());</span></span>
<span class="line"><span>    // 9</span></span>
<span class="line"><span>    System.out.println(expression.getValue(context, Integer.class));</span></span>
<span class="line"><span>  }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h3 id="_6-3-类属性" tabindex="-1">6.3 类属性 <a class="header-anchor" href="#_6-3-类属性" aria-label="Permalink to &quot;6.3 类属性&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span> @Test</span></span>
<span class="line"><span>  public void assignTest() {</span></span>
<span class="line"><span>    String exp = &quot;username: #{#user.username},age: #{#user.age}&quot;;</span></span>
<span class="line"><span>    StandardEvaluationContext context = new StandardEvaluationContext();</span></span>
<span class="line"><span>    Person person = new Person()</span></span>
<span class="line"><span>        .setUsername(&quot;纹银三百两&quot;)</span></span>
<span class="line"><span>        .setAge(23);</span></span>
<span class="line"><span>    context.setVariable(&quot;user&quot;, person);</span></span>
<span class="line"><span>    ExpressionParser parser = new SpelExpressionParser();</span></span>
<span class="line"><span>    Expression expression = parser.parseExpression(exp, new TemplateParserContext());</span></span>
<span class="line"><span>    //username: 纹银三百两,age: 23</span></span>
<span class="line"><span>    System.out.println(expression.getValue(context, String.class));</span></span>
<span class="line"><span>  }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="七、模板表达式" tabindex="-1">七、模板表达式 <a class="header-anchor" href="#七、模板表达式" aria-label="Permalink to &quot;七、模板表达式&quot;">​</a></h2><p>指定模板 <code>%{ }</code></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>@Test</span></span>
<span class="line"><span>public void templateTest() {</span></span>
<span class="line"><span>    SpelExpressionParser parser = new SpelExpressionParser();</span></span>
<span class="line"><span>    ParserContext context = new TemplateParserContext(&quot;%{&quot;, &quot;}&quot;);</span></span>
<span class="line"><span>    Expression expression = parser.parseExpression(&quot;你好:%{#name},正在学习:%{#lesson}，加油、奋斗！！！&quot;, context);</span></span>
<span class="line"><span>    EvaluationContext evaluationContext = new StandardEvaluationContext();</span></span>
<span class="line"><span>    evaluationContext.setVariable(&quot;name&quot;, &quot;纹银三百两&quot;);</span></span>
<span class="line"><span>    evaluationContext.setVariable(&quot;lesson&quot;, &quot;spring高手系列。&quot;);</span></span>
<span class="line"><span>    String value = expression.getValue(evaluationContext, String.class);</span></span>
<span class="line"><span>    //你好:纹银三百两,正在学习:spring高手系列。加油、奋斗！！！</span></span>
<span class="line"><span>    System.out.println(value);</span></span>
<span class="line"><span>  }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="八、规则引擎" tabindex="-1">八、规则引擎 <a class="header-anchor" href="#八、规则引擎" aria-label="Permalink to &quot;八、规则引擎&quot;">​</a></h2><h3 id="_8-1-背景" tabindex="-1">8.1 背景 <a class="header-anchor" href="#_8-1-背景" aria-label="Permalink to &quot;8.1 背景&quot;">​</a></h3><p>假设人员注册信息(姓名、年龄、性别），自定义其中规则，如下：</p><p>李家好汉（李姓，男，且满18岁） 豆蔻少女（13-15岁，女性）</p><h3 id="_8-2-实现" tabindex="-1">8.2 实现 <a class="header-anchor" href="#_8-2-实现" aria-label="Permalink to &quot;8.2 实现&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>@Test</span></span>
<span class="line"><span>  public void ruleTest() {</span></span>
<span class="line"><span>    Person person1 = new Person().setUsername(&quot;小龙女&quot;).setAge(14).setSex(1);</span></span>
<span class="line"><span>    checkRule(FastJsonUtil.parseMap(JSON.toJSONString(person1)));</span></span>
<span class="line"><span>    Person person2 = new Person().setUsername(&quot;张三&quot;).setAge(18).setSex(0);</span></span>
<span class="line"><span>    checkRule(FastJsonUtil.parseMap(JSON.toJSONString(person2)));</span></span>
<span class="line"><span>    Person person3 = new Person().setUsername(&quot;李四&quot;).setAge(20).setSex(0);</span></span>
<span class="line"><span>    checkRule(FastJsonUtil.parseMap(JSON.toJSONString(person3)));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /**</span></span>
<span class="line"><span>   * 规则check</span></span>
<span class="line"><span>   *</span></span>
<span class="line"><span>   * @param exp 参数map</span></span>
<span class="line"><span>   */</span></span>
<span class="line"><span>  private static void checkRule(Map&lt;String, Object&gt; exp) {</span></span>
<span class="line"><span>    ExpressionParser parser = new SpelExpressionParser();</span></span>
<span class="line"><span>    //规则容器</span></span>
<span class="line"><span>    Map&lt;String, String&gt; ruleMap = Maps.newHashMap();</span></span>
<span class="line"><span>    String rule1 = &quot;( #username.contains({&#39;李&#39;}) and  #age &gt; 18 and #sex == 0 )&quot;;</span></span>
<span class="line"><span>    ruleMap.put(&quot;李家好汉&quot;, rule1);</span></span>
<span class="line"><span>    String rule2 = &quot;( #age between {13,15} and #sex == 1 )&quot;;</span></span>
<span class="line"><span>    ruleMap.put(&quot;豆蔻少女&quot;, rule2);</span></span>
<span class="line"><span>    EvaluationContext spElContext = getSpElContext(exp);</span></span>
<span class="line"><span>    ruleMap.keySet().forEach(key -&gt; {</span></span>
<span class="line"><span>      String ruleV = ruleMap.get(key);</span></span>
<span class="line"><span>      Boolean isPass = parser.parseExpression(ruleV).getValue(spElContext, Boolean.class);</span></span>
<span class="line"><span>      if (Objects.nonNull(isPass) &amp;&amp; isPass) {</span></span>
<span class="line"><span>        System.out.println(&quot;username:【&quot; + exp.get(&quot;username&quot;) + &quot;】,命中规则:【&quot; + key+&quot;】&quot;);</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /**</span></span>
<span class="line"><span>   * 解析表达式需要的上下文，透传请求参数</span></span>
<span class="line"><span>   *</span></span>
<span class="line"><span>   * @param param 参数</span></span>
<span class="line"><span>   * @return 返回结果</span></span>
<span class="line"><span>   */</span></span>
<span class="line"><span>  private static EvaluationContext getSpElContext(Map&lt;String, Object&gt; param) {</span></span>
<span class="line"><span>    StandardEvaluationContext evaluationContext = new StandardEvaluationContext();</span></span>
<span class="line"><span>    for (Entry&lt;String, Object&gt; entry : param.entrySet()) {</span></span>
<span class="line"><span>      if (entry.getValue() != null) {</span></span>
<span class="line"><span>        evaluationContext.setVariable(entry.getKey(), entry.getValue());</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return evaluationContext;</span></span>
<span class="line"><span>  }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br></div></div><p><strong>结果：</strong></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>username:【小龙女】,命中规则:【豆蔻少女】</span></span>
<span class="line"><span>username:【李四】,命中规则:【李家好汉】</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="九、总结" tabindex="-1">九、总结 <a class="header-anchor" href="#九、总结" aria-label="Permalink to &quot;九、总结&quot;">​</a></h2><p>Spring EL表达式，作为JAVA的内置语言，十分强大。主要可以用来做表达式解析，或者规则链路，且可以操作函数方法；从而达到一种动态的链路规则解析效果。</p>`,57))])}const q=e(o,[["render",c]]);export{x as __pageData,q as default};
