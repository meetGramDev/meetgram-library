import { Meta, StoryObj } from '@storybook/react'
import { DebounceSearch } from './DebounceSearch'

const meta = {
  argTypes: {
    delay: {
      type: 'number',
      description: 'Время задержки в миллисекундах',
    },
    defaultValue: {
      type: 'string',
      description: 'Значение инпута по-умолчанию',
    },
    onValueQuery: {
      description: 'Возвращает дебаунс-значение инпута',
      type: 'function',
    },
  },
  args: {
    onValueQuery: value => alert(value),
  },
  component: DebounceSearch,
  tags: ['autodocs'],
  title: 'shared/DebounceSearch',
} satisfies Meta<typeof DebounceSearch>

export default meta
type Story = StoryObj<typeof meta>

export const DebounceEffect: Story = {}

export const CustomDelay: Story = {
  args: {
    delay: 1500,
  },
}

export const WithDefaultValue: Story = {
  args: {
    defaultValue: 'Корабли лавировали, лавировали, да не...',
  },
}
