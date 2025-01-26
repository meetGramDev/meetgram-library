import { cn } from '@meetgram/utils'
import { SidebarProps } from '../props.types'
import s from './sidebar.module.scss'

export const DesktopSidebar = ({
  className,
  children,
  containerClassName,
  navClassName,
  ...rest
}: SidebarProps) => {
  return (
    <nav className={cn(s.container, containerClassName)} {...rest}>
      <ul className={cn(s.items__list, navClassName)}>{children}</ul>
    </nav>
  )
}
