import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), dts({
    tsconfigPath: './tsconfig.json',
    // 所有类型都打包到一个文件中
    rollupTypes: true,
    exclude: ['node_modules'],
  })],
  build: {
    //打包后文件目录
    outDir: './web-vue',
    //压缩
    minify: false,
    rollupOptions: {
      //忽略打包vue文件
      external: ['vue'],
      //input: ["index.ts"],
      output: [
        {
          //打包格式
          format: 'es',
          //打包后文件名
          entryFileNames: '[name].mjs',
          //让打包目录和我们目录对应
          preserveModules: true,
          globals: {
            vue: 'Vue',
          },
          dir: './web-vue',
        },
      ],
    },
    lib: {
      entry: './src/index.ts',
      name: 'v-ui',
      fileName: 'v-ui',
    },
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src'),
      },
    ],
    extensions: ['.ts', '.js'],
  },
});
