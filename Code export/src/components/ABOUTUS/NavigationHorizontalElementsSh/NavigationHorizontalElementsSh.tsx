import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { DividerIcon } from './DividerIcon.js';
import classes from './NavigationHorizontalElementsSh.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    divider?: ReactNode;
  };
}
/* @figmaId 18:23 */
export const NavigationHorizontalElementsSh: FC<Props> = memo(function NavigationHorizontalElementsSh(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.box}></div>
      <div className={classes.divider}>{props.swap?.divider || <DividerIcon className={classes.icon} />}</div>
    </div>
  );
});
