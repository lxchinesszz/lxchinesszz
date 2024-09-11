import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default function component(
  renderedUsage, // props, events, methods and slots documentation rendered
  doc, // the object returned by vue-docgen-api
  config, // the local config, useful to know the context
  fileName, // the name of the current file in the doc (to explain how to import it)
  requiresMd, // a list of all the documentation files attached to the component documented
  { isSubComponent, hasSubComponents }, // are we documenting a sub-component or does the current component have subcomponents
) {
  const { displayName, description, docsBlocks } = doc;
  // console.log('renderedUsage.events-----',renderedUsage);

  // 根据组件名称选择不同的示例文件
  let exampleFilePath = path.resolve(
    __dirname,
    `./examples/${displayName}.vue`,
  );
  let usageExample;
  if (!fs.existsSync(exampleFilePath)) {
    // exampleFilePath = path.resolve(__dirname, './examples/Default.vue');
    usageExample = `
    <template>
      <${displayName} />
    </template>
        `;
  } else {
    usageExample = fs.readFileSync(exampleFilePath, 'utf-8');
  }

  return `  
---
breadcrumb: false
navbar: true
sidebar: auto
pageInfo: true
contributor: true
editLink: true
updateTime: true
prev: true
next: true
comment: false
footer: true
backtotop: true
title: ${displayName}
---
  # ${displayName}
  ${description ? '> ' + description : ''}
  ## 使用示例
  
  :::demo
  \`\`\`vue
  ${usageExample}
  \`\`\`
  :::
  ${renderedUsage.props}
  ${renderedUsage.methods}
  ${renderedUsage.events}
  ${renderedUsage.slots}
  ${docsBlocks ? '---\n' + docsBlocks.join('\n---\n') : ''}

  `;
}
