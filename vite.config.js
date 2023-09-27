import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

import { fileURLToPath, URL } from 'node:url'

import eslint from 'vite-plugin-eslint';
import svgLoader from 'vite-svg-loader'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    svgLoader(),
    eslint(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: './',
})
