import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import tsConfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/dona-clone",
  mode: "production",
  plugins: [react(), tsConfigPaths()],
  server: {
    port: 4000,
  },
});
