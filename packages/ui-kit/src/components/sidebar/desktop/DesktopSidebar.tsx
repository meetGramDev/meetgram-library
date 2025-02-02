import { cn } from '@meetgram/utils'
import { SidebarProps } from '../props.types'
import s from './sidebar.module.scss'

/**
 * Desktop Sidebar.
 * Use with `SidebarItem` component
 * @example
 * ```
 * <DesktopSidebar>
 *  {items.map(item => (
 *   <SidebarItem item={item} onItemClick={() => item.isButton && alert('Clicked!')} />
 *  ))}
 * </DesktopSidebar>
 * ```
 */
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
