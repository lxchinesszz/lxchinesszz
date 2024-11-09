import{_ as e,o as r,c as t,a4 as n}from"./chunks/framework.B8fosacB.js";const b=JSON.parse('{"title":"财务必读","description":"","frontmatter":{"title":"财务必读","editLink":true,"navbar":true,"category":"06-财务结算"},"headers":[],"relativePath":"post/scm/finance/report.md","filePath":"post/scm/finance/report.md","lastUpdated":1731158524000}'),o={name:"post/scm/finance/report.md"};function p(i,a,l,c,s,h){return r(),t("div",{"data-pagefind-body":!0},a[0]||(a[0]=[n('<h1 id="财报系统设计须知" tabindex="-1">财报系统设计须知 <a class="header-anchor" href="#财报系统设计须知" aria-label="Permalink to &quot;财报系统设计须知&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">财报报告</p><p>“三表一注”指的是资产负债表、利润表、现金流量表以及附注。这四者共同构成了一个完整的财务分析框架，帮助投资者和分析师更加全面地理解公司的财务状况和经营能力。</p></div><p><a href="http://www.cninfo.com.cn/new/disclosure/stock?stockCode=000002&amp;orgId=gssz0000002#peerCompare" target="_blank" rel="noreferrer">上市企业财务报表</a></p><p><a href="https://www.vanke.com/upload/file/2024-03-28/6b89ef93-4298-4107-b0b8-a72290287cf5.PDF" target="_blank" rel="noreferrer">万科 2023 年度财务报告 PDF</a></p><h2 id="写在前面" tabindex="-1">写在前面 <a class="header-anchor" href="#写在前面" aria-label="Permalink to &quot;写在前面&quot;">​</a></h2><p>这一系列笔记的核心，在于深入剖析一个企业的运营全貌，了解企业都在做什么，企业需要做什么，以及应该做什么。。然而，归根结底，企业的终极目标在于盈利。因此，为了更精准地把握企业运营脉搏，我们应当从财务视角出发，重新审视其业务逻辑。具体而言，我们的目标是构建一套机制，能够将企业的各项业务活动无缝对接至财务框架中，通过详尽记录并分析其收支状况，从而为企业决策提供坚实的数据支撑，确保每一步战略都紧密围绕盈利目标展开。</p><p><strong>下面我们先看我们最终要的结果是什么! 说白了就是下面的报表。</strong></p><h2 id="财务报告-三表一注" tabindex="-1">财务报告(三表一注) <a class="header-anchor" href="#财务报告-三表一注" aria-label="Permalink to &quot;财务报告(三表一注)&quot;">​</a></h2><p>这里以在大陆地区上市企业 万科Ａ [000002],举例我们来看下它发布的报表。</p><p><img src="https://img.springlearn.cn/blog/91ffc8616fa3dd2020ce90a34abb6491.png" alt=""></p><h3 id="利润表" tabindex="-1">利润表 <a class="header-anchor" href="#利润表" aria-label="Permalink to &quot;利润表&quot;">​</a></h3><p>也叫损益表，反映了企业在一定时期内的经营成果。利润表展示了企业的收入、成本、利润、税金等信息，帮助投资者判断企业的盈利能力和经营效率。</p><p><img src="https://img.springlearn.cn/blog/2734e90c9573ff32e404c52020de85d7.png" alt=""></p><p><img src="https://img.springlearn.cn/blog/744156a16dfbb0a090a0fa3548984b2c.png" alt=""></p><h3 id="资产负债表" tabindex="-1">资产负债表 <a class="header-anchor" href="#资产负债表" aria-label="Permalink to &quot;资产负债表&quot;">​</a></h3><p>反映了企业在某一时间点的财务状况，包括企业的资产、负债和所有者权益。通过资产负债表，投资者可以了解企业的资产结构、负债结构、偿债能力等信息。</p><p><img src="https://img.springlearn.cn/blog/feea989ec75b293327cbebdb7fe9c86e.png" alt=""></p><p><img src="https://img.springlearn.cn/blog/5d621a7e166576de3a354c576e3691ea.png" alt=""></p><h3 id="现金流量表" tabindex="-1">现金流量表 <a class="header-anchor" href="#现金流量表" aria-label="Permalink to &quot;现金流量表&quot;">​</a></h3><p>反映了一固定期间内企业的现金变动情况，包括现金的来源、使用、流入和流出等。现金流量表有助于投资者了解企业的现金流状况和偿债能力。</p><p><img src="https://img.springlearn.cn/blog/0a3d15ca49a7b1f5fb638b891ab9b405.png" alt=""></p><p><img src="https://img.springlearn.cn/blog/441482c8abb85b105133140a650968b9.png" alt=""></p><h3 id="附注" tabindex="-1">附注 <a class="header-anchor" href="#附注" aria-label="Permalink to &quot;附注&quot;">​</a></h3><p>对会计报表的编制基础、编制原理和方法及主要项目等所作的解释和进一步说明。附注提供了额外的信息，帮助投资者更深入地理解报表内容。</p><p><strong>153页/pdf</strong></p><p><img src="https://img.springlearn.cn/blog/fc2847c714c299626347ec2c532e548d.png" alt=""></p><h2 id="财务职位" tabindex="-1">财务职位 <a class="header-anchor" href="#财务职位" aria-label="Permalink to &quot;财务职位&quot;">​</a></h2><h3 id="出纳-【钱】" tabindex="-1">出纳 【钱】 <a class="header-anchor" href="#出纳-【钱】" aria-label="Permalink to &quot;出纳 【钱】&quot;">​</a></h3><p>负责对现金和银行存款的管理，比如要记录每一笔开支，做好现金日记账和银行日记账；负责保管相关印章、空白收据和空白支票；发放现金：包括给报销的人员、领取备用金的人员、领取工资的人员等。出纳需要确保公司资金的安全，准确处理现金收付业务，并及时更新现金日记账和银行存款日记账。</p><h3 id="会计-【账】" tabindex="-1">会计 【账】 <a class="header-anchor" href="#会计-【账】" aria-label="Permalink to &quot;会计 【账】&quot;">​</a></h3><p>如果说出纳是管钱的，那么会计就是管账的，对过去的交易或事项进行确认和记录，负责公司日常财务核算，包括记账、编制财务报表、税务申报等。 会计需要确保所有财务交易的准确性，并按照会计准则和相关法规进行记录和报告。 具体工作为账务处理工作，即每个月进行原始凭证、记账凭证、分类账与总账到资产负债表、利润表、现金流量表等一系列的账务处理等。</p><h3 id="财务分析师-【数据消费者】" tabindex="-1">财务分析师 【数据消费者】 <a class="header-anchor" href="#财务分析师-【数据消费者】" aria-label="Permalink to &quot;财务分析师 【数据消费者】&quot;">​</a></h3><p>如果说会计是信息的记录者，那么财务分析师就是信息的利用者，工作内容为分析和预算，财务工作要基于会计数据进行分析，在对历史会计分录和现实信息进行分析后，对企业运营的财务数据进行预测和判断，并决策，决定干什么或不干什么。</p><p>负责内容：分析公司的财务数据，如收入、成本、利润等，为管理层提供决策依据。财务分析师需要运用各种分析工具和方法，评估公司的财务状况和经营绩效，提出改进建议。</p><h3 id="税务专员-【税】" tabindex="-1">税务专员 【税】 <a class="header-anchor" href="#税务专员-【税】" aria-label="Permalink to &quot;税务专员 【税】&quot;">​</a></h3><p>负责公司税务申报和筹划，确保公司合法合规纳税。税务专员需要了解国家税收政策，及时准确地完成税务申报工作，并为公司提供税务筹划建议，降低税务风险。</p>',36)]))}const g=e(o,[["render",p]]);export{b as __pageData,g as default};