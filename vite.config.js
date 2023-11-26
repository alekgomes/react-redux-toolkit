/* eslint-disable no-undef */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@app": `${path.resolve(__dirname, "./src/app")}`,
      "@assets": `${path.resolve(__dirname, "./src/assets")}`,
      "@features": `${path.resolve(__dirname, "./src/features")}`,
      "@mocks": `${path.resolve(__dirname, "./src/mocks")}`,
      "@pages": `${path.resolve(__dirname, "./src/pages")}`,
    },
  },
});
