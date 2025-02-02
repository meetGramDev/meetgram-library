import type { Preview } from '@storybook/react'
import '../src/styles/index.scss'
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'black',
      values: [
        {
          name: 'black',
          value: '#000000',
        },
        {
          name: 'white',
          value: '#fff',
        },
      ],
    },
  },
}

export default preview
