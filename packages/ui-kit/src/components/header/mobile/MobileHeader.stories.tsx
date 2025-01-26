import type { Meta, StoryObj } from '@storybook/react'
import { MobileHeader } from './MobileHeader'

const meta = {
  component: MobileHeader,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  title: 'shared/Header/Mobile',
} satisfies Meta<typeof MobileHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
