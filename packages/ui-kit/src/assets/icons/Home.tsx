import React from 'react'

type SvgComponentProps = {
  className?: string
} & React.SVGProps<SVGSVGElement>

const SvgComponent = (
  { className, fill, ...props }: SvgComponentProps,
  ref: React.Ref<SVGSVGElement>
) => (
  <svg
    fill={'currentColor'}
    height={'24.000000'}
    ref={ref}
    viewBox={'0 0 24 24'}
    width={'24.000000'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
    className={className}
  >
    <path
      d={
        'M20.42 10.17L12.71 2.29C12.61 2.2 12.5 2.13 12.38 2.08C12.26 2.03 12.13 2 12 2C11.86 2 11.73 2.03 11.61 2.08C11.49 2.13 11.38 2.2 11.29 2.29L3.57 10.18C3.39 10.37 3.24 10.6 3.14 10.84C3.04 11.09 2.99 11.35 3 11.62L3 20C2.99 20.51 3.19 21 3.54 21.37C3.89 21.74 4.37 21.97 4.89 22L19.11 22C19.62 21.97 20.1 21.74 20.45 21.37C20.8 21 21 20.51 21 20L21 11.62C21 11.08 20.79 10.56 20.42 10.17ZM10 20L10 14L14 14L14 20L10 20ZM19 20L16 20L16 13C16 12.73 15.89 12.48 15.7 12.29C15.51 12.1 15.26 12 15 12L9 12C8.73 12 8.48 12.1 8.29 12.29C8.1 12.48 8 12.73 8 13L8 20L5 20L5 11.58L12 4.42L19 11.62L19 20Z'
      }
    />
  </svg>
)

export const HomeIcon = React.forwardRef(SvgComponent)
