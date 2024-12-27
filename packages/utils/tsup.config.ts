import { defineConfig } from 'tsup'

export default defineConfig(options => ({
  entry: ['src/functions/functions.ts', 'src/hooks/hooks.ts', 'src/index.ts'],
  outDir: 'dist',
  format: ['esm'],
  dts: true,
  sourcemap: false,
  external: ['react'],
  target: 'esnext',
  minify: true,
  clean: true,
  skipNodeModulesBundle: true,
  ...options,
}))
