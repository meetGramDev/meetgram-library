import { Select } from '../select'
import s from './pagination.module.scss'
import { usePagination } from './usePagination'
import { ArrowNext, ArrowPrev } from '../../assets'
import { ButtonIcon } from '../buttonIcon'


type Text ={
  show: string
  onPage: string
}


export type PaginationProps = {
  pageCount: number
  onPageChange: (page: number) => void
  onPerPageChange?: (itemPerPage: string) => void
  currentPage: number
  perPage?: string | null
  options?: string[] 
  siblings?: number
  text?: Text
} 


export const Pagination  = ({
  pageCount,
  onPageChange,
  onPerPageChange,
  currentPage,
  perPage = null,
  options,
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
    pageCount,
    onPageChange,
    currentPage,
    siblings,
  })
  const showPerPageSelect = !!perPage && !!options && !!onPerPageChange

  if (pageCount === 0 || paginationRange.length < 2) {
    return null
  }

  return (
    <div className={s.root}>
      <div className={s.container}>
        <PrevButton disabled={isFirstPage} onClick={handlePreviousPageClicked} />

        <MainPaginationButtons
          currentPage={currentPage}
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
            options,
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
    <ButtonIcon className={s.btnAr}  disabled={disabled} onClick={onClick}><ArrowPrev className={disabled ? s.iconDis: s.arIcon}/></ButtonIcon>
  )
}

const NextButton = ({ disabled, onClick }: NavigationButtonProps) => {
  return (
    <ButtonIcon className={s.btnAr}  disabled={disabled} onClick={onClick}><ArrowNext className={disabled ? s.iconDis: s.arIcon}/></ButtonIcon>
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
  options: string[]
  text?: Text
}

export const PerPageSelect = ({
  onPerPageChange,
  perPage,
  options,
  text
}: PerPageSelectProps) => {
  const selectOptions = options.map(value => ({
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
