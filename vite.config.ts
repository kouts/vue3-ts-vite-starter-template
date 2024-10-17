/// <reference types="vitest" />

import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { defineConfig, type Plugin } from 'vite'

const transformHtmlPlugin = (data: Record<string, string>): Plugin => ({
  name: 'transform-html',
  transformIndexHtml: {
    order: 'pre',
    handler(html: string) {
      return html.replace(/<%=\s*(\w+)\s*%>/gi, (match, p1) => data[p1] || '')
    },
  },
})

export default defineConfig({
  plugins: [
    vue(),
    transformHtmlPlugin({
      title: 'ProjectName',
      description: 'A single page application created using Vue.js 3',
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, '/src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        additionalData: `@use "@/scss/variables" as *;`,
      },
    },
  },
  test: {
    globals: true,
    globalSetup: './tests/vitest.global-setup.ts',
    setupFiles: ['./tests/vitest.globals.ts'],
    environment: 'jsdom',
    reporters: ['default'],
    coverage: {
      reporter: ['text', 'json'],
    },
  },
})
