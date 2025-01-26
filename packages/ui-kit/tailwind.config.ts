import type { Config } from 'tailwindcss'

import configTW from '@meetgram/tailwind-config'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  plugins: [],
  presets: [configTW],
}

export default config
