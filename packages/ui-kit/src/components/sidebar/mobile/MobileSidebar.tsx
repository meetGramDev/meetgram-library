import { cn } from '@meetgram/utils'
import { SidebarProps } from '../props.types'
import s from './mobile-sidebar.module.scss'

/**
 * Mobile Sidebar.
 * Use with `SidebarItem` component
 * @example
 * ```
 * <MobileSidebar>
 *  {items.map(item => (
 *   <SidebarItem item={item} isMobile onItemClick={() => item.isButton && alert('Clicked!')} />
 *  ))}
 * </MobileSidebar>
 * ```
 */
export const MobileSidebar = ({
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
