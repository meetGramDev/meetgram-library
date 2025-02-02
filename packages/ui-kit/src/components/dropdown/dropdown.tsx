import React, { ReactNode, useEffect, useRef } from 'react'

import styles from './dropdown.module.scss'

export type DropdownOption = {
  id: number
  label: string
}

export type DropdownProps = {
  children: ReactNode
  isOpen: boolean
  onSelect: (option: DropdownOption) => void
  onToggle: (state: boolean) => void
  options: DropdownOption[]
}

export const Dropdown = React.forwardRef<HTMLDivElement, DropdownProps>(
  ({ children, isOpen, onSelect, onToggle, options }, ref) => {
    const dropdownRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          onToggle(false)
        }
      }

      document.addEventListener('mousedown', handleClickOutside)

      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [onToggle])

    const handleToggle = () => {
      onToggle(!isOpen)
    }

    const handleSelect = (option: DropdownOption) => {
      onSelect(option)
      onToggle(false)
    }

    return (
      <div className={styles.dropdown} ref={dropdownRef}>
        <div className={styles.dropdownToggle} onClick={handleToggle}>
          {children}
        </div>
        {isOpen && (
          <ul className={styles.dropdownMenu}>
            {options.map(option => (
              <li
                className={styles.dropdownItem}
                key={option.id}
                onClick={() => handleSelect(option)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }
)
Dropdown.displayName = 'Dropdown'
