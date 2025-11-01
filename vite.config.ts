import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { type Plugin } from 'vite'
import { defineConfig } from 'vitest/config'

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
    tailwindcss(),
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
