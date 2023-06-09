import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: "/src/components",
      pages: "/src/pages",
      types: "/src/types",
      store: "/src/store",
      utils: "/src/utils",
      hooks: "/src/hooks",
      apifirebase: "/src/apifirebase",
    },
  },
});
