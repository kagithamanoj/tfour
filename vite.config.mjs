// vite.config.mjs
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import basicSsl from '@vitejs/plugin-basic-ssl'; // Uncomment if using SSL locally
// import { VitePWA } from 'vite-plugin-pwa'; // Uncomment if using PWA

export default defineConfig({
  plugins: [
    react(),
    // basicSsl(),
    // VitePWA({ /* PWA options here */ })
  ],
  build: {
    sourcemap: false,        // true if you want source maps in prod
    minify: 'esbuild',       // fast/minimal bundling, use 'terser' for advanced optimizations
    outDir: 'dist',          // output directory for build files
    emptyOutDir: true        // clean output folder before build
  },
  server: {
    port: 3000,              // local dev port
    open: true,              // auto open browser on dev start
    // https: true           // Uncomment for SSL (with basic-ssl plugin)
  },
  define: {},                // Add global constants if needed
  resolve: {
    alias: {
      '@': '/src'            // use @ for src folder imports
    }
  }
  // Add environment variables, proxy, etc. as needed
});
