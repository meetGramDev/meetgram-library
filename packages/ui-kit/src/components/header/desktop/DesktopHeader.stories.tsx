import type { Meta, StoryObj } from '@storybook/react'
import { Notification } from '../../../assets'
import { Button } from '../../button'
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

export const Default: Story = {
  render(args) {
    return (
      <DesktopHeader>
        <div className={'text-large font-semibold text-light-100 font-["Inter"]'}>Meetgram</div>
      </DesktopHeader>
    )
  },
}

export const AdminHeader: Story = {
  render(args) {
    return (
      <DesktopHeader className={'font-["Inter"]'}>
        <div className={'text-large font-semibold text-light-100'}>
          Meetgram
          <span className={'text-small font-light'}>
            Super<span className={'font-semibold'}>Admin</span>
          </span>
        </div>
      </DesktopHeader>
    )
  },
}

export const WithNotifications: Story = {
  render(args) {
    return (
      <DesktopHeader className={'font-["Inter"]'}>
        <div className={'text-large font-semibold text-light-100'}>Meetgram</div>
        <div className={'flex items-center justify-between gap-[2.25rem]'}>
          <div className={'flex items-center justify-end gap-[1.5rem]'}>
            <Button variant={'text'}>
              <div className={'relative text-light-100'}>
                <Notification
                  className={'fill-current transition-all duration-300 hover:fill-accent-500'}
                />

                <div
                  className={
                    'absolute left-[10px] top-[-5px] flex aspect-square h-[13px] items-center justify-center rounded-full bg-danger-500 px-1 text-[0.625rem] text-light-100'
                  }
                >
                  3
                </div>
              </div>
            </Button>
          </div>

          <div className={'flex gap-6'}>
            <Button variant={'link'}>Log In</Button>
            <Button variant={'primary'}>Sign Up</Button>
          </div>
        </div>
      </DesktopHeader>
    )
  },
}
