import { memo, SVGProps } from 'react';

const VectorIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 15 1.5' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H15' stroke='#4E60FF' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);

const Memo = memo(VectorIcon2);
export { Memo as VectorIcon2 };
