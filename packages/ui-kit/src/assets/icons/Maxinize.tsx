import { Ref, SVGProps, forwardRef } from 'react'

type SVGComponentProps = { className?: string } & SVGProps<SVGSVGElement>
const SvgComponent = (
  { className, fill = 'white', ...props }: SVGComponentProps,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    fill={'currentColor'}
    height={24}
    ref={ref}
    viewBox={'0 0 24 24'}
    width={24}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
    className={className}
  >
    <g clipPath={'url(#clip0_306_4373)'}>
      <path
        d={
          'M20.71 19.29L17.31 15.9C18.407 14.5025 19.0022 12.7767 19 11C19 9.41775 18.5308 7.87103 17.6518 6.55544C16.7727 5.23985 15.5233 4.21447 14.0615 3.60897C12.5997 3.00347 10.9911 2.84504 9.43928 3.15372C7.88743 3.4624 6.46197 4.22433 5.34315 5.34315C4.22433 6.46197 3.4624 7.88743 3.15372 9.43928C2.84504 10.9911 3.00347 12.5997 3.60897 14.0615C4.21447 15.5233 5.23985 16.7727 6.55544 17.6518C7.87103 18.5308 9.41775 19 11 19C12.7767 19.0022 14.5025 18.407 15.9 17.31L19.29 20.71C19.383 20.8037 19.4936 20.8781 19.6154 20.9289C19.7373 20.9797 19.868 21.0058 20 21.0058C20.132 21.0058 20.2627 20.9797 20.3846 20.9289C20.5064 20.8781 20.617 20.8037 20.71 20.71C20.8037 20.617 20.8781 20.5064 20.9289 20.3846C20.9797 20.2627 21.0058 20.132 21.0058 20C21.0058 19.868 20.9797 19.7373 20.9289 19.6154C20.8781 19.4936 20.8037 19.383 20.71 19.29ZM13 12H12V13C12 13.2652 11.8946 13.5196 11.7071 13.7071C11.5196 13.8946 11.2652 14 11 14C10.7348 14 10.4804 13.8946 10.2929 13.7071C10.1054 13.5196 10 13.2652 10 13V12H9C8.73479 12 8.48043 11.8946 8.2929 11.7071C8.10536 11.5196 8 11.2652 8 11C8 10.7348 8.10536 10.4804 8.2929 10.2929C8.48043 10.1054 8.73479 10 9 10H10V9C10 8.73479 10.1054 8.48043 10.2929 8.2929C10.4804 8.10536 10.7348 8 11 8C11.2652 8 11.5196 8.10536 11.7071 8.2929C11.8946 8.48043 12 8.73479 12 9V10H13C13.2652 10 13.5196 10.1054 13.7071 10.2929C13.8946 10.4804 14 10.7348 14 11C14 11.2652 13.8946 11.5196 13.7071 11.7071C13.5196 11.8946 13.2652 12 13 12Z'
        }
        fill={'currentColor'}
      />
    </g>
    <defs>
      <clipPath id={'clip0_306_4373'}>
        <rect fill={'white'} height={24} width={24} />
      </clipPath>
    </defs>
  </svg>
)

export const Maxinize = forwardRef(SvgComponent)