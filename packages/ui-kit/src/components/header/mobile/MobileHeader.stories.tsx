import type { Meta, StoryObj } from '@storybook/react'
import clsx from 'clsx'
import { HomeIcon, MessengerIcon, MoreIcon, MyProfileIcon, Search, Setting } from '../../../assets'
import { Button } from '../../button'
import { Select } from '../../select'
import { SidebarItem, SidebarItemType } from '../../sidebar'
import { MobileHeader } from './MobileHeader'
import s from './storybook.module.scss'

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

const items: SidebarItemType[] = [
  { Svg: HomeIcon, name: 'Home', hrefPath: '#', isButton: true },
  { Svg: MyProfileIcon, name: 'My Profile', hrefPath: '#' },
  { Svg: MessengerIcon, name: 'Messages', hrefPath: '#' },
  { Svg: Search, name: 'Search', hrefPath: '#', isButton: true },
]

export const Default: Story = {
  render(args) {
    return (
      <ul>
        <MobileHeader
          sidebarComponent={
            <Select
              contentClassName={s.selectContent}
              placeholder={<MoreIcon className={s.moreIcon} />}
              rootClassName={s.maine}
              showArrow={false}
            >
              <ul className={s.menuContent}>
                <li>
                  <Button className={clsx(s.item, s.button)} variant={'text'}>
                    <Setting /> Settings
                  </Button>
                </li>

                {items.map((el, i) => (
                  <Button className={clsx(s.item, s.button)} key={i} variant={'text'}>
                    <SidebarItem item={el} isMobile />
                    {el.name}
                  </Button>
                ))}
              </ul>
            </Select>
          }
        >
          <div className={'text-large font-semibold text-light-100 font-["Inter"]'}>Meetgram</div>
        </MobileHeader>
      </ul>
    )
  },
}
