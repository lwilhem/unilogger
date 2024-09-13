import { defineConfig } from "tsup"

export default defineConfig({
  name: "uni-logger",
  platform: "node",
  entry: [
    "./src/**/*.ts",
  ],
  format: ["esm"],
  outDir: "./dist",
  dts: false,
  clean: true,
  splitting: false,
})
