import { Ref, SVGProps, forwardRef } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={'24'}
    ref={ref}
    viewBox={'0 0 32 32'}
    width={'24'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <rect fill={'url(#pattern0_965_25)'} height={'18'} rx={'2'} width={'32'} y={'7'} />
    <rect
      height={'17'}
      rx={'1.5'}
      stroke={'#252A31'}
      strokeOpacity={'0.15'}
      width={'31'}
      x={'0.5'}
      y={'7.5'}
    />
    <defs>
      <pattern
        height={'1'}
        id={'pattern0_965_25'}
        patternContentUnits={'objectBoundingBox'}
        width={'1'}
      >
        <use transform={'scale(0.00416667 0.00740741)'} xlinkHref={'#image0_965_25'} />
      </pattern>
      <image
        height={'135'}
        id={'image0_965_25'}
        width={'240'}
        xlinkHref={
          'data:image/png;base64,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'
        }
      />
    </defs>
  </svg>
)

export const UsFlagIcon = forwardRef(SvgComponent)