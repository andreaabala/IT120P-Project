import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M3 0.666667L0.5 4V15.6667C0.5 16.1087 0.675595 16.5326 0.988155 16.8452C1.30072 17.1577 1.72464 17.3333 2.16667 17.3333H13.8333C14.2754 17.3333 14.6993 17.1577 15.0118 16.8452C15.3244 16.5326 15.5 16.1087 15.5 15.6667V4L13 0.666667H3Z'
      stroke='#4E60FF'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
