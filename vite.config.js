import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

export default defineConfig({
  base: '/blupulse.co',
  plugins: [
    react(),
    nodePolyfills({
      include: ['buffer'],
      globals: {
        Buffer: true,
        global: true,
        process: true
      }
    })
  ],
  define: {
    global: 'globalThis' // More reliable than empty object
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true
    }
  }
})
