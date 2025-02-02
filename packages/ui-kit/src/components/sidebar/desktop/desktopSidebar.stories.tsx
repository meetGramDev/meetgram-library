import type { Meta, StoryObj } from '@storybook/react'

import { HomeIcon, MessengerIcon, MyProfileIcon, Search } from '../../../assets'
import { SidebarItem, SidebarItemType } from '../sidebarItem/SidebarItem'
import { DesktopSidebar } from './DesktopSidebar'

const meta: Meta<typeof DesktopSidebar> = {
  args: {},
  component: DesktopSidebar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  title: 'shared/Sidebar/Desktop',
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
      <DesktopSidebar>
        {items.map(item => (
          <SidebarItem item={item} onItemClick={() => item.isButton && alert('Clicked!')} />
        ))}
      </DesktopSidebar>
    )
  },
}
