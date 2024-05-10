const esbuild = require("esbuild");

esbuild.build({
  entryPoints: ["./src/main.js"],
  outdir: "dist",
  bundle: true,
  sourcemap: true,
  minify: true,
  format: "cjs",
  target: ["es2020"]
})
