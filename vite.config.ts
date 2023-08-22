import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    vue(),
    WindiCSS()
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/assets/style/global.scss";`    
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
