// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [vue()],
    server: {
        proxy: {
            '/foo': 'http://localhost:5173',
            '/api': {
                target: 'http://127.0.0.1:4000',
                changeOrigin: true,
                secure: false,
            }
        }
    }
})