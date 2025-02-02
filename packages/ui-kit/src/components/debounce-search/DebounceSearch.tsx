import { useEffect, useState } from 'react'
import { Input } from '../input'
import s from './debounce-search.module.scss'

export type DebounceInputProps = {
  onValueQuery: (value: string) => void
}
/**
 * A React component that provides a search input with debounce functionality.
 *
 * @example
 * <DebounceSearch onValueQuery={(value) => console.log(value)} />
 */
export const DebounceSearch = ({ onValueQuery }: DebounceInputProps) => {
  const [timerId, setTimerId] = useState(0)
  const [str, setStr] = useState('')

  useEffect(() => {
    setTimerId(
      +setTimeout(() => {
        onValueQuery(str)
      }, 1500)
    )

    return clearTimeout(timerId)
  }, [str, onValueQuery])

  const onChangeValue = (value: string) => {
    setStr(value)
  }

  return (
    <>
      <Input
        className={s.search}
        onChange={e => onChangeValue(e.currentTarget.value)}
        placeholder={'Search'}
        type={'search'}
      />
    </>
  )
}
