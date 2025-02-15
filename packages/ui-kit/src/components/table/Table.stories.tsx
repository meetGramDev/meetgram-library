import { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from './Table-components'
import { ITableHead, SortDirection } from './Table.types'

const meta = {
  tags: ['autodocs'],
  title: 'shared/Table',
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const invoices = [
  {
    invoice: 'INV001',
    paymentMethod: 'Credit Card',
    paymentStatus: 'Paid',
    totalAmount: '$250.00',
  },
  {
    invoice: 'INV002',
    paymentMethod: 'PayPal',
    paymentStatus: 'Pending',
    totalAmount: '$150.00',
  },
  {
    invoice: 'INV003',
    paymentMethod: 'Bank Transfer',
    paymentStatus: 'Unpaid',
    totalAmount: '$350.00',
  },
  {
    invoice: 'INV004',
    paymentMethod: 'Credit Card',
    paymentStatus: 'Paid',
    totalAmount: '$450.00',
  },
  {
    invoice: 'INV005',
    paymentMethod: 'PayPal',
    paymentStatus: 'Paid',
    totalAmount: '$550.00',
  },
  {
    invoice: 'INV006',
    paymentMethod: 'Bank Transfer',
    paymentStatus: 'Pending',
    totalAmount: '$200.00',
  },
  {
    invoice: 'INV007',
    paymentMethod: 'Credit Card',
    paymentStatus: 'Unpaid',
    totalAmount: '$300.00',
  },
]

const headers: ITableHead<keyof (typeof invoices)[0]>[] = [
  {
    id: 1,
    key: 'invoice',
    label: 'Invoice',
  },
  {
    id: 2,
    key: 'paymentStatus',
    label: 'Status',
  },
  {
    id: 3,
    key: 'paymentMethod',
    label: 'Method',
  },
  {
    id: 4,
    key: 'totalAmount',
    label: 'Amount',
  },
]

export const DefaultWithTitle: Story = {
  render: () => {
    return (
      <Table>
        <TableCaption className={'text-regular16 font-semibold'}>
          A list of your recent invoices.
        </TableCaption>
        <TableHeader>
          <TableRow>
            {headers.map((header, i) => {
              if (i === 0) {
                return <TableHead className={'w-[100px]'}>{header.label}</TableHead>
              }

              if (i + 1 === headers.length) {
                return <TableHead className={'text-right'}>{header.label}</TableHead>
              }

              return <TableHead className={'text-left'}>{header.label}</TableHead>
            })}
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map(invoice => (
            <TableRow key={invoice.invoice}>
              <TableCell className={'font-medium'}>{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell className={'text-right'}>{invoice.totalAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className={'text-right'}>$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    )
  },
}

export const DefaultWithSorting: Story = {
  render: () => {
    const [sort, setSort] = useState<{
      currentHeader: keyof (typeof invoices)[0]
      sortDir: SortDirection
    }>({
      currentHeader: 'invoice',
      sortDir: SortDirection.DESC,
    })

    const handleSort = (header: ITableHead<keyof (typeof invoices)[0]>) => {
      setSort({
        currentHeader: header.key,
        sortDir:
          sort.currentHeader === header.key
            ? sort.sortDir === SortDirection.DESC
              ? SortDirection.ASC
              : SortDirection.DESC
            : SortDirection.ASC,
      })
    }

    const getSortedArray = (arrayToSort: typeof invoices) => {
      if (sort.sortDir === SortDirection.ASC) {
        return arrayToSort.sort((objA, objB) =>
          objA[sort.currentHeader] > objB[sort.currentHeader] ? 1 : -1
        )
      }

      if (sort.sortDir === SortDirection.DESC) {
        return arrayToSort.sort((objA, objB) =>
          objA[sort.currentHeader] > objB[sort.currentHeader] ? -1 : 1
        )
      }

      return arrayToSort
    }

    return (
      <Table>
        <TableCaption className={'text-regular16 font-semibold'}>
          A list of your recent invoices.
        </TableCaption>
        <TableHeader>
          <TableRow>
            {headers.map((header, i) => {
              if (i === 0) {
                return (
                  <TableHead
                    sort={sort.currentHeader === header.key ? sort.sortDir : undefined}
                    onClick={() => handleSort(header)}
                    className={'w-[100px]'}
                  >
                    {header.label}
                  </TableHead>
                )
              }

              if (i + 1 === headers.length) {
                return (
                  <TableHead
                    sort={sort.currentHeader === header.key ? sort.sortDir : undefined}
                    onClick={() => handleSort(header)}
                    className={'text-right'}
                    sortingClassname={'justify-end'}
                  >
                    {header.label}
                  </TableHead>
                )
              }

              return (
                <TableHead
                  sort={sort.currentHeader === header.key ? sort.sortDir : undefined}
                  onClick={() => handleSort(header)}
                  className={'text-left'}
                >
                  {header.label}
                </TableHead>
              )
            })}
          </TableRow>
        </TableHeader>
        <TableBody>
          {getSortedArray(invoices).map(invoice => (
            <TableRow key={invoice.invoice}>
              <TableCell className={'font-medium'}>{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell className={'text-right'}>{invoice.totalAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className={'text-right'}>$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    )
  },
}
