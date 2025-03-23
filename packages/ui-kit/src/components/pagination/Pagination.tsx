import { Select } from '../select'
import s from './pagination.module.scss'
import { usePagination } from './usePagination'
import { ArrowNext, ArrowPrev } from '../../assets'
import { ButtonIcon } from '../buttonIcon'

type PaginationConditionals =
  | {
      onPerPageChange: (itemPerPage: string) => void
      perPage: string
      perPageOptions: string[]
    }
  | {
      onPerPageChange?: never
      perPage?: null
      perPageOptions?: never
    }

    type Text ={
      show: string
      onPage: string
    }

export type PaginationProps = {
  count: number
  onChange: (page: number) => void
  onPerPageChange?: (itemPerPage: string) => void
  page: number
  perPage?: string | null
  perPageOptions?: string[]
  siblings?: number
  text?: Text
} & PaginationConditionals


export const Pagination  = ({
  count,
  onChange,
  onPerPageChange,
  page,
  perPage = null,
  perPageOptions,
  siblings,
  text,
}: PaginationProps) => {
  const {
    handleMainPageClicked,
    handleNextPageClicked,
    handlePreviousPageClicked,
    isFirstPage,
    isLastPage,
    paginationRange,
  } = usePagination({
    count,
    onChange,
    page,
    siblings,
  })
  const showPerPageSelect = !!perPage && !!perPageOptions && !!onPerPageChange

  if (count === 0 || paginationRange.length < 2) {
    return null
  }

  return (
    <div className={s.root}>
      <div className={s.container}>
        <PrevButton disabled={isFirstPage} onClick={handlePreviousPageClicked} />

        <MainPaginationButtons
          currentPage={page}
          onClick={handleMainPageClicked}
          paginationRange={paginationRange}
        />

        <NextButton disabled={isLastPage} onClick={handleNextPageClicked} />
      </div>

      {showPerPageSelect && (
        <PerPageSelect
          {...{
            onPerPageChange,
            perPage,
            perPageOptions,
            text
          }}
        />
      )}
    </div>
  )
}

type NavigationButtonProps = {
  disabled?: boolean
  onClick: () => void
}

type PageButtonProps = NavigationButtonProps & {
  page: number
  selected: boolean
}

const Dots = () => {
  return <ButtonIcon className={s.dots}>&#8230;</ButtonIcon>
}
const PageButton= ({ disabled, onClick, page, selected } : PageButtonProps) => {
  return (
    <button  onClick={onClick} className={`${selected ? s.selectedPage : s.pageItem}`} disabled={selected || disabled}>
      {page}
    </button>  
  )
}
const PrevButton = ({ disabled, onClick }: NavigationButtonProps) => {
  return (
    <ButtonIcon  disabled={disabled} onClick={onClick}><ArrowPrev className={disabled ? s.iconDis: s.arIcon}/></ButtonIcon>
  )
}

const NextButton = ({ disabled, onClick }: NavigationButtonProps) => {
  return (
    <ButtonIcon  disabled={disabled} onClick={onClick}><ArrowNext className={disabled ? s.iconDis: s.arIcon}/></ButtonIcon>
  )
}

type MainPaginationButtonsProps = {
  currentPage: number
  onClick: (pageNumber: number) => () => void
  paginationRange: (number | string)[]
}

const MainPaginationButtons  = ({
  currentPage,
  onClick,
  paginationRange,
}: MainPaginationButtonsProps) => {
  return (
    <>
      {paginationRange.map((page: number | string, index) => {
        const isSelected = page === currentPage

        if (typeof page !== 'number') {
          return <Dots key={index} />
        }

        return <PageButton key={index} onClick={onClick(page)} page={page} selected={isSelected} />
      })}
    </>
  )
}

export type PerPageSelectProps = {
  onPerPageChange: (itemPerPage: string) => void
  perPage: string
  perPageOptions: string[]
  text?: Text
}

export const PerPageSelect = ({
  onPerPageChange,
  perPage,
  perPageOptions,
  text
}: PerPageSelectProps) => {
  const selectOptions = perPageOptions.map(value => ({
    label: value,
    value,
  }))

  return (
    <div className={s.selectBox}>
     {text?.show ?? 'Show'} 
      <Select
        contentClassName={s.select}
        onValueChange={onPerPageChange}
        options={selectOptions}
        value={perPage}
        withPortal
      />
      {text?.onPage ?? 'on page'}
    </div>
  )
}
