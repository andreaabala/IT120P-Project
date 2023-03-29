import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './CirclesBg.module.css';
import { Ellipse11Icon } from './Ellipse11Icon.js';
import { Ellipse12Icon } from './Ellipse12Icon.js';
import { Ellipse13Icon } from './Ellipse13Icon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 49:387 */
export const CirclesBg: FC<Props> = memo(function CirclesBg(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.ellipse11}>
        <Ellipse11Icon className={classes.icon} />
      </div>
      <div className={classes.ellipse12}>
        <Ellipse12Icon className={classes.icon2} />
      </div>
      <div className={classes.ellipse13}>
        <Ellipse13Icon className={classes.icon3} />
      </div>
    </div>
  );
});
