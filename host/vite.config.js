import { defineConfig } from 'vite'
import { reactRouter } from "@react-router/dev/vite";
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRouter(),
    // tsconfigPaths(),
    federation({
      name: 'app',
      remotes: {
        remoteApp: 'http://localhost:5001/assets/remoteEntry.js',
      },
      shared: ['react','react-dom']
    })
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
    rollupOptions: {
      external: ['__federation_fn_import', '__federation_fn_satisfy'] // Mark both modules as external
    }
  }
})
