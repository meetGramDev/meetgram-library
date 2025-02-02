import { cn } from '@meetgram/utils'
import { ComponentProps, ReactNode } from 'react'
import s from './mobileHeader.module.scss'

type Props = {
  sidebarComponent?: ReactNode
  sidebarClassName?: string
} & ComponentProps<'header'>

/**
 * A responsive mobile header component that supports a sidebar component and additional controls.
 *
 * @example
 * // Example usage of MobileHeader
 * const App = () => {
 *   return (
 *     <MobileHeader
 *       className="custom-header"
 *       sidebarComponent={<button>Toggle Menu</button>}
 *       sidebarClassName="custom-sidebar"
 *     >
 *       <h1>My Logo</h1>
 *     </MobileHeader>
 *   );
 * };
 */
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
