import { cn, getPostMessageTruncated, GetPostMessageTruncatedArgs } from '@meetgram/utils'
import { Button } from '../button'
import s from './Expandable.module.scss'

type Props = {
  className?: string
  /**
   * Callback function triggered when the expand/collapse button is clicked.
   */
  onExpand: () => void
  /**
   * A text displayed on the button when content is expanded
   */
  hideBtnText: string
  /**
   * A text displayed on the button when content is collapsed
   */
  showMoreBtnText: string
} & GetPostMessageTruncatedArgs

export const ExpandableText = ({
  className,
  cutTextEnd,
  hideCount = 77,
  isExpanded,
  message,
  onExpand,
  showedCount = 237,
  hideBtnText,
  showMoreBtnText,
}: Props) => {
  return (
    <div className={cn(s.container, isExpanded && s.textExpanded, className)}>
      <>{getPostMessageTruncated({ cutTextEnd, hideCount, isExpanded, message, showedCount })}</>
      {message.length > hideCount && (
        <Button className={'text-[14px]'} onClick={onExpand} variant={'link'}>
          {isExpanded ? hideBtnText : showMoreBtnText}
        </Button>
      )}
    </div>
  )
}
