import { resolve } from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const root = resolve(__dirname, "");
const outDir = resolve(__dirname, "dist");

// https://vitejs.dev/config/
export default defineConfig({
  root,
  plugins: [react()],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        home: resolve(root, "index.html"),
        login: resolve(root, "login", "index.html"),
        sosialisasi: resolve(root, "sosialisasi", "index.html"),
        pelatihan: resolve(root, "pelatihan", "index.html"),
        pendampingan: resolve(root, "pendampingan", "index.html"),
        narasumber: resolve(root, "narasumber", "index.html"),
        publikasi: resolve(root, "publikasi", "index.html"),
        profile: resolve(root, "profile", "index.html")
      }
    }
  }
})
