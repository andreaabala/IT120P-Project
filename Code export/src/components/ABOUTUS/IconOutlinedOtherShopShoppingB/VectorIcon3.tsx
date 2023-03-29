import { memo, SVGProps } from 'react';

const VectorIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 8 4' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M8 0C8 1.06087 7.57857 2.07828 6.82843 2.82843C6.07828 3.57857 5.06087 4 4 4C2.93913 4 1.92172 3.57857 1.17157 2.82843C0.421427 2.07828 0 1.06087 0 0'
      stroke='#2B2B43'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(VectorIcon3);
export { Memo as VectorIcon3 };
