import type { Meta, StoryObj } from '@storybook/react'

import { HomeIcon, MessengerIcon, MyProfileIcon, Search } from '../../../assets'
import { SidebarItem, SidebarItemType } from '../sidebarItem/SidebarItem'
import { MobileSidebar } from './MobileSidebar'

const meta: Meta<typeof MobileSidebar> = {
  args: {},
  component: MobileSidebar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  title: 'shared/Sidebar/Mobile',
}

export default meta
type Story = StoryObj<typeof meta>

const items: SidebarItemType[] = [
  { Svg: HomeIcon, name: 'Home', hrefPath: '#', isButton: true },
  { Svg: MyProfileIcon, name: 'My Profile', hrefPath: '#' },
  { Svg: MessengerIcon, name: 'Messages', hrefPath: '#' },
  { Svg: Search, name: 'Search', hrefPath: '#', isButton: true },
]

export const Default: Story = {
  render(args) {
    return (
      <MobileSidebar {...args}>
        {items.map(item => (
          <SidebarItem
            item={item}
            onItemClick={() => item.isButton && alert('Clicked!')}
            isMobile
          />
        ))}
      </MobileSidebar>
    )
  },
}
