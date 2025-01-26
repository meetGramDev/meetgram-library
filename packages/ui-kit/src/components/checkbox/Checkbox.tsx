import { ComponentPropsWithoutRef, forwardRef } from 'react'

import * as CheckboxRadix from '@radix-ui/react-checkbox'
import { clsx } from 'clsx'
import { Check } from '../../assets/icons/Check'

import s from './Checkbox.module.scss'

export type CheckboxProps = {
  checked?: boolean
  className?: string
  disabled?: boolean
  id?: string
  label?: string
  onValueChange?: (checked: boolean) => void
  required?: boolean
} & ComponentPropsWithoutRef<typeof CheckboxRadix.Root>

export const Checkbox = forwardRef<
  HTMLButtonElement,
  CheckboxProps & Omit<ComponentPropsWithoutRef<typeof CheckboxRadix.Root>, keyof CheckboxProps>
>((props, forwardRef) => {
  const { checked, className, disabled, id, label, onValueChange, required, ...rest } = props

  const classNames = {
    buttonWrapper: clsx(s.buttonWrapper, disabled && s.disabled),
    container: clsx(s.innerContainer, className),
    indicator: clsx(s.indicator, checked && s.checked, disabled && s.disabled),
    label: clsx(s.label, disabled && s.disabled),
    root: clsx(s.root),
  }

  return (
    <div className={classNames.container}>
      <div className={classNames.buttonWrapper}>
        <CheckboxRadix.Root
          {...rest}
          checked={checked}
          className={classNames.root}
          disabled={disabled}
          id={id}
          onCheckedChange={onValueChange}
          ref={forwardRef}
          required={required}
        >
          <CheckboxRadix.Indicator className={classNames.indicator}>
            {!disabled ? <Check /> : <Check fill={`var(--dark-color-100)`} />}
          </CheckboxRadix.Indicator>
        </CheckboxRadix.Root>
      </div>
      <label className={classNames.label} htmlFor={id}>
        {label}
      </label>
    </div>
  )
})
Checkbox.displayName = 'Checkbox'
