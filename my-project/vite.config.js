import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0', // Permite acesso externo
    allowedHosts: true // Evita bloqueios de segurança de host
  },
  plugins: [vue(), tailwindcss()],
  assetsInclude: ['**/*.svg', '**/*.png'],  // Força incluir SVGs
  resolve: {
    alias: {
      '@': '/src'
    }
  }

})
