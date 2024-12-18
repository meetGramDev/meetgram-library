import type { Config } from 'tailwindcss'

import config from '@meetgram/tailwind-config'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  plugins: [],
  presets: [config],
}

export default config
