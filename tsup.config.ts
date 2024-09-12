import { defineConfig } from "tsup"

export default defineConfig({
  name: "uni-logger",
  platform: "node",
  entry: [
    "./src/**/*.ts",
  ],
  format: ["esm", "cjs"],
  outDir: "./dist",
  dts: true,
  clean: true,
  splitting: false,
})
