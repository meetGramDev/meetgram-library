import { cn } from '@meetgram/utils'
import * as React from 'react'
import { CaretIcon } from './Caret-icon'
import { SortDirection } from './Table.types'

const Table = React.forwardRef<HTMLTableElement, React.HTMLAttributes<HTMLTableElement>>(
  ({ className, ...props }, ref) => (
    <div className={'relative w-full overflow-auto'}>
      <table
        className={cn('w-full caption-top border border-dark-500 text-sm', className)}
        ref={ref}
        {...props}
      />
    </div>
  )
)

Table.displayName = 'Table'

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead
    className={cn(
      'bg-dark-500 [&_tr]:hover:border [&_tr]:hover:border-neutral-100/50 [&_tr]:hover:bg-transparent',
      className
    )}
    ref={ref}
    {...props}
  />
))

TableHeader.displayName = 'TableHeader'

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody className={cn('bg-dark-900 [&_tr:last-child]:border-0', className)} ref={ref} {...props} />
))

TableBody.displayName = 'TableBody'

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    className={cn('bg-muted/50 border-t font-medium [&>tr]:last:border-b-0', className)}
    ref={ref}
    {...props}
  />
))

TableFooter.displayName = 'TableFooter'

const TableRow = React.forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement>>(
  ({ className, ...props }, ref) => (
    <tr
      className={cn(
        'border-b border-dark-500 transition-colors hover:bg-dark-100/50 data-[state=selected]:bg-dark-100',
        className
      )}
      ref={ref}
      {...props}
    />
  )
)

TableRow.displayName = 'TableRow'

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement> & { sort?: SortDirection; sortingClassname?: string }
>(({ className, children, sort, sortingClassname, ...props }, ref) => (
  <th
    className={cn(
      'h-12 px-4 align-middle text-left font-bold [&:has([role=checkbox])]:pr-0 cursor-pointer',
      className
    )}
    ref={ref}
    {...props}
  >
    {sort !== undefined ? (
      <div className={cn('flex items-center w-full h-full gap-2', sortingClassname)}>
        {children}
        <CaretIcon direction={sort} />
      </div>
    ) : (
      children
    )}
  </th>
))

TableHead.displayName = 'TableHead'

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    className={cn('p-4 align-middle [&:has([role=checkbox])]:pr-0', className)}
    ref={ref}
    {...props}
  />
))

TableCell.displayName = 'TableCell'

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption className={cn('mb-4', className)} ref={ref} {...props} />
))

TableCaption.displayName = 'TableCaption'

export { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow }
