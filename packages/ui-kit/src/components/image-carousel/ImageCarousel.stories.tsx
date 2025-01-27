import { Meta, StoryObj } from '@storybook/react'

import beach from './beach.png'
import { ImageCarousel } from './ImageCarousel'
import anotherDude from './photo-preview.png'
import fruits from './photo3.png'
import someDude from './photo6.png'

const photos = [
  {
    createdAt: new Date().toLocaleDateString(),
    fileSize: 81297,
    height: 228,
    uploadId: 'asdf2345f',
    url: someDude,
    width: 234,
  },
  {
    createdAt: new Date().toLocaleDateString(),
    fileSize: 521234,
    height: 562,
    uploadId: 'serpkdfa38492',
    url: beach,
    width: 490,
  },
  {
    createdAt: new Date().toLocaleDateString(),
    fileSize: 81297,
    height: 228,
    uploadId: 'asdf2345f',
    url: anotherDude,
    width: 234,
  },
  {
    createdAt: new Date().toLocaleDateString(),
    fileSize: 521234,
    height: 562,
    uploadId: 'serpkdfa38492',
    url: fruits,
    width: 490,
  },
]

const meta = {
  args: {
    images: photos,
  },
  component: ImageCarousel,
  tags: ['autodocs'],
  title: 'shared/Carousel/ImageCarousel',
} satisfies Meta<typeof ImageCarousel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => {
    return <ImageCarousel {...args} />
  },
}

export const WithoutNavigation: Story = {
  args: {
    showNavigation: false,
  },
}

export const WithoutPagination: Story = {
  args: {
    showDotsPagination: false,
  },
}
