import { defineConfig } from 'tsup'
import { devDependencies } from './package.json'

export default defineConfig(options => ({
  entryPoints: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  external: Object.keys(devDependencies),
  target: 'esnext',
  treeshake: true,
  minify: true,
  ...options,
}))
