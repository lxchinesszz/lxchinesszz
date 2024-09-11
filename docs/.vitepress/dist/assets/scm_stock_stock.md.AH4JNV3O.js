import{_ as t,c as a,o,ac as e}from"./chunks/framework.C9DUt1S1.js";const g=JSON.parse('{"title":"存货核算","description":"","frontmatter":{"title":"存货核算","editLink":true,"navbar":true,"category":"存货核算"},"headers":[],"relativePath":"scm/stock/stock.md","filePath":"scm/stock/stock.md"}'),s={name:"scm/stock/stock.md"},l=e('<div class="tip custom-block"><p class="custom-block-title">TIP</p><p>移动加权平均法和加权平均法是两种常用的存货计价方法，它们在计算存货成本时有所不同。下面我将详细解释这两种方法的区别，并给出一个具体的例子来说明。</p></div><h2 id="计算方法" tabindex="-1">计算方法 <a class="header-anchor" href="#计算方法" aria-label="Permalink to &quot;计算方法&quot;">​</a></h2><ol><li><p><strong>计算频率</strong>：</p><ul><li><strong>加权平均法</strong>：在整个会计期间内，只在期末计算一次平均单价，并以此为基础计算发出存货的成本和期末存货的成本。这种方法计算简单，但平时无法从账上提供发出和结存存货的单价及金额，不利于存货成本的日常管理与控制。</li><li><strong>移动加权平均法</strong>：每次进货后都要重新计算平均单价，并作为下一次进货前计算各次发出存货成本的基础。这种方法能够及时反映存货成本的变动情况，但计算工作量较大。</li></ul></li><li><p><strong>适用性</strong>：</p><ul><li>加权平均法适用于物价变动幅度不大的情况。</li><li>移动加权平均法适用于收发货较为频繁且需要及时反映存货成本的企业。</li></ul></li></ol><h2 id="例子" tabindex="-1">例子 <a class="header-anchor" href="#例子" aria-label="Permalink to &quot;例子&quot;">​</a></h2><p>假设某企业月初库存A材料100件，每件成本为10元，本月又分两次进货，第一次进货200件，每件成本为11元；第二次进货300件，每件成本为12元。本月共发出A材料400件。</p><h4 id="加权平均法" tabindex="-1">加权平均法 <a class="header-anchor" href="#加权平均法" aria-label="Permalink to &quot;加权平均法&quot;">​</a></h4><p>首先，计算整个月的总成本： 总成本 = 月初库存成本 + 第一次进货成本 + 第二次进货成本 = 100 * 10 + 200 * 11 + 300 * 12 = 1000 + 2200 + 3600 = 6800元</p><p>然后，计算加权平均单价： 加权平均单价 = 总成本 / 总数量 = 6800 / (100 + 200 + 300) = 6800 / 600 = 11.33元/件</p><p>最后，计算发出存货的成本： 发出存货成本 = 发出数量 * 加权平均单价 = 400 * 11.33 = 4532元</p><h4 id="移动加权平均法" tabindex="-1">移动加权平均法 <a class="header-anchor" href="#移动加权平均法" aria-label="Permalink to &quot;移动加权平均法&quot;">​</a></h4><ul><li><p><strong>第一次进货后</strong>： 总成本 = 100 * 10 + 200 * 11 = 3200元 总数量 = 100 + 200 = 300件 移动加权平均单价 = 3200 / 300 = 10.67元/件</p></li><li><p><strong>第二次进货前发出100件</strong>（假设先发出）： 发出成本 = 100 * 10.67 = 1067元（注意：实际中可能按先进先出等其他规则发出）</p></li><li><p><strong>第二次进货后</strong>（重新计算）： 总成本 = (3200 - 1067) + 300 * 12 = 5333元（剩余库存成本+新进货成本） 总数量 = (300 - 100) + 300 = 500件 新的移动加权平均单价 = 5333 / 500 = 10.67元/件（此处因假设先发出100件且进货成本增加不多，所以单价未变，实际中会变）</p></li><li><p><strong>继续发出300件</strong>： 发出成本 = 300 * 10.67 = 3201元（注意：这里假设按新的移动加权平均单价发出）</p></li></ul><p>注意：由于移动加权平均法在实际操作中需要每次进货后都重新计算平均单价，且上述例子为了简化说明做了一些假设（如先发出100件），因此实际计算中可能会有所不同。但核心思想是在每次进货后，根据新的库存情况重新计算平均单价，并以此为基础计算后续的发出成本。</p>',12),r=[l];function i(n,c,p,d,_,h){return o(),a("div",null,r)}const m=t(s,[["render",i]]);export{g as __pageData,m as default};