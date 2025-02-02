import { ComponentProps } from 'react'

export type SidebarProps = {
  containerClassName?: string
  navClassName?: string
} & ComponentProps<'nav'>
