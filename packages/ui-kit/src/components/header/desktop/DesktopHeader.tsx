import { cn } from '@meetgram/utils'
import { ComponentProps } from 'react'

export const DesktopHeader = ({ className, children, ...rest }: ComponentProps<'header'>) => {
  return (
    <header
      className={cn(
        'flex h-[3.75rem] w-full items-center justify-between border-b border-[#333] px-[3.75rem] fixed top-0 left-0 bg-dark-900',
        className
      )}
      {...rest}
    />
  )
}
