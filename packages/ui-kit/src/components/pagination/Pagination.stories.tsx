import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { Pagination } from './Pagination'

const meta = {
  argTypes: {},
  component: Pagination,
  tags: ['autodocs'],
  title: 'shared/Pagination',
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultPagination: Story = {
  args: {
    pageCount: 30,
    currentPage: 1
  },
  render: args => {
    const [page, setPage] = useState(1)

    return (
      <>
        <Pagination
          {...args}
          pageCount={30}
          onPageChange={page => {
            setPage(page)
          }}
          currentPage={page}
          siblings={1}
        />
      </>
    )
  },
}

export const PaginationWithSelect: Story = {
  args: {
    pageCount: 30,
    currentPage: 1,
  },
  render: args => {
    const [page, setPage] = useState(1)
    const [select, setSelect] = useState('3')

    return (
      <>
        <Pagination
          {...args}
          onPageChange={page => {
            setPage(page)
          }}
          onPerPageChange={select => {
            setSelect(select)
          }}
          currentPage={page}
          perPage={select}
          options={['3', '5', '7', '10']}
          siblings={1}
        />
      </>
    )
  },
}


export const PaginationWithSelectUp: Story = {
  args: {
    pageCount: 30,
    currentPage: 1,
  },
  render: args => {
    const [page, setPage] = useState(1)
    const [select, setSelect] = useState('3')

    return (
      <>
      <div style={{height: '600px', backgroundColor: 'grey'}}></div>
        <Pagination
          {...args}
          pageCount={30}
          onPageChange={page => {
            setPage(page)
          }}
          onPerPageChange={select => {
            setSelect(select)
          }}
          currentPage={page}
          perPage={select}
          options={['3', '5', '7', '10']}
          siblings={1}
        />
      </>
    )
  },
}

