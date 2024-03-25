import { defineConfig, type PluginOption } from 'vite'
import compression from 'vite-plugin-compression2'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    compression({
      algorithm: 'gzip', exclude: [/\.(br)$ /, /\.(gz)$/]
    }),
    compression({
      algorithm: 'brotliCompress', exclude: [/\.(br)$ /, /\.(gz)$/],
     }),
  ],
})
