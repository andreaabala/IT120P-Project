import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 11 11' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M5.33333 10.6667C8.27885 10.6667 10.6667 8.27885 10.6667 5.33333C10.6667 2.38781 8.27885 0 5.33333 0C2.38781 0 0 2.38781 0 5.33333C0 8.27885 2.38781 10.6667 5.33333 10.6667Z'
      stroke='#83859C'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
