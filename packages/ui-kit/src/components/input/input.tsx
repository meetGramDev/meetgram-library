import { ComponentPropsWithoutRef, forwardRef, useEffect, useState } from 'react'

import { clsx } from 'clsx'

import s from './input.module.scss'

import { CloseIcon, Eye, EyeOff, Search } from '../../assets'

type Props = {
  className?: string
  clearValue?: () => void
  error?: null | string
  label?: string
  required?: boolean
} & ComponentPropsWithoutRef<'input'>

export const Input = forwardRef<HTMLInputElement, Props>(
  (
    { className, clearValue, disabled, error, id, label, required, type = 'text', value, ...rest },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false)
    const [shake, setShake] = useState(false)
    const [isLongErrorMessage, setIsLongErrorMessage] = useState(false)

    useEffect(() => {
      if (error && error?.length > 51) {
        setIsLongErrorMessage(true)
      } else {
        setIsLongErrorMessage(false)
      }
    }, [error])

    const classes = {
      closeIconButton: clsx(s.btn, s.closeIconButton),
      input: clsx(
        s.input,
        type === 'search' && s.withSearchIcon,
        type === 'password' && s.password,
        type === 'number' && s.numberType,
        error && s.error,
        shake && s.shake,
        value && s.active,
        disabled && s.disabled,
        isLongErrorMessage && s.isLongErrorMessage
      ),
      label: clsx(s.label, disabled && s.disabled),
      showPasswordButton: clsx(s.btn, s.showPasswordButton, disabled && s.disabled),
      wrapper: clsx(s.wrapper, disabled && s.disabled, className),
    }

    const togglePassword = () => {
      setShowPassword(!showPassword)
    }

    const finalType = type === 'password' && showPassword ? 'text' : type

    useEffect(() => {
      if (error) {
        setShake(true)
      }
      const timer = setTimeout(() => {
        setShake(false)
      }, 500)

      return () => {
        clearTimeout(timer)
      }
    }, [error])

    return (
      <div className={classes.wrapper}>
        {label && (
          <label className={classes.label} htmlFor={id}>
            {label}
            {required && <span className={s.star}>*</span>}
          </label>
        )}
        <div className={s.inputWrapper}>
          {finalType === 'search' && <Search className={s.searchIcon} />}
          <input
            className={classes.input}
            disabled={disabled}
            id={id}
            ref={ref}
            type={finalType}
            value={value}
            {...rest}
          />
          {finalType === 'search' && value && (
            <button className={classes.closeIconButton} onClick={clearValue} type={'button'}>
              <CloseIcon className={s.closeIcon} />
            </button>
          )}
          {type === 'password' && (
            <button
              className={classes.showPasswordButton}
              disabled={disabled}
              onClick={togglePassword}
              tabIndex={-1}
              type={'button'}
            >
              {showPassword ? (
                <Eye className={s.passwordIcon} />
              ) : (
                <EyeOff className={s.passwordIcon} />
              )}
            </button>
          )}
          {!!error && <span className={s.errorMessage}>{error}</span>}
        </div>
      </div>
    )
  }
)
Input.displayName = 'Input'
