import { cn } from '@meetgram/utils'
import { ComponentProps, ReactNode } from 'react'
import s from './mobileHeader.module.scss'

type Props = {
  sidebarComponent?: ReactNode
  sidebarClassName?: string
} & ComponentProps<'header'>
export const MobileHeader = ({
  className,
  children,
  sidebarComponent,
  sidebarClassName,
  ...rest
}: Props) => {
  return (
    <header className={cn(s.header, className)} {...rest}>
      {children}
      <div className={cn(s.controls, sidebarClassName)}>{sidebarComponent}</div>
    </header>
  )
}
