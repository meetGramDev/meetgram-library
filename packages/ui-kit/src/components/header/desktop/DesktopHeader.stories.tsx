import type { Meta, StoryObj } from '@storybook/react'
import { DesktopHeader } from './DesktopHeader'

const meta = {
  component: DesktopHeader,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  title: 'shared/Header/Desktop',
} satisfies Meta<typeof DesktopHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
