import { ReactNode } from 'react'

import { cn } from '@meetgram/utils'
import s from './card.module.scss'

type ProtoType = {
  children: ReactNode
  className?: string
}
export const Card = ({ children, className }: ProtoType) => {
  return <div className={cn(s.main, className)}>{children}</div>
}
