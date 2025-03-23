import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { Pagination } from './Pagination'

const meta = {
  argTypes: {},
  component: Pagination,
  tags: ['autodocs'],
  title: 'NewPagination',
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const PaginationWithSelect: Story = {
  args: {
    count: 30,
    onPerPageChange: () => {},
    page: 1,
    perPage: '5',
    perPageOptions: ['3', '5', '7', '10'],
  },
  render: args => {
    const [page, setPage] = useState(1)
    const [select, setSelect] = useState('3')

    return (
      <>
        <Pagination
          {...args}
          count={30}
          onChange={page => {
            setPage(page)
          }}
          onPerPageChange={select => {
            setSelect(select)
          }}
          page={page}
          perPage={select}
          perPageOptions={['3', '5', '7', '10']}
          siblings={1}
        />
      </>
    )
  },
}


export const PaginationWithSelectUp: Story = {
  args: {
    count: 30,
    onPerPageChange: () => {},
    page: 1,
    perPage: '5',
    perPageOptions: ['3', '5', '7', '10'],
  },
  render: args => {
    const [page, setPage] = useState(1)
    const [select, setSelect] = useState('3')

    return (
      <>
      <div style={{height: '600px', backgroundColor: 'black'}}></div>
        <Pagination
          {...args}
          count={30}
          onChange={page => {
            setPage(page)
          }}
          onPerPageChange={select => {
            setSelect(select)
          }}
          page={page}
          perPage={select}
          perPageOptions={['3', '5', '7', '10']}
          siblings={1}
        />
      </>
    )
  },
}

