import { defineConfig } from "vite";
import babel from "vite-plugin-babel";
import { viteCommonjs } from "@originjs/vite-plugin-commonjs";

export default defineConfig({
  plugins: [
    babel({
      babelHelpers: "runtime",
      exclude: ["node_modules/**"],
      presets: ["@babel/preset-env"],
      plugins: ["@babel/plugin-transform-runtime"],
    }),
    viteCommonjs()
  ],
  server:{
    port: 3030
  }
});
