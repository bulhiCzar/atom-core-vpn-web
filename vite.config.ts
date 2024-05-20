import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'
import tsconfigPaths from 'vite-tsconfig-paths'
// import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint(),
    tsconfigPaths(),
  ],
  server: {
    open: true,
    port: 3000,
  },
  // resolve: {
  // alias: {
  // '@components': path.resolve(__dirname, './src/@shared/components/_index'),
  // '@utils': path.resolve(__dirname, './src/@shared/utils/_index'),
  // '@uikit': path.resolve(__dirname, './src/@uikit/_index'),
  // },
  // },
  build: {
    outDir: 'build',
  },
})
