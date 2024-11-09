import{_ as e,o as r,c as i,a4 as o}from"./chunks/framework.B8fosacB.js";const p=JSON.parse('{"title":"NetSuite Script脚本类型","description":"","frontmatter":{"title":"NetSuite Script脚本类型","editLink":true,"navbar":true,"category":"NetSuite"},"headers":[],"relativePath":"post/guide/javascript/netsuiteScript.md","filePath":"post/guide/javascript/netsuiteScript.md","lastUpdated":1731158524000}'),s={name:"post/guide/javascript/netsuiteScript.md"};function l(a,t,n,c,d,u){return r(),i("div",{"data-pagefind-body":!0},t[0]||(t[0]=[o('<div class="tip custom-block"><p class="custom-block-title">TIP</p><p>NetSuite SuiteScript 中常见的脚本类型，它们覆盖了前端用户交互、后台批量处理、与外部系统的集成、自定义工作流等多种场景。不同的脚本类型适用于不同的业务需求，开发时可以根据具体场景选择合适的脚本类型。</p></div><h1 id="netsuite-script脚本类型" tabindex="-1">NetSuite Script脚本类型 <a class="header-anchor" href="#netsuite-script脚本类型" aria-label="Permalink to &quot;NetSuite Script脚本类型&quot;">​</a></h1><p>NetSuite SuiteScript 提供了多种脚本类型，用于不同的业务需求和场景。每种脚本类型有不同的触发时机和使用目的。以下是常见的 SuiteScript 脚本类型：</p><h2 id="脚本类型" tabindex="-1">脚本类型 <a class="header-anchor" href="#脚本类型" aria-label="Permalink to &quot;脚本类型&quot;">​</a></h2><h3 id="_1-client-script-客户端脚本" tabindex="-1">1. <strong>Client Script（客户端脚本）</strong> <a class="header-anchor" href="#_1-client-script-客户端脚本" aria-label="Permalink to &quot;1. **Client Script（客户端脚本）**&quot;">​</a></h3><ul><li><strong>触发场景</strong>：在用户的浏览器中执行，通常用于处理表单验证、字段的显示和隐藏、或其他与用户界面交互相关的逻辑。</li><li><strong>适用场景</strong>：数据输入验证、自动填充字段、控制表单元素。</li><li><strong>触发事件</strong>：<code>pageInit</code>, <code>fieldChanged</code>, <code>saveRecord</code>, <code>validateField</code>, <code>validateLine</code>, <code>sublistChanged</code>。</li><li><strong>示例</strong>：当用户修改表单字段时，自动计算其他字段的值。</li></ul><h3 id="_2-user-event-script-用户事件脚本" tabindex="-1">2. <strong>User Event Script（用户事件脚本）</strong> <a class="header-anchor" href="#_2-user-event-script-用户事件脚本" aria-label="Permalink to &quot;2. **User Event Script（用户事件脚本）**&quot;">​</a></h3><ul><li><strong>触发场景</strong>：在记录的生命周期（创建、保存、删除）中触发，后台执行。</li><li><strong>适用场景</strong>：用于在记录保存、删除或提交之前或之后执行特定操作，例如更新其他记录、验证数据或发送通知。</li><li><strong>触发事件</strong>：<code>beforeLoad</code>, <code>beforeSubmit</code>, <code>afterSubmit</code>。</li><li><strong>示例</strong>：在保存销售订单时，自动更新库存数量或发送电子邮件通知。</li></ul><h3 id="_3-scheduled-script-计划任务脚本" tabindex="-1">3. <strong>Scheduled Script（计划任务脚本）</strong> <a class="header-anchor" href="#_3-scheduled-script-计划任务脚本" aria-label="Permalink to &quot;3. **Scheduled Script（计划任务脚本）**&quot;">​</a></h3><ul><li><strong>触发场景</strong>：基于时间的触发机制，按预定的时间间隔或特定时间运行，后台执行。</li><li><strong>适用场景</strong>：用于定期执行批量操作、报告生成、数据清理或集成操作等。</li><li><strong>触发事件</strong>：<code>execute</code>。</li><li><strong>示例</strong>：每天凌晨执行一次脚本，更新库存报告或清理过期数据。</li></ul><h3 id="_4-suitelet-script-自定义表单脚本" tabindex="-1">4. <strong>Suitelet Script（自定义表单脚本）</strong> <a class="header-anchor" href="#_4-suitelet-script-自定义表单脚本" aria-label="Permalink to &quot;4. **Suitelet Script（自定义表单脚本）**&quot;">​</a></h3><ul><li><strong>触发场景</strong>：用于创建自定义的NetSuite界面，允许开发者创建自定义表单、页面或应用，用户通过这些界面与NetSuite交互。</li><li><strong>适用场景</strong>：开发自定义的用户交互页面，如配置页面、报告生成页面或数据输入界面。</li><li><strong>触发事件</strong>：<code>onRequest</code>。</li><li><strong>示例</strong>：创建一个自定义的表单，允许用户选择报告参数并生成报告。</li></ul><h3 id="_5-restlet-script-rest接口脚本" tabindex="-1">5. <strong>Restlet Script（REST接口脚本）</strong> <a class="header-anchor" href="#_5-restlet-script-rest接口脚本" aria-label="Permalink to &quot;5. **Restlet Script（REST接口脚本）**&quot;">​</a></h3><ul><li><strong>触发场景</strong>：为NetSuite提供自定义的RESTful API接口，使外部系统能够通过HTTP请求与NetSuite交互，后台执行。</li><li><strong>适用场景</strong>：与外部系统集成，允许外部系统通过REST API访问或更新NetSuite中的数据。</li><li><strong>触发事件</strong>：<code>get</code>, <code>post</code>, <code>put</code>, <code>delete</code>。</li><li><strong>示例</strong>：创建一个REST API，用于外部系统创建销售订单。</li></ul><h3 id="_6-workflow-action-script-工作流动作脚本" tabindex="-1">6. <strong>Workflow Action Script（工作流动作脚本）</strong> <a class="header-anchor" href="#_6-workflow-action-script-工作流动作脚本" aria-label="Permalink to &quot;6. **Workflow Action Script（工作流动作脚本）**&quot;">​</a></h3><ul><li><strong>触发场景</strong>：用于扩展NetSuite的工作流功能，作为工作流中的自定义动作执行。</li><li><strong>适用场景</strong>：当工作流节点需要执行自定义业务逻辑时使用，例如自定义字段计算或记录操作。</li><li><strong>触发事件</strong>：<code>onAction</code>。</li><li><strong>示例</strong>：在工作流节点中，自动发送电子邮件或更新其他相关记录。</li></ul><h3 id="_7-portlet-script-信息窗口脚本" tabindex="-1">7. <strong>Portlet Script（信息窗口脚本）</strong> <a class="header-anchor" href="#_7-portlet-script-信息窗口脚本" aria-label="Permalink to &quot;7. **Portlet Script（信息窗口脚本）**&quot;">​</a></h3><ul><li><strong>触发场景</strong>：用于创建NetSuite仪表板中的自定义Portlet，显示自定义内容或数据。</li><li><strong>适用场景</strong>：在仪表板上显示特定的自定义报表、图表或动态内容。</li><li><strong>触发事件</strong>：<code>render</code>。</li><li><strong>示例</strong>：在NetSuite仪表板上显示自定义的销售报表或统计数据。</li></ul><h3 id="_8-map-reduce-script" tabindex="-1">8. <strong>Map/Reduce Script</strong> <a class="header-anchor" href="#_8-map-reduce-script" aria-label="Permalink to &quot;8. **Map/Reduce Script**&quot;">​</a></h3><ul><li><strong>触发场景</strong>：处理大数据集时使用，用于批量数据处理的高级脚本，支持并行处理。</li><li><strong>适用场景</strong>：执行复杂的批量处理任务，适合处理大量记录、数据转换、导入/导出等操作。</li><li><strong>触发事件</strong>：<code>getInputData</code>, <code>map</code>, <code>reduce</code>, <code>summarize</code>。</li><li><strong>示例</strong>：处理数千条记录，并行更新或计算每条记录的值。</li></ul><h3 id="_9-mass-update-script-批量更新脚本" tabindex="-1">9. <strong>Mass Update Script（批量更新脚本）</strong> <a class="header-anchor" href="#_9-mass-update-script-批量更新脚本" aria-label="Permalink to &quot;9. **Mass Update Script（批量更新脚本）**&quot;">​</a></h3><ul><li><strong>触发场景</strong>：通过NetSuite的批量更新功能批量修改记录，后台执行。</li><li><strong>适用场景</strong>：批量更新记录的字段或状态。</li><li><strong>触发事件</strong>：<code>each</code>。</li><li><strong>示例</strong>：批量更新客户记录中的信用限额或批量关闭完成的任务。</li></ul><h3 id="_10-bundle-installation-script-套件安装脚本" tabindex="-1">10. <strong>Bundle Installation Script（套件安装脚本）</strong> <a class="header-anchor" href="#_10-bundle-installation-script-套件安装脚本" aria-label="Permalink to &quot;10. **Bundle Installation Script（套件安装脚本）**&quot;">​</a></h3><ul><li><strong>触发场景</strong>：当安装、更新或卸载SuiteBundle时执行，后台执行。</li><li><strong>适用场景</strong>：在安装/更新套件时执行特定的初始化或清理操作。</li><li><strong>触发事件</strong>：<code>beforeInstall</code>, <code>afterInstall</code>, <code>beforeUpdate</code>, <code>afterUpdate</code>, <code>beforeUninstall</code>。</li><li><strong>示例</strong>：在安装套件时创建默认的自定义记录，或在卸载时清理特定数据。</li></ul>',24)]))}const h=e(s,[["render",l]]);export{p as __pageData,h as default};
