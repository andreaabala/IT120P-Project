import { memo, SVGProps } from 'react';

const Ellipse13Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 46 46' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M46 23C46 35.7026 35.7026 46 23 46C10.2975 46 0 35.7026 0 23C0 10.2975 10.2975 0 23 0C35.7026 0 46 10.2975 46 23Z'
      fill='#029448'
    />
  </svg>
);

const Memo = memo(Ellipse13Icon);
export { Memo as Ellipse13Icon };
