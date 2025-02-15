import { cn } from '@meetgram/utils'
import { SortDirection } from './Table.types'

export const CaretIcon = ({ direction = SortDirection.DESC }: { direction?: SortDirection }) => {
  let directionClassname = ''
  switch (direction) {
    case SortDirection.ASC:
      directionClassname = 'rotate-180'
      break
    case SortDirection.DESC:
      directionClassname = 'rotate-0'
      break
    default:
      break
  }

  return (
    <svg
      width="10"
      height="8"
      viewBox="0 0 8 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('transition-transform', directionClassname)}
    >
      <path d="M4 6L0.535898 1.5L7.4641 1.5L4 6Z" fill="currentColor" />
    </svg>
  )
}
