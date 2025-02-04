import { cn } from '@meetgram/utils'
import { ComponentPropsWithoutRef, ElementType, FC, SVGProps } from 'react'
import { Button } from '../../button'
import s from './SidebarItem.module.scss'

/**
 * Represents the type definition for a sidebar item.
 */
export type SidebarItemType = {
  /**
   * Optional React functional component for rendering an SVG icon.
   */
  Svg?: FC<SVGProps<SVGSVGElement>>
  /**
   * Flag indicating whether the sidebar item should be rendered as a button.
   */
  isButton?: boolean
  /**
   * Name of the sidebar item to display.
   */
  name: string
  /**
   * Path to navigate when the item is clicked.
   */
  hrefPath: string
}

type Props<T extends ElementType = 'a'> = {
  className?: string
  /**
   * The sidebar item to render.
   */
  item: SidebarItemType
  /**
   * Flag indicating whether the component is rendered for mobile.
   */
  isMobile?: boolean
  onItemClick?: () => void
  /**
   * The underlying component or element type to render (e.g., 'a', 'button').
   */
  as?: T
  /**
   * Specify whether the link should be active
   */
  isActiveLink?: boolean
} & ComponentPropsWithoutRef<T>

/**
 * A sidebar list item component. Use it together with the parent `DesktopSidebar` or `MobileSidebar` components.
 */
export const SidebarItem = <T extends ElementType = 'a'>({
  className,
  item,
  isMobile,
  onItemClick,
  as,
  isActiveLink,
  ...rest
}: Props<T>) => {
  const AsComponent = as || 'a'

  return (
    <li>
      {item.isButton ? (
        <Button
          className={cn(s.createPostButton, className)}
          onClick={onItemClick}
          variant={'text'}
        >
          {item.Svg && <item.Svg />}
          {isMobile || item.name}
        </Button>
      ) : (
        <AsComponent
          className={cn(s.item, className, isActiveLink && s.currentItem)}
          href={item.hrefPath}
          key={item.hrefPath}
          onClick={onItemClick}
          {...rest}
        >
          {item.Svg && <item.Svg />}
          {isMobile || item.name}
        </AsComponent>
      )}
    </li>
  )
}
