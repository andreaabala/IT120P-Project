import { memo, SVGProps } from 'react';

const Ellipse11Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 326 326' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M326 163C326 253.022 253.022 326 163 326C72.9776 326 0 253.022 0 163C0 72.9776 72.9776 0 163 0C253.022 0 326 72.9776 326 163Z'
      fill='#029448'
    />
  </svg>
);

const Memo = memo(Ellipse11Icon);
export { Memo as Ellipse11Icon };
