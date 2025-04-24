import { useCallback} from 'react'

const range = (start: number, end: number) => {
  const length = end - start + 1

  return Array.from({ length }, (_, idx) => idx + start)
}

const DOTS = '...'

type UsePaginationParamType = {
  pageCount: number
  onPageChange: (pageNumber: number) => void
  currentPage: number
  siblings?: number
}

type PaginationRange = ('...' | number)[]

export const usePagination = ({ pageCount, onPageChange, currentPage, siblings = 1 }: UsePaginationParamType) => {
  const paginationRange = ((): PaginationRange => {
    const totalPageNumbers = siblings + 5

    if (totalPageNumbers >= pageCount) {
      return range(1, pageCount)
    }

    const leftSiblingIndex = Math.max(currentPage - siblings, 1)
    const rightSiblingIndex = Math.min(currentPage + siblings, pageCount)

    const shouldShowLeftDots = leftSiblingIndex > 2
    const shouldShowRightDots = rightSiblingIndex < pageCount - 2

    const firstPageIndex = 1
    const lastPageIndex = pageCount

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblings
      const leftRange = range(1, leftItemCount)

      return [...leftRange, DOTS, pageCount]
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblings
      const rightRange = range(pageCount - rightItemCount + 1, pageCount)

      return [firstPageIndex, DOTS, ...rightRange]
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex)

      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex]
    }
    return []
  })()


  const lastPage = paginationRange.at(-1)

  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === lastPage

  const handleNextPageClicked = useCallback(() => {
    onPageChange(currentPage + 1)
  }, [currentPage, onPageChange])

  const handlePreviousPageClicked = useCallback(() => {
    onPageChange(currentPage - 1)
  }, [currentPage, onPageChange])

  

  const handleMainPageClicked = useCallback((pageNumber: number) => {
    return () => onPageChange(pageNumber)
  }, [onPageChange])

  return {
    handleMainPageClicked,
    handleNextPageClicked,
    handlePreviousPageClicked,
    isFirstPage,
    isLastPage,
    paginationRange,
  }
}
