// eslint.config.js
import pluginVue from 'eslint-plugin-vue';
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  { files: ['**/*.{js,mjs,cjs,ts,vue}'] },
  ...pluginVue.configs['flat/recommended'],
  eslintConfigPrettier,
  {
    rules: {
      semi: 'error',
      'prefer-const': 'error',
    },
  },
];
