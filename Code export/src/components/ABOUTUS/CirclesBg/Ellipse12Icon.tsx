import { memo, SVGProps } from 'react';

const Ellipse12Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 145 145' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M145 72.5C145 112.541 112.541 145 72.5 145C32.4594 145 0 112.541 0 72.5C0 32.4594 32.4594 0 72.5 0C112.541 0 145 32.4594 145 72.5Z'
      fill='#029448'
    />
  </svg>
);

const Memo = memo(Ellipse12Icon);
export { Memo as Ellipse12Icon };
