import { resolve } from 'path'

import { defineConfig } from 'vite'

import { dependencies, devDependencies } from './package.json'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      // the proper extensions will be added
      fileName: 'index',
      formats: ['es'],
      name: '@meetgram/ui-kit',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [
        'react/jsx-runtime',
        ...Object.keys(dependencies),
        ...Object.keys(devDependencies),
      ],
    },
    sourcemap: true,
    target: 'esnext',
  },
})
