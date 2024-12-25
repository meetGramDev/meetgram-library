import { defineConfig } from 'tsup'

export default defineConfig(options => ({
  entryPoints: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  external: ['react', 'tailwind-merge', 'clsx'],
  ...options,
}))
