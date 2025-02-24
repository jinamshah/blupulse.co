import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { plugin as markdown } from 'vite-plugin-markdown'
// import matter from 'gray-matter'
import { nodePolyfills } from 'vite-plugin-node-polyfills';


export default defineConfig({
  base: '/blupulse.co',
  plugins: [
    react(),
    nodePolyfills(),
  ],
  // assetsInclude: ['**/*.md']
})