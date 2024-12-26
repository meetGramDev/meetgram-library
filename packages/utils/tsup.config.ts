import { defineConfig } from 'tsup'
import { dependencies, devDependencies } from './package.json'

export default defineConfig(options => ({
  entryPoints: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: false,
  external: [...Object.keys(devDependencies), ...Object.keys(dependencies)],
  target: 'esnext',
  treeshake: true,
  minify: true,
  ...options,
}))
