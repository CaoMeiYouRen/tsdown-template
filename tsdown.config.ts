import { defineConfig } from 'tsdown'

export default defineConfig({
    platform: 'node', // 目标平台
    entry: ['src/index.ts'],
    outDir: 'dist', // 输出目录
    format: ['cjs', 'esm'],
    fixedExtension: true, // 保持输出文件的扩展名一致
    // exports: true, // 自动生成包导出
    // splitting: false, // 代码拆分
    sourcemap: true,
    clean: true,
    dts: true,
    minify: false, // 缩小输出
    shims: true, // 注入 cjs 和 esm 填充代码，解决 import.meta.url 和 __dirname 的兼容问题
    // external: [], // 排除的依赖项
    // noExternal: [/(.*)/], // 将依赖打包到一个文件中
    // bundle: true,
})
