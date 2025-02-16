import { useEffect, useState } from 'react'
import { Input } from '../input'
import s from './debounce-search.module.scss'

export type DebounceInputProps = {
  defaultValue?: string
  /**
   * Delay time in ms
   * Default: 300ms
   */
  delay?: number
  /**
   * A function is called whether a debounced value was changed
   * @param value debounced value
   * @returns {void}
   */
  onValueQuery?: (value: string) => void
}
/**
 * A React component that provides a search input with debounce functionality.
 *
 * @example
 * <DebounceSearch onValueQuery={(value) => console.log(value)} />
 */
export const DebounceSearch = ({
  onValueQuery,
  defaultValue = '',
  delay = 500,
}: DebounceInputProps) => {
  const [str, setStr] = useState<string>(defaultValue)

  useEffect(() => {
    if (!onValueQuery) {
      return
    }

    const timerId = setTimeout(() => {
      onValueQuery(str)
    }, delay)

    return () => clearTimeout(timerId)
  }, [str, onValueQuery, delay])

  const onChangeValue = (value: string) => {
    setStr(value)
  }

  const onClearValue = () => {
    setStr('')
  }

  return (
    <>
      <Input
        clearValue={onClearValue}
        value={str}
        className={s.search}
        onChange={e => onChangeValue(e.currentTarget.value)}
        placeholder={'Search'}
        type={'search'}
      />
    </>
  )
}
