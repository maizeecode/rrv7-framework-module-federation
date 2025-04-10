import { defineConfig } from 'vite'
import { reactRouter } from "@react-router/dev/vite";
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRouter(),
    federation({
      name: "remote_app",
      filename: "remoteEntry.js",
      exposes: {
        './Button': './app/components/Button.tsx',
        './Home': './app/routes/home.tsx'
      },
      // shared: ['react']
    })
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})
