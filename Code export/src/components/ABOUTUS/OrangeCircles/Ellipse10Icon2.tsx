import { memo, SVGProps } from 'react';

const Ellipse10Icon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 45 45' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={22.5} cy={22.5} r={22.5} fill='#E3842D' />
  </svg>
);

const Memo = memo(Ellipse10Icon2);
export { Memo as Ellipse10Icon2 };
