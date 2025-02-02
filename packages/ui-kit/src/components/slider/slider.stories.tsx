import { useState } from 'react'

import { Slider } from './slider'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Slider,
  parameters: {},
  tags: ['autodocs'],
  title: 'shared/Slider',
} satisfies Meta<typeof Slider>

export default meta

type Story = StoryObj<typeof meta>

export const NotMovedSlider: Story = {
  args: {
    max: 3,
    min: 1,
    name: 'SliderComponent',
    onValueChange: (arr: number[]) => console.log(arr),
    onValueCommit: (valueCounts: number[]) => console.log(valueCounts),
    step: 0.1,
    value: [1.5],
  },
}
export const ChangedSlider = () => {
  const min = 0
  const max = 3
  const step = 0.1
  const [value, setValue] = useState<number[]>([0])
  const onValueCommit = (commitValue: number[]) => {
    console.log('commiting values', commitValue)
  }

  return (
    <Slider
      max={max}
      min={min}
      name={'ChangeSlider'}
      onValueChange={setValue}
      onValueCommit={onValueCommit}
      step={step}
      value={value}
    />
  )
}
