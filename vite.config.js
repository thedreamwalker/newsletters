import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

import { fileURLToPath, URL } from 'node:url'

import eslint from 'vite-plugin-eslint';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslint(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: './',
})
