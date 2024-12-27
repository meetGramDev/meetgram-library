import type { Meta, StoryObj } from '@storybook/react'

import googleIcon from '@/shared/assets/icons/google-icon.svg'


import { ButtonIcon } from './ButtonIcon'

const meta = {
  args: {
    children: <img alt={'img'} src={googleIcon} />,
  },
  component: ButtonIcon,
  tags: ['autodocs'],
  title: 'shared/ButtonIcon',
} satisfies Meta<typeof ButtonIcon>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultButton: Story = {}
