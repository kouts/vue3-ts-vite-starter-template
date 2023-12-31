import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { resolve } from 'path'
import type { Plugin } from 'vite'

const transformHtmlPlugin = (data: Record<string, string>): Plugin => ({
  name: 'transform-html',
  transformIndexHtml: {
    order: 'pre',
    handler(html: string) {
      return html.replace(/<%=\s*(\w+)\s*%>/gi, (match, p1) => data[p1] || '')
    }
  }
})

export default defineConfig({
  plugins: [
    vue(),
    transformHtmlPlugin({
      title: 'ProjectName',
      description: 'A single page application created using Vue.js 3'
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, '/src'),
      '~bootstrap': 'bootstrap'
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/scss/variables";`
      }
    }
  }
})
