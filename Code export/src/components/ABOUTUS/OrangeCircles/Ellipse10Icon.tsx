import { memo, SVGProps } from 'react';

const Ellipse10Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 31 30' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={15.5} cy={15} rx={15.5} ry={14.5} fill='#E3842D' />
  </svg>
);

const Memo = memo(Ellipse10Icon);
export { Memo as Ellipse10Icon };
