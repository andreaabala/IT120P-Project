import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Ellipse6Icon } from './Ellipse6Icon.js';
import { Ellipse10Icon2 } from './Ellipse10Icon2.js';
import { Ellipse10Icon } from './Ellipse10Icon.js';
import classes from './OrangeCircles.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 49:400 */
export const OrangeCircles: FC<Props> = memo(function OrangeCircles(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.ellipse6}>
        <Ellipse6Icon className={classes.icon} />
      </div>
      <div className={classes.ellipse10}>
        <Ellipse10Icon className={classes.icon2} />
      </div>
      <div className={classes.ellipse102}>
        <Ellipse10Icon2 className={classes.icon3} />
      </div>
    </div>
  );
});
