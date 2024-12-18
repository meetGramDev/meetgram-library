import { Ref, SVGProps, forwardRef } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'currentColor'}
    height={'24'}
    ref={ref}
    viewBox={'0 0 24 24'}
    width={'24'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={
        'M8.60997 22C8.122 21.9971 7.64818 21.8357 7.25997 21.54L5.18997 20C4.71228 19.6276 4.39533 19.0863 4.3042 18.4875C4.21308 17.8887 4.35469 17.2777 4.69997 16.78C4.88266 16.5102 4.99876 16.201 5.03875 15.8777C5.07873 15.5543 5.04145 15.2261 4.92997 14.92L4.86997 14.76C4.79235 14.4829 4.65048 14.228 4.45588 14.0161C4.26128 13.8041 4.01943 13.641 3.74997 13.54H3.58997C3.00585 13.3436 2.52278 12.9247 2.24568 12.3742C1.96858 11.8237 1.91982 11.1862 2.10997 10.6L2.92997 8C3.00546 7.69876 3.14443 7.41713 3.33759 7.17396C3.53075 6.93078 3.77363 6.73169 4.04997 6.59C4.30732 6.4574 4.5889 6.3784 4.87767 6.35777C5.16644 6.33715 5.45639 6.37533 5.72997 6.47C6.02786 6.57025 6.34572 6.59624 6.65593 6.5457C6.96614 6.49516 7.25932 6.36962 7.50997 6.18L7.63997 6.08C7.86687 5.89895 8.05024 5.6693 8.17659 5.40796C8.30293 5.14663 8.36901 4.86027 8.36997 4.57V4.33C8.36729 3.71813 8.60642 3.12997 9.03532 2.69358C9.46422 2.25719 10.0482 2.00791 10.66 2H13.21C13.5077 2.0008 13.8022 2.0604 14.0768 2.17538C14.3514 2.29036 14.6005 2.45845 14.81 2.67C15.2503 3.11779 15.4948 3.72202 15.49 4.35V4.63C15.4849 4.90575 15.5447 5.17884 15.6646 5.42723C15.7844 5.67562 15.961 5.89237 16.18 6.06L16.29 6.14C16.5144 6.3083 16.7762 6.41984 17.0531 6.46511C17.3299 6.51039 17.6136 6.48805 17.88 6.4L18.22 6.29C18.508 6.19451 18.8124 6.15802 19.1149 6.1827C19.4173 6.20737 19.7117 6.29272 19.9805 6.43364C20.2493 6.57456 20.4869 6.76817 20.6793 7.00292C20.8716 7.23767 21.0147 7.50876 21.1 7.8L21.89 10.32C22.0728 10.9024 22.0228 11.533 21.7506 12.0793C21.4783 12.6256 21.005 13.0452 20.43 13.25L20.23 13.32C19.9358 13.4163 19.6698 13.5834 19.4553 13.8066C19.2409 14.0298 19.0845 14.3022 19 14.6C18.9204 14.8768 18.9015 15.1675 18.9447 15.4523C18.9878 15.7371 19.0919 16.0092 19.25 16.25L19.51 16.63C19.8548 17.1304 19.9951 17.7438 19.9021 18.3444C19.8091 18.945 19.4899 19.4872 19.01 19.86L17 21.41C16.7571 21.5957 16.4789 21.7297 16.1823 21.8039C15.8857 21.878 15.5771 21.8906 15.2754 21.8409C14.9738 21.7913 14.6855 21.6804 14.4283 21.5152C14.1711 21.3499 13.9505 21.1337 13.78 20.88L13.66 20.71C13.4962 20.4639 13.2727 20.2632 13.0104 20.1268C12.7481 19.9904 12.4555 19.9227 12.16 19.93C11.8779 19.9373 11.6016 20.0108 11.3532 20.1445C11.1048 20.2783 10.8913 20.4686 10.73 20.7L10.5 21.03C10.3294 21.2855 10.1083 21.5034 9.85036 21.6702C9.59238 21.8371 9.30298 21.9493 8.99997 22C8.87028 22.0127 8.73966 22.0127 8.60997 22ZM4.39997 11.62C4.96466 11.8214 5.4742 12.1525 5.88757 12.5867C6.30095 13.0209 6.60661 13.5461 6.77997 14.12V14.24C6.99591 14.8366 7.06681 15.4761 6.98683 16.1055C6.90684 16.735 6.67827 17.3363 6.31997 17.86C6.25673 17.9299 6.22171 18.0208 6.22171 18.115C6.22171 18.2092 6.25673 18.3001 6.31997 18.37L8.46997 20C8.49802 20.022 8.53046 20.0378 8.56512 20.0463C8.59977 20.0547 8.63583 20.0557 8.67087 20.049C8.70592 20.0424 8.73914 20.0284 8.76831 20.0078C8.79748 19.9873 8.82191 19.9608 8.83997 19.93L9.06997 19.6C9.41686 19.0988 9.88012 18.6891 10.42 18.4062C10.9599 18.1232 11.5604 17.9754 12.17 17.9754C12.7795 17.9754 13.38 18.1232 13.9199 18.4062C14.4598 18.6891 14.9231 19.0988 15.27 19.6L15.39 19.78C15.433 19.841 15.4971 19.8838 15.57 19.9C15.6034 19.9049 15.6374 19.903 15.6701 19.8944C15.7027 19.8859 15.7333 19.8707 15.76 19.85L17.82 18.29C17.8921 18.2328 17.9395 18.1501 17.9525 18.0589C17.9656 17.9678 17.9432 17.8751 17.89 17.8L17.63 17.42C17.2912 16.926 17.0677 16.3622 16.976 15.7703C16.8842 15.1783 16.9266 14.5734 17.1 14C17.2757 13.3974 17.5936 12.8458 18.0269 12.3916C18.4602 11.9374 18.9963 11.5939 19.59 11.39L19.79 11.32C19.8733 11.2866 19.9401 11.2216 19.9757 11.1392C20.0113 11.0567 20.0128 10.9636 19.98 10.88L19.2 8.39C19.1812 8.34643 19.1539 8.30713 19.1195 8.27446C19.0851 8.2418 19.0444 8.21647 19 8.2C18.9705 8.18507 18.938 8.17728 18.905 8.17728C18.872 8.17728 18.8394 8.18507 18.81 8.2L18.47 8.31C17.8948 8.49982 17.2822 8.54712 16.6847 8.44783C16.0872 8.34855 15.5228 8.10564 15.04 7.74L15 7.65C14.5367 7.29912 14.161 6.84561 13.9024 6.32509C13.6439 5.80456 13.5096 5.23119 13.51 4.65V4.34C13.5118 4.24362 13.4759 4.15033 13.41 4.08C13.3524 4.02801 13.2775 3.99946 13.2 4H10.66C10.6192 4.00254 10.5794 4.01311 10.5428 4.03109C10.5061 4.04906 10.4734 4.0741 10.4464 4.10476C10.4195 4.13542 10.3989 4.1711 10.3857 4.20976C10.3726 4.24841 10.3673 4.28927 10.37 4.33V4.58C10.37 5.17704 10.233 5.76612 9.96949 6.30185C9.70596 6.83758 9.32295 7.30565 8.84997 7.67L8.71997 7.77C8.2097 8.15851 7.6117 8.41553 6.97867 8.51842C6.34564 8.62131 5.69702 8.5669 5.08997 8.36C5.04455 8.34476 4.9954 8.34476 4.94997 8.36C4.89354 8.39429 4.85103 8.44741 4.82997 8.51L3.99997 11.12C3.97104 11.2089 3.97782 11.3056 4.01888 11.3895C4.05994 11.4735 4.13205 11.5382 4.21997 11.57L4.39997 11.62Z'
      }
    />
    <path
      d={
        'M12 15.5C11.3078 15.5 10.6311 15.2947 10.0555 14.9101C9.47993 14.5256 9.03133 13.9789 8.76642 13.3394C8.50152 12.6999 8.4322 11.9961 8.56725 11.3172C8.7023 10.6383 9.03564 10.0146 9.52513 9.52513C10.0146 9.03564 10.6383 8.7023 11.3172 8.56725C11.9961 8.4322 12.6999 8.50152 13.3394 8.76642C13.9789 9.03133 14.5256 9.47993 14.9101 10.0555C15.2947 10.6311 15.5 11.3078 15.5 12C15.5 12.9283 15.1313 13.8185 14.4749 14.4749C13.8185 15.1313 12.9283 15.5 12 15.5ZM12 10.5C11.7033 10.5 11.4133 10.588 11.1666 10.7528C10.92 10.9176 10.7277 11.1519 10.6142 11.426C10.5007 11.7001 10.4709 12.0017 10.5288 12.2926C10.5867 12.5836 10.7296 12.8509 10.9393 13.0607C11.1491 13.2704 11.4164 13.4133 11.7074 13.4712C11.9983 13.5291 12.2999 13.4994 12.574 13.3858C12.8481 13.2723 13.0824 13.08 13.2472 12.8334C13.412 12.5867 13.5 12.2967 13.5 12C13.5 11.6022 13.342 11.2206 13.0607 10.9393C12.7794 10.658 12.3978 10.5 12 10.5Z'
      }
    />
  </svg>
)

export const Setting = forwardRef(SvgComponent)