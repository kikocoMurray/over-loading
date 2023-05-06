import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import dotenv from 'dotenv'

dotenv.config();

export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/github': {
        target: `https://api.github.com/users/${process.env.VITE_OWNER}`, // api 位置
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/github/, '')
      },
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '~': path.resolve(__dirname, './src/assets')
    },
  },
})
