import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

import dotenv from "dotenv";
dotenv.config({ path: "./local.env" });

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
});
