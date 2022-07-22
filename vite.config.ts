import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/dona-clone",
  plugins: [react(), tsconfigPaths()],
});
