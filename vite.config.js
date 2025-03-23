import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import compression from "vite-plugin-compression";
// https://vite.dev/config/
export default defineConfig({
  base: "/",
  css: {
    preprocessorOptions: {
      sass: {
        api: "modern",
        silenceDeprecations: ["legacy-js-api"],
      },
    },
    modules: {
      localsConvention: "camelCase", // makes sure the classes are camelCase, like priceCard
    },
  },
  plugins: [
    react(),
    compression({
      algorithm: "gzip",
      ext: ".gz",
      threshold: 10240,
      filter: /\.(js|mjs|json|css|scss|html|svg|ico|png|jpg|webp|woff|woff2)$/,
    }),
    compression({
      algorithm: "brotliCompress",
      ext: ".br",
      threshold: 10240,
      filter: /\.(js|mjs|json|css|scss|html|svg|ico|png|jpg|webp|woff|woff2)$/,
    }),
  ],
  build: {
    minify: false,
    modulePreload: true,
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      output: {
        assetFileNames: "[name].[hash][extname]",
        chunkFileNames: "[name].[hash].js",
        entryFileNames: "[name].[hash].js",
        manualChunks: {
          vendor: ["react", "react-dom"],
        },
      },
    },
  },
  define: { "process.env": {} },
});
