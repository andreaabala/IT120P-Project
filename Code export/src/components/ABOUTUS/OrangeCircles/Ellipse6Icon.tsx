import { memo, SVGProps } from 'react';

const Ellipse6Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 299 308' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M299 154C299 239.052 232.067 308 149.5 308C66.9334 308 0 239.052 0 154C0 68.9482 66.9334 0 149.5 0C232.067 0 299 68.9482 299 154Z'
      fill='#E3842D'
    />
  </svg>
);

const Memo = memo(Ellipse6Icon);
export { Memo as Ellipse6Icon };
