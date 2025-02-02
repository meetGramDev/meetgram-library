import { Meta, StoryObj } from '@storybook/react'
import { DebounceSearch } from './DebounceSearch'

const meta = {
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
