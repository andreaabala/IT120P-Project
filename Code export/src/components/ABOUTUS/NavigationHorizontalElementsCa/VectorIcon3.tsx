import { memo, SVGProps } from 'react';

const VectorIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 8 4' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M7.33333 0.333333C7.33333 1.21739 6.98214 2.06523 6.35702 2.69036C5.7319 3.31548 4.88405 3.66667 4 3.66667C3.11594 3.66667 2.2681 3.31548 1.64298 2.69036C1.01786 2.06523 0.666667 1.21739 0.666667 0.333333'
      stroke='#4E60FF'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(VectorIcon3);
export { Memo as VectorIcon3 };
