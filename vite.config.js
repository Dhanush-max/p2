import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Dhanush-max/p2/",
  css: {
    postcss: {
      plugins: [(await import("autoprefixer")).default],
    },
  },
});
