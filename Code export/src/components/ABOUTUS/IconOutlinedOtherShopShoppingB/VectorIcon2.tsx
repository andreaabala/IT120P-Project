import { memo, SVGProps } from 'react';

const VectorIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 2' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H18' stroke='#2B2B43' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);

const Memo = memo(VectorIcon2);
export { Memo as VectorIcon2 };
